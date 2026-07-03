import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="border-b" style={{ borderColor: "#B9B2A0" }}>
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Five Needs Consulting"
            width={124}
            height={96}
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 font-body text-sm text-inkSoft">
          <Link href="/#about" className="hover:text-ink transition-colors">About</Link>
          <Link href="/#human-os" className="hover:text-ink transition-colors">Human OS</Link>
          <Link href="/tools" className="hover:text-ink transition-colors">Tools</Link>
          <Link
            href="/#book"
            className="px-4 py-1.5 rounded-sm bg-signal text-canvas hover:bg-signalDark transition-colors"
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}
