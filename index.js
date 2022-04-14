console.log('AWS interview'); 


var maxPooling = function () { 

}

var PredictTheWinner = function(nums, total=0, playerATurn = true) {
    if (nums.length == 1) {
        if (playerATurn) {
            return 1 * nums[0];
        }
        else { 
            return -1 * nums[0];
        }
     }

    
    let increment = 0;

    if (takeHead != undefined) { 
        if (takeHead) {
            increment = nums[0];
            nums.pop();
        }
        else { 
            increment = nums[nums.length - 1];
            nums.shift();
        }

        playATurn = !playATurn;
    }

    let copy1 = JSON.parse(JSON.stringify(nums));
    let copy2 = JSON.parse(JSON.stringify(nums));
    
    if (playATurn) {
        playerA += Math.max(PredictTheWinner(copy1, playerA, playerB, playATurn, true), PredictTheWinner(copy2, playerA, playerB, playATurn, false));
    }
    else { 
        playerB += Math.max(PredictTheWinner(copy1, playerA, playerB, playATurn, true), PredictTheWinner(copy2, playerA, playerB, playATurn, false));
    }

    return increment;
    //PredictTheWinner(nums, playerA, playerB, playATurn);
};

var isPowerOfTwo = function(n) {
    const base = 2;
    let exponent = 1;
    
    if(n == 0) return false;
    if(n == 1) return true;
    
    while(exponent < n){
        exponent = exponent * base;
        
        if(exponent == n){
            return true;
        }
    }
    
    return false;
};

var decodeString = function(s, repeat = 1) {
    let arr = [...s];
    let result = [];
    
    while(repeat){
        repeat--;
        
        for(let i =0; i < s.length; i++){
            let r = parseInt(s[i]);
            if(!isNaN(r)){
                let stack = 1;
                let sub = [];
                for(let j = i + 2; j < s.length; j++){
                    if(stack ==0){
                        break;
                    }
                    
                    if(s[j] == '['){
                        stack++;
                    }
                    else if(s[j] == ']'){
                        stack--;
                    }
                    else{
                        sub.push(s[j]);
                    }               
                }
                
                result.push(decodeString(sub.join(''), r));
            }
            else{
                result.push(s[i]);
            }
        }
    }

    return result.join('');

};

var decodedResult = [];

function firstStage(encodedS, repeat = 1) { 
    while (repeat) { 
        repeat--;

        for (let i = 0; i < encodedS.length; i++) {
            let letter = encodedS[i];
            let parsed = parseInt(letter);
    
            if (!isNaN(parsed)) {
                let repeat = parsed;
                let stack = 0;
                let sub = [];

                for (let j = i + 1; j < encodedS.length; j++) { 
                    let letterInside = encodedS[j];

                    if(letterInside == '['){
                        stack++;
                    }
                    else if(letterInside == ']'){
                        stack--;
                    }
                    else{
                        sub.push(letterInside);
                    }  

                    if (stack == 0) {
                        i = j;
                        break;
                    }                   
                }

                firstStage(sub, repeat);
            }
            else { 
                decodedResult.push(letter);
            }
         }
    }
}


function secondStage(encodedS, repeat = 1) { 
    while (repeat) { 
        repeat--;

        for (let i = 0; i < encodedS.length; i++) {
            let letter = encodedS[i];
            let parsed = parseInt(letter);
    
            if (!isNaN(parsed)) {
                let repeat = parsed;
                let stack = 1;
                let sub = [];

                for (let j = i + 2; j < encodedS.length; j++) { 
                    let letterInside = encodedS[j];

                    if(letterInside == '['){
                        stack++;
                    }
                    else if(letterInside == ']'){
                        stack--;
                    }

                    if (stack == 0) {
                        i = j;
                        break;
                    } 
                    
                    sub.push(letterInside);
                }

                secondStage(sub, repeat);
            }
            else { 
                decodedResult.push(letter);
            }
         }
    }
}


