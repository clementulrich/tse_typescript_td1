import { Team, Pilote } from '../f1/team';
import { Circuit } from '../f1/circuit';
import { Race } from '../f1/race';
import { Season } from '../f1/season';
import { F1Car } from '../f1/f1car';
import { Color } from '../car';



// Création des pilotes
const hamilton = new Pilote("Lewis Hamilton", "UK", 38, 7);
const verstappen = new Pilote("Max Verstappen", "Netherlands", 27, 2);
const leclerc = new Pilote("Charles Leclerc", "Monaco", 26, 0);
const sainz = new Pilote("Carlos Sainz", "Spain", 28, 0);
const perez = new Pilote("Sergio Pérez", "Mexico", 33, 0);
const russell = new Pilote("George Russell", "UK", 26, 0);
const norris = new Pilote("Lando Norris", "UK", 25, 0);
const alonso = new Pilote("Fernando Alonso", "Spain", 44, 2);
const bottas = new Pilote("Valtteri Bottas", "Finland", 34, 0);
const magnussen = new Pilote("Kevin Magnussen", "Denmark", 31, 0);


// Affectation des équipes
const mercedes = new Team("Mercedes-AMG Petronas F1 Team", "Germany");
mercedes.addPilote(hamilton);
mercedes.addPilote(russell);

const redbull = new Team("Oracle Red Bull Racing", "Austria");
redbull.addPilote(verstappen);
redbull.addPilote(perez);

const ferrari = new Team("Scuderia Ferrari", "Italy");
ferrari.addPilote(leclerc);
ferrari.addPilote(sainz);

const mclaren = new Team("McLaren F1 Team", "UK");
mclaren.addPilote(norris);

const alpine = new Team("BWT Alpine F1 Team", "France");
alpine.addPilote(alonso);
alpine.addPilote(bottas);

const haas = new Team("Haas F1 Team", "USA");
haas.addPilote(magnussen);


// Création des voitures de F1
const car1 = new F1Car("W13", "Mercedes", Color.silver, 2023, 350, 110, 30, mercedes, hamilton),
      car2 = new F1Car("RB19", "Red Bull", Color.red, 2023, 355, 110, 29, redbull, verstappen),
      car3 = new F1Car("F1-75", "Ferrari", Color.red, 2023, 340, 110, 32, ferrari, leclerc),
      car4 = new F1Car("F1-75", "Ferrari", Color.red, 2023, 340, 110, 32, ferrari, sainz),
      car5 = new F1Car("MCL60", "McLaren", Color.orange, 2023, 335, 110, 31, mclaren, norris),
      car6 = new F1Car("A522", "Alpine", Color.blue, 2023, 330, 110, 33, alpine, alonso),
      car7 = new F1Car("A522", "Alpine", Color.blue, 2023, 330, 110, 33, alpine, bottas),
      car8 = new F1Car("VF23", "Haas", Color.white, 2023, 320, 110, 34, haas, magnussen);


// Création du circuit pour le GP d’Italie (Monza)
const monza = new Circuit("Grand Prix d’Italie", "Italie", 5.793, 11, 75.5, "dry");

// Création de la course sur Monza, date 7 septembre 2025
const raceItalianGP = new Race(
  "Italian GP 2025", 
  monza, 
  new Date(2025, 8, 7), 
  [car1, car2, car3, car4, car5, car6, car7, car8]  // Tous les participants
);

// Création de la saison 2025
const season2025 = new Season(2025);
season2025.addTeam(mercedes);
season2025.addTeam(redbull);
season2025.addTeam(ferrari);
season2025.addTeam(mclaren);
season2025.addTeam(alpine);
season2025.addTeam(haas);
season2025.addRace(raceItalianGP);


// Démarrage et affichage
raceItalianGP.startRace();

raceItalianGP.setResults([car2, car1, car3, car4, car5, car6, car7, car8]);

// Mise à jour des classements des pilotes selon résultats
season2025.updateStandings(verstappen.name, 25);
season2025.updateStandings(hamilton.name, 18);
season2025.updateStandings(leclerc.name, 15);
season2025.updateStandings(sainz.name, 12);
season2025.updateStandings(norris.name, 10);
season2025.updateStandings(alonso.name, 8);
season2025.updateStandings(bottas.name, 6);
season2025.updateStandings(magnussen.name, 4);


// Affichage de la saison
season2025.displaySeasonSummary();

season2025.displayGeneralStandings();