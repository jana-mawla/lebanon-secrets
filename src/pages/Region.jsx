import { useParams, Link, Navigate } from "react-router-dom";
import { regionsData, placesData } from "../data/siteData";
import PlaceCard from "../components/PlaceCard";
import "../styles/Region.css";

/* Region page — full-page list of the 4 places for a region. */
export default function Region() {
  const { regionId } = useParams();
  const region = regionsData.find((r) => r.id === regionId);
  const places = placesData[regionId];

  if (!region) return <Navigate to="/discover" replace />;

  return (
    <div className="region-page section">
      <div className="container">
        {/* breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/discover">اكتشف السر</Link>
          <span>›</span>
          <span className="current">{region.name}</span>
        </nav>

        <h1 className="section-title">{region.name}</h1>
        <p className="section-subtitle">{region.subtitle}</p>

        <div className="region-grid">
          {places.map((p) => (
            <PlaceCard key={p.id} place={p} regionId={regionId} />
          ))}
        </div>
      </div>
    </div>
  );
}
