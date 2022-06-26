

const showDetails = async (lastSavedId) => {
  const targets = document.querySelectorAll('tbody > tr:not([details-displayed])')

  let seen = false

  targets.forEach(offer => {
    const dataElement = offer.querySelector('a.js-send-offer')

    if (dataElement === null) {
      return
    }

    const data = JSON.parse(dataElement.dataset.meta)

    if (data.requestId === lastSavedId) {
      seen = true;
    }

    if (!seen) {
      const dateTd = offer.querySelector('td.date')
      dateTd.setAttribute('style', 'padding: 0 !important')

      const dateSpan = dateTd.querySelector('span')
      dateSpan.setAttribute('style', 'padding: 20px; display: block')

      const greenRectangle = document.createElement('div')
      greenRectangle.setAttribute('style', 'position: absolute;background: linear-gradient(to bottom right,#1dbf73 50%,transparent 50%);width: 20px;height: 20px;')
      
      dateTd.insertBefore(greenRectangle, dateTd.firstChild)
    }

    let td = offer.querySelector('td.text-wide')
    if (td === null) {
      td = offer.querySelector('td.see-more')
    }

    const nameElement = document.createElement('a')
    nameElement.textContent = data.username
    nameElement.href = 'https://fiverr.com/' + data.username
    nameElement.setAttribute('style', 'color: #1dbf73;font-weight: 600;font-size: large; display: block;')

    td.insertBefore(nameElement, td.firstChild)

    offer.setAttribute('details-displayed', 'true')
  })
}

window.addEventListener('load', async (event) => {
  chrome.storage.sync.get(null, async config => {
    // console.log(config)
    const featureEnabled = config['fiverrextension_buyer-req-details']

    // if (featureEnabled != 'true') {
    //   return
    // }

    const licenseKey = config['fiverrextension_licensekey']
    // console.log(licenseKey)

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
        .then(async json => {
          if (json.status) {
            if ( window.location.href.indexOf('/requests') !== -1 ) {
              const result = await chrome.storage.sync.get('fiverrextension_lastrequest')
              let lastSavedId = result.fiverrextension_lastrequest
          
              setInterval(async () => {
                showDetails(lastSavedId)
          
                const firstOffer = document.querySelector('tbody > tr')
                if (firstOffer !== null && firstOffer.dataset.id !== lastSavedId) {
                  lastSavedId = firstOffer.dataset.id
                  
                  await chrome.storage.sync.set({'fiverrextension_lastrequest' : lastSavedId})
                }
          
                // todo maybe run this only when needed would be a smart play 
              }, 1000)   
            }
          }
        }) 
      }
    })
  })
})