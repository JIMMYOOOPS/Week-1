function ajax(src, callback){
    const products = new XMLHttpRequest();
    products.onreadystatechange = function() {
        if (products.readyState === 4 && products.status === 200) {
            let response = products.response;
            callback(response);
        } else if (products.readyState === 4 && products.status === 400) {
            console.log(products.response)
        }
    }
    products.open('GET', src);
    products.send();
}

function render(data) {
    let newparagraph = document.createElement('p');  
    let productlist = document.createTextNode(`${data}`);
    newparagraph.appendChild(productlist);
    let exisitingh1 = document.querySelector('h1');
    exisitingh1.appendChild(newparagraph);
}

ajax('https://appworks-school.github.io/Remote-Aassigiment-Data/products', function (response) {
    render(response);
});