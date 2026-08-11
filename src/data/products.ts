import type { ImageMetadata } from "astro";

import ledStatementNecklace from "../assets/images/products/led-statement-necklace.jpg";
import glowStickPartyPack from "../assets/images/products/glow-stick-party-pack.jpg";
import lightUpMagicWand from "../assets/images/products/light-up-magic-wand.jpg";
import colorChangingMoodRing from "../assets/images/products/color-changing-mood-ring.jpg";
import customLogoBlinkeePin from "../assets/images/products/custom-logo-blinkee-pin.jpg";
import vintageStyleChallengeCoin from "../assets/images/products/vintage-style-challenge-coin.jpg";
import ledBraceletMultipack from "../assets/images/products/led-bracelet-multipack.jpg";
import lightUpCocktailCubes from "../assets/images/products/light-up-cocktail-cubes.jpg";
import ledWeddingFavorCharmNecklace from "../assets/images/products/led-wedding-favor-charm-necklace.jpg";
import ledSendOffWands from "../assets/images/products/led-send-off-wands.jpg";
import justMarriedLightUpSign from "../assets/images/products/just-married-light-up-sign.jpg";
import moodRingWeddingFavorSet from "../assets/images/products/mood-ring-wedding-favor-set.jpg";
import customWeddingBlinkeePin from "../assets/images/products/custom-wedding-blinkee-pin.jpg";
import ledBridalSash from "../assets/images/products/led-bridal-sash.jpg";

export interface Product {
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  image: ImageMetadata;
  alt: string;
  badge?: string;
  category: string;
  occasions: string[];
  bestseller?: boolean;
  blurb: string;
}

