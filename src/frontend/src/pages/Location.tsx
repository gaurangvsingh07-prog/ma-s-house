import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  ExternalLink,
  Loader2,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Star,
} from "lucide-react";
import { useState } from "react";

// Restaurant destination coordinates
const DEST_LAT = 19.1584;
const DEST_LNG = 73.064;

const FALLBACK_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=19.1584,73.0640&travelmode=driving";
const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Shop+No.2+Bunglow+89+Shiv+Mandir+2green+Park+Lodha+Palava+Casa+Rio+Main+Road+Palava+City+Thane+421204+Maharashtra";

const WHATSAPP_URL =
  "https://wa.me/918826392458?text=Hi%2C+I%27d+like+to+make+a+reservation";
const PHONE_NUMBER = "+91 79471 04205";
const PHONE_HREF = "tel:+917947104205";

const HOURS = [
  { day: "Monday", time: "4:00 PM – 11:30 PM" },
  { day: "Tuesday", time: "4:00 PM – 11:30 PM" },
  { day: "Wednesday", time: "4:00 PM – 11:30 PM" },
  { day: "Thursday", time: "4:00 PM – 11:30 PM" },
  { day: "Friday", time: "4:00 PM – 11:30 PM" },
  { day: "Saturday", time: "4:00 PM – 11:30 PM" },
  { day: "Sunday", time: "4:00 PM – 11:30 PM" },
];

function StarRating({ rating, count }: { rating: number; count: number }) {
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-0.5">
        {(["1st", "2nd", "3rd", "4th", "5th"] as const).map((pos, i) => {
          const filled = i < fullStars;
          const isPartial = i === fullStars && partial > 0;
          return (
            <span key={pos} className="relative inline-block">
              <Star
                className="w-5 h-5 text-muted/40"
                fill="none"
                strokeWidth={1.5}
              />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{
                  width: filled
                    ? "100%"
                    : isPartial
                      ? `${partial * 100}%`
                      : "0%",
                }}
              >
                <Star
                  className="w-5 h-5 text-accent"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </span>
            </span>
          );
        })}
      </div>
      <span className="font-display font-bold text-lg text-foreground">
        {rating}
      </span>
      <span className="text-muted-foreground text-sm">({count} reviews)</span>
    </div>
  );
}

type DirectionsState = "idle" | "locating" | "error";

