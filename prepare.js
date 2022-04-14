function currying(...args) { 
   let result = args.reduce((prev, curr) => prev + curr, 0);

   function xxx(...param) { 
      result = param.reduce((prev, curr) => prev + curr, result);
      
      this.valueOf = () => result
      this.toString = () => result
      return param.length ? xxx : result;
   }

   //return args ? (...arguments) => arguments.reduce((prev, curr) => prev + curr, result) : result;

   xxx.valueOf = () => result
   xxx.toString = () => result

   return args.length ? xxx : result;
}

function testsum(a, b, c) {
   return a + b + c;
}
 
function curry(fn) {
   return function curriedFn(...args) {
     if (args.length < fn.length) {
       return function () {
         return curriedFn(...args.concat(Array.from(arguments)));
       };
     }
 
     return fn(...args);
   };
}
 

function currySingle(num) { 
   let outside = num;

   function curryAdding(inside) { 
      outside += inside

      return inside ? curryAdding : outside
   }

   curryAdding.valueOf = () => outside
   curryAdding.toString = () => outside

   return num ? curryAdding : outside;
}

function stockBuySell(nums) { 
   let max = 0;
   let start = nums[0];

   for (let i = 0; i < nums.length; i++) { 
      let num = nums[i];
      
      if (num < start) { 
         start = num;
      }

      let profit = num - start;

      max = profit > max ? profit : max;
   }

   return max;
}

function reverseNumMath(num) { 
   let reverse = 0;

   while (num) { 
      let y = num % 10
      num = parseInt(num / 10);
      
      reverse = reverse * 10 + y;
   }

   return reverse;
}

function testFunc() { 
   console.log('my test Func');
}

function customSetInterval(time, callback) { 
   setTimeout(() => { 
      callback();
      customSetInterval(time, callback);
   }, time);
};

function timetravel() { 

}

function orderDivideAndConquor(nums) { 
   if (mums.length = 2) { }
}

function orderBarrel(nums) { 
   let barrel = [];

   for (let i = 0; i < nums.length; i++) { 
      barrel[nums[i]] = nums[i];
   }

   return barrel.filter(x => x != undefined);
}

function splitArrayIntoBlocks(arr, size) {
   if (arr.length < size) return arr;

   let blocks = [];
   let count = 0;
   while (arr.length) {
      let block = [];
      block.push(arr.shift());
      count++;

      if (count == size) { 
         blocks.push(block);
      }
   }

   return blocks;
}

function TwoSumTarget(nums, target) { 
   let map = {};

   for (let i = 0; i < nums.length; i++) { 
      let n = nums[i];
      let diff = target - n;

      if (map[n]) {
         return [map[n], i];
      }
      else { 
         map[diff] = i;
      }
   }
}

function GroupBy(objArr, prop) { 
   let map = {};

   for (let i = 0; i < objArr.length; i++) { 
      let obj = objArr[i];
      let val = obj[prop];

      if (map[val]) {
         map[val].push(obj);
      }
      else { 
         map[val] = [];
         map[val].push(obj);
      }      
   }

   return map;
}

function arrayToObj(arr) {
   arr.reduce((prev, current, index) => prev[index] = current, {});
}

function objToArray(obj) { 
   let keyArr = [];
   let valArr = [];

   Object.keys(obj).forEach(x => keyArr.push(key));
   Object.values(obj).forEach(x => valArr.push(key));

   return [keyArr, valArr];
}

function customDebounce(callback, delay) {
   let task;
   let newFunc = (...args) => {
      clearTimeout(task);

      task = setTimeout(() => {
         callback.apply(this, args);
      }, delay);
    }
}

function customThrottle(callback, delay) { 
   let canExecute = true;

   function newFunc(...args) { 
      if (canExecute) { 
         callback.apply(this, args);
         canExecute = false;
      }

      setTimeout(() => {
         canExecute = true;
      }, delay);
   }
}

