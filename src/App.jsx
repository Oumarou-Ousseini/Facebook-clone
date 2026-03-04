/**
 *  ARCHITECTURE DES COMPOSANTS :
 *  ├── <FacebookApp />         → Composant racine, orchestre tout
 *  ├── <Navbar />              → Barre de navigation fixée en haut
 *  ├── <SidebarGauche />       → Colonne gauche (profil + liens)
 *  ├── <FeedCentral />         → Colonne centrale (stories + posts)
 *  │   ├── <Stories />         → Section des stories horizontales
 *  │   ├── <CreerPost />       → Formulaire de création de post
 *  │   └── <Post />            → Carte d'une publication (avec useState)
 *  └── <SidebarDroite />       → Colonne droite (pub + contacts)
 *
 *  NOTIONS REACT ILLUSTRÉES :
 *  - Composants fonctionnels
 *  - Props (passage de données parent → enfant)
 *  - useState (bouton J'aime interactif, champ de saisie)
 *  - .map() pour afficher les listes de données
 *  - Rendu conditionnel avec l'opérateur ternaire
 */

import { useState } from "react";
import {
  Home, Video, Store, Users, Bell, MessageCircle, ChevronDown,
  Search, ThumbsUp, MessageSquare, Share2, Smile, ImagePlus,
  Radio, MoreHorizontal, X, Plus, UserCircle, Bookmark,
  Clock, Flag, ChevronRight, Tv, ShoppingBag, Gamepad2
} from "lucide-react";

import maPhoto from "./assets/ma-photo.jpg";
import aliAbbaPhoto from "./assets/ali-abba.jpg";
import montZokokPhoto from "./assets/mont-zokok.jpg";
import oumarouOussPhoto from "./assets/oumarou-ouss.jpg";

/**
 * MOCK DATA — Données fictives pour simuler des publications
 */
const mockPosts = [
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

/**
 * Données des stories
 */
const mockStories = [
  { id: 1, auteur: "Ali", couleur: "from-blue-500 to-blue-700", emoji: "🎓", avatar: "AA" },
  { id: 2, auteur: "Nouga A.", couleur: "from-pink-500 to-rose-600", emoji: "💻", avatar: "NA" },
  { id: 3, auteur: "Bounyamine", couleur: "from-green-500 to-emerald-600", emoji: "🌅", avatar: "BO" },
  { id: 4, auteur: "Fatima", couleur: "from-yellow-400 to-orange-500", emoji: "🍚", avatar: "FS" },
  { id: 5, auteur: "Onesime K.", couleur: "from-purple-500 to-violet-700", emoji: "⚽", avatar: "OK" },
];

/**
 * Données des contacts en ligne (sidebar droite)
 */
const mockContacts = [
  { id: 1, nom: "Ali Abba", avatar: "AA", couleur: "#1877F2" },
  { id: 2, nom: "Nouga Ange", avatar: "NA", couleur: "#E1306C" },
  { id: 3, nom: "Diyen Yem", avatar: "DY", couleur: "#8B5CF6" },
  { id: 4, nom: "Aïssatou Binta", avatar: "ÀB", couleur: "#F59E0B" },
  { id: 5, nom: "Oumarou Adji", avatar: "OA", couleur: "#10B981" },
  { id: 6, nom: "Clarisse Mbida", avatar: "CM", couleur: "#EF4444" },
];


/**
 * COMPOSANT : Navbar
 * Barre de navigation fixée en haut de la page.
 * Contient : logo, recherche, nav centrale, icônes droite.
 */
function Navbar({ pageActive, setPageActive }) {
  // Liste des liens de navigation centrale
  const navLinks = [
    { id: "accueil", icon: Home, label: "Accueil" },
    { id: "watch", icon: Tv, label: "Watch" },
    { id: "marketplace", icon: ShoppingBag, label: "Marketplace" },
    { id: "groupes", icon: Users, label: "Groupes" },
    { id: "jeux", icon: Gamepad2, label: "Jeux" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      style={{ height: "56px" }}
    >
      <div className="flex items-center justify-between h-full px-4 max-w-screen-xl mx-auto">

        {/* ── SECTION GAUCHE : Logo + Recherche ── */}
        <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
          {/* Logo Facebook (f bleu) */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
            style={{ backgroundColor: "#1877F2" }}
          >
            <span className="text-white font-bold text-2xl" style={{ fontFamily: "serif", lineHeight: 1 }}>
              f
            </span>
          </div>

          {/* Barre de recherche */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 gap-2 w-56">
            <Search size={16} className="text-gray-500 flex-shrink-0" />
            <input
              type="text"
              placeholder="Rechercher sur Facebook"
              className="bg-transparent text-sm outline-none text-gray-700 w-full placeholder-gray-500"
            />
          </div>
        </div>

        {/* ── SECTION CENTRALE : Liens de navigation ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((lien) => {
            const Icon = lien.icon;
            const estActif = pageActive === lien.id;
            return (
              <button
                key={lien.id}
                onClick={() => setPageActive(lien.id)}
                className={`
                  relative flex items-center justify-center w-24 h-12 rounded-lg transition-colors duration-150 group
                  ${estActif ? "border-b-2" : "hover:bg-gray-100"}
                `}
                style={{ borderColor: estActif ? "#1877F2" : "transparent" }}
                title={lien.label}
              >
                <Icon
                  size={24}
                  style={{ color: estActif ? "#1877F2" : "#65676B" }}
                />
                {/* Tooltip au survol */}
                <span className="absolute -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {lien.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── SECTION DROITE : Actions utilisateur ── */}
        <div className="flex items-center gap-2">
          {/* Menu complet */}
          <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
            <div className="grid grid-cols-3 gap-0.5 w-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-700 rounded-full" />
              ))}
            </div>
          </button>

          {/* Messagerie */}
          <button className="relative w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
            <MessageCircle size={20} className="text-gray-700" />
          </button>

          {/* Notifications */}
          <button className="relative w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
            <Bell size={20} className="text-gray-700" />
            {/* Badge notification */}
            <span
              className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-bold"
              style={{ backgroundColor: "#E41E3F" }}
            >
              3
            </span>
          </button>

          {/* Avatar profil */}
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ backgroundColor: "#1877F2" }}>
            OO
          </button>
        </div>
      </div>
    </nav>
  );
}