// Placeholder catalog for portfolio purposes. Products are tagged with
// `occasions` so the same catalog can power both the homepage bestseller
// carousel and the Weddings category grid's filters.
export const products: Product[] = [
  {
    slug: "led-statement-necklace",
    name: "LED Statement Necklace",
    price: 12.99,
    compareAtPrice: 16.99,
    image: ledStatementNecklace,
    alt: "A glowing pink and violet LED statement necklace coiled on a dark background",
    badge: "Bestseller",
    category: "Light Up Products",
    occasions: ["weddings", "bachelorette", "concerts"],
    bestseller: true,
    blurb: "Multi-mode glow, all-night battery, one size glows all.",
  },
  {
    slug: "glow-stick-party-pack",
    name: "Glow Stick Party Pack (50ct)",
    price: 18.99,
    image: glowStickPartyPack,
    alt: "A bundle of colorful glow sticks in pink, cyan, and lime fanned out",
    badge: "Bestseller",
    category: "Chemical Glow",
    occasions: ["birthdays", "sports", "concerts"],
    bestseller: true,
    blurb: "50 sticks, 5 colors, zero batteries. Crack, shake, glow.",
  },
  {
    slug: "light-up-magic-wand",
    name: "Light-Up Magic Wand",
    price: 6.49,
    image: lightUpMagicWand,
    alt: "A light-up magic wand with a glowing star tip in cyan light",
    category: "Light Up Products",
    occasions: ["birthdays", "graduation"],
    bestseller: true,
    blurb: "The favor every kid (and let's be honest, adult) fights over.",
  },
  {
    slug: "color-changing-mood-ring",
    name: "Color-Changing Mood Ring",
    price: 3.99,
    image: colorChangingMoodRing,
    alt: "A color-changing mood ring shifting from violet to cyan on a dark backdrop",
    badge: "Bestseller",
    category: "Mood Rings",
    occasions: ["birthdays", "bachelorette", "graduation"],
    bestseller: true,
    blurb: "Old-school nostalgia, new-school glow. Adjustable band.",
  },
  {
    slug: "custom-logo-blinkee-pin",
    name: "Custom Logo Blinkee Pin",
    price: 2.49,
    image: customLogoBlinkeePin,
    alt: "A round light-up pin blank glowing pink, ready for custom logo imprint",
    badge: "Customizable",
    category: "Custom & Bulk",
    occasions: ["sports", "concerts"],
    bestseller: true,
    blurb: "Your logo, lit up. Minimum 100 units, built for bulk.",
  },
  {
    slug: "vintage-style-challenge-coin",
    name: "Vintage-Style Challenge Coin",
    price: 9.99,
    image: vintageStyleChallengeCoin,
    alt: "A bronze-toned vintage-style challenge coin with ornate detailing",
    category: "Coins & Bills",
    occasions: ["graduation"],
    bestseller: true,
    blurb: "Collector-grade detail, handed down for years to come.",
  },
  {
    slug: "led-bracelet-multipack",
    name: "LED Bracelet Multipack (10ct)",
    price: 14.99,
    image: ledBraceletMultipack,
    alt: "Ten glowing LED bracelets in assorted neon colors stacked together",
    badge: "Bestseller",
    category: "Light Up Products",
    occasions: ["weddings", "birthdays", "sports", "concerts"],
    bestseller: true,
    blurb: "Stack 'em, share 'em, light up the whole dance floor.",
  },
  {
    slug: "light-up-cocktail-cubes",
    name: "Light-Up Cocktail Ice Cubes (6ct)",
    price: 11.99,
    image: lightUpCocktailCubes,
    alt: "Glowing reusable light-up ice cubes in a cocktail glass",
    category: "Light Up Products",
    occasions: ["weddings", "bachelorette"],
    blurb: "Reusable, waterproof, and way cooler than regular ice.",
  },
  {
    slug: "led-wedding-favor-charm-necklace",
    name: "LED Wedding Favor Charm Necklace",
    price: 4.49,
    image: ledWeddingFavorCharmNecklace,
    alt: "A dainty light-up charm necklace glowing soft white, styled as a wedding favor",
    badge: "Wedding Favorite",
    category: "Light Up Products",
    occasions: ["weddings"],
    blurb: "A favor guests actually keep — glows soft white for photos.",
  },
  {
    slug: "led-send-off-wands",
    name: "LED Send-Off Wands (25ct)",
    price: 21.99,
    image: ledSendOffWands,
    alt: "A set of glowing LED send-off wands arranged in a fan shape",
    badge: "Wedding Favorite",
    category: "Light Up Products",
    occasions: ["weddings"],
    blurb: "The sparkler exit, minus the fire hazard and the ash.",
  },
  {
    slug: "just-married-light-up-sign",
    name: '"Just Married" Light-Up Sign',
    price: 24.99,
    image: justMarriedLightUpSign,
    alt: 'A freestanding "Just Married" sign outlined in warm glowing lights',
    category: "Light Up Products",
    occasions: ["weddings"],
    blurb: "Prop it, hang it, get-away-car it. Battery or USB powered.",
  },
  {
    slug: "mood-ring-wedding-favor-set",
    name: "Mood Ring Wedding Favor Set (12ct)",
    price: 32.99,
    image: moodRingWeddingFavorSet,
    alt: "A set of twelve mood rings in individual gift pouches for wedding favors",
    category: "Mood Rings",
    occasions: ["weddings"],
    blurb: "Boxed, ready to gift, and priced to favor a full table.",
  },
  {
    slug: "custom-wedding-blinkee-pin",
    name: "Custom Wedding Date Blinkee Pin",
    price: 3.49,
    image: customWeddingBlinkeePin,
    alt: "A custom light-up pin imprinted with a wedding date, glowing pink",
    badge: "Customizable",
    category: "Custom & Bulk",
    occasions: ["weddings"],
    blurb: "Your names, your date, glowing on every guest's lapel.",
  },
  {
    slug: "led-bridal-sash",
    name: "LED Bridal Party Sash",
    price: 8.99,
    image: ledBridalSash,
    alt: "A satin bridal party sash with glowing pink LED trim",
    category: "Light Up Products",
    occasions: ["weddings", "bachelorette"],
    blurb: "Spot the bride-tribe from across the reception hall.",
  },
];

export function getProductsByOccasion(occasion: string): Product[] {
  return products.filter((p) => p.occasions.includes(occasion));
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller);
}
