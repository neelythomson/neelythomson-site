// Site-wide constants that more than one component reads.

// Google Calendar appointment schedule (or any booking page). When empty, the
// "book a call" links do not render anywhere, so the site never shows a dead
// button.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "";

export const LINKEDIN_URL = "https://www.linkedin.com/in/neelythomson";
export const EMAIL = "hello@neelythomson.com";
