import { useState, useEffect, useMemo } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { placeDetailsData, placesData, regionsData } from "../data/siteData";
import { FiMapPin, FiCalendar } from "react-icons/fi";

import { GiTempleGate } from "react-icons/gi";
import "../styles/Place.css";

export default function Place() {
  const { placeId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const regionId = location.state?.regionId;
  const region = regionsData.find((r) => r.id === regionId);

  const baseplace = useMemo(() => {
    for (const list of Object.values(placesData)) {
      const found = list.find((p) => p.id === placeId);
      if (found) return found;
    }
    return null;
  }, [placeId]);

  const details = placeDetailsData[placeId];

  const place = details || {
    name: baseplace?.name || "معلم",
    image: baseplace?.image || "/images/logo.png",
    description: baseplace?.description || "وصف المكان سيظهر هنا.",
    secret: baseplace?.secret || "",
    secretMode: baseplace?.secretMode || "dropdown",
    secretId: baseplace?.secretId || placeId,
    gallery: baseplace?.gallery?.length
      ? baseplace.gallery
      : [baseplace?.image || "/images/logo.png"],
  };
  const desc = place.description;
  const isStructured = desc && typeof desc === "object" && !Array.isArray(desc);
  const [active, setActive] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const isSecretPage = place.secretMode === "page";

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % place.gallery.length);
    }, 3500);

    return () => clearInterval(t);
  }, [place.gallery.length]);

  const handleSecretClick = () => {
    if (isSecretPage) {
      navigate(`/secret/${place.secretId}`, { state: { regionId } });
      return;
    }

    setShowSecret((prev) => !prev);
  };

  return (
    <div className="place-page section">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/discover">اكتشف السر</Link>
          <span>›</span>

          {regionId && (
            <>
              <Link to={`/region/${regionId}`}>
                {region?.name || "المحافظة"}
              </Link>
              <span>›</span>
            </>
          )}

          <span className="current">{place.name}</span>
        </nav>

        <div className="place-layout">
          <div className="place-main-img">
            <img src={place.gallery[active]} alt={place.name} />
          </div>

          <div className="place-detail">
            <h1>{place.name}</h1>

            <p className="place-short">{place.short}</p>

            <div className="place-desc">
              {/* SIMPLE DESCRIPTION fallback */}
              {!isStructured &&
                (Array.isArray(place.description) ? (
                  place.description.map((p, i) => <p key={i}>{p}</p>)
                ) : (
                  <p>{place.description}</p>
                ))}

              {/* STRUCTURED UI (NEW DESIGN) */}
              {isStructured && (
                <div className="place-info">
                  {/* Location */}
                  <div className="info-card">
                    <div className="info-icon">
                      <FiMapPin />
                    </div>

                    <div className="info-content">
                      <span className="info-title">الموقع</span>
                      <p>{desc.location}</p>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="info-card">
                    <div className="info-icon">
                      <FiCalendar />
                    </div>

                    <div className="info-content">
                      <span className="info-title">العمر</span>
                      <p>{desc.age}</p>
                    </div>
                  </div>

                  {/* Origin */}
                  <div className="info-card origin-card">
                    <div className="info-icon">
                      <GiTempleGate />
                    </div>

                    <div className="info-content">
                      <span className="info-title">النشأة</span>

                      <p>{desc.originShort}</p>

                      <details className="origin-details">
                        <summary>عرض المزيد</summary>

                        <ul>
                          {desc.originFull?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button className="btn secret-cta" onClick={handleSecretClick}>
              {isSecretPage
                ? "✦ اكتشف السر"
                : showSecret
                  ? "إخفاء السر"
                  : "✦ اكتشف السر"}
            </button>

            {showSecret && !isSecretPage && (
              <div className="secret-dropdown fade-up">
                <p>{place.secret}</p>
              </div>
            )}
          </div>
        </div>

        <div className="gallery-thumbs">
          {place.gallery.map((img, i) => (
            <button
              key={i}
              className={`thumb ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <img src={img} alt={`${place.name} ${i + 1}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
