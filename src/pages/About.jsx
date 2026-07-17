import { aboutCards } from "../data/siteData";
import "../styles/About.css";

/* About Us — intro paragraph + cedar image + 3 value cards. */
import { BookOpen, KeyRound, Sparkles } from "lucide-react";
const cardIcon = {
  book: <BookOpen size={30} />,
  key: <KeyRound size={30} />,
  sparkles: <Sparkles size={30} />,
};
export default function About() {
  return (
    <div className="about-page section">
      <div className="container">
        <div className="about-top">
          <div className="about-text">
            <h1 className="section-title" style={{ textAlign: "right" }}>
              من نحن
            </h1>
            <p className="about-intro">
              لأن لكل مكان حكاية، ولكل أثر سرًّا ينتظر من يكتشفه، صممنا
              <strong> الحكايا المخفية </strong>
              ليكون نافذتكم إلى تاريخ لبنان الخفي، حيث تمتزج المعرفة بالاستكشاف
              في تجربة رقمية تفاعلية.
            </p>
          </div>
          <div className="about-img">
            <img src="/images/aboutus.jpeg" alt="about us" />
          </div>
        </div>

        <div className="about-cards">
          {aboutCards.map((c, i) => (
            <div className="about-card card" key={i}>
              <span className="about-card-icon">{cardIcon[c.icon]}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <div className="why-project card">
          <div className="why-icon">
            <BookOpen size={34} />
          </div>

          <div className="why-content">
            <h2>لماذا هذا المشروع؟</h2>

            <p>
              في عالم مليء بالمعلومات السريعة، أردنا أن نجمع تاريخ لبنان وأسراره
              في مكانٍ واحد، بطريقة حديثة وسهلة، ليكتشفها الجميع ويعيشوا تجربة
              مختلفة مع كل موقع.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
