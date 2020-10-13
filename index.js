window.addEventListener('wheel', handleScroll);


let frame = 0;

function handleScroll() {
    // event.deltaY
    let productElm = document.querySelector('.product-demo');
    productElm.style.cssText = "background-position-x: calc("+ Math.floor(frame) +" * -605px);";
    frame += 0.1;
    if(frame > 3) frame = 0;
}

// samme som: bare med scroll
// window.addEventListener('scroll', (event) => {
//     console.log('scroll', event.deltaY)
// })

let orderBtn = document.querySelector('#order-button');
orderBtn.addEventListener('mousedown', handleOrderClick);

function handleOrderClick(event) {
    console.log('Order button was clicked');
    
    gtag('event', 'Click link', {
        'event_category': 'interactive tests',
        'event_label': 'Self assured link'
    });
}