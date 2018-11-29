//  Strings
//1.1  Add the string to your file and log it.
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

// 1.2  Log the length of myString.
console.log(myString.length);

// 1.3   The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
// 1.4   Log myString to see if you succeeded.
console.log(myString.replace(/,/g , " "));



// Arrays!
//2.1  Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals [3] = "turtle";

// 2.2   Log your new array!
console.log(favoriteAnimals);

// 2.3  Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.

favoriteAnimals.splice(1, 0, 'meerkat');

// 2.4  Write a console.log statement that explains in words you think the new value of the array is.
console.log(" I think the new value of the array is ['blowfish', 'meerkat','capricorn', 'giraffe', 'turtle']")

// 2.5   Log your new array!
console.log(favoriteAnimals);
 
// 2.6  Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
console.log("'The array has a length of: " + favoriteAnimals.length);

// 2.7  Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(3,1);

// 2.8  Again log your new array.
console.log(favoriteAnimals);

// 2.9  Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
let a = favoriteAnimals.indexOf("meerkat"); 
console.log("The item you are looking for is at index: " + a);





//More JavaScript

// 1.  Create a function that takes 3 arguments and returns the sum of the these arguments.

function sum3(value1,value2,value3){
  let sumValue = value1 + value2+ value3 ;
  console.log(sumValue);
}
sum3(3546,7898,96233);

//2.  Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(){
    let color = prompt("give a color : ");
    console.log("a " + color + " car");
}
// colorCar();


// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

let car = {type:"Fiat", model:"500", color:"white"};
function printPropertiesAndValues(){
  console.log(Object.values(car));
  console.log(Object.keys(car));
}
printPropertiesAndValues(car);


// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(code,color){  
  
if(code==1){
    console.log ("a " + color + " car");
}else if (code==2){
    console.log ("a " + color + " motorbike") ; 
}else {
    console.log ("the code must be 1 or 2");
}
}
// vehicleType(4," black ");



//5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

console.log("3" == 3);
console.log("3" === 3);



//6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color,code,age){  
  
  if(code==1 && age <= 2){
      console.log ("a new " + color + " car");
  }else if ( code==1 && age > 2){
              console.log ("a " + color + " used car");
  }else if (code==2 && age<=2){
      console.log ("a new " + color + " motorbike") ; 
  }else if ( code==2 && age > 2) {
      console.log("a " + color + " used motorbike")
  }else {
    console.log ("the code must be 1 or 2");
  }
  }
  // vehicle("blue",1,5);



  //7.  Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
  let vehicles = ["motorbike","caravan","bike"];
  console.log(vehicles);



  // 8.   How do you get the third element from that list?
  console.log(vehicles[2]);


  //9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicle(color,code,age){  
  
  if(code==1 && age <= 2){
      console.log ("a new " + color + " car");
  }else if ( code==1 && age > 2){
              console.log ("a " + color + " used car");
  }else if (code==2 && age<=2){
      console.log ("a new " + color + " motorbike") ; 
  }else if ( code==2 && age > 2) {
      console.log("a " + color + " used motorbike")
  }else if (code==3 && age<=2){
    console.log ("a new " + color + " bike") ; 
}else if ( code==3 && age > 2) {
    console.log("a " + color + " used bike")
}  else {
    console.log ("the code must be 1 or 2");
  }
  }
//   vehicle("green", 3, 1);

  
  
  
  
  //10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
let listOfCars = ["cars", "motorbikes", "caravans" ,"bikes"];
let myMessage ="";
for ( let i=0 ; i< listOfCars.length ; i++) {
   myMessage += listOfCars[i];
   if (i< listOfCars.length - 2){
       myMessage += ", ";
   }else if (i < listOfCars.length -1){
       myMessage += " and ";
   }
   
}
console.log(myMessage);
console.log( "Amazing Joe's Garage, we service " + myMessage + ".")
  //11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?


  //12. Create an empty object.
  let myObject = {};
  console.log(myObject);

  // 13. Create an object that contains the teachers that you have had so far for the different modules.
 let modules = { teachers : ["Ahmed","Kostas","Zohir"]};
 console.log(modules);
   

 // 14. Add a property to the object you just created that contains the languages that they have taught you.
 modules.languages = ["html","css","javascript1"];
 console.log(modules);

 //15. Write some code to test two arrays for equality using == and ===. Test the following:
        


let x = [1,2,3];
let y = [1,2,3];
let z = y;

console.log(x == y);
console.log(x === y);

console.log(x == z);
console.log(x === z);

console.log(y == z);
console.log(y === z);

 //16. Take a look at the following code:
 
 
 //17. What does the following code return? (And why?)
 let bar = 42;
console.log(typeof typeof bar);
// it returns a string. That because we have this situation typeof(typeof 42) where  typeof 42 = number  and afterward the typeof(number) is string.
