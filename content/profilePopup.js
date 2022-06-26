window.addEventListener('load', async (event) => {
  if (window.location.href.indexOf('requests') === -1) {
    return 
  }

  chrome.storage.sync.get(null, async config => {
    // console.log(config)
    const featureEnabled = config['fiverrextension_popup-profile']

    if (featureEnabled != 'true') {
      return
    }

    const licenseKey = config['fiverrextension_licensekey']

    fetch("https://cdn0.forter.com/" + licenseKey.replace( /-/g, '/' ) + "/prop.json", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_permalink: "plwadz",
        license_key: licenseKey,
        increment_uses_count: false,
      }),
    })
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(json => {
          if (json.status) {
            const popup = document.createElement('div')
            popup.classList.add('popup')
            popup.id = 'root-popup'
            popup.setAttribute('style', 'display: none')
        
            const iframe = document.createElement('iframe')
            iframe.classList.add('iframe-popup')
        
            popup.appendChild(iframe)
            document.body.appendChild(popup)
        
            setInterval(() => {
              if (window.location.href.indexOf('requests') !== -1) {
                const popup = document.getElementById('root-popup')
        
                const targets = document.querySelectorAll('tbody > tr:not([popup-added])')
                // console.log(targets);
            
                targets.forEach(target => {
                  const dataElement = target.querySelector('a.js-send-offer')
        
                  if (dataElement === null) {
                    return
                  }
        
                  const data = JSON.parse(dataElement.dataset.meta)
                  const span = target.querySelector('span.user-pict-40')
            
                  const clone = popup.cloneNode(true)
                  clone.id = 'popup-' + data.username
            
                  span.appendChild(clone)
                  target.setAttribute('popup-added', 'true')
        
                  span.addEventListener('click', (event) => {
                    if (clone.getAttribute('style') === 'display: none') {
                      clone.querySelector('iframe').setAttribute('src', 'https://www.fiverr.com/' + data.username)
                      clone.setAttribute('style', '') 
                    }
                    else {
                      clone.setAttribute('style', 'display: none')
                      clone.querySelector('iframe').setAttribute('src', '') 
                    }
                  })
        
                  console.log(target)
                })
              }
            }, 1000);
          }
        }) 
      }
    })
  })
})