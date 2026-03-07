/**
 * ============================================================
 *  src/components/CreerPost.jsx
 *  Zone de création d'une nouvelle publication
 *
 *  Notion React : useState pour le champ contrôlé (Controlled Input)
 *  Props reçues : aucune (état géré localement)
 * ============================================================
 */

import { useState } from "react";
import { Radio, ImagePlus, Smile } from "lucide-react";

function CreerPost() {

  // useState : texte saisi dans le champ
  // textePost    → valeur actuelle
  // setTextePost → fonction pour la modifier
  const [textePost, setTextePost] = useState("");

  const handleSoumettre = () => {
    if (textePost.trim()) {
      alert(`Post simulé : "${textePost}"\n\n(Dans un vrai projet, ce texte serait envoyé à l'API)`);
      setTextePost(""); // Vider le champ après envoi
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-3 mb-4">

      {/* Avatar + Input */}
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: "#1877F2" }}
        >
          OO
        </div>

        {/* Champ contrôlé : value lié au state, onChange met à jour le state */}
        <input
          type="text"
          value={textePost}
          onChange={(e) => setTextePost(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSoumettre()}
          placeholder="Que voulez-vous dire, Oumarou ?"
          className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2.5 text-sm
            text-gray-700 outline-none cursor-pointer transition-colors placeholder-gray-500"
        />
      </div>

      <hr className="border-gray-200 mb-2" />

      {/* Boutons d'action */}
      <div className="flex justify-around">
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-1 justify-center">
          <Radio size={20} className="text-red-500" />
          <span className="text-sm font-medium text-gray-600 hidden sm:block">Vidéo en direct</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-1 justify-center">
          <ImagePlus size={20} className="text-green-500" />
          <span className="text-sm font-medium text-gray-600 hidden sm:block">Photo/vidéo</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-1 justify-center">
          <Smile size={20} className="text-yellow-500" />
          <span className="text-sm font-medium text-gray-600 hidden sm:block">Humeur</span>
        </button>
      </div>

      {/* Bouton Publier — rendu conditionnel : visible seulement si texte non vide */}
      {textePost.trim() && (
        <div className="mt-2 flex justify-end">
          <button
            onClick={handleSoumettre}
            className="px-4 py-1.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#1877F2" }}
          >
            Publier
          </button>
        </div>
      )}

    </div>
  );
}

export default CreerPost;
