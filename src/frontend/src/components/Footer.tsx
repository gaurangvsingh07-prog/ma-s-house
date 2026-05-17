import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { restaurant } from "../data";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;
  const whatsappUrl = `https://wa.me/${restaurant.contact.whatsapp}?text=Hello%2C%20I%27d%20like%20to%20place%20an%20order%20at%20Ma%27s%20House.`;

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-sm">
                <UtensilsCrossed
                  size={18}
                  className="text-primary-foreground"
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
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {restaurant.description}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-smooth"
              data-ocid="footer.whatsapp_link"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.85L.057 23.428a.75.75 0 0 0 .927.927l5.578-1.465A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.992 0-3.87-.538-5.48-1.476l-.39-.233-4.044 1.062 1.079-3.94-.255-.404A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Chat with us on WhatsApp
            </a>
            <a
              href={`tel:${restaurant.contact.phone}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-primary transition-smooth"
              data-ocid="footer.call_link"
            >
              <Phone size={16} className="shrink-0" />
              Call Us · {restaurant.contact.displayPhone}
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {[
                { label: "Home", to: "/" },
                { label: "Our Menu", to: "/menu" },
                { label: "Find Us", to: "/location" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  data-ocid={`footer.nav_${link.label.toLowerCase().replace(" ", "_")}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-widest">
              Visit Us
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span className="leading-relaxed">
                  {restaurant.location.address},<br />
                  {restaurant.location.area},<br />
                  {restaurant.location.city}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock size={16} className="shrink-0 text-accent" />
                <span>
                  {restaurant.hours.days}
                  <br />
                  {restaurant.hours.open} – {restaurant.hours.close}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="shrink-0 text-accent" />
                <a
                  href={`tel:${restaurant.contact.phone}`}
                  className="hover:text-primary transition-smooth"
                  data-ocid="footer.phone_link"
                >
                  {restaurant.contact.displayPhone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} Ma's House Chinese Cuisine. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-semibold transition-smooth"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
