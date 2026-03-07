/**
 * ============================================================
 *  src/data/mockData.js
 *  Toutes les données fictives de l'application centralisées
 *  Dans un vrai projet, elles viendraient d'une API backend
 * ============================================================
 */

import aliAbbaPhoto from "../assets/ali-abba.jpg";
import montZokokPhoto from "../assets/mont-zokok.jpg";
import oumarouOussPhoto from "../assets/oumarou-ouss.jpg";

// ── Publications ──────────────────────────────────────────────
export const mockPosts = [
  {
    id: 1,
    auteur: "Ali Abba",
    avatar: "AA",
    avatarColor: "#1877F2",
    tempsPoste: "Il y a 2 heures",
    texte: "Félicitations à tous les étudiants de la promotion 2024 de l'ENSP Maroua ! 🎓 Un bel avenir vous attend. La persévérance est la clé du succès, continuez à briller ! #ENSP #Ingénieurs #Cameroun",
    image: aliAbbaPhoto,
    likes: 142,
    commentaires: 38,
    partages: 12,
  },
  {
    id: 2,
    auteur: "Nouga Ange",
    avatar: "NA",
    avatarColor: "#E1306C",
    tempsPoste: "Il y a 5 heures",
    texte: "Superbe journée de coding avec mon équipe aujourd'hui ! On travaille sur notre projet de plateforme de gestion des ingénieurs. ReactJS c'est vraiment incroyable une fois qu'on maîtrise les composants et les hooks 💻🚀",
    image: null,
    likes: 87,
    commentaires: 21,
    partages: 5,
  },
  {
    id: 3,
    auteur: "Bounyamine Ousmanou",
    avatar: "BO",
    avatarColor: "#10B981",
    tempsPoste: "Hier à 18h30",
    texte: "Le mont zokok.... Notre région du Grand Nord est d'une beauté rare 🌅 #MarouaMaVille #CamerounBeautiful",
    image: montZokokPhoto,
    likes: 315,
    commentaires: 67,
    partages: 89,
  },
  {
    id: 4,
    auteur: "Fatima Sali Oumarou",
    avatar: "FS",
    avatarColor: "#F59E0B",
    tempsPoste: "Hier à 10h12",
    texte: "Recette du jour : Thiakry maison 🍚✨ Un dessert traditionnel du Nord-Cameroun que j'adore préparer le weekend. Qui veut la recette complète ? Dites-le moi en commentaire !",
    image: oumarouOussPhoto,
    likes: 204,
    commentaires: 93,
    partages: 34,
  },
];

// ── Stories ───────────────────────────────────────────────────
export const mockStories = [
  { id: 1, auteur: "Ali",        couleur: "from-blue-500 to-blue-700",     emoji: "🎓", avatar: "AA" },
  { id: 2, auteur: "Nouga A.",   couleur: "from-pink-500 to-rose-600",     emoji: "💻", avatar: "NA" },
  { id: 3, auteur: "Bounyamine", couleur: "from-green-500 to-emerald-600", emoji: "🌅", avatar: "BO" },
  { id: 4, auteur: "Fatima",     couleur: "from-yellow-400 to-orange-500", emoji: "🍚", avatar: "FS" },
  { id: 5, auteur: "Onesime K.", couleur: "from-purple-500 to-violet-700", emoji: "⚽", avatar: "OK" },
];

// ── Contacts en ligne (sidebar droite) ────────────────────────
export const mockContacts = [
  { id: 1, nom: "Ali Abba",       avatar: "AA", couleur: "#1877F2" },
  { id: 2, nom: "Nouga Ange",     avatar: "NA", couleur: "#E1306C" },
  { id: 3, nom: "Diyen Yem",      avatar: "DY", couleur: "#8B5CF6" },
  { id: 4, nom: "Aïssatou Binta", avatar: "ÀB", couleur: "#F59E0B" },
  { id: 5, nom: "Oumarou Adji",   avatar: "OA", couleur: "#10B981" },
  { id: 6, nom: "Clarisse Mbida", avatar: "CM", couleur: "#EF4444" },
];
