# 📘 Clone Facebook Newsfeed

> Projet d'apprentissage ReactJS réalisé dans le cadre du projet ALUMNI de l'**École Nationale Supérieure Polytechnique de Maroua**.  
> Ce clone reproduit l'interface du fil d'actualité de Facebook (version desktop 3 colonnes) et constitue un exercice pratique préparatoire au développement de la plateforme ALUMNI.


## Stack technique

| Technologie      | Version| Rôle                                       |
|---               |---     |---                                         |
| **React**        | 18+    | Bibliothèque UI principale                 |
| **Vite**         | 5+     | Outil de build et serveur de développement |
| **TailwindCSS**  | 3.x    | Framework CSS utilitaire                   |
| **lucide-react** | 0.263+ | Bibliothèque d'icônes SVG                  |
| **JavaScript**   | ES2022 | Langage de programmation                   |
| **Node.js**      | 18+    | Environnement d'exécution                  |


## Installation et lancement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm (inclus avec Node.js)
- Visual Studio Code (recommandé)

### 1. Cloner le projet
```bash
git clone https://github.com/Oumarou-Ousseini/facebook-clone.git
cd facebook-clone
```

### 2. Installer les dépendances
```bash
npm install
npm install lucide-react
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```

L'interface sera accessible sur **http://localhost:5173**


## Architecture des composants

```
<FacebookApp />              ← Composant racine (gère pageActive)
├── <Navbar />               ← Barre fixée en haut
├── <SidebarGauche />        ← Colonne gauche (profil + liens)
├── <FeedCentral />          ← Colonne centrale scrollable
│   ├── <CreerPost />        ← Zone "Quoi de neuf ?"
│   ├── <Stories />          ← Carrousel de stories horizontal
│   └── <Post />  × 4       ← Carte de publication (useState J'aime)
└── <SidebarDroite />        ← Colonne droite (pub + contacts)
```

### Structure des fichiers
```
facebook-clone/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/              
│   │   ├── ma-photo.jpg
│   │   └── ali-abba.jpg
│   ├── App.jsx              ← Fichier principal (tous les composants)
│   ├── index.css            ← Directives TailwindCSS
│   └── main.jsx             ← Point d'entrée React
├── tailwind.config.js
├── vite.config.js
├── index.html
└── package.json
```


