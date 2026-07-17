import { useNavigate } from "react-router-dom";
import "../styles/PlaceCard.css";

/* Reusable card for region landmarks.
   Badge appears only when place.isSecret is true.
   All cards first open the normal landmark page. */
export default function PlaceCard({ place, regionId }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/place/${place.id}`, { state: { regionId } });
  };

  return (
    <article className={`place-card card ${place.isSecret ? "secret" : ""}`}>
      <div className="place-card-img">
        <img src={place.image} alt={place.name} />

        {place.isSecret && <span className="secret-badge">✦ السر الأكبر</span>}
      </div>

      <div className="place-card-body">
        <h3>{place.name}</h3>
        <p>{place.short}</p>

        <button
          className="btn btn-outline place-card-btn"
          onClick={handleExplore}
        >
          استكشف
        </button>
      </div>
    </article>
  );
}