function selectionSorting(start, end, type) { 
   start = new Date(start);
   end = new Date(end);

   let startTime = start.getTime();
   let endTime = end.getTime();


   let misllionSecDiff = end.getTime() - start.getTime();

   let secondDiff = Math.floor(misllionSecDiff / 1000);
   let minuteDiff = Math.floor(misllionSecDiff / 1000 / 60);
   let hourDiff = Math.floor(misllionSecDiff / 1000 / 60 / 60)
   let DayDiff = Math.floor(misllionSecDiff / 1000 / 60 / 60 / 24)

   let yearDiff = end.getFullYear() - start.getFullYear();
   let monthDiff = yearDiff * 12 - start.getMonth() + end.getMonth();
}

function func1(str) { 
   console.log('func1');
   return str + 'func1';
}

function func2(str) { 
   console.log('func2');
   return str + 'func2';
}

function func3(str) { 
   console.log('func3');
   return str + 'func3';
}

function composeFunction(...funcs) { 
   return (...args) => { 
      return funcs.reduceRight((prev, curr) => curr(prev), args)
   }
}



//IIFE
var gfIIFE = (function () {
   var x = 1;
   var y = 2;

   var gfprinting = function () { 
      console.log(x + y);
   }

   return {
      print: gfprinting
   }
 })()
//oneline copy

//see if an object has an property
// function hasProperty() { 
//    //https://segmentfault.com/a/1190000039158310
//    let obj = {
//       name: 'Scarlett',
//       age: 37
//   }
//   console.log(obj.name !== undefined)  // true 自身属性存在
//   console.log(obj['name'] !== undefined)  // true
//   console.log(obj.gender !== undefined)  // false gender属性不存在
  
//   // 在原型上添加一个可枚举属性
//   Object.prototype.nationality = 'America'
  
//   // 在obj对象上添加一个不可枚举属性
//   Object.defineProperty(obj, 'occupation', {
//       value: 'actress',
//       enumerable: false
//   })
   
//   obj.birthday = undefined
//   ​
//    console.log(obj.birthday !== undefined)  // false
   
//    'name' in obj  // true 自身属性存在
// 'occupation' in obj  // true 不可枚举属性存在
// 'nationality' in obj  // true 继承属性
//    'birthday' in obj  // true 值为undefined的属性
   
//    obj.hasOwnProperty('name')  // true 自身属性
// obj.hasOwnProperty('occupation')  // true 不可枚举属性
// obj.hasOwnProperty('birthday')  // true
//    obj.hasOwnProperty('nationality')  // false 原型链上继承的属性
   
// Object.keys(obj).includes('occupation')  // false
// Object.keys(obj).indexOf('occupation')   // -1
// }


function typeCheck() { 

}

var myObj = {
   name: 'gf',
   greeting: function () { 
      console.log(this.name);
   }
}

var myObjSon = Object.create(myObj);



//closure

//implement Promise

//hoisting

//scoping

//快排

//遍历树


const testtree = {
   data: 1,
   left: {
       data: 2,
       left: {
           data: 4,
           left: {
               data: 8,
           },
           right: {
               data: 9
           }
       },
       right: {
           data: 5,
           left: {
               data: 10,
           },
           right: {
               data: 11
           }
       }
   },
   right: {
       data: 3,
       left: {
           data: 6,
           left: {
               data: 12
           }
       },
       right: {
           data: 7
       }
   }
};
 
//tree iteration
function depthFirstTree(node){ 
   if (!node) return;
//前序
   console.log(node.data);
   firstOrderTree(node.left);
//中序
   console.log(node.data);
   firstOrderTree(node.right);
//后序
   console.log(node.data);
}

function BroadFirst(node){
   let queue = [];

   queue.push(node);

   while (queue.length) {
       let n = queue.shift();
       console.log(n.data);

       if (n.left) queue.push(n.left)
       if (n.right) queue.push(n.right)       
   }
}

let list = [
   {"name": "John","Average":15,"High":10,"DtmStamp":1358226000000},
   {"name": "Jane","Average":16,"High":92,"DtmStamp":1358226000000},
   {"name": "Jane","Average":17,"High":45,"DtmStamp":1358226000000},
   {"name": "John","Average":18,"High":87,"DtmStamp":1358226000000},
   {"name": "Jane","Average":15,"High":10,"DtmStamp":1358226060000},
   {"name": "John","Average":16,"High":87,"DtmStamp":1358226060000},
   {"name": "John","Average":17,"High":45,"DtmStamp":1358226060000},
   {"name": "Jane","Average":18,"High":92,"DtmStamp":1358226060000}
];

