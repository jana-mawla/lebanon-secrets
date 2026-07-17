import { useState } from "react";
import { forgottenItemsData } from "../data/siteData";
import { CloseIcon } from "../components/Icons";
import "../styles/Forgotten.css";

/* منسيات — elegant masonry gallery. Clicking a card opens an
   animated modal with larger image + Arabic story text. */
export default function Forgotten() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="forgotten-page section">
      <div className="container">
        <h1 className="section-title">منسيات</h1>
        <p className="section-subtitle">
          حكايات من الناس، أماكن، وتجارب لا تُنسى
        </p>

        {/* masonry grid */}
        <div className="masonry">
          {forgottenItemsData.map((item) => (
            <article
              key={item.id}
              className="masonry-card"
              onClick={() => setSelected(item)}
            >
              <div className="masonry-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="masonry-body">
                <h3>{item.title}</h3>
                <span>{item.subtitle}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ---------- MODAL ---------- */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <CloseIcon size={22} />
            </button>
            <div className="modal-img">
              <img src={selected.image} alt={selected.title} />
            </div>
            <div className="modal-body">
              <h2>{selected.title}</h2>
              <span className="modal-sub">{selected.subtitle}</span>
              <p>{selected.body}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
