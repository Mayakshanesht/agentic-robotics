/**
 * Public-safe facts shared across pages. Outcome level only: no internal module
 * names, no pipeline or tooling detail, no pricing, no customer names.
 */

export const CONTACT_EMAIL = "mayur.waghchoure@cloudbeerobotics.de";

/**
 * Calls to action open the form on /contact instead of a mail client: a form
 * reaches the database and the inbox, a mailto reaches neither on a machine
 * with no mail client set up. The address stays visible as text next to them.
 */
export const BOOK_A_PILOT_PATH = "/contact?interest=Pilot%20Program";
export const REQUEST_DECK_PATH = "/contact?interest=Investment";

/** Robot families we build skills for. */
export const robotFamilies = ["Robot arms", "Humanoids", "Dexterous hands"];

/** Sectors we work in, as published on the homepage. */
export const sectors = [
  "Industrial manufacturing",
  "Automotive",
  "Electronics",
  "Battery technology",
  "Logistics",
];
