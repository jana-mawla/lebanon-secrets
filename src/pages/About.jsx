import { aboutCards } from "../data/siteData";
import { useState } from "react";
import "../styles/About.css";

/* About Us — intro paragraph + cedar image + 3 value cards. */
import { BookOpen, KeyRound, Sparkles } from "lucide-react";
const cardIcon = {
  book: <BookOpen size={30} />,
  key: <KeyRound size={30} />,
  sparkles: <Sparkles size={30} />,
};
const aboutDetails = {
  حكايتنا: {
    title: "حكايتنا",
    text: "بدأت فكرة مشروعنا من شغفنا بلبنان وتاريخه الغني. لاحظنا أن الكثير من الأماكن والقصص التراثية بقيت مجهولة أو نُسيت مع مرور الوقت، لذلك أنشأنا هذا الموقع ليكون مساحة تجمع هذه الكنوز في مكان واحد، وتعرّف الزوار على جمال لبنان بطريقة حديثة وممتعة.",
  },

  رسالتنا: {
    title: "رسالتنا",
    text: "نسعى إلى إحياء التراث اللبناني من خلال توثيق الأماكن التاريخية والقصص والأسرار المرتبطة بها، وتقديمها بأسلوب بسيط وجذاب يشجّع الجميع على استكشافها والحفاظ عليها للأجيال القادمة.",
  },

  غايتنا: {
    title: "غايتنا",
    text: "أن يصبح موقعنا مرجعًا رقميًا لكل من يرغب في اكتشاف لبنان بطريقة مختلفة، من خلال إبراز هويته الثقافية والتاريخية، وتعزيز الوعي بأهمية المحافظة على إرثه الغني وتشجيع السياحة الداخلية.",
  },
};
export default function About() {
  const [selectedCard, setSelectedCard] = useState(null);
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
            <img src="/images/aboutus2.jpeg" alt="about us" />
          </div>
        </div>

        <div className="about-cards">
          {aboutCards.map((c, i) => (
            <div
              className="about-card card"
              key={i}
              onClick={() => setSelectedCard(aboutDetails[c.title])}
            >
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
        {selectedCard && (
          <div
            className="about-modal-overlay"
            onClick={() => setSelectedCard(null)}
          >
            <div className="about-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="about-modal-close"
                onClick={() => setSelectedCard(null)}
              >
                ✕
              </button>

              <div className="about-modal-icon">
                {
                  cardIcon[
                    selectedCard.title === "حكايتنا"
                      ? "book"
                      : selectedCard.title === "رسالتنا"
                        ? "key"
                        : "sparkles"
                  ]
                }
              </div>

              <h2>{selectedCard.title}</h2>

              <p>{selectedCard.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
