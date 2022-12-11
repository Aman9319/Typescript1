// let nam:string = "John"; 
// let score1:number = 50;
// let score2:number = 42.50
// let sum = score1 + score2 
// console.log( nam) 
// console.log("first score: "+score1) 
// console.log("second score: "+score2) 
// console.log("sum of the scores: "+sum)



// let str = '1' 
// let str2:number = <number> <any> str   //str is now of type number 
// console.log(typeof(str2))



// "use strict";
// let str = '1';
// let str2 = str; //str is now of type number 
// console.log(typeof (str2));



// let global_num = 12          //global letiable 
// class Numbers { 
//    num_val = 13;             //class letiable 
//    static sval = 10;         //static field 
   
//    storeNum():void { 
//       let local_num = 14;    //local letiable 
//    } 
// } 
// console.log("Global num: "+global_num)  
// console.log(Numbers.sval)   //static letiable  
// let obj = new Numbers(); 
// console.log("Global num: "+obj.num_val) 


// let j:string; 
// let n:any = "a b c" 

// for(j in n) {
//    console.log(n[j])  
// }


// function addNumbers(...nums:number[]) {  
//     let i;   
//     let sum:number = 0; 
    
//     for(i = 0;i<nums.length;i++) { 
//        sum = sum + nums[i]; 
//     } 
//     console.log("sum of the numbers",sum) 
//  } 
//  addNumbers(1,2,3) 
//  addNumbers(10,10,10,10,10)


// let sum = (a:number) => a+10
// console.log(sum(10))


// let num:number = 5; 
// let i:number; 
// let factorial = 1; 

// for(i = num;i>=1;i--) {
//    factorial *= i;
// }
// console.log(factorial)


// function fun(id:number, name:string) {
//     this.id=id
//     this.name=name
// }

// let result = new fun (5, 'Pushpendra')

// fun.prototype.email='xyz@gmail.com'

// console.log(result.email);

// let str1 = new String( "This is string one" ); 
// let str2 = new String( "This is string two" ); 
// let str3 = str1.concat(str2.toString());
// console.log("str1 + str2 : "+str3)

// const str = "Apples are round, and apples are juicy."; 
// const splitted = str.split(" "); 
// console.log(splitted)

// let alphas:string[]; 
// alphas = ["1","2","3","4"] 
// console.log(alphas[0]); 
// console.log(alphas[1]);


// let alphas1:number[]; 
// alphas1 = [1,2,3,4] 
// console.log(alphas1[0]); 
// console.log(alphas1[1]);

// let sch:number[]=[1,3]

// let mytuple = [10,"Hello"]; //create a  tuple 
// console.log(mytuple[0]) 
// console.log(mytuple[1])

// let myTuple = [4, "hi"]
// myTuple.push(1)
// console.log(myTuple)


//  const [a, b] =[10,'hi']
//  console.log(a,b)


// const mytuple = [10,"Hello","World","typeScript"]; 
// console.log("Items before push "+mytuple.length)    // returns the tuple size 

// mytuple.push(12)                                    // append value to the tuple 
// console.log("Items after push "+mytuple.length) 
// console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
// console.log("Items after pop "+mytuple.length)

// +++union+++

// let student:number|string;
// student=12;
// console.log(student)
// student = 'hi'
// console.log(student);


// let stdIdAndName:number[]|string[]; 
// let i:number; 
// stdIdAndName = [1,2,4] 
// for(i = 0; i<stdIdAndName.length; i++) { 
//    console.log(stdIdAndName[i]) 
// }  
// stdIdAndName = ["Mumbai","Pune","Delhi"]  
// for(i = 0;i<stdIdAndName.length;i++) { 
//    console.log(stdIdAndName[i]) 
// } 


//++++ interface ++++++

//  interface Father {
//      firstName: string,
//      lastName:string,
//      sayHi: () => string
//  }
 

//  const son:Father = {
//      firstName: 'Tom',
//      lastName: 'Singh',
//      sayHi:() => 'Hello Father!'

//  }
  
//  console.log(son.firstName) 
//  console.log(son.lastName) 
//  console.log(son.sayHi())  


 
// interface RunOptions { 
//     program:string; 
//     commandline:string[]|string|(()=>string); 
//  } 
 
//  //commandline as string 
//  var options:RunOptions = {
//      program:"test1",
//      commandline:"Hello"
//     }; 
//  console.log(options.commandline)  
 
//  //commandline as a string array 
//  options = {
//     program:"test1",
//     commandline:["Hello","World"]
// }; 
//  console.log(options.commandline[0]); 
//  console.log(options.commandline[1]);  
 
//  //commandline as a function expression 
//  options = {
//     program:"test1",
//     commandline:()=>{
//         return "**Hello World**";
//      }
//     }; 
//  const fn:any =options.commandline; 
//  console.log(fn());


// interface namelist { 
//     [index:number]:string 
//  } 
//  var list2:namelist = ["John",'1',"Bran"]  

//  interface ages { 
//     [index:string]:number 
//  } 
 
//  var agelist:ages; 
//  agelist["John"] = 15   
//  agelist['Singh'] = 23 




