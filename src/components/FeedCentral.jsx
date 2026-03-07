/**
 * ============================================================
 *  src/components/FeedCentral.jsx
 *  Colonne centrale scrollable : Stories + CreerPost + Posts
 *
 *  Notion React : .map() pour afficher la liste des publications
 *  Props reçues : aucune
 * ============================================================
 */

import Stories    from "./Stories";
import CreerPost  from "./CreerPost";
import Post       from "./Post";
import { mockPosts } from "../data/mockData";

function FeedCentral() {
  return (
    <main
      className="overflow-y-auto py-4 px-2"
      style={{ height: "calc(100vh - 56px)" }}
    >
      {/* Carrousel de stories */}
      <Stories />

      {/* Zone de création de post */}
      <CreerPost />

      {/* Liste des publications
          .map() parcourt mockPosts et crée un <Post> pour chaque objet
          key={post.id} est OBLIGATOIRE et doit être unique */}
      {mockPosts.map((post) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </main>
  );
}

export default FeedCentral;
