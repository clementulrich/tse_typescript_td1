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



// Classe abstraite Vehicle avec propriétés générales et liées au carburant
export abstract class Vehicle {
    model: string;
    brand: string;
    color: Color;
    year: number;
    speed: number;
    started: boolean;
    maxspeed: number;
    fuelConsumption: number;
    fuelTank: number;
    fuelLevel: number;

    // Constructeur de Vehicle
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

    // Démarrage du véhicule
    start(): void {
        this.speed = 0;
        this.started = true;
    }

    // Arrêt du véhicule
    stop(): void {
        this.speed = 0;
        this.started = false;
    }

    // Accélération
    accelerate(amount: number): void {
        if (this.started) {
            this.speed += amount;
            if (this.speed > this.maxspeed) {
                this.speed = this.maxspeed;
            }
        }
    }

    // Décélération
    decelerate(amount: number): void {
        if (this.started) {
            this.speed -= amount;
            if (this.speed < 0) {
                this.speed = 0;
            }
        }
    }

    // Vérifie si la vitesse max est atteinte
    reachMaxSpeed(): boolean {
        return this.speed === this.maxspeed;
    }

    // Consomme le carburant selon la distance parcourue
    consumeFuel(distanceKm: number): void {
        const fuelUsed = (this.fuelConsumption / 100) * distanceKm;
        this.fuelLevel = Math.max(this.fuelLevel - fuelUsed, 0);
    }

    // Calcule la distance restante avant la panne sèche
    remainingRange(): number {
        if (this.fuelConsumption === 0) return Infinity;
        return (this.fuelLevel / this.fuelConsumption) * 100;
    }

    // Méthode abstraite à définir dans chaque classe concrète
    abstract toString(): string;

    // Affiche les informations du véhicule
    public display(): void {
        console.log(this.toString());
    }
}



// Classe Car qui étend Vehicle
export class Car extends Vehicle {

    // Constructeur de Car qui délègue à Vehicle
    constructor(model: string, brand: string, color: Color, year: number, maxspeed: number, fuelTank: number, fuelConsumption: number) {
        super(model, brand, color, year, maxspeed, fuelTank, fuelConsumption);
    }

    // Représentation textuelle de l'état de la voiture
    toString(): string {
        const status = this.started ? "Started" : "Stopped";
        return  "\n" + this.model + " " + this.brand + " [" + this.year + "] {" + this.color + "} <" + status + " - " + this.speed + "km/h>" + " Max speed reached: " + this.reachMaxSpeed() + "\n" + "Fuel restant : " + this.fuelLevel.toFixed(2) + "L";
    }
}



// Classe Motorbike qui étent Vehicle
export class Motorbike extends Vehicle {
    nbWheels: number;

    // Constructeur de Motorbike qui délègue à Vehicle
    constructor(model: string, brand: string, color: Color, year: number, maxspeed: number, fuelTank: number, fuelConsumption: number, nbWheels: number) {
        super(model, brand, color, year, maxspeed, fuelTank, fuelConsumption);
        this.nbWheels = nbWheels;
    }

    // Représentation textuelle de l'état de la moto
    toString(): string {
        const status = this.started ? "Started" : "Stopped";
        return  "\n" + this.model + " " + this.brand + " [" + this.year + "] {" + this.color + "} <" + status + " - " + this.speed + "km/h> - Wheels: " + this.nbWheels + "\n" + "Fuel restant : " + this.fuelLevel.toFixed(2) + "L";
    }
}



// Classe Truck qui étent Vehicle
export class Truck extends Vehicle {
    loadCapacity: number;
    currentLoad: number = 0;

    // Constructeur de Truck qui délègue à Vehicle
    constructor(model: string, brand: string, color: Color, year: number, maxspeed: number, fuelTank: number, fuelConsumption: number, loadCapacity: number) {
        super(model, brand, color, year, maxspeed, fuelTank, fuelConsumption);
        console.log(`Truck created with fuelConsumption=${fuelConsumption}`);
        this.loadCapacity = loadCapacity;
    }

    // Méthode de chargement d'un camion
    loadCargo(weight: number): string {
        if (this.currentLoad + weight <= this.loadCapacity) {
            this.currentLoad += weight;
            return `Loaded ${weight} kg. Current load: ${this.currentLoad} kg.`;
        }
        return `Cannot load ${weight} kg. Exceeds capacity of ${this.loadCapacity} kg.`;
    }

    // Méthode de déchargement d'un camion
    unloadCargo(weight: number): string {
        if (weight <= this.currentLoad) {
            this.currentLoad -= weight;
            return `Unloaded ${weight} kg. Current load: ${this.currentLoad} kg.`;
        }
        return `Cannot unload ${weight} kg. Only ${this.currentLoad} kg loaded.`;
    }

    toString(): string {
        const status = this.started ? "Started" : "Stopped";
        const currentLoadTons = (this.currentLoad / 1000).toFixed(2);
        const loadCapacityTons = (this.loadCapacity / 1000).toFixed(2);
        return  "\n" + this.model + " " + this.brand + " [" + this.year + "] {" + this.color + "} <" + status + " - " + this.speed + "km/h> - Load: " + currentLoadTons + "t / " + loadCapacityTons + "t";
    }
}
