const formatFloat = (a) => {
  // console.log(typeof a)
  return a.toFixed(2).replace('.00', '')
}

const calculateFromSeller = (sellerAmount) => {
  const price = sellerAmount / .8;
  const buyerAmount = price + (price > 40.0 ? price * .05 : 2)

  return [price, buyerAmount]
}

const calculateFromOrder = (price) => {
  const sellerAmount = price * .8;
  const buyerAmount = price + (price > 40.0 ? price * .05 : 2)

  return [sellerAmount, buyerAmount]
}

const calculateFromBuyer = (buyerAmount) => {
  let price = buyerAmount / 1.05
  if (price < 40)
    price = buyerAmount - 2

  const sellerAmount = price * .8

  return [sellerAmount, price]
}

window.addEventListener('load', async _ => {
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
            const textarea = document.querySelector('textarea')
      
            const parent = document.querySelector('div.message-flow')
      
            const footer = document.querySelector('div.message-flow > footer')
      
            const moneyCalculatorDiv = document.createElement('div')
            moneyCalculatorDiv.id = 'money-calculator'
      
            const divs = [
              document.createElement('div'),
              document.createElement('div'),
              document.createElement('div')
            ]
      
            const inputs = [
              document.createElement('input'),
              document.createElement('input'),
              document.createElement('input')
            ] 
      
            const ps = [
              document.createElement('p'),
              document.createElement('p'),
              document.createElement('p')
            ] 
      
            for (let i = 0; i < 3; ++i) {
              divs[i].id = 'money-calculator-' + i.toString()
      
              ps[i].textContent = (i === 0 ? 'You Get' : (i === 1 ? 'Order Price' : 'Buyer Pays'))
              inputs[i].type = 'number'
      
              divs[i].appendChild(ps[i])
              divs[i].appendChild(inputs[i])
      
              moneyCalculatorDiv.appendChild(divs[i])
            }
      
      
            parent.removeChild(footer)
      
            parent.appendChild(moneyCalculatorDiv)
            parent.appendChild(footer)
      
            textarea.addEventListener('keyup', (event) => {
              const text = textarea.value
      
              const matches = text.match(/\$[0-9.]+/g)
      
              if (matches !== null) {
                moneyCalculatorDiv.setAttribute('style', 'display: flex !important')
      
                const price = parseFloat(matches[0].substring(1))
                const [sellerAmount, buyerAmount] = calculateFromOrder(price)
      
                inputs[1].value = formatFloat(price)
      
                inputs[0].value = formatFloat(sellerAmount)
                inputs[2].value = formatFloat(buyerAmount)
              }
              else {
                moneyCalculatorDiv.setAttribute('style', 'display: none !important')
              }
            })
      
            inputs[1].addEventListener('change', (event) => {
              const price = parseFloat(inputs[1].value)
              
              const [sellerAmount, buyerAmount] = calculateFromOrder(price)
      
              inputs[0].value = formatFloat(sellerAmount)
              inputs[2].value = formatFloat(buyerAmount)
      
              textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price))
            })
      
            inputs[1].addEventListener('keyup', (event) => {
              const price = parseFloat(inputs[1].value)
              
              const [sellerAmount, buyerAmount] = calculateFromOrder(price)
      
              inputs[0].value = formatFloat(sellerAmount)
              inputs[2].value = formatFloat(buyerAmount)
      
              textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price))
            })
      
            inputs[0].addEventListener('change', (event) => {
              const sellerAmount = parseFloat(inputs[0].value)
      
              const [price, buyerAmount] = calculateFromSeller(sellerAmount)
      
              inputs[1].value = formatFloat(price)
              inputs[2].value = formatFloat(buyerAmount)
      
              textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price))
            })
      
            inputs[0].addEventListener('keyup', (event) => {
              const sellerAmount = parseFloat(inputs[0].value)
      
              const [price, buyerAmount] = calculateFromSeller(sellerAmount)
      
              inputs[1].value = formatFloat(price)
              inputs[2].value = formatFloat(buyerAmount)
      
              textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price))
            })
      
            inputs[2].addEventListener('change', (event) => {
              const buyerAmount = parseFloat(inputs[2].value)
      
              const [sellerAmount, price] = calculateFromBuyer(buyerAmount)
      
              inputs[0].value = formatFloat(sellerAmount)
              inputs[1].value = formatFloat(price)
      
              textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price))
            })
      
            inputs[2].addEventListener('keyup', (event) => {
              const buyerAmount = parseFloat(inputs[2].value)
      
              const [sellerAmount, price] = calculateFromBuyer(buyerAmount)
      
              inputs[0].value = formatFloat(sellerAmount)
              inputs[1].value = formatFloat(price)
      
              textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price))
            })
          }
        }) 
      }
    })
  })
})