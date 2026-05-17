import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, UtensilsCrossed, X } from "lucide-react";
import { useState } from "react";
import { restaurant } from "../data";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Location", to: "/location" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const whatsappUrl = `https://wa.me/${restaurant.contact.whatsapp}?text=Hello%2C%20I%27d%20like%20to%20place%20an%20order%20at%20Ma%27s%20House.`;
  const phoneHref = `tel:${restaurant.contact.phone}`;

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            data-ocid="header.logo_link"
          >
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-smooth">
              <UtensilsCrossed
                className="w-4.5 h-4.5 text-primary-foreground"
                size={18}
              />
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-lg text-foreground block leading-none">
                Ma's House
              </span>
              <span className="text-[10px] font-body tracking-widest uppercase text-accent font-semibold leading-none">
                Chinese Cuisine
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-semibold font-body transition-smooth ${
                  isActive(link.to)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
                data-ocid={`header.nav_${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 btn-primary text-sm py-2 px-4"
              data-ocid="header.whatsapp_cta"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.85L.057 23.428a.75.75 0 0 0 .927.927l5.578-1.465A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.992 0-3.87-.538-5.48-1.476l-.39-.233-4.044 1.062 1.079-3.94-.255-.404A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Order on WhatsApp
            </a>
            <a
              href={phoneHref}
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-primary transition-smooth px-3 py-2 rounded-md hover:bg-muted border border-border"
              aria-label={`Call ${restaurant.contact.displayPhone}`}
              data-ocid="header.call_cta"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>

            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-muted transition-smooth"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              data-ocid="header.mobile_menu_toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav
            className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-md text-sm font-semibold font-body transition-smooth ${
                  isActive(link.to)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileOpen(false)}
                data-ocid={`header.mobile_nav_${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 btn-primary text-sm text-center flex items-center justify-center gap-2"
              onClick={() => setMobileOpen(false)}
              data-ocid="header.mobile_whatsapp_cta"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.85L.057 23.428a.75.75 0 0 0 .927.927l5.578-1.465A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.992 0-3.87-.538-5.48-1.476l-.39-.233-4.044 1.062 1.079-3.94-.255-.404A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Order on WhatsApp
            </a>
            <a
              href={phoneHref}
              className="mt-1 text-sm font-semibold text-center flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-border text-foreground/80 hover:text-primary hover:bg-muted transition-smooth"
              onClick={() => setMobileOpen(false)}
              data-ocid="header.mobile_call_cta"
            >
              <Phone className="w-4 h-4" />
              Call Us · {restaurant.contact.displayPhone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
