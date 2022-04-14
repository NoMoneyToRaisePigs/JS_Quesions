//test case:
//[3,2,4], 6
//[3,3] 6
//[0,4,3,0] 0  --> [0, 3]
//[-1,-2,-3,-4,-5], -8
//pay attention that there might be negative number
var twoSum = function(nums, target) {
    
    let allScenarios = (1 << nums.length) - 1;
    
    
    
    for(let i = 0; i <= allScenarios; i++){
        let increment = 0;
        let solution = [];
        
        for(let j =0; j < nums.length; j++){
            if(i >> j & 1 == 1){
                increment += nums[j];
                solution.push(j);
                
                if(increment > target){                 
                    break;
                }
                
                if (increment == target) {
                    for (let k = solution[solution.length - 1] + 1; k < nums.length; k++) { 
                        if (!nums[k]) { 
                            solution.push(k);
                        }
                    }

                    return solution;
                }
            }
        }
    }
};

var twoSumV2 = function(nums, target) {
    
    let allScenarios = (1 << nums.length) - 1;
    
    
    
    for(let i = 1; i <= allScenarios; i++){
        let increment = 0;
        let solution = [];
        
        for(let j =0; j < nums.length; j++){
            if(i >> j & 1 == 1){
                increment += nums[j];
                solution.push(j);
            }
        }

        if (increment == target) {
            for (let k = solution[solution.length - 1] + 1; k < nums.length; k++) { 
                if (!nums[k]) { 
                    solution.push(k);
                }
            }

            return solution;
        }
    }
};

var twoSumV3 = function(nums, target) {
    
    let allScenarios = (1 << nums.length) - 1;
    
    
    
    for(let i = 0; i <= allScenarios; i++){
        let increment = 0;
        let solution = [];
        
        for(let j =0; j < nums.length; j++){
            if(i >> j & 1 == 1){
                increment += nums[j];
                solution.push(j);
            }
        }

        if (increment == target) {
            return solution;
        }     
    }
};

var twoSumSolution = function(nums, target) {
    let map = {};
    
    for(let i =0; i < nums.length; i++){
        let num = nums[i];
        let minus = target - num;
        
        if(map[num] != undefined){
            return [map[num], i];
        }
        else{
            map[minus] = i;
        }
    }
};


var isValid = function(s) {
    let stack = [];
    
    for(let i =0; i < s.length; i++){
        let char = s[i];
        
        if(char == '[' || char =='(' || char == '{'){
            stack.push(char);
        }
        
        if (char == ']' && stack.pop() != '[') {
            return false;
        }
        
        if(char == '}' && stack.pop() != '{'){
            return false;
        }
        
        if(char == ')' && stack.pop() != '('){
            return false;
        }
    }
    
    return stack == 0;
};

var isPalindrome = function(x) {
    let xx = x + '';
    
    for(let i = 0, j = xx.length - 1; i < xx.length; i++, j--){
        if(i >= j){
            break;
        }
        
        if(xx[i] != xx[j]){
            return false;
        }
    }
    
    return true;
};


var strStr = function(haystack, needle) {
    if(needle == '') return 0;
    
    for(let i = 0; i < haystack.length; i++){
        let isPartial = true;
        let org = i;
        
        for(let j = 0; j < needle.length; j++){
            let insideLetter = needle[j];
            
            if(org >= haystack.length){
                isPartial = false;
            }
            
            let outsideLetter = haystack[org];
            
            if(insideLetter != outsideLetter){
                isPartial = false;
                break;
            }
            
            org++;
        }
        
        if(isPartial) return i;
    }
    
    return -1;
};

var strStrRecursion = function(haystack, needle, start = 0) {
    if (needle == '') return 0;

    
    for(let i = start; i < haystack.length; i++){
        let org = haystack[i];

        if (i == needle.length - 1) { 
            return i - (needle.length - 1);
        }

        let compare = needle[i];

        if (org != compare) { 
            strStrRecursion()
        }
    }
    
    return -1;
};

var searchInsert = function(nums, target) {
    if(nums.length == 0) return 0;
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        
        if(num >= target){
            return i;
        }
    }
    
    return nums.length;
};

function searchInsertSolution(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const center = Math.floor((right - left) / 2) + left

        if (target == nums[center]) {
            return center
        }

        if (target < nums[center]) {
            right = center - 1
        } else {
            left = center + 1
        }
    }

    return left
}


var plusOne = function(digits, lastIndex) {
    if(lastIndex == -1){
        digits.unshift(1);
        return digits;
    }
        
    lastIndex = lastIndex == undefined ? digits.length - 1 : lastIndex;
    
    let afterPlusOne = digits[lastIndex] + 1;
    
    if(afterPlusOne > 9){
        digits[lastIndex] = afterPlusOne % 10;
        plusOne(digits, --lastIndex);
        
    }
    else{
        digits[lastIndex] = afterPlusOne;
    }
    
    return digits;
};

var plusOneWhile = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) { 
        let num = digits[i];

        num++;

        if (num > 9) {
            digits[i] = 0;
            if (i == 0) {
                digits.unshift(1);
            }
        }
        else { 
            digits[i] = num;
            break;
        }
    }

    return digits;
};
