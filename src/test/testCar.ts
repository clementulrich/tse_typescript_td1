import { Color, Vehicle, Car, Motorbike, Truck } from '../car';

// Distances parcourues pour chaque véhicule (impact consommation carburant)
const distances = [10, 50, 200, 600, 120, 30, 75, 250, 1025];

// Initialisation des paramètres de tous les véhicules
let c1: Car = new Car("Fiat", "Multipla", Color.gold, 1998, 170, 63, 7.7);
let c2: Car = new Car("Lancia", "Delta I", Color.red, 1989, 220, 57, 7.9);
let c3: Car = new Car("Caterham", "Super", Color.black, 1999, 196, 36, 7.2);
let c4: Car = new Car("Aston Martin", "DB9", Color.grey, 2005, 300, 85, 12.2);

let m1: Motorbike = new Motorbike("Yamaha", "MT-09", Color.silver, 2020, 220, 14, 5.5, 2);
let m2: Motorbike = new Motorbike("BMW", "S 1000 RR", Color.yellow, 2008, 303, 16.5, 6.4, 2);
let m3: Motorbike = new Motorbike("CAN-AM", "Outlander 1000R", Color.brown, 2025, 100, 20, 8, 3);

let t1: Truck = new Truck("Volvo", "FH16", Color.silver, 2015, 140, 500, 30, 40000);
let t2: Truck = new Truck("Scania", "R500", Color.white, 2019, 160, 600, 28, 35000);


// Initialisation des vitesses et des chargement de chacun des véhicules
c2.start();
c2.accelerate(220);

c3.start();
c3.accelerate(100);
c3.decelerate(20);

c4.start();
c4.accelerate(280);
c4.decelerate(20);
c4.accelerate(40);

m1.start();
m1.accelerate(180);

m3.start();
m3.accelerate(90);

t1.start();
t1.accelerate(90);
t1.loadCargo(20000);

t2.start();
t2.accelerate(80);
t2.loadCargo(15000);


let vehicles: Vehicle[] = [c1, c2, c3, c4, m1, m2, m3, t1, t2];

// Boucle d'affichage
vehicles.forEach((vehicle, index) => {
    vehicle.consumeFuel(distances[index]);
    vehicle.display();

    const range = vehicle.remainingRange();
    console.log(`Km restant avant la panne : ${range.toFixed(2)} km`);
    
    console.log('');
});
