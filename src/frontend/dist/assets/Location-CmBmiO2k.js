import { c as createLucideIcon, a as reactExports, j as jsxRuntimeExports, M as MapPin, C as Clock, P as Phone } from "./index-DkC7pw5z.js";
import { B as Badge, S as Star } from "./badge-Dz8JvNmY.js";
import { B as Button } from "./button-BhAhjKZE.js";
import { S as Separator, E as ExternalLink } from "./separator-Dfl9jflW.js";
import { M as MessageCircle } from "./message-circle-DPNrnjSF.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
];
const Navigation = createLucideIcon("navigation", __iconNode);
const DEST_LAT = 19.1584;
const DEST_LNG = 73.064;
const FALLBACK_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=19.1584,73.0640&travelmode=driving";
const MAPS_SEARCH_URL = "https://www.google.com/maps/search/?api=1&query=Shop+No.2+Bunglow+89+Shiv+Mandir+2green+Park+Lodha+Palava+Casa+Rio+Main+Road+Palava+City+Thane+421204+Maharashtra";
const WHATSAPP_URL = "https://wa.me/918826392458?text=Hi%2C+I%27d+like+to+make+a+reservation";
const PHONE_NUMBER = "+91 79471 04205";
const PHONE_HREF = "tel:+917947104205";
const HOURS = [
  { day: "Monday", time: "4:00 PM – 11:30 PM" },
  { day: "Tuesday", time: "4:00 PM – 11:30 PM" },
  { day: "Wednesday", time: "4:00 PM – 11:30 PM" },
  { day: "Thursday", time: "4:00 PM – 11:30 PM" },
  { day: "Friday", time: "4:00 PM – 11:30 PM" },
  { day: "Saturday", time: "4:00 PM – 11:30 PM" },
  { day: "Sunday", time: "4:00 PM – 11:30 PM" }
];
function StarRating({ rating, count }) {
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: ["1st", "2nd", "3rd", "4th", "5th"].map((pos, i) => {
      const filled = i < fullStars;
      const isPartial = i === fullStars && partial > 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            className: "w-5 h-5 text-muted/40",
            fill: "none",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute inset-0 overflow-hidden",
            style: {
              width: filled ? "100%" : isPartial ? `${partial * 100}%` : "0%"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: "w-5 h-5 text-accent",
                fill: "currentColor",
                strokeWidth: 0
              }
            )
          }
        )
      ] }, pos);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg text-foreground", children: rating }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-sm", children: [
      "(",
      count,
      " reviews)"
    ] })
  ] });
}
function Location() {
  const [directionsState, setDirectionsState] = reactExports.useState("idle");
  function openDirectionsWithLocation() {
    if (!navigator.geolocation) {
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
        setDirectionsState("error");
        alert("Could not get your location. Opening maps anyway...");
        window.open(FALLBACK_MAPS_URL, "_blank", "noopener,noreferrer");
        setTimeout(() => setDirectionsState("idle"), 2e3);
      },
      {
        enableHighAccuracy: true,
        timeout: 1e4,
        maximumAge: 0
      }
    );
  }
  const isLocating = directionsState === "locating";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-accent text-primary-foreground/70 mb-3", children: "Visit Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading-lg text-primary-foreground mb-4", children: "Find Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg font-body", children: "Come visit us in Palava City — open every evening for dinner service" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-5xl mx-auto px-4 py-12 grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "card-elevated p-6 flex flex-col gap-4",
          "data-ocid": "location.address_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-sm text-foreground", children: "Our Address" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic text-foreground/80 font-body leading-relaxed text-sm space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Ma's House Chinese Cuisine" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Shop No. 2, Bunglow 89," }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Shiv Mandir, 2green Park," }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lodha, Palava, Casa Rio Main Road," }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Palava City, Thane-421204," }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Maharashtra" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                className: "w-full gap-2 btn-primary",
                onClick: openDirectionsWithLocation,
                disabled: isLocating,
                "data-ocid": "location.get_directions_button",
                "aria-label": "Get turn-by-turn directions to Ma's House",
                children: isLocating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                  "Locating..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "w-4 h-4" }),
                  "Get Directions"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center -mt-1", children: "Tap to open turn-by-turn navigation from your location" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "card-elevated p-6 flex flex-col gap-4",
          "data-ocid": "location.hours_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-sm text-foreground", children: "Opening Hours" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse inline-block" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm", children: "Open Daily" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs ml-auto", children: "All 7 Days" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: HOURS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex justify-between items-center text-sm border-b border-border/50 pb-2 last:border-0 last:pb-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-body", children: h.day }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: h.time })
                ]
              },
              h.day
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "We're open every day of the week for dinner service" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "card-elevated p-6 flex flex-col gap-4 md:col-span-2",
          "data-ocid": "location.contact_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-sm text-foreground", children: "Contact Us" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-2xl text-foreground", children: PHONE_NUMBER }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "For reservations and orders, reach us on WhatsApp — we respond quickly!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: WHATSAPP_URL,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "location.whatsapp_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        type: "button",
                        className: "w-full gap-2 font-semibold text-white shadow-sm transition-smooth hover:opacity-90 active:scale-95",
                        style: { backgroundColor: "#25D366" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
                          "Chat on WhatsApp"
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PHONE_HREF, "data-ocid": "location.call_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    className: "w-full gap-2 border-primary text-primary hover:bg-primary/5 transition-smooth",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                      "Call Us: ",
                      PHONE_NUMBER
                    ]
                  }
                ) })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 py-12 px-4",
        "data-ocid": "location.map_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-sm text-foreground mb-6 text-center", children: "Find Us on the Map" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-xl overflow-hidden border border-border shadow-sm w-full",
              style: { height: 380 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "iframe",
                {
                  title: "Ma's House Location — Palava City",
                  src: "https://www.openstreetmap.org/export/embed.html?bbox=73.0550%2C19.1600%2C73.0850%2C19.1850&layer=mapnik&marker=19.1584%2C73.0640",
                  width: "100%",
                  height: "380",
                  style: { border: 0, display: "block" },
                  loading: "lazy",
                  allowFullScreen: true
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: MAPS_SEARCH_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "location.view_map_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  className: "gap-2 border-primary text-primary hover:bg-primary/5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
                    "View Full Map on Google Maps"
                  ]
                }
              )
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "max-w-5xl mx-auto px-4 py-12",
        "data-ocid": "location.rating_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-elevated p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              className: "w-8 h-8 text-accent",
              fill: "currentColor",
              strokeWidth: 0
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-accent mb-1", children: "Highly Rated on Justdial" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: 4.9, count: 18 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2 font-body", children: "Customers love our authentic Chinese flavors and warm hospitality. Join them!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.justdial.com",
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "location.justdial_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  className: "gap-2 border-accent text-accent hover:bg-accent/5 shrink-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
                    "See Reviews"
                  ]
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary/5 border-t border-primary/10 py-12 px-4",
        "data-ocid": "location.reservation_cta",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-10 h-10 text-primary mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-sm text-foreground mb-3", children: "Ready to Visit?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 font-body", children: "For reservations and takeaway orders, reach us on WhatsApp — we respond quickly!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: WHATSAPP_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "location.reservation_whatsapp_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  size: "lg",
                  className: "gap-2 font-semibold text-white px-8 shadow-md transition-smooth hover:opacity-90 active:scale-95",
                  style: { backgroundColor: "#25D366" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
                    "Reserve via WhatsApp"
                  ]
                }
              )
            }
          )
        ] })
      }
    )
  ] });
}
export {
  Location as default
};
