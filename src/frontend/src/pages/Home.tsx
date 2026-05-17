import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";
import { restaurant } from "../data";

const featuredDishes = [
  {
    name: "Chicken Hong Kong Noodles",
    description:
      "Silky Hong Kong-style noodles tossed with tender chicken, spring onions, and a savory oyster-soy glaze",
    price: 252,
    isVeg: false,
    emoji: "🍜",
  },
  {
    name: "Chicken Burnt Garlic Noodles",
    description:
      "Wok-charred noodles infused with smoky caramelized garlic and succulent chicken strips",
    price: 266,
    isVeg: false,
    emoji: "🥢",
  },
  {
    name: "Veg Chinese Bhel",
    description:
      "Crispy fried noodles tossed with fresh veggies, tangy sauces, and a zesty street-style crunch",
    price: 308,
    isVeg: true,
    emoji: "🥗",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(rating)
              ? "fill-accent text-accent"
              : star - 0.5 <= rating
                ? "fill-accent/50 text-accent"
                : "fill-none text-accent/40"
          }`}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const whatsappUrl = `https://wa.me/${restaurant.contact.whatsapp}?text=${encodeURIComponent("Hi, I'd like to place an order")}`;
  const phoneHref = `tel:${restaurant.contact.phone}`;
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.28 0.12 30) 0%, oklch(0.18 0.08 25) 40%, oklch(0.12 0.05 20) 100%)",
        }}
        data-ocid="home.hero"
      >
        {/* Decorative golden orb */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.68 0.15 70) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.5 0.18 30) 0%, transparent 70%)",
            transform: "translate(-40%, 40%)",
          }}
          aria-hidden="true"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.68 0.15 70 / 0.6) 1px, transparent 1px), linear-gradient(90deg, oklch(0.68 0.15 70 / 0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
          {/* Location label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest"
              style={{
                borderColor: "oklch(0.68 0.15 70 / 0.4)",
                color: "oklch(0.68 0.15 70)",
                background: "oklch(0.68 0.15 70 / 0.08)",
              }}
            >
              <UtensilsCrossed className="w-3 h-3" />
              Palava City, Maharashtra
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2"
          >
            <h1
              className="font-display text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight"
              style={{ color: "oklch(0.96 0.015 75)" }}
            >
              Ma's House
            </h1>
            <p
              className="font-display text-lg md:text-2xl font-semibold tracking-widest uppercase"
              style={{ color: "oklch(0.68 0.15 70)" }}
            >
              Chinese Cuisine Restaurant
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-display italic text-2xl md:text-3xl font-medium"
            style={{ color: "oklch(0.85 0.04 60)" }}
          >
            "Taste of Home"
          </motion.p>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full"
            style={{
              background: "oklch(0.68 0.15 70 / 0.12)",
              border: "1px solid oklch(0.68 0.15 70 / 0.3)",
            }}
            data-ocid="home.rating_badge"
          >
            <StarRating rating={4.9} />
            <span
              className="font-semibold text-sm"
              style={{ color: "oklch(0.68 0.15 70)" }}
            >
              4.9
            </span>
            <span className="text-xs" style={{ color: "oklch(0.75 0.03 60)" }}>
              · 18 Reviews
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 items-center"
          >
            <Link to="/menu" data-ocid="home.view_menu_button">
              <Button
                type="button"
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-full transition-smooth hover:scale-105 active:scale-95 shadow-lg border-0"
                style={{
                  background: "oklch(0.5 0.18 30)",
                  color: "oklch(0.96 0.015 75)",
                  boxShadow: "0 4px 24px oklch(0.5 0.18 30 / 0.5)",
                }}
              >
                View Menu
              </Button>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.hero_whatsapp_button"
            >
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-semibold rounded-full transition-smooth hover:scale-105 active:scale-95"
                style={{
                  borderColor: "oklch(0.68 0.15 70 / 0.6)",
                  color: "oklch(0.68 0.15 70)",
                  background: "transparent",
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
            <a href={phoneHref} data-ocid="home.hero_call_button">
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-semibold rounded-full transition-smooth hover:scale-105 active:scale-95"
                style={{
                  borderColor: "oklch(0.5 0.18 30 / 0.6)",
                  color: "oklch(0.96 0.015 75)",
                  background: "oklch(0.5 0.18 30 / 0.15)",
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          type="button"
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-smooth hover:opacity-70"
          style={{ color: "oklch(0.68 0.15 70 / 0.6)" }}
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          aria-label="Scroll to about section"
          data-ocid="home.scroll_indicator"
        >
          <span
            className="uppercase tracking-widest"
            style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
          >
            Scroll
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </section>

      {/* ── About Section ──────────────────────────────────────────── */}
      <section
        id="about"
        className="bg-background py-24 px-4"
        data-ocid="home.about_section"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="label-accent">Our Story</span>
            <h2 className="heading-md text-foreground">
              Authentic Chinese Flavors in Palava City
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tucked in the heart of Palava City, Ma's House is your cozy escape
              for an evening of hearty Chinese flavors. Whether you're craving
              smoky burnt garlic noodles, crispy snacks, or a steaming bowl of
              Manchow soup — every bite feels like it was made just for you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We open our doors every evening, welcoming families, friends, and
              solo foodies alike. From comforting soups to bold main courses,
              our kitchen blends Indo-Chinese traditions with home-style warmth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                style={{
                  borderColor: "oklch(0.5 0.18 30 / 0.25)",
                  background: "oklch(0.5 0.18 30 / 0.05)",
                }}
                data-ocid="home.hours_badge"
              >
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Open Daily</p>
                  <p className="text-sm font-semibold text-foreground">
                    4:00 PM – 11:30 PM
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                style={{
                  borderColor: "oklch(0.68 0.15 70 / 0.3)",
                  background: "oklch(0.68 0.15 70 / 0.06)",
                }}
                data-ocid="home.price_badge"
              >
                <span className="text-lg font-bold text-accent leading-none">
                  ₹
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Price Range</p>
                  <p className="text-sm font-semibold text-foreground">
                    ₹200 – ₹400 per person
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-2xl overflow-hidden p-8 flex flex-col items-center justify-center min-h-[320px] text-center relative"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.28 0.12 30) 0%, oklch(0.20 0.08 25) 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 80%, oklch(0.68 0.15 70) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.5 0.18 30) 0%, transparent 50%)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 space-y-5">
                <div className="text-6xl">🏮</div>
                <div>
                  <p
                    className="font-display text-2xl font-bold"
                    style={{ color: "oklch(0.96 0.015 75)" }}
                  >
                    Evening Dining
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "oklch(0.68 0.15 70)" }}
                  >
                    Every day, 4 PM onwards
                  </p>
                </div>
                <div
                  className="h-px w-16 mx-auto"
                  style={{ background: "oklch(0.68 0.15 70 / 0.4)" }}
                />
                <div className="flex flex-wrap justify-center gap-2">
                  {["Dine In", "Takeaway", "Home Delivery"].map((option) => (
                    <Badge
                      key={option}
                      variant="outline"
                      className="text-xs"
                      style={{
                        borderColor: "oklch(0.68 0.15 70 / 0.35)",
                        color: "oklch(0.85 0.06 70)",
                      }}
                    >
                      {option}
                    </Badge>
                  ))}
                </div>
                <div
                  className="flex items-start justify-center gap-1.5 pt-1"
                  style={{ color: "oklch(0.70 0.03 55)" }}
                >
                  <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <p className="text-xs leading-relaxed max-w-[200px]">
                    Shop No.2, Green Park Bungalow, Palava City
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Dishes ─────────────────────────────────────────── */}
      <section
        className="py-24 px-4"
        style={{ background: "oklch(0.94 0.018 75)" }}
        data-ocid="home.featured_section"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="label-accent">Chef's Picks</span>
            <h2 className="heading-md text-foreground mt-2">Our Favorites</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Dishes our regulars keep coming back for — bold flavors, generous
              portions, unforgettable taste.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-3 gap-6"
            data-ocid="home.featured_dishes_list"
          >
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group card-elevated rounded-xl overflow-hidden"
                data-ocid={`home.featured_dish.${index + 1}`}
              >
                {/* Color bar */}
                <div
                  className="h-2"
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(90deg, oklch(0.5 0.18 30), oklch(0.6 0.2 35))"
                        : index === 1
                          ? "linear-gradient(90deg, oklch(0.45 0.16 25), oklch(0.55 0.2 28))"
                          : "linear-gradient(90deg, oklch(0.68 0.15 70), oklch(0.75 0.12 75))",
                  }}
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-3xl leading-none">{dish.emoji}</span>
                    <div className="flex items-center gap-1.5">
                      {dish.isVeg && (
                        <span
                          className="w-4 h-4 border-2 border-green-600 flex items-center justify-center rounded-sm flex-shrink-0"
                          title="Vegetarian"
                          aria-label="Vegetarian"
                        >
                          <span className="w-2 h-2 bg-green-600 rounded-full block" />
                        </span>
                      )}
                      <span className="font-bold text-xl text-primary">
                        ₹{dish.price}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="heading-sm text-foreground mb-1.5 leading-snug group-hover:text-primary transition-smooth">
                      {dish.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-smooth group"
              data-ocid="home.see_full_menu_link"
            >
              See Full Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WhatsApp CTA Strip ──────────────────────────────────────── */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.32 0.14 28) 0%, oklch(0.22 0.1 25) 100%)",
        }}
        data-ocid="home.cta_section"
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.68 0.15 70) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-2xl mx-auto text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.68 0.15 70)" }}
            >
              Order Now
            </span>
            <h2
              className="heading-md"
              style={{ color: "oklch(0.96 0.015 75)" }}
            >
              Ready to Order?
            </h2>
            <p
              className="mt-3 text-base leading-relaxed"
              style={{ color: "oklch(0.78 0.03 55)" }}
            >
              Skip the wait — chat with us directly on WhatsApp. We'll take your
              order and have it ready for you in no time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.whatsapp_order_button"
            >
              <Button
                type="button"
                size="lg"
                className="px-10 py-6 text-base font-semibold rounded-full shadow-xl transition-smooth hover:scale-105 active:scale-95 border-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.68 0.15 70) 0%, oklch(0.60 0.18 65) 100%)",
                  color: "oklch(0.15 0.05 30)",
                  boxShadow: "0 8px 32px oklch(0.68 0.15 70 / 0.35)",
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
            <a href={phoneHref} data-ocid="home.cta_call_button">
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="px-10 py-6 text-base font-semibold rounded-full transition-smooth hover:scale-105 active:scale-95"
                style={{
                  borderColor: "oklch(0.68 0.15 70 / 0.5)",
                  color: "oklch(0.96 0.015 75)",
                  background: "oklch(0.68 0.15 70 / 0.1)",
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
            </a>
          </motion.div>

          <div
            className="flex items-start justify-center gap-1.5"
            style={{ color: "oklch(0.62 0.03 55)" }}
          >
            <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Shop No.2, Green Park Bungalow, Palava City
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
