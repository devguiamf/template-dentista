import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="logo" aria-label="Lumina Odontologia — início">
      <svg
        aria-hidden="true"
        className="logo-mark"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path d="M14 9v19.5c0 4 2.5 6.5 6.5 6.5H31" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M7.5 29.5C12 39 25.5 42 37.5 34" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M26 8v7M31 9.5l-2.5 6.4M35.5 12.5l-5.2 5" stroke="#67E8F9" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      {!compact && (
        <span>
          <strong>Lumina</strong>
          <small>Odontologia</small>
        </span>
      )}
    </Link>
  );
}
