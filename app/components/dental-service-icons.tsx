import type { DentalIconId } from "../lib/site";

/**
 * Icon artwork: Hugeicons Free (MIT) via the Iconify API: https://hugeicons.com
 * Periodontics, endodontics, and oral surgery have no ready-made icon in any
 * open set, so they are composed from the Hugeicons tooth base with additions
 * drawn in the same 24px grid / 1.5 stroke style.
 */

type IconProps = {
  id: DentalIconId;
};

const BLOB_COLOR: Record<DentalIconId, string> = {
  preventive: "var(--wash-blue)",
  children: "var(--wash-mint)",
  restorative: "var(--wash-coral)",
  periodontics: "var(--wash-blue)",
  endodontics: "var(--wash-mint)",
  "oral-surgery": "var(--wash-sand)",
  sedation: "var(--wash-coral)"
};

/** Organic, irregular blob, deliberately not a circle */
const BLOB_PATH =
  "M32 5C41 4 51 9 55 18C59 27 58 38 51 46C44 54 32 58 22 54C12 50 5 40 5 29C5 18 13 9 22 6C25.5 4.8 28.5 5.3 32 5Z";

/** Hugeicons `dental-tooth`, shared base for the composed icons */
const TOOTH_D =
  "M9 6c.5.5 1.503.412 3-.824m0 0q-.332-.272-.689-.626c-2.306-2.284-5.446-1.837-6.917 0C3.378 5.82.778 8.98 7.142 20.24c.264.466.789.76 1.354.76c.902 0 1.607-.72 1.636-1.56c.063-1.782.408-3.837 1.868-3.837s1.806 2.055 1.868 3.837c.029.84.734 1.56 1.636 1.56c.565 0 1.09-.294 1.354-.76c6.365-11.261 3.764-14.42 2.748-15.69c-1.471-1.837-4.611-2.284-6.917 0q-.357.353-.689.626";

const icons: Record<DentalIconId, React.ReactNode> = {
  /* Hugeicons `dental-care`, tooth with verified shield */
  preventive: (
    <path d="M14 5c-.5.5-1.503.412-3-.824m0 0q.332-.272.689-.626c2.306-2.284 5.446-1.837 6.917 0c.626.782 1.853 2.281 1.215 5.95M11 4.176q-.332-.272-.689-.626c-2.306-2.284-5.446-1.837-6.917 0C2.378 4.82-.222 7.98 6.142 19.24c.264.466.789.76 1.354.76c.902 0 1.607-.72 1.636-1.56c.046-1.303.298-2.755 1.001-3.44M16 17l.684.684c.147.147.221.221.31.216c.09-.005.155-.086.285-.249L19 15.5m-6-.046v.386c0 1.202 0 1.803.148 2.353a4.36 4.36 0 0 0 1.014 1.827c.39.422.906.75 1.937 1.407c.461.294.692.441.938.51c.303.084.624.084.927 0c.245-.069.476-.216.937-.51c1.031-.657 1.547-.985 1.937-1.407a4.36 4.36 0 0 0 1.014-1.827c.148-.55.148-1.15.148-2.353v-.386c0-.748 0-1.122-.142-1.438a1.7 1.7 0 0 0-.369-.52c-.253-.24-.612-.372-1.33-.635l-1.474-.54c-.586-.214-.879-.321-1.185-.321s-.599.107-1.185.322l-1.474.54c-.718.262-1.077.393-1.33.634a1.7 1.7 0 0 0-.37.52c-.141.316-.141.69-.141 1.438" />
  ),
  /* Hugeicons `baby-01` */
  children: (
    <>
      <path d="M10 16c.456.607 1.182 1 2 1s1.544-.393 2-1m1.625-4.742v.353m-7.25-.353v.353m.375-.111c0-.276-.168-.5-.375-.5S8 11.224 8 11.5s.168.5.375.5s.375-.224.375-.5m7.25 0c0-.276-.168-.5-.375-.5s-.375.224-.375.5s.168.5.375.5s.375-.224.375-.5" />
      <path d="M3.186 10.173a2 2 0 0 0 0 3.654a9.002 9.002 0 0 0 17.628 0a2 2 0 0 0 0-3.654a9.002 9.002 0 0 0-17.628 0" />
      <path d="M12 3c2 0 3.5 1.27 3.5 2.712c0 .933-.472 2.288-2 2.288c-.82 0-1.342-.606-1.5-1" />
    </>
  ),
  /* Hugeicons `dental-broken-tooth`, repair of damaged teeth */
  restorative: (
    <path d="M11.977 5.176q.33-.272.687-.626c2.3-2.284 5.432-1.837 6.899 0c3.605 4.514-.432 11.594-2.741 15.69c-.263.466-.787.76-1.35.76c-.9 0-1.603-.72-1.633-1.56c-.06-1.74-.464-3.845-1.839-3.94c-1.375.095-1.826 2.2-1.886 3.94c-.03.84-.733 1.56-1.632 1.56c-.564 0-1.088-.294-1.35-.76c-3.288-5.832-4.178-9.491-4.13-11.84c1.998.1 2.99-.9 2.99-2.7C8 6 9 4.829 9 3c1 0 1.575.84 2.29 1.55q.355.353.687.626m0 0C13.469 6.412 14.5 6.5 15 6" />
  ),
  /* Tooth base seated in the gumline */
  periodontics: (
    <>
      <g transform="translate(2.9 1.4) scale(0.76)">
        <path d={TOOTH_D} />
      </g>
      <path d="M1.4 10.6c1.5-1.15 2.9-1.35 4.3-.65" />
      <path d="M22.6 10.6c-1.5-1.15-2.9-1.35-4.3-.65" />
    </>
  ),
  /* Tooth base with root canal */
  endodontics: (
    <>
      <path d={TOOTH_D} />
      <path d="M12 8.6v4.4" />
      <path d="M12 13l-1.3 2.6M12 13l1.3 2.6" />
    </>
  ),
  /* Tooth base lifting free, gentle extraction */
  "oral-surgery": (
    <>
      <g transform="translate(3.1 0) scale(0.74)">
        <path d={TOOTH_D} />
      </g>
      <path d="M6.8 18.4l-1.3 1.9M12 19.3v2.3M17.2 18.4l1.3 1.9" />
    </>
  ),
  /* Hugeicons `sleeping`, relaxed, anxiety-free care */
  sedation: (
    <>
      <path d="M13 2.05Q12.507 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10q-.002-1.03-.2-2" />
      <path d="M10 11H8.707c-.453 0-.887-.18-1.207-.5m6.5.5h1.293c.453 0 .887-.18 1.207-.5" />
      <circle cx="12" cy="16" r="2" />
      <path d="M17 2h2.947c.62 0 .93 0 1.013.2s-.128.44-.55.92l-2.425 2.76c-.422.48-.633.72-.55.92s.392.2 1.012.2H21" />
    </>
  )
};

export function DentalServiceIcon({ id }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">
      <g fill={BLOB_COLOR[id]}>
        <path d={BLOB_PATH} />
      </g>
      <g
        transform="translate(14.5 14.5) scale(1.46)"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[id]}
      </g>
    </svg>
  );
}