// interface Person {
//     age:string
// }

// interface Tester extends Person {
//     designation:string
// }

// const display =<Tester> {}
// display.age='25'
// display.designation='Automation'

// console.log(display.age)



// interface Person {
//     age:string
// }

// interface Tester1  {
//     designation:string
// }

// interface Tester2 extends Person, Tester1 {
    
// }

// const display:Tester2 = {
//     age:'25',
//     designation: 'automation'
// }
// console.log(display.designation)



// ++ class ++++++


// class Person {
// }


// class Car { 
//     //field 
//     engine:string; 
  
//     //constructor 
//     constructor(engine:string) { 
//        this.engine = engine 
//     }  
 
//     //function 
//     disp():void { 
//        console.log("Engine is  :   "+this.engine) 
//     } 
//  }

//  //create an object 
// const obj = new Car("xyz")

// //access the field 
// console.log("Reading attribute value Engine as :  "+obj.engine)  

// //access the function
// obj.disp()



// class car {
//     engine: string
//  constructor(engineName:string){
//     this.engine=engineName

// }
// }

// class Model extends car {
//     display():void{
//         console.log(this.engine)
//     }
// }

// const modelNumber=new Model('xyzl');
// modelNumber.display();


// class PrinterClass { 
//     constructor() {

//     }
//     doPrint():void {
//        console.log("doPrint() from Parent called…") 
//     } 
//  } 
 
//  class StringPrinter extends PrinterClass { 
//      constructor() {
//          super()
//      }
//     doPrint():void { 
//        console.log("doPrint() is printing a string…")
//     } 
//  } 
//  var obj = new StringPrinter() 
//  obj.doPrint()



// class Men {  
//     static num:number; 
    
//     static disp():void { 
//        console.log("The value of num is:   "+ Men.num); 
//     } 
//  }
//  Men.num = 12;
//  Men.disp();   


// interface ILoan { 
//     // interest:number 
//  } 
 
//  class AgriLoan implements ILoan { 
//     interest:number 
//     rebate:number 
    
//     constructor(interest:number,rebate:number) { 
//        this.interest = interest 
//        this.rebate = rebate 
//     } 
//  } 
 
//  var obj = new AgriLoan(10,1) 
//  console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )




//======Object ==============


// const person ={
//     firstName:'xyz',
//     lastName:'singh',
//     age:2,
//     display:  function() { return `${this.firstName} ${this.lastName}`}
// }

// person.age=25
// console.log(person.age);
// console.log(person.display())




// let x: number = 0;
 
// class C {
//   x: string = "hello";
 
//   m() {
//     // This is trying to modify 'x' from line 1, not the class property
//     x = 19;
// // Type 'string' is not assignable to type 'number'.
//   }
// }
// console.log(x);


// interface Checkable {
//     check(name: string): boolean;
//   }
   
//   class NameChecker implements Checkable {
//     check(s) {
// //   Parameter 's' implicitly has an 'any' type.
//       // Notice no error here
//       return s.toLowerCase() === "ok";
                   
// //   any
//     }
//   }


// class Base {
//     greet() {
//       console.log("Hello, world!");
//     }
//   }
   
//   class Derived extends Base {
//     greet(name?: string) {
//       if (name === undefined) {
//         super.greet();
//       } else {
//         console.log(`Hello, ${name.toUpperCase()}`);
//       }
//     }
//   }
   
//   const d = new Derived();
//   d.greet();
//   d.greet("reader");
//   // Alias the derived instance through a base class reference
// const b: Base = d;
// // No problem
// b.greet();


// class Greeter {
//   public greet() {
//     console.log("Hello, " + this.getName());
//   }
//   protected getName() {
//     return "hi";
//   }
// }
 
// class SpecialGreeter extends Greeter {
//   public howdy() {
//     // OK to access protected member here
//     console.log("Howdy, " + this.getName());
//   }
// }
// const g = new SpecialGreeter();
// g.greet(); // OK
// // g.getName();

// class MySafe {
//   private secretKey = 12345;
// }
// // In a JavaScript file...
// const s = new MySafe();
// // Will print 12345
// console.log(s['secretKey']);



// class MyClass {
//   name = "MyClass";
//   getName = () => {
//     return this.name;
//   }
// }
// const c = new MyClass();
// const obj = {
//   name: "obj",
//   getName: c.getName,
// };
 
// // Prints "obj", not "MyClass"
// console.log(obj.getName());



// class MyClass {
//   name = "MyClass";
//   getName(this: MyClass) {
//     return this.name;
//   }
// }
// const c = new MyClass();
// // OK
// console.log(c.getName());
 
// // // Error, would crash
// const g = c.getName;
// console.log(g());

// interface IStringList {
//   nameP:string[]
// }

// let strArr : IStringList[] = [];
// strArr.push = "TypeScript";
// strArr["JS"] = "JavaScript";
// console.log(strArr)



enum E {
  X,
  Y,
  Z,
}
 
function f(obj: { Y: number }) {
  return obj.Y;
}
 
// Works, since 'E' has a property named 'X' which is a number.
console.log(f(E));