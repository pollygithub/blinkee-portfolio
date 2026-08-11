export interface NavItem {
  name: string;
  href: string;
  isStandIn?: boolean;
}

/**
 * Portfolio scope note: the 5-page site map only builds real pages for
 * Weddings, Custom & Bulk Orders, Holidays, and Coins & Bills. The product-type
 * categories below (Light Up Products, Chemical Glow, Mood Rings, Shop By
 * Color) and "Themes & Events" have no bespoke page in scope, so they route
 * to /weddings/ as a live stand-in category/product-grid page rather than
 * going nowhere — consistent with the same decision made for the homepage
 * "Shop by Occasion" grid (see src/data/occasions.ts).
 */
export const primaryNav: NavItem[] = [
  { name: "Light Up Products", href: "/weddings/", isStandIn: true },
  { name: "Chemical Glow", href: "/weddings/", isStandIn: true },
  { name: "Mood Rings", href: "/weddings/", isStandIn: true },
  { name: "Themes & Events", href: "/weddings/", isStandIn: true },
  { name: "Holidays", href: "/holidays/" },
  { name: "Shop By Color", href: "/weddings/", isStandIn: true },
  { name: "Coins & Bills", href: "/coins-and-bills/" },
];

export const customBulkNav: NavItem = {
  name: "Custom & Bulk",
  href: "/custom-bulk/",
};
