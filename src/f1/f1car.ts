import { Car, Color } from '../car';
import { Team, Pilote } from './team';

export class F1Car extends Car {
    team: Team;
    pilote: Pilote;
    tyreType: 'slick' | 'intermediate' | 'wet';
    drsActive: boolean;

    constructor(
        model: string,
        brand: string,
        color: Color,
        year: number,
        maxspeed: number,
        fuelTank: number,
        fuelConsumption: number,
        team: Team,
        pilote: Pilote,
        tyreType: 'slick' | 'intermediate' | 'wet' = 'slick'
    ) {
        super(model, brand, color, year, maxspeed, fuelTank, fuelConsumption);
        this.team = team;
        this.pilote = pilote;
        this.tyreType = tyreType;
        this.drsActive = false;
    }

    // Activation du DRS (réduction de la trainée)
    toggleDRS(active: boolean): void {
        this.drsActive = active;
    }

    calculateLapTime(trackLengthKm: number, weather: 'dry' | 'wet' | 'mixed' = 'dry'): number {
        let baseTime = trackLengthKm / (this.speed > 0 ? this.speed : this.maxspeed) * 3600;

        if (this.tyreType === 'wet') baseTime *= 1.15;
        else if (this.tyreType === 'intermediate') baseTime *= 1.07;

        if (weather === 'wet') baseTime *= 1.10;
        else if (weather === 'mixed') baseTime *= 1.05;

        if (this.drsActive) baseTime *= 0.97;

        return baseTime;
    }

    toString(): string {
        const status = this.started ? "Started" : "Stopped";
        return `${this.model} ${this.brand} (${this.pilote.name}) [${this.year}] <${status} - ${this.speed} km/h> - Team: ${this.team.name} - Tyres: ${this.tyreType} - DRS: ${this.drsActive ? 'ON' : 'OFF'}`;
    }
}
