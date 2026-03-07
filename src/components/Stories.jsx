/**
 * ============================================================
 *  src/components/Stories.jsx
 *  Carrousel horizontal des stories
 *
 *  Notion React : .map() pour afficher une liste de données
 *  Props reçues : aucune (utilise mockStories depuis data/)
 * ============================================================
 */

import { Plus } from "lucide-react";
import { mockStories } from "../data/mockData";
import maPhoto from "../assets/ma-photo.jpg";

function Stories() {
  return (
    <div className="bg-white rounded-xl shadow p-3 mb-4">
      <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "thin" }}>

        {/* ── Carte spéciale "Créer une story" ── */}
        <div className="relative flex-shrink-0 w-28 h-48 rounded-xl overflow-hidden cursor-pointer group">
          <div className="w-full h-36 bg-gradient-to-br from-gray-100 to-gray-200">
            <img src={maPhoto} alt="votre photo" className="w-full h-full object-cover" />
          </div>
          {/* Bouton + bleu */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-2
              w-9 h-9 rounded-full border-4 border-white flex items-center justify-center z-10"
            style={{ backgroundColor: "#1877F2" }}
          >
            <Plus size={18} className="text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white px-2 py-2">
            <p className="text-xs font-semibold text-gray-800 text-center leading-tight">
              Créer une story
            </p>
          </div>
        </div>

        {/* ── Stories des amis (.map() sur mockStories importé) ── */}
        {mockStories.map((story) => (
          <div
            key={story.id}
            className="relative flex-shrink-0 w-28 h-48 rounded-xl overflow-hidden cursor-pointer group"
          >
            {/* Fond coloré */}
            <div className={`w-full h-full bg-gradient-to-b ${story.couleur} flex items-center justify-center`}>
              <span className="text-5xl">{story.emoji}</span>
            </div>
            {/* Avatar en haut */}
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

export default Stories;
