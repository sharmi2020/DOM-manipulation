// function greet(){
//     console.log("area is defined")
// }
// greet();
// //iife
// (function (){
//     console.log("okay")
// })();


// (function(dt){
//     console.log(dt.toLocaleTimeString());
// })(new Date());



// (function(){
//     let res=new Date();
//     console.log(res.toLocaleDateString())
// })();

// (function(time){
//     console.log(time.toLocaleTimeString())
// })(new Date);


// function time(){
//     let res=new Date();
//     console.log(res.toLocaleDateString())
// }
// time();


// let element=document.createElement('h1');
// Element.textContent="process";
// document.body.appendChild(element);
// console.log(element)

// function formatItems(arr){
//     if(arr.length==0){
//         console.log ('no items to display')
//     }else if(arr.length==1){
//         console.log(arr[0]);
//     }else if(arr.length==2){
//         console.log(`${arr[0]}and $ arr[1]`)
//     }else {
//         let lastItem=arr.pop();
//         console.log(`${arr.join(', ')}, and ${lastItem}`)
//     }
// }


// let arr=['apple','banana','grape','orange'];
// let res=formatItems(arr);
// console.log(res);


// let Button=document.getElementById('button')
// Button.addEventListener('clicked',function(){
//     console.log('button clicked');
// })
// let promise = new Promise(function (resolve,reject){
//     const userName="sharmi";
//     const lastName="sharmi";

//     if(userName==lastName){
//         resolve()
//     }else{
//         reject()
//     }
// });

// promise.
// then(function(){
//     console.log(`${username} and ${lastname} are same`)
// }).catch(function(){
//     console.log('both are not same');
// })


// let timer;
//   function delayTimer(){
//     timer=setTimeout(delayed,3000)
//   }

//   function delayed(){
//     console.log("three seconds ellapsed")
//   }
//    function clear(){
//     clearTimeout(timer)
//    }
//    clear()


//   let timer2;

//   function int(){
//     timer2=setInterval(interval,2000)
//   }

//   function interval(){
//     console.log("2 seconds gone")
//   }
//   interval()


// const students=[
//   { name: 'Alice', marks: 85, class: 'A' },
//     { name: 'Bob', marks: 72, class: 'B' },
//     { name: 'Charlie', marks: 90, class: 'A' },
//     { name: 'David', marks: 68, class: 'C' },
//     { name: 'Eva', marks: 95, class: 'A' }
// ]


// let stu=students.map(stud=>stud.name.toUpperCase());
// console.log(stu);


// let stud=[];
// students.forEach(stu=>stud.push(stu.name.toUpperCase()));
// console.log(stud)


// let student=[];
// for(let i=0;i<students.length;i++){
//   student.push(students[i].name.toUpperCase());
// }
// console.log(student)



// const animals={
//   'cat': 'meow',
//   'dog': 'woof',
//   'cow': 'moo',
//   'sheep': 'baaah',
//   'bird': 'tweet'
// }


// const values=Object.values(animals)
// const val=values[Math.floor(Math.random()*values.length)]
// console.log(val);



//reverse a string

// let val="sharmila"
// let ans=val.split("").reverse().join()

// console.log(ans)

// function CountWords(str){
//   const words=str.split("")
//   return words.length;
// }
// console.log(CountWords("sharmila kannan"))


// function isAnagram(str1,str2){
//   if(str1.length==str2.length){
//     console.log("it is anagram")
//   }else{
//     console.log("not an anagram")
//   }
// }
// isAnagram(listen,silent)


// function animal(name,type){
//   this.name=name,
//   this.type=type,
//   this.age=0
// }

// animal.prototype.birthday =
// function(){
//   this.age++
// }

// const leo = new animal('leo','lion')



// let a=0;
// let b=[1,2,3,4,5].map((x)=>(
//   (a+=x),x*x

// ));

// console.log(a);
// console.log(b);


// const ages=[1,2,3,4,5]

// const newAge=ages.with(1,10)

// console.log(newAge)
// console.log(ages)




// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000);
// }


// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }



// class TreeNode{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;

//     }
// }

// function treeDepth(node){
//     if(node===null) return 0
//     let leftDepth=treeDepth(node.left)
//     let rightDepth=treeDepth(node.right)
//     return Math.max(leftDepth,rightDepth)+1
// }

// let root=new TreeNode(1);
// root.left=new TreeNode(2);
// root.right=new TreeNode(3);
// root.left.left=new TreeNode(4);
// root.left.right=new TreeNode(5)


// console.log("Depth of the Tree",treeDepth(root));



// const obj = { id: 1 }
// obj.id = 2

// console.log(typeof({}));
// console.log(typeof(typeof({})));


// function getId(user, fallback) {
//     return user ?.id ?? fallback;
//   }
//   return getId


// class queue{
//   constructor(){
//     this.list=[];
//     this.length=0;
//   }

//   enqueue(value){
//     this.length++;
//     this.list.push(value)
//   }

//   dequeue(){
//     if(this.length===0) return;
//     this.length--;
//     return this.length.shift
//   }

