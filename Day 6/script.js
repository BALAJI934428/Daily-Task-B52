
//1)
console.log('1)Flim class \n')

class film{
    constructor(title,studio,rating){
      this.title = title
      this.studio = studio
      if (rating==null){
        this.rating= 'PG'
      }
      else{
        this.rating='PG'+rating
      }
    }
    movieinfo(){
      console.log(`Movie Name: ${this.title}\nStudio: ${this.studio}\nRating: ${this.rating}`)
    } }

  let CasinoRoyale = new film('Casino Royale','Eon Productions',13)
  CasinoRoyale.movieinfo()
  
  //to check casinoroyale is instanceof film
console.log(`Is Casinoroyale is instanceof film: ${CasinoRoyale instanceof film}`)




//2)

console.log('\n\n\n\n\n2) Circle class\n' )

var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return "Radius: " + this.radius + " Color: " + this.color;
    };
    Circle.prototype.getArea = function () {
        return (2 * (Math.PI) * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * this.radius);
    };
    return Circle;
  }());
  var c1 = new Circle();
  console.log("Constructor with no params: " + c1.toString());
  var c2 = new Circle(3.5);
  console.log("Constructor with one param: " + c2.toString());
  var c3 = new Circle(2.2, 'Yellow');
  console.log("getRadius: " + c3.getRadius());
  c3.setRadius(3.3);
  console.log("Radius value after setRadius: " + c3.getRadius());
  console.log("getColor: " + c3.getColor());
  c3.setColor("Blue");
  console.log("Color Value after setColor: " + c3.getColor());
  console.log(c3.toString());
  console.log("Area: " + c3.getArea());
  console.log("Circumference: " + c3.getCircumference());




//3) Write a “person” class to hold all the details.

console.log('\n\n\n\n\n3) Write a “person” class to hold all the details.\n')

class person{
    constructor(name,age,city,email,phnum){
    this.name = name
    this.age = age
    this.city = city
    this.email = email
    this.phnum = phnum
  }
  personinfo(){
    console.log(`Name: ${this.name}\nAge: ${this.age}\nCity: ${this.city}\nEmail: ${this.email}\nPhone Number: ${this.phnum}`)}}
  
  let person1= new person('Balaji',21,'Tirupattur','massbalaji000@gmail.com',9344285363)
  
  person1.personinfo();






  //4) Write a class to calculate the uber price.

  console.log('\n\n\n\n\n4) Write a class to calculate the uber price.\n')

let baseFee = 17
let cities = ["Chennai", "Vellore", "Villupuram", ]
let distance = [5, 10, 15]
let customerName = "Balaji"
let customerCity = "Villupuram"

console.log("Hello", customerName+'!')
console.log("welcome to the Uber Price calculator")

function getRate(customerCity) {
  function distances(customerCity, index) {
    let finalRate = (distance[index]) * baseFee
    return finalRate
  }
 
  console.log('Current location to '+ customerCity, "rate is:", distances(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)


