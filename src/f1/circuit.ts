export class Circuit {
    constructor(
        public name: string,
        public country: string,
        public trackLengthKm: number,
        public numberOfTurns: number,
        public recordLapTimeSec?: number,
        public weather?: 'dry' | 'wet' | 'mixed'
    ) {}

    updateWeather(newWeather: 'dry' | 'wet' | 'mixed'): void {
        this.weather = newWeather;
    }

    getCircuitInfo(): string {
        return `${this.name} - ${this.country} - ${this.trackLengthKm} km, ${this.numberOfTurns} virages, météo: ${this.weather ?? 'inconnue'}`;
    }
}
