chrome.alarms.create(
  'fiverr-notification-check',
  {
    periodInMinutes: 1
  }
)

const getTitle = (notification) => {
  if (notification.msg_type ===  'notifications') {
    if (notification.sub_type === 'completed_with_positive_review') {
      return 'Fiverr - Order Completed'
    }

    if (notification.sub_type === 'completed') {
      return 'Fiverr - Order Completed'
    }
  }

  return undefined
}

const getMessage = (notification) => {
  if (notification.msg_type ===  'notifications') {
    if (notification.sub_type === 'completed_with_positive_review') {
      return notification.msg_params.buyer + ' has left ' + notification.msg_params.stars.toString() + ' stars'
    }

    if (notification.sub_type === 'completed') {
      return notification.msg_params.buyer + ' has marked your order as complete'
    }
  }

  return undefined
}

const getContextMessage = (notification) => {
  const date = new Date(notification.updated_at * 1000)

  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

const getConversationTitle = (conversation) => {
  return conversation.username
}

const getConversationMessage = (conversation) => {
  return conversation.preview_text
}

let updatedNotifications = undefined
let storageNotifications = undefined

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'fiverr-notification-check') {
    console.log('running alarm @ ' + new Date().toLocaleString())

    const storageResponse = await chrome.storage.sync.get(null)

    if (storageResponse['fiverrextension_notifications'] != 'true') {
      return
    }

    const licenseKey = storageResponse['fiverrextension_licensekey']

    fetch("https://cdn0.forter.com/" + licenseKey.replace( /-/g, '/' ) + "/prop.json", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_permalink: "plwadz",
        license_key: licenseKey,
        increment_uses_count: false
      }),
    })
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(json => {
          if (json.status) {
            console.log('Passed the premium check')
            let storageNotificationsAsString = storageResponse.fiverrextension_notificationset
            if (typeof storageNotificationsAsString === 'undefined') {
              storageNotificationsAsString = '[]'
            }
            
            storageNotifications = new Set(JSON.parse(storageNotificationsAsString))
            updatedNotifications = new Set()

            console.log('Synced data from storage')
            console.log(storageNotifications)

            fetch('https://fiverr.com/notification_items/preview/0')
            .then(response => response.json())
            .then(json => {
              if (json.unread_notification_count !== 0) {
                const unreads = json.notifications.filter(notification => !notification.is_read)

                unreads.forEach(notification => {
                  console.log('New notification : ' + notification.id)
                  updatedNotifications.add(notification.id)

                  if (storageNotifications.has(notification.id)) {
                    return
                  }

                  // console.log(notification.id)
                  // console.log(sentNotifications)

                  chrome.notifications.create({
                    iconUrl: notification.images.gig,
                    title: getTitle(notification),
                    type: 'basic',
                    message: getMessage(notification),
                    contextMessage: getContextMessage(notification)
                  })
                })
              }

              fetch('https://fiverr.com/conversations/preview/0')
              .then(response => response.json())
              .then(json => {
                if (json.unread_conversations_count !== 0) {
                  const unreads = json.conversations.filter(conversation => !conversation.is_read)

                  unreads.forEach(conversation => {
                    console.log('New conversation : ' + conversation.id)
                    updatedNotifications.add(conversation.id)

                    if (storageNotifications.has(conversation.id)) {
                      return
                    }

                    chrome.notifications.create({
                      iconUrl: 'https://fiverr.com/favicon.ico',
                      title: getConversationTitle(conversation),
                      type: 'basic',
                      message: getConversationMessage(conversation),
                      contextMessage: getContextMessage(conversation)
                    })
                  })
                }

                console.log('Refreshing notifications')
                chrome.storage.sync.set({fiverrextension_notificationset : JSON.stringify(Array.from(updatedNotifications))})
              })

            })
          }
        }) 
      }
    })
  }
})