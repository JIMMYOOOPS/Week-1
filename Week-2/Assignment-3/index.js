let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
let input2 = [
    {key:'a', value: 3},
    {key:'b', value: 1},
    {key:'c', value: 2},
    {key:'a', value: 3},
    {key:'c', value: 5},
]

function count(input) { 
    const inputs = { };
    for(let i = 0; i < input.length; i++) {
        if (!inputs[input[i]]) {
        inputs[input[i]] = 0;
        }
        inputs[input[i]]++;
    }
    return inputs;
}

console.log(count(input1));

function groupByKey(input) {
    const inputs = { };
    for(let i = 0; i < input.length; i++) {
        if (!inputs[input[i].key]) {
        inputs[input[i].key] = 0;
        }
        inputs[input[i].key] = inputs[input[i].key] + input[i].value;
        // console.log(inputs);
    }
    return inputs;
}

console.log(groupByKey(input2))