// ===========================================================

/**
 * COMPOSANT : SidebarGauche
 * Colonne de gauche avec les liens de navigation secondaires.
 * Props reçues : aucune (composant autonome)
 */
function SidebarGauche() {
  const liensSidebar = [
    { icon: UserCircle, label: "Oumarou Ousseini", subtitle: "Voir votre profil", highlight: true},
    { icon: Users, label: "Amis" },
    { icon: Tv, label: "Watch" },
    { icon: Bookmark, label: "Enregistrements" },
    { icon: Clock, label: "Souvenirs" },
    { icon: Flag, label: "Pages" },
    { icon: ShoppingBag, label: "Marketplace" },
    { icon: Gamepad2, label: "Jeux" },
  ];

  return (
    <aside className="hidden lg:flex flex-col gap-1 py-4 overflow-y-auto" style={{ height: "calc(100vh - 56px)" }}>
      {liensSidebar.map((lien, index) => {
        const Icon = lien.icon;
        return (
          <button
            key={index}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-left w-full group ${lien.highlight ? "mb-2" : ""}`}
          >
            {/* Icône ou avatar */}
            {lien.highlight ? (
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: "#1877F2" }}>
                OO
              </div>
            ) : (
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#E4E6EB" }}>
                <Icon size={20} style={{ color: "#1877F2" }} />
              </div>
            )}
            <div className="min-w-0">
              <p className={`text-sm font-semibold truncate ${lien.highlight ? "text-gray-900" : "text-gray-700"}`}>
                {lien.label}
              </p>
              {lien.subtitle && (
                <p className="text-xs text-gray-500 truncate">{lien.subtitle}</p>
              )}
            </div>
          </button>
        );
      })}

      {/* Bouton Voir plus */}
      <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-left w-full">
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
          <ChevronDown size={18} className="text-gray-700" />
        </div>
        <span className="text-sm font-semibold text-gray-700">Voir plus</span>
      </button>

      {/* Séparateur */}
      <hr className="my-2 border-gray-300" />

      {/* Section Raccourcis */}
      <p className="px-3 text-gray-500 font-semibold text-base">Vos raccourcis</p>
      <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-left">
        <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #1877F2, #42A5F5)" }}>
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-lg">🎓</span>
          </div>
        </div>
        <span className="text-sm font-semibold text-gray-700 truncate">ENSP Maroua Officiel</span>
      </button>
      <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-left">
        <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #10B981, #34D399)" }}>
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-lg">💻</span>
          </div>
        </div>
        <span className="text-sm font-semibold text-gray-700 truncate">Dev Cameroun</span>
      </button>

      {/* Footer discret */}
      <div className="mt-auto px-3 pt-4">
        <p className="text-xs text-gray-400 leading-relaxed">
          Confidentialité · Conditions · Publicités · Cookies
        </p>
        <p className="text-xs text-gray-400 mt-1">© 2026 Facebook Clone </p>
      </div>
    </aside>
  );
}

// ===========================================================

/**
 * COMPOSANT : Stories
 * Affiche les stories sous forme de cartes horizontales défilables.
 * Concept React illustré : .map() sur un tableau de données
 */
function Stories() {
  return (
    <div className="bg-white rounded-xl shadow p-3 mb-4">
      <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "thin" }}>

        {/* ── Carte "Créer une story" (spéciale) ── */}
        <div className="relative flex-shrink-0 w-28 h-48 rounded-xl overflow-hidden cursor-pointer group">
          {/* Image de fond simulée */}
          <div className="w-full h-36 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <img
              src={maPhoto}
              alt="votre photo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bouton + bleu */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-2
                          w-9 h-9 rounded-full border-4 border-white flex items-center justify-center z-10"
            style={{ backgroundColor: "#1877F2" }}>
            <Plus size={18} className="text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white px-2 py-2">
            <p className="text-xs font-semibold text-gray-800 text-center leading-tight">Créer une story</p>
          </div>
        </div>

        {/* ── Stories des amis — .map() sur mockStories ── */}
        {mockStories.map((story) => (
          <div
            key={story.id} // Clé unique obligatoire pour les listes React
            className="relative flex-shrink-0 w-28 h-48 rounded-xl overflow-hidden cursor-pointer group"
          >
            {/* Fond coloré de la story */}
            <div className={`w-full h-full bg-gradient-to-b ${story.couleur} flex items-center justify-center`}>
              <span className="text-5xl">{story.emoji}</span>
            </div>

            {/* Avatar en haut à gauche */}
            <div
              className="absolute top-2 left-2 w-9 h-9 rounded-full border-4 flex items-center justify-center text-white font-bold text-xs"
              style={{ backgroundColor: "#1877F2", borderColor: "#1877F2" }}
            >
              {story.avatar}
            </div>

            {/* Nom en bas */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2">
              <p className="text-white text-xs font-semibold truncate">{story.auteur}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===========================================================

/**
 * COMPOSANT : CreerPost
 * Zone de création d'une nouvelle publication.
 *
 * NOTION REACT : useState pour capturer la saisie utilisateur
 * - `textePost` : valeur actuelle du champ
 * - `setTextePost` : fonction pour mettre à jour la valeur
 */
function CreerPost() {
  // État local : texte en cours de saisie dans le champ
  const [textePost, setTextePost] = useState("");

  const handleSoumettre = () => {
    if (textePost.trim()) {
      // Dans un vrai projet : envoyer au backend via fetch/axios
      alert(`Post simulé : "${textePost}"\n\n(Dans un vrai projet, ce texte serait envoyé à l'API)`);
      setTextePost(""); // Réinitialiser le champ après soumission
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-3 mb-4">

      {/* ── Ligne supérieure : avatar + input ── */}
      <div className="flex items-center gap-2 mb-3">
        {/* Avatar de l'utilisateur connecté */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: "#1877F2" }}>
          OO
        </div>

        {/* Champ de saisie contrôlé (Controlled Input) */}
        <input
          type="text"
          value={textePost}    // Lié à l'état React (composant contrôlé)
          onChange={(e) => setTextePost(e.target.value)} // Met à jour l'état à chaque frappe
          placeholder="Que voulez-vous dire, Oumarou ?"
          className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700 outline-none cursor-pointer transition-colors placeholder-gray-500"
          onKeyDown={(e) => e.key === "Enter" && handleSoumettre()}
        />
      </div>

      {/* Séparateur */}
      <hr className="border-gray-200 mb-2" />

      {/* ── Boutons d'action ── */}
      <div className="flex justify-around">

        {/* Vidéo en direct */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-1 justify-center">
          <Radio size={20} className="text-red-500" />
          <span className="text-sm font-medium text-gray-600 hidden sm:block">Vidéo en direct</span>
        </button>

        {/* Photo / Vidéo */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-1 justify-center">
          <ImagePlus size={20} className="text-green-500" />
          <span className="text-sm font-medium text-gray-600 hidden sm:block">Photo/vidéo</span>
        </button>

        {/* Humeur / Activité */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-1 justify-center">
          <Smile size={20} className="text-yellow-500" />
          <span className="text-sm font-medium text-gray-600 hidden sm:block">Humeur</span>
        </button>
      </div>

      {/* Bouton Publier (visible uniquement si texte saisi) */}
      {textePost.trim() && (
        <div className="mt-2 flex justify-end">
          <button
            onClick={handleSoumettre}
            className="px-4 py-1.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1877F2" }}
          >
            Publier
          </button>
        </div>
      )}
    </div>
  );
}

// ===========================================================

/**
 * COMPOSANT : Post
 * Carte d'une publication individuelle.
 *
 * NOTION REACT :
 * - Props : reçoit les données du post depuis le parent (FeedCentral)
 * - useState : gère l'état "aimé" et le compteur de likes localement
 *
 * @param {Object} post - L'objet publication (auteur, texte, image, likes...)
 */
function Post({ post }) {
  // ── État local pour le bouton J'aime ──
  // `aime` : true si l'utilisateur a aimé ce post, false sinon
  const [aime, setAime] = useState(false);
  // `nombreLikes` : initialisé avec la valeur du mock, mis à jour au clic
  const [nombreLikes, setNombreLikes] = useState(post.likes);

  /**
   * Gestion du clic sur "J'aime"
   * - Inverse l'état `aime`
   * - Incrémente ou décrémente le compteur selon l'état
   */
  const gererClikJaime = () => {
    if (aime) {
      // L'utilisateur "dés-aime" → on retire 1
      setAime(false);
      setNombreLikes((prev) => prev - 1);
    } else {
      // L'utilisateur aime → on ajoute 1
      setAime(true);
      setNombreLikes((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow mb-4 overflow-hidden">

      {/* ── EN-TÊTE du post : avatar + nom + temps + options ── */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-2">
          {/* Avatar coloré avec initiales */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ backgroundColor: post.avatarColor }}
          >
            {post.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 hover:underline cursor-pointer">
              {post.auteur}
            </p>
            <p className="text-xs text-gray-500">{post.tempsPoste} · 🌐</p>
          </div>
        </div>

        {/* Boutons En-tête droite */}
        <div className="flex items-center gap-1">
          <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <MoreHorizontal size={20} className="text-gray-500" />
          </button>
          <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <X size={18} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* ── TEXTE de la publication ── */}
      <p className="px-4 pb-3 text-sm text-gray-800 leading-relaxed">{post.texte}</p>

      {/* ── IMAGE (rendu conditionnel : s'affiche uniquement si `post.image` existe) ── */}
      {post.image && (
        <div className="w-full overflow-hidden" style={{ maxHeight: "400px" }}>
          <img
            src={post.image}
            alt="image du post"
            className="w-full object-cover hover:opacity-95 transition-opacity cursor-pointer"
            style={{ maxHeight: "400px" }}
          />
        </div>
      )}

      {/* ── COMPTEURS : likes, commentaires, partages ── */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
        <div className="flex items-center gap-1">
          {/* Emojis de réactions */}
          <div className="flex">
            <span className="text-sm">👍</span>
            <span className="text-sm -ml-1">❤️</span>
            <span className="text-sm -ml-1">😆</span>
          </div>
          <span className="text-sm text-gray-500 hover:underline cursor-pointer ml-1">
            {/* Affichage du nombre avec mise à jour réactive */}
            {nombreLikes.toLocaleString("fr-FR")}
          </span>
        </div>
        <div className="flex gap-3">
          <span className="text-sm text-gray-500 hover:underline cursor-pointer">
            {post.commentaires} commentaires
          </span>
          <span className="text-sm text-gray-500 hover:underline cursor-pointer">
            {post.partages} partages
          </span>
        </div>
      </div>

      {/* ── BOUTONS D'ACTION : J'aime, Commenter, Partager ── */}
      <div className="flex px-2 py-1">

        {/* Bouton J'aime — INTERACTIF avec useState */}
        <button
          onClick={gererClikJaime}
          className={`
            flex items-center justify-center gap-1.5 flex-1 py-2 rounded-lg transition-all duration-150
            ${aime ? "text-blue-600 hover:bg-blue-50" : "text-gray-600 hover:bg-gray-100"}
          `}
        >
          <ThumbsUp
            size={20}
            // Remplissage bleu si aimé, contour gris sinon (rendu conditionnel)
            fill={aime ? "#1877F2" : "none"}
            stroke={aime ? "#1877F2" : "currentColor"}
            className="transition-transform duration-150 hover:scale-110"
          />
          <span className={`text-sm font-semibold ${aime ? "text-blue-600" : ""}`}>
            J'aime
          </span>
        </button>

        {/* Bouton Commenter */}
        <button className="flex items-center justify-center gap-1.5 flex-1 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
          <MessageSquare size={20} />
          <span className="text-sm font-semibold">Commenter</span>
        </button>

        {/* Bouton Partager */}
        <button className="flex items-center justify-center gap-1.5 flex-1 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
          <Share2 size={20} />
          <span className="text-sm font-semibold">Partager</span>
        </button>
      </div>
    </div>
  );
}

// ===========================================================

/**
 * COMPOSANT : FeedCentral
 * Colonne centrale scrollable : Stories + CreerPost + liste de Posts
 *
 * NOTION REACT : .map() pour afficher la liste des posts depuis mockPosts
 */
function FeedCentral() {
  return (
    <main className="overflow-y-auto py-4 px-2" style={{ height: "calc(100vh - 56px)" }}>

      {/* Section Stories */}
      <Stories />

      {/* Formulaire de création de post */}
      <CreerPost />

      {/* ── Liste des publications ──
          On parcourt le tableau mockPosts avec .map()
          Chaque objet `post` est passé en prop au composant <Post>
          La prop `key` est OBLIGATOIRE et doit être unique (ici : l'id du post) */}
      {mockPosts.map((post) => (
        <Post
          key={post.id}    // Clé unique pour l'algorithme de réconciliation de React
          post={post}      // On passe tout l'objet post en prop
        />
      ))}
    </main>
  );
}

// ===========================================================

/**
 * COMPOSANT : SidebarDroite
 * Colonne de droite : publicités sponsorisées + contacts en ligne
 */
function SidebarDroite() {
  return (
    <aside
      className="hidden xl:flex flex-col gap-4 py-4 overflow-y-auto"
      style={{ height: "calc(100vh - 56px)" }}
    >
      {/* ── Section Sponsorisé ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-700">Sponsorisé</h3>
          <button className="text-xs text-blue-600 hover:underline">Voir tout</button>
        </div>

        {/* Pub 1 */}
        <div className="flex gap-3 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-colors">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=100&q=60"
            alt="pub"
            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-sm text-gray-800 font-medium leading-tight">Formation ReactJS à Maroua</p>
            <p className="text-xs text-gray-500 mt-0.5">code-maroua.cm</p>
          </div>
        </div>

        {/* Pub 2 */}
        <div className="flex gap-3 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-colors">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&q=60"
            alt="pub"
            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-sm text-gray-800 font-medium leading-tight">Offres d'emploi Ingénieurs</p>
            <p className="text-xs text-gray-500 mt-0.5">jobs-cameroun.com</p>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <hr className="border-gray-300" />

      {/* ── Section Contacts / Amis en ligne ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-700">Contacts</h3>
          <div className="flex gap-1">
            <button className="w-7 h-7 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors">
              <Video size={14} className="text-gray-600" />
            </button>
            <button className="w-7 h-7 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors">
              <Search size={14} className="text-gray-600" />
            </button>
            <button className="w-7 h-7 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors">
              <MoreHorizontal size={14} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Liste des contacts — .map() sur mockContacts */}
        {mockContacts.map((contact) => (
          <button
            key={contact.id}
            className="flex items-center gap-3 w-full px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {/* Avatar avec indicateur de présence en ligne */}
            <div className="relative flex-shrink-0">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs"
                style={{ backgroundColor: contact.couleur }}
              >
                {contact.avatar}
              </div>
              {/* Point vert "en ligne" */}
              <div
                className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white"
                style={{ backgroundColor: "#31A24C" }}
              />
            </div>
            <span className="text-sm text-gray-800 font-medium truncate">{contact.nom}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

/**
 * COMPOSANT RACINE : FacebookApp
 * Orchestre toute l'application. C'est lui qui est rendu par main.jsx.
 * Il gère l'état global de la page active dans la navbar.
 */
function FacebookApp() {
  // État partagé entre Navbar (qui change la page) et le reste (pas encore utilisé)
  const [pageActive, setPageActive] = useState("accueil");

  return (
    // Fond gris clair caractéristique de Facebook
    <div className="min-h-screen" style={{ backgroundColor: "#F0F2F5", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── NAVBAR fixée en haut ── */}
      <Navbar pageActive={pageActive} setPageActive={setPageActive} />

      {/* ── LAYOUT PRINCIPAL : grille 3 colonnes ──
          pt-14 pour compenser la navbar fixe (56px = 3.5rem ≈ 14 unités Tailwind) */}
      <div
        className="max-w-screen-xl mx-auto pt-14 px-4 grid gap-4"
        style={{
          gridTemplateColumns: "minmax(0, 280px) minmax(0, 1fr) minmax(0, 360px)",
        }}
      >
        {/* Colonne 1 : Sidebar Gauche */}
        <SidebarGauche />

        {/* Colonne 2 : Feed Central (scrollable) */}
        <FeedCentral />

        {/* Colonne 3 : Sidebar Droite */}
        <SidebarDroite />
      </div>
    </div>
  );
}

// Export par défaut — utilisé par main.jsx : import App from './FacebookApp'
export default FacebookApp;
