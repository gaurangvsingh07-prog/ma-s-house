import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Check,
  ExternalLink,
  Globe,
  MapPin,
  MessageCircle,
  Phone,
  Smartphone,
  Star,
  UtensilsCrossed,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const features = [
  {
    icon: Smartphone,
    label: "Mobile-Friendly Design",
    desc: "Looks great on every phone & screen",
  },
  {
    icon: UtensilsCrossed,
    label: "Full Menu with Prices",
    desc: "Customers browse before they visit",
  },
  {
    icon: Phone,
    label: "One-Tap Call Button",
    desc: "Direct call with a single tap",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Chat",
    desc: "Instant messaging for orders & queries",
  },
  {
    icon: MapPin,
    label: "Location & Directions",
    desc: "Google Maps link so no one gets lost",
  },
  {
    icon: Star,
    label: "4.9★ Rating Showcase",
    desc: "Your reputation front and center",
  },
];

const withWebsite = [
  "Customers find you on Google",
  "Menu available 24/7 online",
  "Professional, trustworthy image",
  "Direct calls & WhatsApp — no middleman",
  "No competitor ads on your page",
  "Rank higher with local SEO",
];

const withoutWebsite = [
  "Invisible to Google searches",
  "Customers must call to ask for menu",
  "Looks less credible to new customers",
  "Dependent on Justdial / Zomato",
  "Competitor ads shown on your listing",
  "Competitors steal your customers online",
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
      "Mobile Responsive Design",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Standard",
    setup: "₹8,000",
    monthly: "₹750/month",
    features: [
      "Everything in Basic",
      "Photo Gallery of Dishes",
      "Customer Testimonials",
      "Google Maps Embed",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Premium",
    setup: "₹15,000",
    monthly: "₹1,000/month",
    features: [
      "Everything in Standard",
      "Online Ordering System",
      "Priority Updates & Support",
      "Custom Domain Setup",
    ],
    popular: false,
    cta: "Go Premium",
  },
];

