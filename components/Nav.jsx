import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b" style={{ borderColor: "#B9B2A0" }}>
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-xs tracking-widest uppercase text-brass">
          Human OS
        </Link>
        <nav className="flex items-center gap-6 font-body text-sm text-inkSoft">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <Link href="/tools" className="hover:text-ink transition-colors">Tools</Link>
        </nav>
      </div>
    </header>
  );
}
