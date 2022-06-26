
const calculateOffers = () => {
  // console.log('running')

  const offers = document.querySelectorAll('.custom-package-content:not([money-calculator-expanded])')

  offers.forEach(offer => {
    const secondDiv = offer.querySelector('div > h3').parentElement
    secondDiv.setAttribute('style', 'width: 50% !important')
    
    const div = offer.querySelector('header > div')
    div.setAttribute('style', 'gap: 15px !important')
    
    const b = div.querySelector('b')

    if (b === null) {
      return
    }

    const price = parseFloat(b.textContent.replace(/[^0-9]/ig, ''))
    const currency = b.textContent.replace(/[0-9]/ig, '')

    div.removeChild(b)

    const childDivs = [
      document.createElement('div'),
      document.createElement('div'),
      document.createElement('div')
    ]

    const childSpans = [
      [
        document.createElement('p'),
        document.createElement('p')
      ],
      [
        document.createElement('p'),
        document.createElement('p')
      ],
      [
        document.createElement('p'),
        document.createElement('p')
      ]
    ]

    childSpans[0][0].textContent = 'You get'
    childSpans[0][1].textContent = currency + (price * .8).toFixed(2)

    childSpans[1][0].textContent = 'Order Price'
    childSpans[1][1].textContent = currency + price.toFixed(2)

    childSpans[2][0].textContent = 'Buyer Pays'
    childSpans[2][1].textContent = currency + (price * 1.2).toFixed(2)


    for (let i = 0; i < 3; ++i) {
      childSpans[i][1].style.color = 'rgb(29, 191, 115)'; childSpans[i][1].style.fontWeight = '600'
      childSpans[i][1].style.textAlign = 'center'; childSpans[i][1].style.transform = 'scale(1.5)'
      childDivs[i].appendChild(childSpans[i][0])
      childDivs[i].appendChild(childSpans[i][1])

      div.appendChild(childDivs[i])
    }
  
    offer.setAttribute('money-calculator-expanded', 'true')
  })
}

window.addEventListener('load', async (event) => {
  chrome.storage.sync.get(null, async config => {
    // console.log(config)
    const featureEnabled = config['fiverrextension_money-calculator']

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
            setInterval(() => {
              calculateOffers()
            }, 1000);
          }
        }) 
      }
    })
  })
})