window.addEventListener('load', async (event) => {
  chrome.storage.sync.get(null, async config => {
    // console.log(config)
    const featureEnabled = config['fiverrextension_hide-balance']

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
      if ( res.status === 200 ) {
        res.json()
        .then(json => {
          console.log( json );
          if (json.status) {
            const targetChild = document.querySelector('li > a.user-balance')
            if (targetChild == null) {
              return
            }
            const target = targetChild.parentElement
            target.setAttribute('style', 'display: none !important;')
          }
        }) 
      } else {
        console.log( 'Sorry to execute!' );
      }
    })
  })
})