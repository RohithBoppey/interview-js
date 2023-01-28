const solve = (start, dp, nums, n) => {
	console.log('s:', start);
    if (start === n - 1) {
		return 0;
	}
	if (dp[start] !== 10001) {
		return dp[start];
	}
	for (let i = 1; i <= dp[start]; i++) {
        if(start + i > n - 1){
            break;
        }
		dp[start] = Math.min(dp[start], 1 + solve(start + i, dp, nums, n));
	}
	return dp[start];
};

var jump = function (nums) {
	let n = nums.length;
	if (n == 1) {
		return 0;
	}
	let dp = new Array(n).fill(10001);
	solve(0, dp, nums, n);
	return dp[0];
};

// var jump = function(nums) {
//     const dp = new Array(nums.length).fill(-1);
//     const jumpNext = (index) => {
//         if (index === nums.length - 1) return 0;
//         if (dp[index] != -1) return dp[index];
//         let currMin = nums.length;
//         for (let i = 1; i <= nums[index]; i++) {
//             if (index + i > nums.length - 1) {
//                 break;
//             }
//             currMin = Math.min(1 + jumpNext(index + i), currMin);
            
//         }
//         dp[index] = currMin;
//         return currMin;
//     }
//     return jumpNext(0);
// };

console.log('Res:', jump([1, 2, 3]));
