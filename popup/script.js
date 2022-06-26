//* this verifies the license key
chrome.storage.sync.get('fiverrextension_licensekey')
.then(object => {
  const licenseKey = object.fiverrextension_licensekey

  if (typeof licenseKey === 'undefined' || licenseKey === null || licenseKey === '') {
    window.location.href = '../upgrade/index.html'
    return
  }

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
    if (res.status !== 200) {
      window.location.href = '../upgrade/index.html'

      return
    }
    else {
      res.json()
      .then(json => {
        if ( ! json.status ) {
          window.location.href = '../upgrade/index.html'

          return
        }
        else {
          document.getElementById('content').setAttribute('style', '')
          document.getElementById('loading-spinner').setAttribute('style', 'display: none')
        }
      }) 
    }
  })
})

document.querySelectorAll('#content .mahmudremal.checkboxes input[type="checkbox"]')
.forEach( async checkbox => {
  const featureName = checkbox.getAttribute('name').substring(2)
  const chromeStorageVarName = 'fiverrextension_' + featureName

  const storageResponseObject = await chrome.storage.sync.get(chromeStorageVarName)
  console.log(storageResponseObject)
  const storageResponse = storageResponseObject[chromeStorageVarName]

  if (storageResponse == 'true') {
    checkbox.checked = true
  }

  checkbox.addEventListener( 'change', (event) => {
    let object = {}
    object[chromeStorageVarName] = checkbox.checked.toString()

    console.log(object);
    chrome.storage.sync.set( object )
  } )
} )