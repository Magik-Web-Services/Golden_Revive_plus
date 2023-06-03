let img = document.getElementById('img')
let freeShipping = document.getElementById('freeShipping')
let price1 = document.getElementById('price1')
let price2 = document.getElementById('price2')
let price3 = document.getElementById('price3')
let cancelAnything = document.getElementById('cancelAnything')

// Months
let Month1 = document.getElementById('Month1')
let Month3 = document.getElementById('Month3')
let Month6 = document.getElementById('Month6')


Month1.addEventListener('click', () => { //Month1 
    Month1.classList.add('orangeb')
    Month3.classList.remove('orangeb')
    Month6.classList.remove('orangeb')
    // 
    price2.innerText = "$69.95"
    // 
    if (onetime.classList == "circle circle2") { //one time
        price1.innerText = "$49.95"
        price3.innerText = "$20"
        cancelAnything.innerHTML = '<span class="black">29% Off on every order</span> &nbsp;<span class="orange" >|&nbsp;</span > <span class="black">Fast, reliable shipping</span>'
    }if (fulltime.classList == "circle circle2") {  //full time
        price1.innerText = "$44.95"
        price3.innerText = "$25"
        cancelAnything.innerHTML = '<span class="black">36% Off on every order</span> &nbsp;<span class="orange" >|&nbsp;</span > <span class="black">Auto ships every 3 months</span> & nbsp <span class="orange">|&nbsp;</span> <span class="black">Cancel anytime</span>'
    }
})

Month3.addEventListener('click', () => {
    Month3.classList.add('orangeb')
    Month1.classList.remove('orangeb')
    Month6.classList.remove('orangeb')
    // 
    price2.innerText = "$209.85"
    // 
    if (onetime.classList == "circle circle2") { //one time
        price1.innerText = "$39.95"
        price3.innerText = "$90"
        cancelAnything.innerHTML = '<span class="black">43% off on every order</span> &nbsp;<span class="orange" >|&nbsp;</span > <span class="black">Fast, reliable shipping</span>'
    }
    if (fulltime.classList == "circle circle2") { //fulltime
        price1.innerText = "$34.95"
        price3.innerText = "$105"
        cancelAnything.innerHTML = '<span class="black">50% off on every order</span> &nbsp;<span class="orange" >|&nbsp;</span > <span class="black">Auto ships every 3 months</span> & nbsp <span class="orange">|&nbsp;</span> <span class="black">Cancel anytime</span>'
    }
})

Month6.addEventListener('click', () => {
    Month6.classList.add('orangeb')
    Month1.classList.remove('orangeb')
    Month3.classList.remove('orangeb')
    // 
    price2.innerText = "$419.70"
    // 
    if (onetime.classList == "circle circle2") { //one time
        price1.innerText = "$39.95"
        price3.innerText = "$90"
        cancelAnything.innerHTML = '<span class="black">43% off on every order</span> &nbsp;<span class="orange" >|&nbsp;</span > <span class="black">Fast, reliable shipping</span>'
    }
    if (fulltime.classList == "circle circle2") { //fulltime
        price1.innerText = "$34.95"
        price3.innerText = "$105"
        cancelAnything.innerHTML = '<span class="black">50% off on every order</span> &nbsp;<span class="orange" >|&nbsp;</span > <span class="black">Auto ships every 3 months</span> & nbsp <span class="orange">|&nbsp;</span> <span class="black">Cancel anytime</span>'
    }
})

// checkcircle
let onetime = document.getElementById('onetime');
let fulltime = document.getElementById('fulltime');


onetime.addEventListener('click', () => {
    onetime.classList.add('circle2')
    fulltime.classList.remove('circle2')

    // 
    img.style.display = "none";
    freeShipping.innerText = "Fast Shipping"
    // 
    if ( Month1.classList == "one box orangeb") { //1 Month
        price1.innerText = "$49.95"
        price3.innerText = "$20"
        cancelAnything.innerHTML = '<span class="black">29% Off on every order</span> &nbsp;<span class="orange" >|&nbsp;</span > <span class="black">Fast, reliable shipping</span>'
    } if ( Month3.classList == "one box orangeb") { //3 Month
        price1.innerText = "$39.95"
        price3.innerText = "$90"
        cancelAnything.innerHTML = '<span class="black">43% off on every order</span> &nbsp;<span class="orange" >|&nbsp;</span > <span class="black">Fast, reliable shipping</span>'
    }
})

fulltime.addEventListener('click', () => {
    onetime.classList.remove('circle2')
    fulltime.classList.add('circle2')
    // 
    img.style.display = "inline";
    freeShipping.innerText = "Free Shipping"
    // 
    if (Month1.classList == "one box orangeb") { //1 Month
        price1.innerText = "$44.95"
        price3.innerText = "$25"
        cancelAnything.innerHTML = '<span class="black">36% Off on every order</span> &nbsp;<span class="orange" >|&nbsp;</span > <span class="black">Auto ships every 3 months</span> & nbsp <span class="orange">|&nbsp;</span> <span class="black">Cancel anytime</span>'
    } if ( Month3.classList == "one box orangeb") { //3 Month
        price1.innerText = "$34.95"
        price3.innerText = "$105"
        cancelAnything.innerHTML = '<span class="black">50% off on every order</span> &nbsp;<span class="orange" >|&nbsp;</span > <span class="black">Auto ships every 3 months</span> & nbsp <span class="orange">|&nbsp;</span> <span class="black">Cancel anytime</span>'
    }
})