export default function Pitch() {
  const whatsappUrl =
    "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20restaurant.";

  return (
    <div className="min-h-screen bg-white text-foreground font-body antialiased">
      {/* Floating back button */}
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="pitch.back_button"
        className="fixed top-4 left-4 z-50 flex items-center gap-1.5 bg-white/90 backdrop-blur border border-border text-foreground text-sm font-medium px-3 py-2 rounded-full shadow-md hover:shadow-lg transition-smooth"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Restaurant Site
      </a>

      {/* Minimal pitch header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border/50 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-base text-foreground">
              WebsiteForYou
            </span>
            <Badge
              variant="secondary"
              className="text-xs hidden sm:inline-flex"
            >
              For Restaurant Owners
            </Badge>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="pitch.header_whatsapp_button"
            className="flex items-center gap-1.5 bg-[oklch(0.5_0.18_30)] text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-smooth"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Get in Touch</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section
        data-ocid="pitch.hero_section"
        className="relative overflow-hidden pt-20 pb-24 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.01 30) 0%, oklch(0.99 0.005 75) 60%, oklch(0.97 0.02 70) 100%)",
        }}
      >
        {/* decorative circle */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: "oklch(0.5 0.18 30)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-5"
          style={{ background: "oklch(0.68 0.15 70)" }}
        />

        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-1.5 text-sm font-medium text-foreground/70 mb-6 shadow-sm"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Trusted by restaurants across India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-tight mb-6"
          >
            Your Restaurant Deserves
            <span className="block" style={{ color: "oklch(0.5 0.18 30)" }}>
              a Website Like This
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Get more customers, showcase your menu, and make it easy for people
            to call or WhatsApp you — all from one beautiful website.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="pitch.hero_primary_button"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base shadow-lg hover:opacity-90 active:scale-95 transition-smooth"
              style={{ background: "oklch(0.5 0.18 30)" }}
            >
              <ExternalLink className="w-4 h-4" />
              See the Live Website
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="pitch.hero_secondary_button"
              className="inline-flex items-center justify-center gap-2 bg-white border border-border text-foreground font-semibold px-8 py-4 rounded-xl text-base hover:bg-muted/50 transition-smooth"
            >
              <MessageCircle className="w-4 h-4" />
              Get a Free Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT YOUR CUSTOMERS WILL SEE ─── */}
      <section
        data-ocid="pitch.features_section"
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.68 0.15 70)" }}
            >
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              What Your Customers Will See
            </h2>
            <p className="text-foreground/60 mt-3 max-w-lg mx-auto">
              Everything a customer needs — in one polished, easy-to-use
              website.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card
                  data-ocid={`pitch.feature_card.item.${i + 1}`}
                  className="border border-border/60 hover:shadow-md transition-smooth h-full"
                >
                  <CardContent className="pt-6 pb-6 px-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "oklch(0.96 0.03 30)" }}
                    >
                      <f.icon
                        className="w-5 h-5"
                        style={{ color: "oklch(0.5 0.18 30)" }}
                      />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {f.label}
                    </h3>
                    <p className="text-sm text-foreground/55 leading-relaxed">
                      {f.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY YOU NEED A WEBSITE ─── */}
      <section
        data-ocid="pitch.comparison_section"
        className="py-20 px-4"
        style={{ background: "oklch(0.97 0.01 30)" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.68 0.15 70)" }}
            >
              Why It Matters
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Why You Need a Website
            </h2>
            <p className="text-foreground/60 mt-3">
              The difference between being found — and being invisible.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* With Website */}
            <Card
              data-ocid="pitch.with_website_card"
              className="border-0 shadow-md overflow-hidden"
            >
              <CardHeader
                className="pb-3 pt-5 px-6"
                style={{ background: "oklch(0.5 0.18 30)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg font-display">
                    With a Website
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3 bg-white">
                {withWebsite.map((item) => (
                  <div
                    key={item}
                    data-ocid={`pitch.with_website.item.${withWebsite.indexOf(item) + 1}`}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ background: "oklch(0.95 0.05 30)" }}
                    >
                      <Check
                        className="w-3 h-3"
                        style={{ color: "oklch(0.5 0.18 30)" }}
                      />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Without Website */}
            <Card
              data-ocid="pitch.without_website_card"
              className="border-0 shadow-md overflow-hidden"
            >
              <CardHeader className="pb-3 pt-5 px-6 bg-foreground/5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center">
                    <X className="w-4 h-4 text-foreground/40" />
                  </div>
                  <h3 className="font-bold text-foreground/50 text-lg font-display">
                    Without a Website
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3 bg-white">
                {withoutWebsite.map((item) => (
                  <div
                    key={item}
                    data-ocid={`pitch.without_website.item.${withoutWebsite.indexOf(item) + 1}`}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 bg-destructive/10">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="text-sm text-foreground/50 leading-relaxed line-through decoration-foreground/30">
                      {item}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section
        data-ocid="pitch.pricing_section"
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.68 0.15 70)" }}
            >
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Simple, Transparent Pricing
            </h2>
            <p className="text-foreground/60 mt-3">
              One-time setup fee + a small monthly maintenance cost. No hidden
              charges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className={plan.popular ? "md:-mt-4" : ""}
              >
                <Card
                  data-ocid={`pitch.pricing_card.item.${i + 1}`}
                  className={`relative overflow-hidden border transition-smooth ${
                    plan.popular
                      ? "border-primary shadow-xl"
                      : "border-border shadow-sm hover:shadow-md"
                  }`}
                >
                  {plan.popular && (
                    <div
                      className="absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-bold text-white uppercase tracking-wider"
                      style={{ background: "oklch(0.5 0.18 30)" }}
                    >
                      ⚡ Most Popular
                    </div>
                  )}
                  <CardContent
                    className={`p-6 ${plan.popular ? "pt-10" : "pt-6"}`}
                  >
                    <h3 className="font-bold text-xl font-display text-foreground mb-1">
                      {plan.name}
                    </h3>
                    <div className="mb-1">
                      <span
                        className="text-3xl font-bold"
                        style={{ color: "oklch(0.5 0.18 30)" }}
                      >
                        {plan.setup}
                      </span>
                      <span className="text-foreground/50 text-sm ml-1">
                        setup
                      </span>
                    </div>
                    <div className="text-foreground/60 text-sm mb-6">
                      + {plan.monthly}
                    </div>

                    <Separator className="mb-6" />

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-foreground"
                        >
                          <Check
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: "oklch(0.5 0.18 30)" }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`pitch.pricing_cta.item.${i + 1}`}
                      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-sm transition-smooth ${
                        plan.popular
                          ? "text-white hover:opacity-90"
                          : "border border-border text-foreground hover:bg-muted/50"
                      }`}
                      style={
                        plan.popular ? { background: "oklch(0.5 0.18 30)" } : {}
                      }
                    >
                      <MessageCircle className="w-4 h-4" />
                      {plan.popular ? "Get This Plan" : "Get Started"}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THIS DEMO WAS BUILT FOR ─── */}
      <section
        data-ocid="pitch.demo_section"
        className="py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.5 0.18 30) 0%, oklch(0.45 0.2 25) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-white/80 mb-6">
              <Zap className="w-4 h-4" />
              Live Demo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              This Website Was Built For
            </h2>
            <h3
              className="text-2xl font-bold font-display mb-2"
              style={{ color: "oklch(0.9 0.12 70)" }}
            >
              Ma's House Chinese Cuisine
            </h3>
            <p className="text-white/70 text-base mb-1">
              Shop No. 2, Bunglow 89, Shiv Mandir, 2Green Park
            </p>
            <p className="text-white/70 text-base mb-1">
              Lodha Palava, Casa Rio Main Road
            </p>
            <p className="text-white/70 text-base mb-6">
              Palava City, Thane – 421204, Maharashtra
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 text-sm text-white/60">
              <span className="flex items-center justify-center gap-1.5">
                <Phone className="w-4 h-4" />
                +91 79471 04205
              </span>
              <span className="hidden sm:block">·</span>
              <span className="flex items-center justify-center gap-1.5">
                <MessageCircle className="w-4 h-4" />
                +91 88263 92458 (WhatsApp)
              </span>
            </div>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="pitch.demo_live_preview_button"
              className="inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-xl text-base hover:bg-white/90 transition-smooth shadow-lg"
              style={{ color: "oklch(0.5 0.18 30)" }}
            >
              <ExternalLink className="w-4 h-4" />
              View Live Preview
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA FOOTER ─── */}
      <section
        data-ocid="pitch.cta_footer_section"
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ background: "oklch(0.96 0.03 30)" }}
            >
              <Globe
                className="w-8 h-8"
                style={{ color: "oklch(0.5 0.18 30)" }}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Ready to Get Your Restaurant Online?
            </h2>
            <p className="text-foreground/60 text-lg mb-8 max-w-md mx-auto leading-relaxed">
              Reach out on WhatsApp and I'll get your website ready within a few
              days. Affordable pricing, no technical knowledge needed.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="pitch.cta_whatsapp_button"
              className="inline-flex items-center gap-3 text-white font-bold px-10 py-4 rounded-2xl text-lg hover:opacity-90 active:scale-95 transition-smooth shadow-lg"
              style={{ background: "oklch(0.48 0.19 148)" }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            <p className="text-sm text-foreground/40 mt-5">
              Tap to open WhatsApp · Reply anytime · No commitment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Minimal bottom bar */}
      <div className="bg-muted/30 border-t border-border/50 py-4 px-4 text-center">
        <p className="text-xs text-foreground/40">
          © {new Date().getFullYear()} · Professional website services for
          Indian restaurants ·{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            View Demo Site
          </a>
        </p>
      </div>
    </div>
  );
}
