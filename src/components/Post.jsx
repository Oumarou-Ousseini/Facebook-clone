/**
 * ============================================================
 *  src/components/Post.jsx
 *  Carte d'une publication individuelle
 *
 *  Notions React :
 *    - Props   : reçoit l'objet `post` depuis FeedCentral
 *    - useState : gère le bouton J'aime localement
 *
 *  @param {Object} post - objet publication (auteur, texte, image, likes...)
 * ============================================================
 */

import { useState } from "react";
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal, X } from "lucide-react";

function Post({ post }) {

  // État local : l'utilisateur a-t-il aimé ce post ?
  const [aime, setAime] = useState(false);
  // État local : compteur de likes (initialisé depuis les données du post)
  const [nombreLikes, setNombreLikes] = useState(post.likes);

  // Bascule J'aime + met à jour le compteur
  const gererClikJaime = () => {
    if (aime) {
      setAime(false);
      setNombreLikes((prev) => prev - 1);
    } else {
      setAime(true);
      setNombreLikes((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow mb-4 overflow-hidden">

      {/* ── En-tête : avatar + nom + temps + options ── */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-2">
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
        <div className="flex items-center gap-1">
          <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <MoreHorizontal size={20} className="text-gray-500" />
          </button>
          <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <X size={18} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* ── Texte de la publication ── */}
      <p className="px-4 pb-3 text-sm text-gray-800 leading-relaxed">{post.texte}</p>

      {/* ── Image (rendu conditionnel : s'affiche seulement si post.image existe) ── */}
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

      {/* ── Compteurs : likes, commentaires, partages ── */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
        <div className="flex items-center gap-1">
          <div className="flex">
            <span className="text-sm">👍</span>
            <span className="text-sm -ml-1">❤️</span>
            <span className="text-sm -ml-1">😆</span>
          </div>
          <span className="text-sm text-gray-500 hover:underline cursor-pointer ml-1">
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

      {/* ── Boutons J'aime / Commenter / Partager ── */}
      <div className="flex px-2 py-1">

        {/* J'aime — interactif avec useState */}
        <button
          onClick={gererClikJaime}
          className={`flex items-center justify-center gap-1.5 flex-1 py-2 rounded-lg transition-all duration-150
            ${aime ? "text-blue-600 hover:bg-blue-50" : "text-gray-600 hover:bg-gray-100"}`}
        >
          <ThumbsUp
            size={20}
            fill={aime ? "#1877F2" : "none"}
            stroke={aime ? "#1877F2" : "currentColor"}
            className="transition-transform duration-150 hover:scale-110"
          />
          <span className={`text-sm font-semibold ${aime ? "text-blue-600" : ""}`}>
            J'aime
          </span>
        </button>

        <button className="flex items-center justify-center gap-1.5 flex-1 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
          <MessageSquare size={20} />
          <span className="text-sm font-semibold">Commenter</span>
        </button>

        <button className="flex items-center justify-center gap-1.5 flex-1 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
          <Share2 size={20} />
          <span className="text-sm font-semibold">Partager</span>
        </button>
      </div>

    </div>
  );
}

export default Post;
