/**
 * Public-safe facts shared across pages. Outcome level only: no internal module
 * names, no pipeline or tooling detail, no pricing, no customer names.
 */

export const CONTACT_EMAIL = "mayur.waghchoure@cloudbeerobotics.de";

export const BOOK_A_PILOT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=Pilot%20request`;

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

/** Our own footage, hosted on this site. */
export const MEDIA = {
  heroLoop: "/media/hero-loop.mp4",
  heroLoopPoster: "/media/hero-loop-poster.jpg",
  walkthrough: "/media/walkthrough.mp4",
  walkthroughPoster: "/media/walkthrough-poster.jpg",
  robotDemo: "/videos/robot-demo.mp4",
  videoToMotion: "/videos/video-to-motion.mp4",
};
