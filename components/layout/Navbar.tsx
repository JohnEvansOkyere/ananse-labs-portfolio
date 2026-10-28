import Link from "next/link";
import { siteConfig, navLinks } from "@/config/site";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 py-4">
      <nav
        className="site-container flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl"
        aria-label="Primary navigation"
      >
        <Link
          href="/#hero"
          className="font-[var(--font-syne)] text-base font-bold tracking-[-0.03em] text-[#F7F4EF] sm:text-lg"
          aria-label={`${siteConfig.name} home`}
        >
          {siteConfig.name}
          <span className="text-[#E74C3C]">.</span>
        </Link>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-[#F7F4EF]/70 transition-colors hover:bg-white/[0.07] hover:text-[#F7F4EF] sm:block"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            id="nav-contact"
            className="rounded-full bg-[#F7F4EF] px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-white"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
