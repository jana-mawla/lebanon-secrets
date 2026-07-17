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
          <p className="hero-subtitle">
            رحلة عبر الزمن لاكتشاف أسرار لبنان الخفية؛ من المعابد والقلاع إلى
            المغارات والوديان، حيث يروي كل مكان حكاية، ويخفي كل أثر سرًا لم
            يُكشف بعد.
          </p>
          <button
            className="btn hero-btn"
            onClick={() => navigate("/discover")}
          >
            <PinIcon size={18} /> ابدأ الاكتشاف
          </button>
        </div>

        {/* carousel dots */}
        <div className="hero-dots">
          {heroImages.map((_, i) => (
            <button
              key={i}
              className={i === slide ? "active" : ""}
              onClick={() => setSlide(i)}
              aria-label={`صورة ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ---------- VIDEO PREVIEW CARD ---------- */}
      <section className="container">
        <div className={`video-card card ${videoPlaying ? "playing" : ""}`}>
          <video
            ref={videoRef}
            src="/videos/home-video.mp4"
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
      </section>
      {/* ---------- POETIC LINE ---------- */}
      <div className="ornament">تحت كل حجر... حكاية</div>
    </div>
  );
}
