// Базова функція
function CoffeeMake() {}

CoffeeMake.prototype.on = function() {
    console.log("The coffee maker is on");
};

CoffeeMake.prototype.off = function() {
    console.log("The coffee maker is off");
};

// Капельна кавоварка
function DripCoffeeMaker() {
    CoffeeMake.call(this); 
}

DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
DripCoffeeMaker.prototype.constructor = DripCoffeeMaker;

DripCoffeeMaker.prototype.brew = function() {
    console.log("Brewing drip coffee");
};

// Ріжкова кавоварка
function EspressoMachine() {
    CoffeeMake.call(this); 
}

EspressoMachine.prototype = Object.create(CoffeeMake.prototype);
EspressoMachine.prototype.constructor = EspressoMachine;

EspressoMachine.prototype.brew = function() {
    console.log("Brewing espresso");
};

// Каво-машина
function CoffeeMachine() {
    CoffeeMake.call(this);
}

CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;

CoffeeMachine.prototype.brew = function() {
    console.log("Brewing coffee");
};


const drip = new DripCoffeeMaker();
drip.on();
drip.brew();
drip.off();

const espresso = new EspressoMachine();
espresso.on();
espresso.brew();
espresso.off();

const coffeeMachine = new CoffeeMachine();
coffeeMachine.on();
coffeeMachine.brew();
coffeeMachine.off();
