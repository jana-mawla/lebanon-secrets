# لبنان... أرض الأسرار والحكايات

موقع سياحي/قصصي لبناني بتصميم RTL عربي، مبني بـ React + Vite.

## التشغيل

```bash
npm install
npm run dev
```

ثم افتح الرابط الذي يظهر (عادةً http://localhost:5173).

## البناء للإنتاج

```bash
npm run build
npm run preview
```

## بنية المشروع

```
src/
  App.jsx              # التطبيق + المسارات (React Router)
  main.jsx             # نقطة الدخول
  components/          # مكونات مشتركة (Navbar, Footer, Logo, PlaceCard, Icons)
  pages/               # الصفحات (Home, Discover, Region, Place, Secret, Forgotten, About, Contact)
  data/siteData.js     # ← كل النصوص والصور هنا (عدّلها بسهولة)
  styles/              # ملفات CSS لكل صفحة/مكوّن
public/images/         # الصور (placeholders حالياً — استبدلها بصورك)
```

## استبدال الصور والنصوص

- **الصور:** ضع صورك في `public/images/` بنفس أسماء الملفات الموجودة
  (مثل `hero-1.jpg`, `baalbek.jpg`, `cedar.jpg`...).
- **النصوص والبيانات:** كلها في `src/data/siteData.js`:
  - `regionsData` — المناطق (جبل لبنان، البقاع، الجنوب — بدون الشمال)
  - `placesData` — 4 أماكن لكل منطقة (الرابع يحمل السر `isSecret: true`)
  - `placeDetailsData` — تفاصيل صفحة المكان
  - `secretsData` — قصص "السر الأكبر"
  - `forgottenItemsData` — بطاقات "منسيات"
  - `heroImages`, `aboutCards`

## الألوان والخطوط

عدّلها في `src/styles/global.css` ضمن `:root`.