function thirdStage(encodedS, repeat = 1) { 
    let xxx = '';

    while (repeat) { 
        repeat--;

        for (let i = 0; i < encodedS.length; i++) {
            let letter = encodedS[i];
            let parsed = parseInt(letter);
    
            if (!isNaN(parsed)) {
                let repeat = parsed;
                let stack = 1;
                let sub = [];

                for (let j = i + 2; j < encodedS.length; j++) { 
                    let letterInside = encodedS[j];

                    if(letterInside == '['){
                        stack++;
                    }
                    else if(letterInside == ']'){
                        stack--;
                    }

                    if (stack == 0) {
                        i = j;
                        break;
                    } 
                    
                    sub.push(letterInside);
                }

                let yyy = thirdStage(sub, repeat);
                xxx = xxx + yyy;
            }
            else { 
                xxx = xxx + letter;
            }
         }
    }

    return xxx;
}




function forthStage(encodedS, repeat = 1) { 
    let xxx = '';

    while (repeat) { 
        repeat--;

        for (let i = 0; i < encodedS.length; i++) {
            let letter = encodedS[i];
            let parsed = parseInt(letter);
            let repeatNum = '';
    
            if (!isNaN(parsed)) {
                repeatNum = repeatNum + letter;
                
                for (let k = i + 1; k < encodedS.length; k++) { 
                    let letterNum = encodedS[k];
                    let parsedLetterNum = parseInt(letterNum);

                    if (!isNaN(parsedLetterNum)) { 
                        repeatNum += parsedLetterNum;
                    }
                    else{ 
                        i = k;
                        repeatNum = parseInt(repeatNum);
                        break;
                    }
                }

                let stack = 1;
                let sub = [];

                for (let j = i + 1; j < encodedS.length; j++) { 
                    let letterInside = encodedS[j];

                    if(letterInside == '['){
                        stack++;
                    }
                    else if(letterInside == ']'){
                        stack--;
                    }

                    if (stack == 0) {
                        i = j;
                        break;
                    } 
                    
                    sub.push(letterInside);
                }

                let yyy = forthStage(sub, repeatNum);
                xxx = xxx + yyy;
            }
            else { 
                xxx = xxx + letter;
            }
         }
    }

    return xxx;
}

var reverseStringV1 = function(s) {
    let count = s.length
    
    for(let i = count -1; i >= 0; i--){
        s.push(s[i]);
    }
    
    while(count > 0){
        s.shift();
        count--;
    }
    
    return s;

};

var reverseString = function(s) {
    let newArr = [];
    
    while(s.length){
        newArr.push(s.pop())
    }
    
    return newArr;

};

var myPow = function (x, n) {
    let result = 1;

    if(x == 0) return 0;
    if (n == 0) return 1;
    if (n < 0) { 
        x = 1 / x;
        n = n * -1;
    }
    
    result = result * x;
    n--;

    return x * myPow(result, n);
};


function addTwoNumbers(l1, l2, carry=false, result = []) {
    if(!l1 && !l2){
        if(carry){
            result.push(1);
        }
        
        return result
    }
    
    let up = l1.val || 0;
    let down  = l2.val || 0;
    let sum = up +  down;
    sum = carry ? sum + 1 : sum;
    let current = sum % 10;
    
    result.push(current)
    
    l1 = l1.next;
    l2 = l2.next;
    
    return addTwoNumbers(l1, l2, sum >= 10, result)
};

function addTwoNumbersReturnNode(l1, l2, carry = false, node = null, org = {}) {
    if (node == null) { 
        node = new ListNode(0, {});
        org.result = node;
    }

    if(!l1 && !l2){
        if(carry){
            node.val = 1;
        }
        
        node = null;
        return org.result;
    }
    
    let up = l1.val || 0;
    let down  = l2.val || 0;
    let sum = up +  down;
    sum = carry ? sum + 1 : sum;
    let current = sum % 10;
    
    // node = new ListNode(current, {});
    node.val = current;
    node.next = new ListNode(0, {});
    
    l1 = l1.next;
    l2 = l2.next;
    
    return addTwoNumbersReturnNode(l1, l2, sum >= 10, node.next, org);
};


