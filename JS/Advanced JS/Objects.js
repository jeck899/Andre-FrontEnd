//reference Type
 let box1 = {value:10};
 let box2 = box1;
 let box3 = {value:10};
 // box 1 == box 2 != box3 -- different box / container / reference

 // context
// this - selects the current environment of your selected object
// this.alert  === window.alert(console.log(this)) -- what is on the left of the dot (windows.alert("hello")) 
function b(){
    console.log(this) //prints window, since window contains a()
}

const object1={
    a:function(){
    console.log(this); //prints object1
}};

// Class
class Player {
    constructor(name,type) {
        console.log('player',this); // prints Wizard - if created through wizard class
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}
// Inheritance -- inherits all properties and methods of parent class
class Wizard extends Player {
 constructor(name,type){
     super(name,type)
     console.log('wizard',this); //prints whole Wizard(with properties) class

 }
    play(){
        console.log(`I am a ${this.type}`);
    }
}
// Instantiation - new says new object/instance
const wizard1 = new Wizard('Lei','Healer');
const wizard1 = new Wizard('Jake','High Wizard');

