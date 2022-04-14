function weightedRandom(arr){
   let weightedArr = [];
   
   for(let i=0; i < arr.length; i++){
     let repeat = arr[i];
     for(let j = 0; j < repeat; j++ ){
       weightedArr.push(i);
     }
   }
   
   return weightedArr;
 }
 
 function next(arr){
   let weightedArr = weightedRandom(arr);
   
   let random = Math.floor(Math.random() * weightedArr.length);
   
   return weightedArr[random];
 }
 
 console.log(weightedRandom([4, 1, 3, 2]));
 
 for(let i =0; i< 10; i++){
   console.log(next([4, 1, 3, 2]));
 }
 