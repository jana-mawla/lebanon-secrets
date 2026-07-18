/* Small inline-SVG icon set — keeps the project dependency-free. */

export const PlayIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const PinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export const NameIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4 0-9 2-9 6v2h18v-2c0-4-5-6-9-6z" />
  </svg>
);

export const OriginIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2 4 6v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-4zm0 4 4 2v4c0 3-1.7 5.3-4 6-2.3-.7-4-3-4-6V8l4-2z" />
  </svg>
);

export const EmailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 7 8-5H4l8 5zm0 2L4 8v10h16V8l-8 5z" />
  </svg>
);

export const PhoneIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
  </svg>
);

export const CloseIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z" />
  </svg>
);

/* Social row used in footer & contact */
/* Social row used in footer & contact */
export const SocialIcons = ({ className = "" }) => (
  <div className={`social-row ${className}`}>
    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/1BV6b5XhQD/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 22v-8h3l1-4h-4V8c0-1.1.5-2 2-2h2V2.1C17.7 2 16.5 2 15.6 2 12.7 2 11 3.7 11 6.7V10H8v4h3v8h2z" />
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/alhakaya_almakhfiya?igsh=MXdsYjkxMjJwcG14aQ%3D%3D&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c.1-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.8 7.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
      </svg>
    </a>

    {/* TikTok */}
    <a
      href="https://www.tiktok.com/@alhakaya.almakhfiya?_r=1&_t=ZS-986t4er03sY"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 2c.3 2.3 1.6 3.9 3.9 4.1V9c-1.4.1-2.7-.3-3.9-1v6.5c0 3.6-3.1 6.3-6.7 5.4-2.3-.6-3.9-2.8-3.7-5.2.2-2.5 2.3-4.4 4.8-4.4.3 0 .6 0 .9.1v3c-.3-.1-.6-.2-.9-.2-1.2 0-2.1 1-2 2.2 0 1.1 1 2 2.1 2 1.2 0 2.2-.9 2.2-2.1V2H16z" />
      </svg>
    </a>
  </div>
);
