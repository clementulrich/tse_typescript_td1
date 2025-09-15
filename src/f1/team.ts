export class Pilote {
    constructor(
        public name: string,
        public nationality: string,
        public age?: number,
        public championships?: number
    ) {}
}


export class Team {
    public pilotes: Pilote[] = [];
    public points: number = 0;

    constructor(public name: string, public baseCountry: string) {}

    addPilote(pilote: Pilote): void {
        this.pilotes.push(pilote);
    }

    
    updatePoints(points: number): void {
        this.points += points;
    }

    getTeamInfo(): string {
        return `${this.name} (${this.baseCountry}) - Pilotes: ${this.pilotes.map(p => p.name).join(", ")}`;
    }
}
