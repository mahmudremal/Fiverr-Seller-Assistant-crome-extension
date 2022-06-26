const upgradeButton = document.getElementById('upgrade-btn')
const activateForm = document.getElementById('form-activate-license')

upgradeButton.addEventListener('click', (event) => {
  event.preventDefault()

  chrome.tabs.create({
    url: 'https://github.com/mahmudremal/'
  })
})
// https://www.buymeacoffee.com/mahmudremal
activateForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  
  document.getElementById('license-submit').disabled = true

  const fData = new FormData(activateForm)

  const licenseKey = fData.get('key')

  if (typeof licenseKey === 'undefined' || licenseKey === null || licenseKey.length === 0) {
    console.log('bruh')

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
  .then((res) => {
    if ( res.status !== 200 ) {
      document.getElementById('license-submit').disabled = false
      return
    }
    else {
      res.json()
      .then(async json => {
        await chrome.storage.sync.set({'fiverrextension_licensekey': json.status ? licenseKey : ''})
        if ( json.status ) {
          window.location.href = '../popup/index.html'
        } else {
          document.getElementById('license-submit').disabled = false
        }
      })
    }
  })
  document.getElementById('license-submit').disabled = false
})