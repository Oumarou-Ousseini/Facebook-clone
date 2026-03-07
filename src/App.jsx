/**
 * ============================================================
 *  src/App.jsx  —  Composant racine (FacebookApp)
 *
 *  Ce fichier orchestre toute l'application.
 *  Il importe et assemble les composants depuis src/components/
 *
 *  ARCHITECTURE :
 *  ├── <Navbar />         → src/components/Navbar.jsx
 *  ├── <SidebarGauche />  → src/components/SidebarGauche.jsx
 *  ├── <FeedCentral />    → src/components/FeedCentral.jsx
 *  │   ├── <Stories />    → src/components/Stories.jsx
 *  │   ├── <CreerPost />  → src/components/CreerPost.jsx
 *  │   └── <Post />       → src/components/Post.jsx
 *  └── <SidebarDroite />  → src/components/SidebarDroite.jsx
 *
 *  DONNÉES :
 *  └── mockPosts, mockStories, mockContacts → src/data/mockData.js
 * ============================================================
 */

import { useState } from "react";

// ── Import des composants depuis src/components/ ──────────────
import Navbar         from "./components/Navbar";
import SidebarGauche  from "./components/SidebarGauche";
import FeedCentral    from "./components/FeedCentral";
import SidebarDroite  from "./components/SidebarDroite";

// ── Composant racine ──────────────────────────────────────────
function FacebookApp() {

  // État partagé : page active dans la navbar
  // Passé en props à <Navbar> pour savoir quel onglet colorier en bleu
  const [pageActive, setPageActive] = useState("accueil");

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F0F2F5", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* Navbar fixée en haut — reçoit pageActive et setPageActive en props */}
      <Navbar pageActive={pageActive} setPageActive={setPageActive} />

      {/* Layout 3 colonnes
          pt-14 compense la navbar fixe (56px) */}
      <div
        className="max-w-screen-xl mx-auto pt-14 px-4 grid gap-4"
        style={{
          gridTemplateColumns: "minmax(0, 280px) minmax(0, 1fr) minmax(0, 360px)",
        }}
      >
        <SidebarGauche />
        <FeedCentral />
        <SidebarDroite />
      </div>
    </div>
  );
}

export default FacebookApp;
