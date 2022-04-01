// Define the input of fuction max()
let number1 = [1, 2, 4, 5]
let number2 = [5, 2, 7, 1, 6] 
let number3 = [5, 2, 7, 7, 7, 1, 6] 

function max(numbers) { 
    let maxnum = 0; //varible to store the max number
    for(i=0; i < numbers.length; i++) {
        if(numbers[i] > maxnum) {
            maxnum = numbers[i];
        }
    }
    return maxnum;
}

console.log(max(number1));
console.log(max(number2));

function findPostion(numbers, target) {
    let tarlocation = 0; //varible to store the index of target
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            tarlocation = i;
            break;
        } 
        else { tarlocation = -1;
        }
    }
    return tarlocation;
}

console.log(findPostion(number2, 5));
console.log(findPostion(number2, 7));
console.log(findPostion(number3, 7));
console.log(findPostion(number2, 8));