import { useState } from "react";
import {
  EmailIcon,
  PhoneIcon,
  PinIcon,
  SocialIcons,
} from "../components/Icons";
import "../styles/Contact.css";

/* Contact Us — form (frontend only, no backend) + info card + social. */
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    // Frontend only — just show a confirmation.
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="contact-page section">
      <div className="container">
        <h1 className="section-title">تواصل معنا</h1>
        <p className="section-subtitle">تواصل معنا وشاركنا قصتك</p>

        <div className="contact-layout">
          {/* Share Story */}
          <div className="contact-form card contact-story">
            <h2>هل لديك حكاية مخفية؟</h2>

            <p>
              إذا كنت تعرف مكاناً أثرياً،
              <br />
              أو قصةً تراثية،
              <br />
              أو سراً يستحق أن يُروى...
            </p>

            <p>
              يسعدنا أن تشاركنا إياه عبر البريد الإلكتروني
              <br />
              أو من خلال صفحاتنا على مواقع التواصل الاجتماعي.
            </p>

            <a
              href="mailto:alhakayaalmakhfiya@gmail.com"
              className="btn contact-submit"
            >
              شاركنا حكايتك
            </a>
          </div>
          {/* info */}
          <div className="contact-info">
            <p className="contact-intro">
              نحن هنا للإجابة على استفساراتك، ونستقبل اقتراحاتك وقصصك.
            </p>
            <div className="info-row">
              <span className="info-ico">
                <EmailIcon />
              </span>
              <a href="mailto:alhakayaalmakhfiya@gmail.com">
                alhakayaalmakhfiya@gmail.com
              </a>
            </div>
            <div className="info-row">
              <span className="info-ico">
                <PhoneIcon />
              </span>
              <div className="phone-numbers">
                <a href="tel:+96181807295">+961 81 807 295</a>
                <br />
                <a href="tel:+9613867537">+961 3 867 537</a>
              </div>
            </div>
            <div className="info-row">
              <span className="info-ico">
                <PinIcon />
              </span>
              <span>بيروت، لبنان</span>
            </div>
            <SocialIcons className="contact-social" />
          </div>
        </div>
      </div>
    </div>
  );
}
