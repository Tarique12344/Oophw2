let dog = {
    name: "George",
    numLegs: 4
  };

  let Dog = {
    name: "Spot",
    numLegs: 4
  };

  console.log(dog.name);
  console.log(dog.numLegs)


  let cat= {
    name: "Whiskers",
    numLegs: 4,
    sayLegs: function() {
      return "This cat has " + cat.numLegs + " legs.";
    }
  };
  
  cat.sayLegs();


  let Bird = {
    name: "Twitty",
    numLegs: 2,
    sayLegs: function() {
      return "This Bird has " + this.numLegs + " legs.";
    }
  };
  
  Bird.sayLegs();

  function Frog() {
    (this.name = "George"), (this.color = "Black"), (this.numLegs = 4);
  }

  function Frog() {
    this.name = "George";
    this.color = "Black";
    this.numLegs = 4;
  }

  let toad = new Frog();

  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }

  let hound = new Dog();

  
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse = new House(5);
  myHouse instanceof House;

  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }

  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  let beagle = new Dog("Snoopy");