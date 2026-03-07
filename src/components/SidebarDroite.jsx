/**
 * ============================================================
 *  src/components/SidebarDroite.jsx
 *  Colonne droite : publicités sponsorisées + contacts en ligne
 *
 *  Props reçues : aucune
 * ============================================================
 */

import { Video, Search, MoreHorizontal } from "lucide-react";
import { mockContacts } from "../data/mockData";

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

      <hr className="border-gray-300" />

      {/* ── Section Contacts en ligne ── */}
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

        {/* Liste des contacts (.map() sur mockContacts importé) */}
        {mockContacts.map((contact) => (
          <button
            key={contact.id}
            className="flex items-center gap-3 w-full px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
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

export default SidebarDroite;
