import { Race } from './race';
import { Team } from './team';

export class Season {
    public races: Race[] = [];
    public teams: Team[] = [];
    public generalStandings: { [key: string]: number } = {};

    constructor(public year: number) {}

    addRace(race: Race): void {
        this.races.push(race);
    }

    addTeam(team: Team): void {
        this.teams.push(team);
    }

    updateStandings(piloteName: string, points: number): void {
        if (!this.generalStandings[piloteName]) {
            this.generalStandings[piloteName] = 0;
        }
        this.generalStandings[piloteName] += points;
    }

    displaySeasonSummary(): void {
        console.log(`----- Saison ${this.year} - Courses prévues : ${this.races.length} -----`);
        this.races.forEach(race => 
            console.log(`${race.name} sur ${race.circuit.name} le ${race.date.toLocaleDateString('fr-FR')}`)
        );
        console.log('');
    }


    displayGeneralStandings(): void {
        console.log(`Classement général :`);
        for (const pilote in this.generalStandings) {
            if (this.generalStandings.hasOwnProperty(pilote)) {
                console.log(`Pilote ${pilote} : ${this.generalStandings[pilote]} points`);
            }
        }
    }
}
