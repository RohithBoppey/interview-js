function add(...nums){
    // expects to take 3 params
    return new Promise((resolve, reject) => {
        if(nums.length < 3){
            reject('Only acccepts length > 3')
        }else{
            let sum = 0;
            for(let i in nums){
                sum += nums[i];
            }
            resolve(() => {
                console.log(`This is a new promise resolved with sum = ${sum}`);
            })
        }
    })
}


let nums = {one: [1,2], two: [3,4]}

const {one, two} = nums
console.log(one, two);


add(1,2,3)
.then((resolvedFunction) => {
    console.log('success');
    resolvedFunction()
})
.catch((err) => {
    console.log(err);
})