import { useNavigate } from "react-router-dom";
import { PinIcon } from "../components/Icons";
import "../styles/Discover.css";

export default function Discover() {
  const navigate = useNavigate();

  const goToRegion = (regionId) => {
    navigate(`/region/${regionId}`);
  };

  return (
    <div className="discover section">
      <div className="container">
        <h1 className="section-title">اكتشف السر</h1>
        <p className="section-subtitle">اختر المحافظة التي تريد استكشافها</p>

        <div className="discover-map-only">
          <div className="map-wrap">
            <div className="map-image-box">
              <img
                src="/images/lebanon-map.png"
                alt="خريطة لبنان"
                className="lebanon-map-img"
              />

              <button
                className="map-hotspot mount-lebanon"
                onClick={() => goToRegion("mount-lebanon")}
                aria-label="جبل لبنان"
              >
                <span className="hotspot-pin" />
                <span>جبل لبنان</span>
              </button>

              <button
                className="map-hotspot beirut"
                onClick={() => goToRegion("beirut")}
                aria-label="بيروت"
              >
                <span className="hotspot-pin" />
                <span>بيروت</span>
              </button>

              <button
                className="map-hotspot baalbek-hermel"
                onClick={() => goToRegion("baalbek-hermel")}
                aria-label="بعلبك الهرمل"
              >
                <span className="hotspot-pin" />
                <span>بعلبك الهرمل</span>
              </button>

              <button
                className="map-hotspot south"
                onClick={() => goToRegion("south")}
                aria-label="الجنوب"
              >
                <span className="hotspot-pin" />
                <span>الجنوب</span>
              </button>
            </div>

            <p className="map-hint">
              <PinIcon size={16} /> كل محافظة تحمل أسراراً تنتظر من يكتشفها...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
