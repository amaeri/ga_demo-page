window.addEventListener('wheel', handleScroll);

function handleScroll(event) {
    // event.deltaY
    let productElm = document.querySelector('.product-demo')
    console.log(productElm)
    // productElm.style.cssText = "border: 5px solid black"
}

// samme som: bare med scroll
// window.addEventListener('scroll', (event) => {
//     console.log('scroll', event.deltaY)
// })