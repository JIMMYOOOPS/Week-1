let submitbtn = document.querySelector('#submit-btn');
let inputTextBox = document.querySelector('#text-box');
let userInputSum = () => {
    const sum = new XMLHttpRequest();
    let url = `http://localhost:3000/data?number=${inputTextBox.value}`;
    sum.onreadystatechange = function() {
        if (sum.readyState === 4 && sum.status === 200) {
            document.querySelector('section').innerText = `${sum.responseText}`
        } else if (sum.readyState === 4 && sum.status === 400) {
            document.querySelector('section').innerText = `${sum.responseText}`
        }
    }
    sum.open('GET', url)
    sum.send()
}
submitbtn.addEventListener('click', userInputSum);