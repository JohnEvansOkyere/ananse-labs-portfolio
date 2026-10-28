import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="site-container flex flex-col gap-2 text-sm text-[#F7F4EF]/50 sm:flex-row sm:justify-between">
        <p>
          © {currentYear} {siteConfig.name}
        </p>
        <p>{siteConfig.title}</p>
      </div>
    </footer>
  );
}
