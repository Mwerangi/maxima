// CSS var() is not valid inside SVG presentation attributes — use literals
const INK = "#0b0e13";
const ACCENT = "#ff4d00";
const PAPER = "#fbfaf7";

function Corrugation({ x, y }: { x: number; y: number }) {
  return (
    <g stroke={PAPER} strokeOpacity="0.45" strokeWidth="2">
      <line x1={x} y1={y} x2={x} y2={y + 24} />
      <line x1={x + 26} y1={y} x2={x + 26} y2={y + 24} />
    </g>
  );
}

export default function HeroScene() {
  return (
    <svg
      viewBox="0 0 640 500"
      className="w-full"
      aria-hidden
      fill="none"
      stroke={INK}
      strokeOpacity="0.55"
      strokeWidth="2"
    >
      {/* ground */}
      <line x1="0" y1="470" x2="640" y2="470" strokeOpacity="0.35" />

      {/* left container stack */}
      <rect x="20" y="436" width="70" height="34" />
      <rect x="20" y="402" width="70" height="34" stroke={ACCENT} strokeOpacity="1" />

      {/* gantry crane */}
      <g>
        <line x1="150" y1="470" x2="150" y2="120" />
        <line x1="390" y1="470" x2="390" y2="120" />
        <line x1="90" y1="120" x2="450" y2="120" />
        <line x1="180" y1="120" x2="270" y2="60" />
        <line x1="360" y1="120" x2="270" y2="60" />
        <rect x="256" y="116" width="28" height="10" />
      </g>

      {/* cable + spreader + hanging container */}
      <rect className="hero-cable" x="269" y="126" width="2" height="24" fill={INK} fillOpacity="0.55" stroke="none" />
      <g className="hero-hangbox">
        <rect x="232" y="150" width="76" height="4" fill={INK} fillOpacity="0.55" stroke="none" />
        <rect x="230" y="154" width="80" height="36" fill={ACCENT} stroke="none" />
        <Corrugation x={257} y={160} />
      </g>

      {/* truck */}
      <g className="hero-truck">
        <rect x="210" y="434" width="130" height="8" />
        <path d="M340 442 L340 406 L362 406 L374 422 L374 442 Z" />
        <rect x="346" y="410" width="14" height="10" />
        <circle cx="232" cy="459" r="11" />
        <circle cx="262" cy="459" r="11" />
        <circle cx="320" cy="459" r="11" />
        <circle cx="358" cy="459" r="11" />
        <g className="hero-truckbox">
          <rect x="230" y="398" width="80" height="36" fill={ACCENT} stroke="none" />
          <Corrugation x={257} y={404} />
        </g>
      </g>

      {/* right container stack */}
      <rect x="440" y="436" width="70" height="34" />
      <rect x="440" y="402" width="70" height="34" />

      {/* reach stacker */}
      <g>
        <rect x="530" y="434" width="100" height="26" />
        <rect x="534" y="412" width="24" height="22" />
        <line x1="538" y1="418" x2="552" y2="418" />
        <circle cx="552" cy="460" r="10" />
        <circle cx="612" cy="460" r="10" />
      </g>
      <g className="hero-boom">
        <line x1="622" y1="434" x2="477" y2="348" strokeWidth="5" />
        <rect x="476" y="348" width="2" height="6" fill={INK} fillOpacity="0.55" stroke="none" />
        <rect x="440" y="354" width="70" height="32" stroke={ACCENT} strokeOpacity="1" />
      </g>
    </svg>
  );
}
