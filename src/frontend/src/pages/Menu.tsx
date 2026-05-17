import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { menuCategories, menuItems, restaurant } from "../data";
import type { MenuItem } from "../types";

const WHATSAPP_URL = `https://wa.me/${restaurant.contact.whatsapp}?text=${encodeURIComponent("Hi! I'd like to place an order from Ma's House.")}`;

function VegIndicator({ isVeg }: { isVeg: boolean }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-5 h-5 rounded-sm border-2 ${
        isVeg ? "border-green-600 bg-green-50" : "border-red-600 bg-red-50"
      } flex-shrink-0`}
      title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
      aria-label={isVeg ? "Vegetarian" : "Non-Vegetarian"}
    >
      <span
        className={`w-2.5 h-2.5 rounded-full ${
          isVeg ? "bg-green-600" : "bg-red-600"
        }`}
      />
    </span>
  );
}

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
      className="card-elevated p-5 flex flex-col gap-3 relative"
      data-ocid={`menu.item.${index + 1}`}
    >
      {item.isSignature && (
        <span className="absolute top-3 right-3">
          <Badge
            variant="secondary"
            className="text-[10px] font-semibold uppercase tracking-wide bg-accent/20 text-accent border-accent/30 px-2 py-0.5"
          >
            <Star className="w-2.5 h-2.5 mr-1 fill-current" />
            Chef's Pick
          </Badge>
        </span>
      )}

      <div className="flex items-start gap-3">
        <VegIndicator isVeg={item.isVeg} />
        <div className="flex-1 min-w-0 pr-16">
          <h3 className="font-display font-semibold text-foreground leading-snug text-[15px]">
            {item.name}
          </h3>
          <p className="text-muted-foreground text-sm mt-1 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/60">
        <span className="font-display font-bold text-lg text-accent tracking-tight">
          ₹{item.price}
        </span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors duration-200 underline-offset-2 hover:underline"
          data-ocid={`menu.order_button.${index + 1}`}
        >
          Order →
        </a>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const vegCount = filteredItems.filter((i) => i.isVeg).length;
  const nonVegCount = filteredItems.filter((i) => !i.isVeg).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-card border-b border-border py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            className="label-accent mb-3"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore Our Dishes
          </motion.p>
          <motion.h1
            className="heading-lg text-foreground mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Menu
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-display italic text-accent font-medium"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fresh. Flavorful. Authentic.
          </motion.p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Price range note */}
        <motion.div
          className="flex items-center gap-2 mb-6 text-sm text-muted-foreground bg-muted/40 rounded-md px-4 py-2.5 w-fit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className="text-accent font-semibold">₹</span>
          <span>Inexpensive &bull; ₹200–₹400 per person</span>
        </motion.div>

        {/* Category Tab Bar */}
        <motion.div
          className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          data-ocid="menu.category_tabs"
        >
          {menuCategories.map((cat) => {
            const count =
              cat.id === "all"
                ? menuItems.length
                : menuItems.filter((i) => i.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                data-ocid={`menu.tab.${cat.id}`}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-smooth border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-foreground border-border hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                {cat.label}
                <span
                  className={`ml-2 text-xs font-normal ${
                    isActive
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Item count summary */}
        <div className="flex items-center gap-4 mb-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-green-600 inline-block" />
            {vegCount} Veg
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
            {nonVegCount} Non-Veg
          </span>
          <span className="ml-auto text-xs text-muted-foreground/70">
            {filteredItems.length} items
          </span>
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            data-ocid="menu.items_grid"
          >
            {filteredItems.length === 0 ? (
              <div
                className="col-span-full text-center py-16 text-muted-foreground"
                data-ocid="menu.empty_state"
              >
                <p className="font-display text-lg">
                  No items in this category yet.
                </p>
                <p className="text-sm mt-1">Check back soon!</p>
              </div>
            ) : (
              filteredItems.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* WhatsApp Order CTA */}
        <motion.div
          className="mt-12 bg-card border border-border rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="menu.whatsapp_cta"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
            <SiWhatsapp className="w-7 h-7 text-green-600" />
          </div>
          <h2 className="font-display font-semibold text-xl text-foreground mb-2">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto">
            Message us directly on WhatsApp — we'll confirm your order and have
            it ready.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              type="button"
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 gap-2 transition-smooth"
              data-ocid="menu.whatsapp_order_button"
            >
              <SiWhatsapp className="w-5 h-5" />
              Order via WhatsApp
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            {restaurant.contact.displayPhone} &bull; Open{" "}
            {restaurant.hours.open}–{restaurant.hours.close}
          </p>
        </motion.div>
      </section>
    </div>
  );
}
