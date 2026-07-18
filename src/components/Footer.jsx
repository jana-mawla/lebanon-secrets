import { Link } from "react-router-dom";
import Logo from "./Logo";
import { SocialIcons } from "./Icons";
import "../styles/Footer.css";
/* Footer — RTL columns, centered logo block, social icons, copyright. */ export default function Footer() {
  return (
    <footer className="footer">
      {" "}
      <div className="footer-top">
        {" "}
        <Logo size={80} />{" "}
        <h3 className="footer-brand">
          {" "}
          لبنان... <br /> <span>أرض الأسرار والحكايات</span>{" "}
        </h3>{" "}
        <p className="footer-tag">من كل حجر حكاية</p>{" "}
        <div className="footer-divider" />{" "}
      </div>{" "}
      <div className="footer-cols container">
        {" "}
        <div className="footer-col">
          {" "}
          <h4>اكتشف السر</h4> <Link to="/region/mount-lebanon">جبل لبنان</Link>{" "}
          <Link to="/region/baalbek-hermel">بعلبك الهرمل</Link>{" "}
          <Link to="/region/south">الجنوب</Link>{" "}
          <Link to="/region/beirut">بيروت</Link>{" "}
        </div>{" "}
        <div className="footer-col">
          {" "}
          <h4>منسيات</h4> <Link to="/forgotten">حكايات الناس</Link>{" "}
          <Link to="/forgotten">أماكن وأسفار</Link>{" "}
          <Link to="/forgotten">تراث وحضارة</Link>{" "}
        </div>{" "}
        <div className="footer-col">
          {" "}
          <h4>روابط سريعة</h4> <Link to="/about">من نحن</Link>{" "}
          <Link to="/contact">تواصل معنا</Link>{" "}
          <Link to="/">الصفحة الرئيسية</Link>{" "}
        </div>{" "}
        <div className="footer-col">
          {" "}
          <h4>تابعنا</h4> <SocialIcons className="footer-social" />{" "}
        </div>{" "}
      </div>{" "}
      <div className="footer-bottom">© جميع الحقوق محفوظة 2026</div>{" "}
    </footer>
  );
}
