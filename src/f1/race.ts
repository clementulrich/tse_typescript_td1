import { F1Car } from './f1car';
import { Circuit } from './circuit';

// Représente une course dans la saison
export class Race {
    public classement: F1Car[] = [];

    constructor(
        public name: string,
        public circuit: Circuit,
        public date: Date,
        public participants: F1Car[]
    ) {}

    startRace(): void {
        console.log(`La course ${this.name} démarre sur le circuit ${this.circuit.name} !\n`);
    }

    setResults(results: F1Car[]): void {
        this.classement = results;
    }

    getRaceInfo(): string {
        return `${this.name} sur ${this.circuit.name} le ${this.date.toLocaleDateString()}`;
    }
}
