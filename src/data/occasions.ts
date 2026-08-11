import type { ImageMetadata } from "astro";

import weddingsImg from "../assets/images/occasions/weddings-v2.jpg";
import birthdaysImg from "../assets/images/occasions/birthdays-v2.jpg";
import graduationImg from "../assets/images/occasions/graduation-v2.jpg";
import bacheloretteImg from "../assets/images/occasions/bachelorette-v2.jpg";
import sportsImg from "../assets/images/occasions/sports-v2.jpg";
import concertsImg from "../assets/images/occasions/concerts-v2.jpg";
import holidaysImg from "../assets/images/occasions/holidays-v2.jpg";
import babyShowersImg from "../assets/images/occasions/baby-showers.jpg";

export interface Occasion {
  slug: string;
  name: string;
  tagline: string;
  image: ImageMetadata;
  alt: string;
  href: string;
  /**
   * Portfolio scope note: only Weddings and Holidays have dedicated pages.
   * The remaining occasion cards intentionally route to /weddings/ as a
   * live stand-in category page rather than dead-ending, since the goal
   * is "find your occasion within 1-2 clicks" even where a bespoke page
   * wasn't in scope for this build.
   */
  isStandIn?: boolean;
}

export const occasions: Occasion[] = [
  {
    slug: "weddings",
    name: "Weddings",
    tagline: "Favors & send-offs guests keep",
    image: weddingsImg,
    alt: "Glowing LED send-off wands and a soft-glowing charm necklace styled among florals for a wedding reception",
    href: "/weddings/",
  },
  {
    slug: "birthdays",
    name: "Birthdays",
    tagline: "Glow-up the whole party",
    image: birthdaysImg,
    alt: "Colorful glow sticks, a light-up magic wand, and glowing balloons on a birthday party table",
    href: "/weddings/",
    isStandIn: true,
  },
  {
    slug: "graduation",
    name: "Graduation",
    tagline: "Light up their big night",
    image: graduationImg,
    alt: "A glowing LED graduation cap and light-up sash laid out with confetti",
    href: "/weddings/",
    isStandIn: true,
  },
  {
    slug: "bachelorette",
    name: "Bachelorette",
    tagline: "Bride tribe, but make it glow",
    image: bacheloretteImg,
    alt: "A glowing pink LED party sash with stacked LED bracelets and a color-changing mood ring",
    href: "/weddings/",
    isStandIn: true,
  },
  {
    slug: "sports",
    name: "Sports & Teams",
    tagline: "Bulk gear that rallies a crowd",
    image: sportsImg,
    alt: "A crowd at a nighttime stadium event holding glowing LED wristbands and glow sticks",
    href: "/weddings/",
    isStandIn: true,
  },
  {
    slug: "concerts",
    name: "Concerts & Festivals",
    tagline: "Be seen from the nosebleeds",
    image: concertsImg,
    alt: "A concert festival crowd at night holding glowing LED wands and bracelets in the air",
    href: "/weddings/",
    isStandIn: true,
  },
  {
    slug: "holidays",
    name: "Holidays",
    tagline: "Halloween to NYE, covered",
    image: holidaysImg,
    alt: "A festive holiday tablescape with glowing jack-o-lantern lights, ornament lights, and NYE sparklers",
    href: "/holidays/",
  },
  {
    slug: "baby-showers",
    name: "Baby Showers",
    tagline: "Soft glow for the sweetest news",
    image: babyShowersImg,
    alt: "A pastel baby shower table styled with glowing light-up balloons and a soft glowing centerpiece",
    href: "/weddings/",
    isStandIn: true,
  },
];
