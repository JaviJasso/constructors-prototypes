//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, hungry, color, owner, status) {
  this.name = name
  this.hungry = true
  this.color = color
  this.owner = owner
  this.status = 'normal'
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog("sadie");
let moonshine = new Dog("moonshine");
let atticus = new Dog("atticus");

sadie.color = "black"

sadie.hungry = false
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name) {
  this.name = name
  this.cool = true
  this.pet = function(dog) {
    dog.status = 'happy'
  }
  this.feed = function(dog) {
    dog.hungry = false
  }
}

// Instances of Human
// Needed: mason, julia
let javi = new Human("javi");
let julia = new Human("juia")

javi.cool = false