var addTwoNumbers = function(l1, l2, carry = false) {
    let node = null;

    if(!l1 && !l2){
        if(carry){
            node = new ListNode(1);
        }
        
        return node;
    }
    
    let up = l1 && l1.val || 0;
    let down  = l2 && l2.val || 0;
    let sum = up +  down;
    sum = carry ? sum + 1 : sum;
    let current = sum % 10;
    
    node = new ListNode(current, {});
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    
    node.next = addTwoNumbers(l1, l2, sum >= 10);

    return node;
};

function printListNode(node) { 
    if (!node) return;
    console.log(node.val);
    printListNode(node.next);
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function PairACoderSolution(S) { 
    let N = S.length
    let dp = [];
    dp[N + 1] = 0;

    for (let i = N - 1; i > -1; i--) { 
        dp[i] = 1 + dp[i + 1];
        for (let j = i + 1; j < N; j++) { 
            if (S[i] == S[j]) { 
                dp[i] = Math.min(dp[i], dp[j + 1])
            }         
        }
    }

    return dp[0];
}

var globalNum = 0;

function PairACoder(S) { 
    if (!S.length) { 
        return 0;
    }

    if (S.length == 1) { 
        return 1;
    }

    let firstLetter = S[0];
    let sameLetterIndexes = [1];

    for (let i = 1; i < S.length; i++) { 
        let l = S[i];
        if (firstLetter == l) { 
            sameLetterIndexes.push(i);
            let suffix = S.substr(1);
            let suffixAfterFirstMove = S.substr(i + 1);
            return Math.min(1 + PairACoder(suffix), PairACoder(suffixAfterFirstMove));
        }
    }

    return S.length;
}


function fabonaci(num) { 
    if (num == 1) { 
        return 1;
    }
    if (num == 2) { 
        return 2;
    }

    return fabonaci(num - 1) + fabonaci(num - 2);
}

function miniumLetters(S) { 
    letterObj = {};
    for (let letter of S) { 

    }
}


function solution(T) {
    // write your code in JavaScript (Node.js 8.9.4)

    let max = 0;
    let combo = {};

    for(let tower of T){
      let tower_s12 = swap12(tower)
      let tower_s23 = swap23(tower)

      addOrIncrement(combo, tower);
      addOrIncrement(combo, tower, tower_s12);
      addOrIncrement(combo, tower, tower_s23);
    }

    Object.keys(combo).forEach(x =>{
      if(combo[x] > max){
        max = combo[x];
      }
    });

    return max;
}

function addOrIncrement(combo, org, swap) {
    if (swap) {
        if (swap == org) return;
    }
    else { 
        swap = org;
    }
    
    if(combo[swap]){
        combo[swap]++;
    }
    else{
        combo[swap] = 1;
    }
}

function swap12(colors){
  let c1 = colors[0];
  let c2 = colors[1];
  let c3 = colors[2];

  return c2 + c1 + c3;
}

function swap23(colors){
  let c1 = colors[0];
  let c2 = colors[1];
  let c3 = colors[2];

  return c1 + c3 + c2;
}


function lengthOfLongestSubstring(sArr) { 

    let count = 0;
    let max = 0;

    let obj = {};

    for (let i = 0; i < sArr.length; i++) {
        if (obj[sArr[i]]) {
            count = 0;
        }
        else { 
            obj[sArr[i]] = true;
        }

        count++;
        max = count > max ? count : max;
    }

    return max;
}

function reverseInt(num) { 
    let modifier = 1;
    let lower = -(2**31);
    let upper = 2**31 - 1;

    if (num < 0) { 
        modifier = -1;
        num = num * modifier;
    }

    numS = num + '';
    newS = '';

    for (let i = numS.length - 1; i >= 0; i--) { 
        newS = newS + numS[i];
    }

    num = parseInt(newS) * modifier;

    if (num >= lower && num <= upper) {
        return num;
    }
    else { 
        return 0;
    }
}