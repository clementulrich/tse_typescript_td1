import { Car } from './car';

let c1: Car = new Car("Fiat", "Multipla", "Green", 1998, 150);

let c2: Car = new Car("AvotVAZ", "Lada", "Grey", 1970, 50);
c2.start();
c2.accelerate(50);

let c3: Car = new Car("Reliant", "Robin", "Red", 1973, 100);
c3.start();
c3.accelerate(100);
c3.decelerate(20);

let c4: Car = new Car("Aston Martin", "DB9", "Grey bull", 2005, 295);
c4.start();
c4.accelerate(25);
c4.decelerate(20);
c4.accelerate(40);

let cars: Car[] = [c1, c2, c3, c4];

for (let car of cars) {
    car.display();
}