var list1 = [
   {"fdId": 1,"fdName": "张三","fdAge":30,"fdHigh":10},
   {"fdId": 2,"fdName": "李四","fdAge":16,"fdHigh":92},
   {"fdId": 3,"fdName": "张三","fdAge":17,"fdHigh":45},
   {"fdId": 4,"fdName": "李四","fdAge":27,"fdHigh":87},
   {"fdId": 5,"fdName": "张三","fdAge":15,"fdHigh":10},
   {"fdId": 6,"fdName": "李四","fdAge":16,"fdHigh":87},
   {"fdId": 7,"fdName": "王五","fdAge":20,"fdHigh":45},
   {"fdId": 8,"fdName": "王五","fdAge":18,"fdHigh":92}];

function groupBy( array , f ) {
   let groups = {};
   array.forEach( function( o ) {
       let group = f(o);
       groups[group] = groups[group] || [];
       groups[group].push( o );
   });
   return Object.keys(groups).map( function( group ) {
       return groups[group];
   });
}

function groupByGF(arr, property) { 
   let map = {};

   arr.forEach(x => {
      map[x[property]] = map[x[property]] || [];
      map[x[property]].push(x);
   });

   return Object.keys(map).map(x => map[x]);
}

function groupByGFFunc(arr, func) { 
   let map = {};

   arr.forEach(x => {
      let property = func(x);
      map[property] = map[property] || [];
      map[property].push(x);
   });

   return Object.keys(map).map(x => map[x]);
}

function curryingRepeat(fn) { 
   return (...args) => {
      if (fn.length >= args.length) {
         return fn(args);
      }
      else { 
         return (...args2) => fn(args2.concat(args));
      }
   };
}

function curry(fn) {
   return function curriedFn(...args) {
     if (args.length < fn.length) {
       return function () {
         return curriedFn(...args.concat(Array.from(arguments)));
       };
     }
 
     return fn(...args);
   };
}


function floatAdd(num1,num2){
   let len1=(num1+"").split(".")[1].length;
   let len2=(num2+"").split(".")[1].length;
   let maxlen=Math.max(len1,len2);
   let a=Math.pow(10,maxlen);
   return (num1*a+num2*a)/a;
}
 

function quickSort(nums) { 
   if (nums.length <= 1) return nums;

   let middle = parseInt(nums.length / 2);
   let pivot = nums.splice(middle, 1)[0];

   let left = [];
   let right = [];

   for (let i = 0; i < nums.length; i++) { 
      if (nums[i] > pivot) {
         right.push(nums[i]);
      }
      else { 
         left.push(nums[i]);
      }
   }

   return quickSort(left).concat(pivot, quickSort(right));
}

class _LazyMan { 
   #queue;

   constructor() { 
      this.#queue = [];
      setTimeout(() => {
         this.next();
      }, 0);
   }

   eat() { 
      let eatTask = () => {
         console.log('eating');
         this.next();
      };
      this.#queue.push(eatTask);
      return this;
   }

   sleep(time) { 
      let sleepTask = () => {
         console.log("sleeping ....");
         setTimeout(() => {
            console.log(`wake up after ${time}`);
            this.next();
         }, time);
      };

      this.#queue.push(sleepTask);

      return this
   }

   next() { 
      let fn = this.#queue.shift();
      fn && fn();
   }

}

function LazyMan() { 
   return new _LazyMan();
}


const rootToBeFound = [{
   id: 1,
   child: [
       {
           id: 2,
           child: [
               {
                   id: 4,
                   child: []
               },
               {
                   id: 5,
                   child: []
               }
           ]
       },
       {
           id: 3,
           child: [
               {
                   id: 6,
                   child: []
               },
               {
                   id: 7,
                   child: []
               }
           ]
       }

   ]
}]

function findPathbyId(tree,id,path){
   if(typeof path=='undefined'){
       path=[]
   }
   for(var i=0;i<tree.length;i++){
       var tempPath=[...path]
       tempPath.push(tree[i].id)
       if(tree[i].id==id){
           return tempPath
       }
       if(tree[i].child){
           let reuslt=findPathbyId(tree[i].child,id,tempPath)
           if(reuslt){
               return reuslt
           }
       }
   }
}