//   peek(){
//     return this.length[this.list.length-1];
//   }
// }
// //queue();


// let btn = document.querySelector("button")
// let ul= document.querySelector("ul")
// btn.addEventListener('click',()=>{
//     const li = document.createElement("li")
//     li.appendChild(document.createTextNode("foo"));
//     li.appendChild(document.createElement("bar"))
//     ul.appendChild(li);

// })
 


// const cn= document.querySelector("canvas");
// const ctx= cn.getContext("2d");
// ctx.font="italic bold 20pt Times New Roman"
// ctx.fillText("Hello world",10,50)


// const res = ["👨", "‍", "👩", "‍", "👧", "‍", "👦"].join('')

// console.log(res) 


//closures

// function outer(){
//     let name="sharmi"
//     function inner(){
//         console.log(name)
//     }
//     return inner;
// }
//  let inner=outer()
//  inner()


// function generateOtp(){
//     let OTP=[];
//     for(let i=0;i<=6;i++){
//         OTP+=Math.ceil(Math.random()*3);
//     }
//     return OTP

// }
// console.log(generateOtp());



// function add(a){
//     return function(b){
//         return a+b
//     }
// }

// let ans=add(2)
// console.log(ans(3))

// function add(a){
//    return  function subtract(b){
//     return function Multiply(c){
//         return function divide(d){
//     }

//     }
// }
// }
// let an=add(1)
// console.log(add(2))

// (function(name){
//     console.log('Hello,'+name)
// })('world')


// function safeUpdate(obj,key,value){
//     if(!obj.hasOwnProperty(key)){
//         obj[key]=value;
//     }
// }

// const user={
//     name:"Alice",
//     age:30
// }

// console.log(safeUpdate(user,"country","usa"))


// let a =[1,2,3];
// let b=[0,...a]//using spread
// console.log(b)


//splice

// let arr = [a,b, c]
// arr.splice(0,0,x)
// console.log(arr) 


//array flattening

// function flatten(arr){
//     let res=[];
//     //for of loop for iterating
//     for(let ans of arr){
//         if(Array.isArray(ans)){
//             res.push(...flatten(ans))
//         }else{
//             res.push(ans)
//         }
//     }
//     return res;
// }

// let arr=[1,2,[3,4],[5],[6,7,8]]
// console.log(flatten(arr))



// let arr = [1, [2, [3, [4, 5], 6], 7, 8], 9, 10];
// let res=arr.flat(3);
// console.log(res)



//check prime or not


// function prime(N){
//     for(let i=1;i<=N;i++){
//         if(i%N==1){
//             return "Yes"
//         }else{
//             return "No";
//         }
//     }
// }

// console.log(prime(5))


// function MinMax(arr){
//     let ans={};
//     arr.sort((a,b)=>b-a);
//     //after sorting to find minimum element 
//     let res1=ans.min=arr[0];
//     //after sorting to find maximum element
//     let res2=ans.max=arr[arr.length-1]
//     return [res1,res2]
// }

// console.log(MinMax([54, 546, 548, 60]))


// function arrangeLarge(arr){
//     let val=arr.reverse().join("")
//     return val;
// }

// console.log(arrangeLarge([54, 546, 548, 60]))

// function deepCopy(obj) {
//     return window.structuredClone(obj);
//   }
  
//   const user = {
//     name: 'Tyler',
//     age: 32,
//     created: new Date(),
//   }
  
//   const copiedUser = deepCopy(user)
//   console.log(copiedUser)


// let arr=[1,2,3,4,5];
// let arr1=new Array(1,2,3);
// console.log(arr1);

// let arr=Array.of(2);
// console.log(arr)

// let arr=new Array(3).fill(0);
// console.log(arr)
  

// let arr= Array.from({length:3},()=>0)
// console.log(arr);


// function create2DArray(m, n) {
//   return Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
// }


// console.log(create2DArray([1,2,3],[4,5,6]))



// function create2DArray(m,n){
//   return Array(m)
//   .fill()
//   .map(()=>Array(n).fill(0));
// }
// console.log(create2DArray([1,2,3],[4,5,6]))


// function create2DArray(m,n){
//   let arr=new Array(m);
//   for(let i=0;i<m;i++){
//     arr[i]=new Array(n);
//     for(let j=0;j<n;j++){
//       arr[i][j]=1;
//     }
//   }
//   return arr;
// }

// console.log(create2DArray([1,2,3,4,5,6]))


// let arr = new Array(5).fill(10);
// console.log(arr);


// let obj = {
//     name:"john",
//     age:30,
//     city:"New York"
// }

// let ans =Object.keys(obj).map(key=>obj[key]);
// console.log(ans);

// let arr=Object.entries(obj);
// console.log(arr);

// let arr1=Object.values(obj);
// console.log(arr1);

// let arr2=Object.keys(obj).map(val=>obj[val]);
// console.log(arr2)

//currying

const add=(a)=>{
    return (b)=>{
        return (c)=>{
            return a-b-c
        }
    }
}
console.log(add(0)(1)(2))