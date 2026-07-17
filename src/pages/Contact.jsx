import { useState } from "react";
import { EmailIcon, PhoneIcon, PinIcon, SocialIcons } from "../components/Icons";
import "../styles/Contact.css";

/* Contact Us — form (frontend only, no backend) + info card + social. */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
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
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">تواصل معنا وشاركنا قصتك</p>

        <div className="contact-layout">
          {/* form */}
          <div className="contact-form card">
            <input
              type="text" name="name" placeholder="الاسم الكامل"
              value={form.name} onChange={handleChange}
            />
            <input
              type="email" name="email" placeholder="البريد الإلكتروني"
              value={form.email} onChange={handleChange}
            />
            <input
              type="text" name="subject" placeholder="الموضوع"
              value={form.subject} onChange={handleChange}
            />
            <textarea
              name="message" placeholder="رسالتك" rows="5"
              value={form.message} onChange={handleChange}
            />
            <button className="btn contact-submit" onClick={handleSubmit}>
              إرسال الرسالة
            </button>
            {sent && <p className="contact-sent">شكراً! تم إرسال رسالتك.</p>}
          </div>

          {/* info */}
          <div className="contact-info">
            <p className="contact-intro">
              نحن هنا للإجابة على استفساراتك، ونستقبل اقتراحاتك وقصصك.
            </p>
            <div className="info-row">
              <span className="info-ico"><EmailIcon /></span>
              <span>info@secretslebanon.com</span>
            </div>
            <div className="info-row">
              <span className="info-ico"><PhoneIcon /></span>
              <span>‎+961 71 234 567</span>
            </div>
            <div className="info-row">
              <span className="info-ico"><PinIcon /></span>
              <span>لبنان</span>
            </div>
            <SocialIcons className="contact-social" />
          </div>
        </div>
      </div>
    </div>
  );
}
