import { useParams, Link, useLocation } from "react-router-dom";
import { secretsData } from "../data/siteData";
import "../styles/Secret.css";

export default function Secret() {
  const { placeId } = useParams();
  const location = useLocation();
  const regionId = location.state?.regionId || "baalbek-hermel";

  const secret = secretsData[placeId] || {
    title: "السر الأكبر",
    video: "",
    poster: "",
  };

  return (
    <div className="secret-page">
      <div className="secret-stars" />

      <div className="container secret-inner">
        <div className="secret-header">
          <h1 className="secret-title">{secret.title}</h1>

          <div className="secret-door mini-door">
            <div className="door-frame">
              <div className="keyhole">
                <div className="keyhole-glow" />
              </div>
            </div>
          </div>
        </div>

        <div className="secret-video-wrap">
          <div className="secret-video-card">
            {secret.video ? (
              <video
                src={secret.video}
                poster={secret.poster}
                controls
                className="secret-video"
              >
                المتصفح لا يدعم تشغيل الفيديو.
              </video>
            ) : (
              <div className="secret-video-placeholder">
                لم يتم إضافة الفيديو بعد
              </div>
            )}
          </div>
        </div>

        <div className="secret-actions">
          <Link
            to={`/place/${placeId}`}
            state={{ regionId }}
            className="btn secret-back"
          >
            الرجوع
          </Link>

          <Link to="/discover" className="btn btn-outline secret-back outline">
            العودة إلى الخريطة
          </Link>
        </div>
      </div>
    </div>
  );
}
