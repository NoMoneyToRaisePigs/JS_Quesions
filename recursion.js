setTimeout(() => {
   
}, 3000);

setTimeout(() => {
   console.log("GF - task 2");
}, 3000);

var reverseBitsA = function(n) {
   function convertTo10(s, expo = 0) { 
      if (!s) return 0;
   
      let val = (2**expo) * s[s.length - 1];
      s = s.substr(0, s.length - 1);
      expo++;
   
      return val + convertTo10(s, expo);
   }

   let reverse = '';
   
   for(let i = n.length - 1; i >= 0; i--){
       reverse += n[i];
   }
   
   return convertTo10(reverse);
};

function convertToBits(num) { 
   if (num < 2) return num;

   let divide = parseInt(num / 2);
   let rest = num % 2;

   return ''  + convertToBits(divide) + rest;
}

function convertToBisV2(num) { 
   let result = '';

   while (num >= 1) { 
      let rest = num % 2;
      num = parseInt(num / 2);

      if (rest == 0) {
         result = 0 + result;
      }
      else { 
         result = 1 + result;
         
      }
   }

   return result;
}

function convertTo10(s, expo = 0) { 
   if (!s) return 0;

   let val = (2 ** expo) * s[s.length - 1];
   s = s.substr(0, s.length - 1);
   expo++;

   return val + convertTo10(s, expo);
}

var PredictTheWinner = function (nums, total = 0, playerATurn = true) {
   if (nums.length == 1) {
       if (playerATurn) {
           return 1 * nums[0];
       }
       else { 
           return -1 * nums[0];
       }
    }

   let increment = 0;
   
   let copy1 = JSON.parse(JSON.stringify(nums));
   let copy2 = JSON.parse(JSON.stringify(nums));
   
   totalHead += copy1.shift() + PredictTheWinner(copy1, total); 
   totalTail += copy2.pop() + PredictTheWinner(copy2, total); 
   
   total += Math.max(totalHead, totalTail);

   return total;

   // if (takeHead != undefined) { 
   //     if (takeHead) {
   //         increment = nums[0];
   //         nums.pop();
   //     }
   //     else { 
   //         increment = nums[nums.length - 1];
   //         nums.shift();
   //     }

   //     playATurn = !playATurn;
   // }

   // let copy1 = JSON.parse(JSON.stringify(nums));
   // let copy2 = JSON.parse(JSON.stringify(nums));
   
   // if (playATurn) {
   //     playerA += Math.max(PredictTheWinner(copy1, playerA, playerB, playATurn, true), PredictTheWinner(copy2, playerA, playerB, playATurn, false));
   // }
   // else { 
   //     playerB += Math.max(PredictTheWinner(copy1, playerA, playerB, playATurn, true), PredictTheWinner(copy2, playerA, playerB, playATurn, false));
   // }

   return increment;
   //PredictTheWinner(nums, playerA, playerB, playATurn);
};

var maximumBobPoints = function (numArrows, aliceArrows, section = 11) {
   
   //let aliceScore = aliceArrows.reduce((prev, current) => prev + current, 0);
   if (section == 0) return 0;
   if (numArrows <= aliceArrows[section]) return 0;

   let cost = aliceArrows[section] + 1;
   let nextRoundSection = section - 1;

   let take = section + maximumBobPoints(numArrows - cost, aliceArrows, nextRoundSection);
   let giveUp = 0 + maximumBobPoints(numArrows, aliceArrows, nextRoundSection)
   
   return Math.max(take, giveUp);
};