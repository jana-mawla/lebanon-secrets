import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { heroImages } from "../data/siteData";
import { PlayIcon, PinIcon } from "../components/Icons";
import "../styles/Home.css";

/* Home — cinematic hero with auto-rotating background carousel,
   CTA button, video preview card, and a poetic line. */
export default function Home() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };
  // Auto-advance hero background every 5s
  useEffect(() => {
    const t = setInterval(
      () => setSlide((s) => (s + 1) % heroImages.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="home">
      {/* ---------- HERO ---------- */}
      <section className="hero">
        {/* rotating background layers */}
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`hero-bg ${i === slide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-overlay" />

        <div className="hero-content fade-up">
          <h1 className="hero-title">
            لبنان...
            <br />
            <span>أرض الأسرار والحكايات</span>
          </h1>
          {/* ---------- VIDEO PREVIEW CARD ---------- */}
          <div className={`video-card ${videoPlaying ? "playing" : ""}`}>
            <video
              ref={videoRef}
              src="/videos/final_home_video.mp4"
              poster="/images/video-previewpic.jpeg"
              className="home-video"
              controls={videoPlaying}
              onPause={() => setVideoPlaying(false)}
              onEnded={() => setVideoPlaying(false)}
            >
              المتصفح لا يدعم تشغيل الفيديو.
            </video>

            {!videoPlaying && (
              <>
                <button
                  className="play-btn"
                  aria-label="تشغيل الفيديو"
                  onClick={handleVideoPlay}
                >
                  <PlayIcon size={34} />
                </button>

                <div className="video-info">
                  <h3>لبنان... رحلة لا تنتهي</h3>
                  <p>شاهد الفيديو</p>
                </div>
              </>
            )}
          </div>

          <p className="hero-subtitle">
            ليست كل الحكايات تُروى… وبعض الأسرار لا تُكشف إلا لمن يبحث عنها.
            اختر وجهتك… واتبع أثر الحكاية
          </p>
          <button
            className="btn hero-btn"
            onClick={() => navigate("/discover")}
          >
            <PinIcon size={18} /> اكتشف السر{" "}
          </button>
        </div>
      </section>

      {/* ---------- POETIC LINE ---------- */}
      <div className="ornament">تحت كل حجر... حكاية</div>
    </div>
  );
}
