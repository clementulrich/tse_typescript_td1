// Instructions : 

// Développer un module qui définit et exporte une classe Car avec :
// Les propriétés model, brand, color, year, speed et started
// Un constructeur permettant d'initialiser ces propriétés
// Des méthodes start, stop et accelerate

// Développer un module qui importe et utilise cette classe Car

export enum Color {
    black = "Matt Black",
    red = "Electric Red",
    grey = "Grey Bull",
    white = "Arctic White",
    blue = "Deep Blue Pearl",
    green = "Forest Green Metallic",
    silver = "Liquid Silver",
    yellow = "Sunburst Yellow",
    orange = "Tangerine Glow",
    brown = "Earth Brown Matte",
    purple = "Royal Purple Lacquer",
    gold = "Sunset Gold Metallic"
}

export class Car {
    model: string;
    brand: string;
    color: Color;
    year: number;
    speed: number;
    started: boolean;
    maxspeed: number;
    fuelConsumption: number
    fuelTank: number
    fuelLevel: number

    // Constructeur de la "Car"
    constructor(model: string, brand: string, color: Color, year: number, maxspeed: number, fuelTank: number, fuelConsumption: number) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = 0;
        this.started = false;
        this.maxspeed = maxspeed;
        this.fuelTank = fuelTank;
        this.fuelConsumption = fuelConsumption;
        this.fuelLevel = fuelTank;
    }

    // Démarrage de la voiture
    start(): void {
        this.speed = 0;
        this.started = true;
    }

    // Arrêt de la voiture
    stop(): void {
        this.speed = 0;
        this.started = false;
    }

    // Méthode d'accélération  d'une voiture
    accelerate(amount: number): void {
    if (this.started) {
        this.speed += amount;
        if (this.speed > this.maxspeed) {
            this.speed = this.maxspeed;
            }
        }
    }

    // Méthode de décélération d'une voiture
    decelerate(amount: number): void {
    if (this.started) {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
            }
        }
    }

    // Détermine par la suite si la vitesse maximum de la voiture est atteinte
    reachMaxSpeed(): boolean {
    return this.speed === this.maxspeed;
    }

    consumeFuel(distanceKm: number): void {
        const fuelUsed = (this.fuelConsumption / 100) * distanceKm;
        this.fuelLevel = Math.max(this.fuelLevel - fuelUsed, 0);
    }

    // Calcul la distance restante d'une voiture avant de tomber en panne
    remainingRange(): number {
        if (this.fuelConsumption === 0) return Infinity;
        return (this.fuelLevel / this.fuelConsumption) * 100;
    }

    // Affiche les voitures avec leur marque, modèle, vitesse, état de démarrage etc
    public display(): void {
        console.log(this.toString());
    } 

    public toString(): string {
        const status = this.started ? "Started" : "Stopped";
        return  "\n" + this.model + " " + this.brand + " [" + this.year + "] {" + this.color + "} <" + status + " - " + this.speed + "km/h>" + " - Max speed reached: " + this.reachMaxSpeed();
    }
}

export class Motorbike {
    model: string;
    brand: string;
    color: Color;
    year: number;
    speed: number;
    started: boolean;
    maxspeed: number;
    fuelConsumption: number
    fuelTank: number
    fuelLevel: number
    nbWheels: number

    // Constructeur de la "Motorbike"
    constructor(model: string, brand: string, color: Color, year: number, maxspeed: number, fuelTank: number, fuelConsumption: number, nbWheels: number) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = 0;
        this.started = false;
        this.maxspeed = maxspeed;
        this.fuelTank = fuelTank;
        this.fuelConsumption = fuelConsumption;
        this.fuelLevel = fuelTank;
        this.nbWheels = nbWheels;
    }

    
}