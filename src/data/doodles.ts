// Hand-drawn line doodles. Each is the inner markup of a 0 0 100 100 SVG, drawn with
// `stroke="currentColor"` so the same art works as cream-on-ink, ink-on-paper or a stamp.
export const DOODLES: Record<string, string> = {
  chai: `
    <path d="M28 30 L72 30 L64 86 Q50 90 36 86 Z"/>
    <path d="M30 42 L70 42 M31.5 54 L68.5 54 M33 66 L67 66 M34.5 78 L65.5 78"/>
    <path d="M30 36 Q50 44 70 36" opacity=".6"/>
    <path d="M42 22 q-6 -7 0 -12 q6 -5 0 -10"/>
    <path d="M56 24 q-6 -7 0 -12 q6 -5 0 -10"/>`,
  auto: `
    <path d="M14 70 L14 46 Q16 26 40 24 L72 24 Q84 26 86 44 L88 70 Z"/>
    <path d="M14 46 L88 46"/>
    <path d="M44 24 L44 70 M66 24 L66 46"/>
    <path d="M20 46 L38 30"/>
    <circle cx="26" cy="74" r="9"/><circle cx="26" cy="74" r="2.5"/>
    <circle cx="76" cy="74" r="9"/><circle cx="76" cy="74" r="2.5"/>
    <path d="M4 60 h8 M2 66 h9" opacity=".6"/>
    <path d="M50 54 h10"/>`,
  peacock: `
    <path d="M50 96 Q48 60 54 14"/>
    <ellipse cx="54" cy="30" rx="16" ry="20"/>
    <ellipse cx="54" cy="32" rx="9" ry="12"/>
    <ellipse cx="54" cy="34" rx="4" ry="5.5" fill="currentColor"/>
    <path d="M38 40 L22 52 M38 48 L20 62 M40 58 L24 74 M70 40 L84 50 M70 48 L86 60 M68 58 L82 72"/>
    <path d="M40 30 L28 26 M68 30 L80 24"/>`,
  elephant: `
    <path d="M22 62 Q16 34 42 30 Q58 22 72 34 Q86 44 82 62 L82 82 L72 82 L72 70 L56 70 L56 82 L46 82 L46 70 Q36 72 30 66"/>
    <path d="M30 66 Q20 74 22 86 Q24 92 30 88"/>
    <path d="M44 34 Q36 46 46 56 Q56 50 52 36" />
    <circle cx="32" cy="46" r="2" fill="currentColor"/>
    <path d="M26 58 Q22 62 26 66" opacity=".7"/>
    <path d="M82 50 Q90 52 90 60"/>
    <path d="M46 26 Q54 18 64 24 L60 30" opacity=".8"/>`,
  diya: `
    <path d="M14 58 Q50 92 86 58 Q70 60 50 60 Q30 60 14 58 Z"/>
    <path d="M14 58 Q8 54 10 50 M86 58 Q94 52 90 48"/>
    <path d="M50 54 Q40 40 50 22 Q60 40 50 54 Z"/>
    <path d="M50 48 Q46 40 50 32" opacity=".6"/>
    <path d="M24 70 Q50 82 76 70" opacity=".6"/>
    <path d="M30 18 l-6 -6 M70 18 l6 -6 M50 10 v-6" opacity=".7"/>`,
  kite: `
    <path d="M50 6 L80 40 L50 74 L20 40 Z"/>
    <path d="M50 6 L50 74 M20 40 L80 40"/>
    <path d="M50 74 Q40 80 46 86 Q52 92 42 96"/>
    <path d="M44 82 l-6 2 l4 4 Z M46 92 l-6 0 l3 5 Z" fill="currentColor"/>
    <path d="M80 40 Q92 60 96 96" opacity=".5" stroke-dasharray="3 4"/>`,
  mango: `
    <path d="M50 22 Q82 18 84 50 Q86 84 52 88 Q20 90 18 62 Q16 40 34 32 Q42 26 50 22 Z"/>
    <path d="M50 22 Q52 12 58 8"/>
    <path d="M58 12 Q72 2 84 10 Q72 18 58 12 Z"/>
    <path d="M32 50 Q30 64 40 74" opacity=".6"/>`,
  lotus: `
    <path d="M50 78 Q36 56 50 24 Q64 56 50 78 Z"/>
    <path d="M48 78 Q22 66 22 40 Q40 46 48 66"/>
    <path d="M52 78 Q78 66 78 40 Q60 46 52 66"/>
    <path d="M46 78 Q16 76 8 56 Q26 54 40 70"/>
    <path d="M54 78 Q84 76 92 56 Q74 54 60 70"/>
    <path d="M20 86 Q50 80 80 86 M28 93 Q50 88 72 93" opacity=".6"/>`,
  paisley: `
    <path d="M40 92 Q12 88 14 60 Q16 34 46 30 Q78 26 76 8 Q96 30 84 58 Q72 92 40 92 Z"/>
    <path d="M42 80 Q24 78 26 60 Q28 44 48 42 Q66 40 72 26 Q80 44 72 62 Q64 80 42 80 Z"/>
    <circle cx="46" cy="62" r="7"/>
    <circle cx="46" cy="62" r="2" fill="currentColor"/>
    <path d="M30 70 l-3 3 M34 52 l-3 -3 M58 52 l3 -3 M60 70 l3 3" opacity=".8"/>`,
  robot: `
    <rect x="24" y="30" width="52" height="42" rx="10"/>
    <path d="M50 30 V18"/><circle cx="50" cy="14" r="4"/>
    <circle cx="39" cy="48" r="5"/><circle cx="61" cy="48" r="5"/>
    <circle cx="39" cy="48" r="1.6" fill="currentColor"/><circle cx="61" cy="48" r="1.6" fill="currentColor"/>
    <path d="M40 61 Q50 67 60 61"/>
    <path d="M24 50 H16 M76 50 H84"/>
    <path d="M34 72 L32 86 M66 72 L68 86 M26 86 H40 M60 86 H74"/>`,
  laptop: `
    <rect x="20" y="22" width="60" height="40" rx="4"/>
    <path d="M10 70 H90 L84 78 H16 Z"/>
    <path d="M36 36 L30 42 L36 48 M64 36 L70 42 L64 48 M54 32 L46 52"/>
    <path d="M44 74 H56" opacity=".7"/>`,
  neural: `
    <circle cx="16" cy="28" r="6"/><circle cx="16" cy="50" r="6"/><circle cx="16" cy="72" r="6"/>
    <circle cx="50" cy="20" r="6"/><circle cx="50" cy="40" r="6"/><circle cx="50" cy="60" r="6"/><circle cx="50" cy="80" r="6"/>
    <circle cx="84" cy="40" r="6"/><circle cx="84" cy="60" r="6" fill="currentColor"/>
    <path d="M22 28 L44 20 M22 28 L44 40 M22 28 L44 60 M22 50 L44 40 M22 50 L44 60 M22 50 L44 20 M22 72 L44 60 M22 72 L44 80 M22 72 L44 40" opacity=".55"/>
    <path d="M56 20 L78 40 M56 40 L78 40 M56 40 L78 60 M56 60 L78 60 M56 80 L78 60 M56 60 L78 40" opacity=".55"/>`,
  terminal: `
    <rect x="10" y="18" width="80" height="64" rx="6"/>
    <path d="M10 30 H90"/>
    <circle cx="18" cy="24" r="1.8" fill="currentColor"/><circle cx="25" cy="24" r="1.8" fill="currentColor"/><circle cx="32" cy="24" r="1.8" fill="currentColor"/>
    <path d="M20 44 L30 52 L20 60"/>
    <path d="M36 62 H52"/>`,
  rangoli: `
    <circle cx="50" cy="50" r="8"/>
    <path d="M50 42 Q44 26 50 10 Q56 26 50 42 M50 58 Q44 74 50 90 Q56 74 50 58 M42 50 Q26 44 10 50 Q26 56 42 50 M58 50 Q74 44 90 50 Q74 56 58 50"/>
    <path d="M44 44 Q30 36 22 22 Q36 30 44 44 M56 44 Q70 36 78 22 Q64 30 56 44 M44 56 Q30 64 22 78 Q36 70 44 56 M56 56 Q70 64 78 78 Q64 70 56 56"/>
    <circle cx="50" cy="50" r="2.5" fill="currentColor"/>
    <circle cx="50" cy="6" r="1.8" fill="currentColor"/><circle cx="94" cy="50" r="1.8" fill="currentColor"/><circle cx="50" cy="94" r="1.8" fill="currentColor"/><circle cx="6" cy="50" r="1.8" fill="currentColor"/>`,
  duck: `
    <path d="M24 62 Q20 84 46 86 Q78 88 84 66 Q86 56 74 58 Q64 60 60 54 Q70 46 68 34 Q64 20 50 20 Q34 22 34 36 Q34 46 42 52 Q30 50 24 62 Z"/>
    <path d="M34 34 Q22 32 18 38 Q24 42 34 40"/>
    <circle cx="48" cy="32" r="2.2" fill="currentColor"/>
    <path d="M44 66 Q56 74 68 66" opacity=".7"/>`,
  chip: `
    <rect x="28" y="28" width="44" height="44" rx="5"/>
    <rect x="38" y="38" width="24" height="24" rx="2"/>
    <path d="M38 28 V16 M50 28 V16 M62 28 V16 M38 72 V84 M50 72 V84 M62 72 V84 M28 38 H16 M28 50 H16 M28 62 H16 M72 38 H84 M72 50 H84 M72 62 H84"/>
    <text x="50" y="55" font-size="12" text-anchor="middle" fill="currentColor" stroke="none" font-family="monospace">AI</text>`,
  code: `
    <path d="M32 30 L12 50 L32 70 M68 30 L88 50 L68 70 M58 22 L42 78"/>`,
  star: `
    <path d="M50 8 L58 40 L92 42 L64 60 L74 92 L50 72 L26 92 L36 60 L8 42 L42 40 Z"/>`,
  tabla: `
    <ellipse cx="34" cy="38" rx="20" ry="7"/>
    <path d="M14 38 Q14 80 34 84 Q54 80 54 38"/>
    <ellipse cx="34" cy="38" rx="7" ry="2.5" fill="currentColor"/>
    <ellipse cx="72" cy="48" rx="16" ry="6"/>
    <path d="M56 48 Q54 82 72 86 Q90 82 88 48"/>
    <path d="M20 50 L28 80 M48 50 L40 80 M62 58 L68 82 M82 58 L76 82" opacity=".6"/>`,
  gamepad: `
    <path d="M22 38 Q30 30 50 32 Q70 30 78 38 Q92 56 86 72 Q80 80 70 72 L62 64 H38 L30 72 Q20 80 14 72 Q8 56 22 38 Z"/>
    <path d="M30 46 V58 M24 52 H36"/>
    <circle cx="66" cy="48" r="3"/><circle cx="72" cy="56" r="3"/>`,
  headphones: `
    <path d="M18 62 V50 Q18 18 50 18 Q82 18 82 50 V62"/>
    <rect x="12" y="56" width="16" height="26" rx="6"/>
    <rect x="72" y="56" width="16" height="26" rx="6"/>`,
  plant: `
    <path d="M34 62 H66 L62 90 H38 Z"/>
    <path d="M50 62 V36"/>
    <path d="M50 46 Q34 44 30 28 Q46 28 50 42"/>
    <path d="M50 40 Q62 26 76 28 Q72 44 50 48"/>
    <path d="M50 36 Q46 22 52 12 Q58 22 50 36"/>`,
  book: `
    <path d="M50 26 Q34 16 14 20 V80 Q34 76 50 86 Q66 76 86 80 V20 Q66 16 50 26 Z"/>
    <path d="M50 26 V86"/>
    <path d="M22 34 Q32 32 42 36 M22 46 Q32 44 42 48 M58 36 Q68 32 78 34 M58 48 Q68 44 78 46" opacity=".6"/>`,
  sparkle: `
    <path d="M50 10 Q54 46 90 50 Q54 54 50 90 Q46 54 10 50 Q46 46 50 10 Z"/>
    <path d="M82 14 Q83 22 90 22 Q83 23 82 30 Q81 23 74 22 Q81 21 82 14 Z"/>`,
  plane: `
    <path d="M10 56 L86 26 Q94 24 92 32 L62 70 L54 54 Z"/>
    <path d="M54 54 L86 26"/>
    <path d="M54 54 L48 72 L58 64" />`,

};

export const STAMPS = ["code", "terminal", "neural", "chip", "robot", "sparkle", "paisley", "book", "gamepad", "laptop", "headphones", "duck", "plant", "kite"];
