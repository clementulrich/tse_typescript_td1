# tse_typescript_td1


## Fonction de bases
### Class Car
- Class Car regroupant le model, la marque, la couleur, l'année de production, la vitesse et l'état de démarrage
- Constructeur initialisant les valeurs de chaque nouvelles instance de Car
- Fonctions Start et Stop permettant de changer l'état de démarrage et initialisant la vitesse à zéro
- Fonction Accelerate et Decelerate permettant de modifier la vitesse de l'instance
- Fonction Display affichant les informations de chaque instance

### Class Test
- Création d'une fonction de test créant des instance et testant les différentes fonctionnalités de la class Car
- Initialisation de plusieurs voitures aux paramètres différents et utilisant chacuns des méthodes de diverses manières
- Affichage de Display dans le shell mettant en action les méthodes fonctionnelles


## Ajouts personnels
### Class Car
- Ajout d'une énumération de couleurs pour faciliter le choix
- Ajout d'une classe abstraite permettant de gérer les paramètres et méthodes communs aux différents types de véhicules
- Création de 3 classes représentant les voitures, motos et camions

- Ajout des paramètres de vitesse max, capacité du réservoir, consommation du véhicule et remplissage du réservoir (communs à tous les véhicules)
- Ajout des initialisations de ces paramètres dans le Constructeur
- Ajout de "sécurités" dans les class Accelerate et Decelerate, donc impossibilité de dépasser la vitesse maximum et d'aller en dessous de zéro
- Méthode de vérification par un Booléen si la vitesse maximum du véhicule est atteinte (reachMaxSpeed)
- Méthode de calcul du carburant déjà consommé par la voiture (consumeFuel)
- Méthode de calcul de la distance parcourable par le véhicule avant de tomber en panne avec l'état de remplissage du réservoir actuel (remainingRange)

- Ajout d'une sélection du nombre de roues au sein des types Motorbike
- Ajout d'un poids de chargement pour le type Truck (chargement et déchargement)

### Class Test
- Modification des modèles de voitures pour des versions plus intéressantes (données relativement conformes aux données constructeur)
- Ajout de la méthode de calcul du carburant déjà consommé ainsi que de la distance pouvant être encore parcourue
- Affichage des données déjà existantes ainsi que de la vitesse maximum, de l'état du réservoir et le distance restant parcourable
- Personnalisation des éléments affichés pour chaque type de véhicule (Motorbike: nombre de roues, Truck: poids de chargement...)




-> Merci d'avoir examiné mon code !

----- Clément ULRICH -----