let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
let input2 = ['e', 'd', 'c', 'd', 'e'];

function countAandB(input) {
    let countA = 0
    let countB = 0
    input.forEach(inputletter => {
        if (inputletter[0] === 'a') {
            countA ++; 
        } else if (inputletter[0] === 'b') {
            countB ++;
        }; 
        let countAplusB = countA + countB
        console.log(countAplusB);
    });
};

countAandB(input1);
countAandB(input2);

function toNumber(input) { 
    let convertArray = [];
    for (i = 0; i < input.length; i++) {
        let convert = input[i].charCodeAt(input[i]) - 96;
        convertArray.push(convert);
        console.log(convertArray)
    };
};

toNumber(input1);
toNumber(input2);