export default function Location() {
  const [directionsState, setDirectionsState] =
    useState<DirectionsState>("idle");

  function openDirectionsWithLocation() {
    if (!navigator.geolocation) {
      // Geolocation not supported — open fallback immediately
      window.open(FALLBACK_MAPS_URL, "_blank", "noopener,noreferrer");
      return;
    }

    setDirectionsState("locating");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${DEST_LAT},${DEST_LNG}&travelmode=driving`;
        setDirectionsState("idle");
        window.open(url, "_blank", "noopener,noreferrer");
      },
      (_err) => {
        // Permission denied or error — show brief error then open fallback
        setDirectionsState("error");
        alert("Could not get your location. Opening maps anyway...");
        window.open(FALLBACK_MAPS_URL, "_blank", "noopener,noreferrer");
        setTimeout(() => setDirectionsState("idle"), 2000);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  }

  const isLocating = directionsState === "locating";

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-accent text-primary-foreground/70 mb-3">
            Visit Us
          </p>
          <h1 className="heading-lg text-primary-foreground mb-4">Find Us</h1>
          <p className="text-primary-foreground/80 text-lg font-body">
            Come visit us in Palava City — open every evening for dinner service
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid gap-6 md:grid-cols-2">
        {/* Address Card */}
        <div
          className="card-elevated p-6 flex flex-col gap-4"
          data-ocid="location.address_card"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h2 className="heading-sm text-foreground">Our Address</h2>
          </div>
          <Separator />
          <address className="not-italic text-foreground/80 font-body leading-relaxed text-sm space-y-1">
            <p className="font-semibold text-foreground">
              Ma's House Chinese Cuisine
            </p>
            <p>Shop No. 2, Bunglow 89,</p>
            <p>Shiv Mandir, 2green Park,</p>
            <p>Lodha, Palava, Casa Rio Main Road,</p>
            <p>Palava City, Thane-421204,</p>
            <p>Maharashtra</p>
          </address>

          {/* Get Directions — geolocation-enabled */}
          <Button
            type="button"
            className="w-full gap-2 btn-primary"
            onClick={openDirectionsWithLocation}
            disabled={isLocating}
            data-ocid="location.get_directions_button"
            aria-label="Get turn-by-turn directions to Ma's House"
          >
            {isLocating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Locating...
              </>
            ) : (
              <>
                <Navigation className="w-4 h-4" />
                Get Directions
              </>
            )}
          </Button>

          {/* Subtle hint for users */}
          <p className="text-xs text-muted-foreground text-center -mt-1">
            Tap to open turn-by-turn navigation from your location
          </p>
        </div>

        {/* Hours Card */}
        <div
          className="card-elevated p-6 flex flex-col gap-4"
          data-ocid="location.hours_card"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h2 className="heading-sm text-foreground">Opening Hours</h2>
          </div>
          <Separator />
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse inline-block" />
            <span className="font-semibold text-foreground text-sm">
              Open Daily
            </span>
            <Badge variant="secondary" className="text-xs ml-auto">
              All 7 Days
            </Badge>
          </div>
          <ul className="space-y-2">
            {HOURS.map((h) => (
              <li
                key={h.day}
                className="flex justify-between items-center text-sm border-b border-border/50 pb-2 last:border-0 last:pb-0"
              >
                <span className="text-muted-foreground font-body">{h.day}</span>
                <span className="font-semibold text-foreground">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground italic">
            We're open every day of the week for dinner service
          </p>
        </div>

        {/* Contact Card */}
        <div
          className="card-elevated p-6 flex flex-col gap-4 md:col-span-2"
          data-ocid="location.contact_card"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h2 className="heading-sm text-foreground">Contact Us</h2>
          </div>
          <Separator />
          <div className="grid gap-4 sm:grid-cols-2 items-center">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <p className="font-display font-bold text-2xl text-foreground">
                {PHONE_NUMBER}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                For reservations and orders, reach us on WhatsApp — we respond
                quickly!
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="location.whatsapp_button"
              >
                <Button
                  type="button"
                  className="w-full gap-2 font-semibold text-white shadow-sm transition-smooth hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
              <a href={PHONE_HREF} data-ocid="location.call_button">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full gap-2 border-primary text-primary hover:bg-primary/5 transition-smooth"
                >
                  <Phone className="w-4 h-4" />
                  Call Us: {PHONE_NUMBER}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="bg-muted/30 py-12 px-4"
        data-ocid="location.map_section"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-sm text-foreground mb-6 text-center">
            Find Us on the Map
          </h2>
          <div
            className="rounded-xl overflow-hidden border border-border shadow-sm w-full"
            style={{ height: 380 }}
          >
            <iframe
              title="Ma's House Location — Palava City"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.0550%2C19.1600%2C73.0850%2C19.1850&layer=mapnik&marker=19.1584%2C73.0640"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
            />
          </div>
          <div className="flex justify-center mt-4">
            <a
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="location.view_map_button"
            >
              <Button
                type="button"
                variant="outline"
                className="gap-2 border-primary text-primary hover:bg-primary/5"
              >
                <ExternalLink className="w-4 h-4" />
                View Full Map on Google Maps
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Rating Card */}
      <section
        className="max-w-5xl mx-auto px-4 py-12"
        data-ocid="location.rating_section"
      >
        <div className="card-elevated p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <Star
              className="w-8 h-8 text-accent"
              fill="currentColor"
              strokeWidth={0}
            />
          </div>
          <div className="flex-1">
            <p className="label-accent mb-1">Highly Rated on Justdial</p>
            <StarRating rating={4.9} count={18} />
            <p className="text-muted-foreground text-sm mt-2 font-body">
              Customers love our authentic Chinese flavors and warm hospitality.
              Join them!
            </p>
          </div>
          <a
            href="https://www.justdial.com"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="location.justdial_button"
          >
            <Button
              type="button"
              variant="outline"
              className="gap-2 border-accent text-accent hover:bg-accent/5 shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              See Reviews
            </Button>
          </a>
        </div>
      </section>

      {/* Reservation CTA */}
      <section
        className="bg-primary/5 border-t border-primary/10 py-12 px-4"
        data-ocid="location.reservation_cta"
      >
        <div className="max-w-2xl mx-auto text-center">
          <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="heading-sm text-foreground mb-3">Ready to Visit?</h2>
          <p className="text-muted-foreground mb-6 font-body">
            For reservations and takeaway orders, reach us on WhatsApp — we
            respond quickly!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="location.reservation_whatsapp_button"
          >
            <Button
              type="button"
              size="lg"
              className="gap-2 font-semibold text-white px-8 shadow-md transition-smooth hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-5 h-5" />
              Reserve via WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
