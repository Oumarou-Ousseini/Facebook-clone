/**
 * ============================================================
 *  src/components/SidebarGauche.jsx
 *  Colonne gauche : profil utilisateur + liens de navigation
 *
 *  Props reçues : aucune (composant autonome)
 * ============================================================
 */

import { Users, Bookmark, Clock, Flag, ChevronDown, Tv, ShoppingBag, Gamepad2, UserCircle } from "lucide-react";

function SidebarGauche() {

  const liensSidebar = [
    { icon: UserCircle, label: "Oumarou Ousseini", subtitle: "Voir votre profil", highlight: true },
    { icon: Users,      label: "Amis"           },
    { icon: Tv,         label: "Watch"          },
    { icon: Bookmark,   label: "Enregistrements"},
    { icon: Clock,      label: "Souvenirs"      },
    { icon: Flag,       label: "Pages"          },
    { icon: ShoppingBag,label: "Marketplace"    },
    { icon: Gamepad2,   label: "Jeux"           },
  ];

  return (
    <aside
      className="hidden lg:flex flex-col gap-1 py-4 overflow-y-auto"
      style={{ height: "calc(100vh - 56px)" }}
    >
      {/* Liste des liens */}
      {liensSidebar.map((lien, index) => {
        const Icon = lien.icon;
        return (
          <button
            key={index}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200
              transition-colors text-left w-full ${lien.highlight ? "mb-2" : ""}`}
          >
            {/* Avatar pour le profil, icône pour les autres */}
            {lien.highlight ? (
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: "#1877F2" }}
              >
                OO
              </div>
            ) : (
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#E4E6EB" }}
              >
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

      {/* Voir plus */}
      <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-left w-full">
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
          <ChevronDown size={18} className="text-gray-700" />
        </div>
        <span className="text-sm font-semibold text-gray-700">Voir plus</span>
      </button>

      <hr className="my-2 border-gray-300" />

      {/* Raccourcis */}
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

      {/* Footer */}
      <div className="mt-auto px-3 pt-4">
        <p className="text-xs text-gray-400 leading-relaxed">
          Confidentialité · Conditions · Publicités · Cookies
        </p>
        <p className="text-xs text-gray-400 mt-1">© 2026 Facebook Clone</p>
      </div>
    </aside>
  );
}

export default SidebarGauche;
