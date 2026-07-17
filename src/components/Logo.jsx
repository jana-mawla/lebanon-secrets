export default function Logo({ size = 46 }) {
  return (
    <img
      src="/images/logo.png"
      alt="شعار لبنان"
      width={size}
      height={size}
      className="site-logo"
    />
  );
}
