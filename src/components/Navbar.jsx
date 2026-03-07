/**
 * ============================================================
 *  src/components/Navbar.jsx
 *  Barre de navigation fixée en haut de la page
 *
 *  Props reçues :
 *    - pageActive    : string  → quel onglet est actif
 *    - setPageActive : function → change l'onglet actif
 * ============================================================
 */

import { Home, Bell, MessageCircle, Search, Tv, ShoppingBag, Gamepad2, Users } from "lucide-react";

function Navbar({ pageActive, setPageActive }) {

  const navLinks = [
    { id: "accueil",     icon: Home,      label: "Accueil"      },
    { id: "watch",       icon: Tv,        label: "Watch"        },
    { id: "marketplace", icon: ShoppingBag, label: "Marketplace"},
    { id: "groupes",     icon: Users,     label: "Groupes"      },
    { id: "jeux",        icon: Gamepad2,  label: "Jeux"         },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      style={{ height: "56px" }}
    >
      <div className="flex items-center justify-between h-full px-4 max-w-screen-xl mx-auto">

        {/* ── GAUCHE : Logo + Barre de recherche ── */}
        <div className="flex items-center gap-2 min-w-0 flex-shrink-0">

          {/* Logo Facebook */}
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

        {/* ── CENTRE : Liens de navigation ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((lien) => {
            const Icon = lien.icon;
            const estActif = pageActive === lien.id;
            return (
              <button
                key={lien.id}
                onClick={() => setPageActive(lien.id)}
                className={`relative flex items-center justify-center w-24 h-12 rounded-lg
                  transition-colors duration-150 group
                  ${estActif ? "border-b-2" : "hover:bg-gray-100"}`}
                style={{ borderColor: estActif ? "#1877F2" : "transparent" }}
                title={lien.label}
              >
                <Icon size={24} style={{ color: estActif ? "#1877F2" : "#65676B" }} />
                {/* Tooltip */}
                <span className="absolute -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded
                  opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {lien.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── DROITE : Actions utilisateur ── */}
        <div className="flex items-center gap-2">

          {/* Menu grille 3×3 */}
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

          {/* Notifications avec badge */}
          <button className="relative w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
            <Bell size={20} className="text-gray-700" />
            <span
              className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-bold"
              style={{ backgroundColor: "#E41E3F" }}
            >
              3
            </span>
          </button>

          {/* Avatar utilisateur */}
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ backgroundColor: "#1877F2" }}
          >
            OO
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
