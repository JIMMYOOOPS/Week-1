function delayedResultPromise(n1, n2, delayTime) {
    // your code here …
    let promise = new Promise(function(resolve, reject) {
        // "Producing Code" (May take some time)
        setTimeout(() => {
            if (n1 + n2) {
                resolve(n1 + n2);// when successful
            } else {
                reject('something went wrong');  // when error
            }
        }, delayTime) ; 
    });

    return promise;
    }
    delayedResultPromise(4, 5 , 3000).then(console.log) 
    // 9 (4+5) will be shown in the console after 3 seconds

    async function main() {
        // your code here, you should call delayedResultPromise here and get the result using async/await.
        return delayedResultPromise(4, 5 , 3000).then(console.log)
        }
        main() // result will be shown in the console after <delayTime> seconds