// Instructions : 

// Développer un module qui définit et exporte une classe Car avec :
// Les propriétés model, brand, color, year, speed et started
// Un constructeur permettant d'initialiser ces propriétés
// Des méthodes start, stop et accelerate

// Développer un module qui importe et utilise cette classe Car

export class Car {
    model: string;
    brand: string;
    color: string;
    year: number;
    speed: number;
    started: boolean;


    // We define a new car according to its model, brand, color and year (by default a car is stationary)
    constructor(model: string, brand: string, color: string, year: number) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = 0;
        this.started = false;
    }

    // The car is started yet the speed is still at 0
    start(): void {
        this.speed = 0;
        this.started = true;
    }

    // The car is stopped so the speed is set to 0
    stop(): void {
        this.speed = 0;
        this.started = false;
    }

    // The only parameter which is modified is the speed of the car
    accelerate(amount: number): void {
        if (this.started) {
            this.speed += amount;
        }
    }
}
