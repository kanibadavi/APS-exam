// todo:
//1.create a class called 'Vehicle' with properties for (company, model, and year). Include a method to display vehicle details and logs each property to the console.
//2.create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
//3.create instance of Vehicle and Display vehicle details
//4.create instance of Car and Display car details

class Vehicle {
company ;
model ;
year ;

}


class Car extends Vehicle {
    numberOfDoors ;
}

// Create an instance of the Vehicle class ("Ford", "F-150", 2020)
this.Vehicle = {
    company : "Ford",
model : "F-150",
year : "2020"
}

// Display vehicle details
console.log("Vehicle Details:" + Vehicle);

// Create an instance of the Car class ("Honda", "Accord", 2023, 4)

this.Car = {
    company : "Honda",
model : "Accord",
year : "2023",
    numberOfDoors : "4"
}

// Display car details
console.log("\nCar Details:" + Car);
