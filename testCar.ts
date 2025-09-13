import { Car } from './car';

const distances = [10, 50, 200, 600];

let c1: Car = new Car("Fiat", "Multipla", "Lime Green", 1998, 170, 63, 7.7);
let c2: Car = new Car("Lancia", "Delta I", "Electric red", 1989, 220, 57, 7.9);
let c3: Car = new Car("Caterham", "Super", "Matt Black", 1999, 196, 36, 7.2);
let c4: Car = new Car("Aston Martin", "DB9", "Grey bull", 2005, 300, 85, 12.2);

c2.start();
c2.accelerate(220);

c3.start();
c3.accelerate(100);
c3.decelerate(20);

c4.start();
c4.accelerate(280);
c4.decelerate(20);
c4.accelerate(40);

let cars: Car[] = [c1, c2, c3, c4];

cars.forEach((car, index) => {
    car.consumeFuel(distances[index]);

    car.display();

    console.log(`Km restant avant la panne : ${car.remainingRange().toFixed(2)} km`);
    console.log(`Remaining fuel: ${car.fuelLevel.toFixed(2)} L\n`);
});
