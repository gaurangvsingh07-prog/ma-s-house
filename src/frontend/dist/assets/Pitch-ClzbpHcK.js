import { c as createLucideIcon, j as jsxRuntimeExports, d as cn, U as UtensilsCrossed, P as Phone, M as MapPin, X } from "./index-DkC7pw5z.js";
import { B as Badge, S as Star } from "./badge-Dz8JvNmY.js";
import { E as ExternalLink, S as Separator } from "./separator-Dfl9jflW.js";
import { M as MessageCircle } from "./message-circle-DPNrnjSF.js";
import { m as motion } from "./proxy-Cva2Lfts.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
  })
};
const features = [
  {
    icon: Smartphone,
    label: "Mobile-Friendly Design",
    desc: "Looks great on every phone & screen"
  },
  {
    icon: UtensilsCrossed,
    label: "Full Menu with Prices",
    desc: "Customers browse before they visit"
  },
  {
    icon: Phone,
    label: "One-Tap Call Button",
    desc: "Direct call with a single tap"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Chat",
    desc: "Instant messaging for orders & queries"
  },
  {
    icon: MapPin,
    label: "Location & Directions",
    desc: "Google Maps link so no one gets lost"
  },
  {
    icon: Star,
    label: "4.9★ Rating Showcase",
    desc: "Your reputation front and center"
  }
];
const withWebsite = [
  "Customers find you on Google",
  "Menu available 24/7 online",
  "Professional, trustworthy image",
  "Direct calls & WhatsApp — no middleman",
  "No competitor ads on your page",
  "Rank higher with local SEO"
];
const withoutWebsite = [
  "Invisible to Google searches",
  "Customers must call to ask for menu",
  "Looks less credible to new customers",
  "Dependent on Justdial / Zomato",
  "Competitor ads shown on your listing",
  "Competitors steal your customers online"
];
const plans = [
  {
    name: "Basic",
    setup: "₹5,000",
    monthly: "₹500/month",
    features: [
      "Full Menu with Prices",
      "Location & Hours Page",
      "WhatsApp & Call Buttons",
      "Mobile Responsive Design"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Standard",
    setup: "₹8,000",
    monthly: "₹750/month",
    features: [
      "Everything in Basic",
      "Photo Gallery of Dishes",
      "Customer Testimonials",
      "Google Maps Embed"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Premium",
    setup: "₹15,000",
    monthly: "₹1,000/month",
    features: [
      "Everything in Standard",
      "Online Ordering System",
      "Priority Updates & Support",
      "Custom Domain Setup"
    ],
    popular: false,
    cta: "Go Premium"
  }
];
function Pitch() {
  const whatsappUrl = "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20restaurant.";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-foreground font-body antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "/",
        target: "_blank",
        rel: "noopener noreferrer",
        "data-ocid": "pitch.back_button",
        className: "fixed top-4 left-4 z-50 flex items-center gap-1.5 bg-white/90 backdrop-blur border border-border text-foreground text-sm font-medium px-3 py-2 rounded-full shadow-md hover:shadow-lg transition-smooth",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
          "Restaurant Site"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border/50 px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-base text-foreground", children: "WebsiteForYou" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "secondary",
            className: "text-xs hidden sm:inline-flex",
            children: "For Restaurant Owners"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: whatsappUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          "data-ocid": "pitch.header_whatsapp_button",
          className: "flex items-center gap-1.5 bg-[oklch(0.5_0.18_30)] text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Get in Touch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Chat" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "pitch.hero_section",
        className: "relative overflow-hidden pt-20 pb-24 px-4",
        style: {
          background: "linear-gradient(135deg, oklch(0.97 0.01 30) 0%, oklch(0.99 0.005 75) 60%, oklch(0.97 0.02 70) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10",
              style: { background: "oklch(0.5 0.18 30)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-5",
              style: { background: "oklch(0.68 0.15 70)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.5 },
                className: "inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-1.5 text-sm font-medium text-foreground/70 mb-6 shadow-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }),
                  "Trusted by restaurants across India"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.1 },
                className: "text-4xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-tight mb-6",
                children: [
                  "Your Restaurant Deserves",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", style: { color: "oklch(0.5 0.18 30)" }, children: "a Website Like This" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "text-lg md:text-xl text-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed",
                children: "Get more customers, showcase your menu, and make it easy for people to call or WhatsApp you — all from one beautiful website."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.3 },
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-ocid": "pitch.hero_primary_button",
                      className: "inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base shadow-lg hover:opacity-90 active:scale-95 transition-smooth",
                      style: { background: "oklch(0.5 0.18 30)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
                        "See the Live Website"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: whatsappUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-ocid": "pitch.hero_secondary_button",
                      className: "inline-flex items-center justify-center gap-2 bg-white border border-border text-foreground font-semibold px-8 py-4 rounded-xl text-base hover:bg-muted/50 transition-smooth",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                        "Get a Free Quote"
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "pitch.features_section",
        className: "py-20 px-4 bg-white",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              custom: 0,
              variants: fadeUp,
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-semibold uppercase tracking-widest mb-3",
                    style: { color: "oklch(0.68 0.15 70)" },
                    children: "Features"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground", children: "What Your Customers Will See" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 mt-3 max-w-lg mx-auto", children: "Everything a customer needs — in one polished, easy-to-use website." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              custom: i,
              variants: fadeUp,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Card,
                {
                  "data-ocid": `pitch.feature_card.item.${i + 1}`,
                  className: "border border-border/60 hover:shadow-md transition-smooth h-full",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 pb-6 px-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-11 h-11 rounded-xl flex items-center justify-center mb-4",
                        style: { background: "oklch(0.96 0.03 30)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          f.icon,
                          {
                            className: "w-5 h-5",
                            style: { color: "oklch(0.5 0.18 30)" }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-1", children: f.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/55 leading-relaxed", children: f.desc })
                  ] })
                }
              )
            },
            f.label
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "pitch.comparison_section",
        className: "py-20 px-4",
        style: { background: "oklch(0.97 0.01 30)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              custom: 0,
              variants: fadeUp,
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-semibold uppercase tracking-widest mb-3",
                    style: { color: "oklch(0.68 0.15 70)" },
                    children: "Why It Matters"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground", children: "Why You Need a Website" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 mt-3", children: "The difference between being found — and being invisible." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              custom: 1,
              variants: fadeUp,
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Card,
                  {
                    "data-ocid": "pitch.with_website_card",
                    className: "border-0 shadow-md overflow-hidden",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CardHeader,
                        {
                          className: "pb-3 pt-5 px-6",
                          style: { background: "oklch(0.5 0.18 30)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-white/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-white" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white text-lg font-display", children: "With a Website" })
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6 space-y-3 bg-white", children: withWebsite.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          "data-ocid": `pitch.with_website.item.${withWebsite.indexOf(item) + 1}`,
                          className: "flex items-start gap-3",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0",
                                style: { background: "oklch(0.95 0.05 30)" },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Check,
                                  {
                                    className: "w-3 h-3",
                                    style: { color: "oklch(0.5 0.18 30)" }
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground leading-relaxed", children: item })
                          ]
                        },
                        item
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Card,
                  {
                    "data-ocid": "pitch.without_website_card",
                    className: "border-0 shadow-md overflow-hidden",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-5 px-6 bg-foreground/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-foreground/40" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground/50 text-lg font-display", children: "Without a Website" })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6 space-y-3 bg-white", children: withoutWebsite.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          "data-ocid": `pitch.without_website.item.${withoutWebsite.indexOf(item) + 1}`,
                          className: "flex items-start gap-3",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3 text-destructive" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/50 leading-relaxed line-through decoration-foreground/30", children: item })
                          ]
                        },
                        item
                      )) })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "pitch.pricing_section",
        className: "py-20 px-4 bg-white",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              custom: 0,
              variants: fadeUp,
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-semibold uppercase tracking-widest mb-3",
                    style: { color: "oklch(0.68 0.15 70)" },
                    children: "Pricing"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground", children: "Simple, Transparent Pricing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 mt-3", children: "One-time setup fee + a small monthly maintenance cost. No hidden charges." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 items-start", children: plans.map((plan, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              custom: i,
              variants: fadeUp,
              className: plan.popular ? "md:-mt-4" : "",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Card,
                {
                  "data-ocid": `pitch.pricing_card.item.${i + 1}`,
                  className: `relative overflow-hidden border transition-smooth ${plan.popular ? "border-primary shadow-xl" : "border-border shadow-sm hover:shadow-md"}`,
                  children: [
                    plan.popular && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-bold text-white uppercase tracking-wider",
                        style: { background: "oklch(0.5 0.18 30)" },
                        children: "⚡ Most Popular"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      CardContent,
                      {
                        className: `p-6 ${plan.popular ? "pt-10" : "pt-6"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl font-display text-foreground mb-1", children: plan.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-3xl font-bold",
                                style: { color: "oklch(0.5 0.18 30)" },
                                children: plan.setup
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/50 text-sm ml-1", children: "setup" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground/60 text-sm mb-6", children: [
                            "+ ",
                            plan.monthly
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-6" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-8", children: plan.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "li",
                            {
                              className: "flex items-start gap-2.5 text-sm text-foreground",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Check,
                                  {
                                    className: "w-4 h-4 mt-0.5 flex-shrink-0",
                                    style: { color: "oklch(0.5 0.18 30)" }
                                  }
                                ),
                                feature
                              ]
                            },
                            feature
                          )) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "a",
                            {
                              href: whatsappUrl,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              "data-ocid": `pitch.pricing_cta.item.${i + 1}`,
                              className: `w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-sm transition-smooth ${plan.popular ? "text-white hover:opacity-90" : "border border-border text-foreground hover:bg-muted/50"}`,
                              style: plan.popular ? { background: "oklch(0.5 0.18 30)" } : {},
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                                plan.popular ? "Get This Plan" : "Get Started"
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            },
            plan.name
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "pitch.demo_section",
        className: "py-20 px-4",
        style: {
          background: "linear-gradient(135deg, oklch(0.5 0.18 30) 0%, oklch(0.45 0.2 25) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            custom: 0,
            variants: fadeUp,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-white/80 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                "Live Demo"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-white mb-4", children: "This Website Was Built For" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "text-2xl font-bold font-display mb-2",
                  style: { color: "oklch(0.9 0.12 70)" },
                  children: "Ma's House Chinese Cuisine"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-base mb-1", children: "Shop No. 2, Bunglow 89, Shiv Mandir, 2Green Park" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-base mb-1", children: "Lodha Palava, Casa Rio Main Road" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-base mb-6", children: "Palava City, Thane – 421204, Maharashtra" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center mb-8 text-sm text-white/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                  "+91 79471 04205"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                  "+91 88263 92458 (WhatsApp)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "pitch.demo_live_preview_button",
                  className: "inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-xl text-base hover:bg-white/90 transition-smooth shadow-lg",
                  style: { color: "oklch(0.5 0.18 30)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
                    "View Live Preview"
                  ]
                }
              )
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "pitch.cta_footer_section",
        className: "py-20 px-4 bg-white",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            custom: 0,
            variants: fadeUp,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center",
                  style: { background: "oklch(0.96 0.03 30)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Globe,
                    {
                      className: "w-8 h-8",
                      style: { color: "oklch(0.5 0.18 30)" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground mb-4", children: "Ready to Get Your Restaurant Online?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 text-lg mb-8 max-w-md mx-auto leading-relaxed", children: "Reach out on WhatsApp and I'll get your website ready within a few days. Affordable pricing, no technical knowledge needed." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: whatsappUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "pitch.cta_whatsapp_button",
                  className: "inline-flex items-center gap-3 text-white font-bold px-10 py-4 rounded-2xl text-lg hover:opacity-90 active:scale-95 transition-smooth shadow-lg",
                  style: { background: "oklch(0.48 0.19 148)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
                    "Chat on WhatsApp"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/40 mt-5", children: "Tap to open WhatsApp · Reply anytime · No commitment" })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 border-t border-border/50 py-4 px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-foreground/40", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " · Professional website services for Indian restaurants ·",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hover:text-primary transition-colors",
          children: "View Demo Site"
        }
      )
    ] }) })
  ] });
}
export {
  Pitch as default
};
