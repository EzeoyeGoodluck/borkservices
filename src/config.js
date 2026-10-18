// Everything the client still needs to confirm lives here.
export const CONFIG = {
  company: "Bork Services Ltd",
  domain: "https://borkservices.co.uk",
  email: "info@borkservices.co.uk",
  officePhone: "0116 507 2032",
  officeTel: "+441165072032",
  mobilePhone: "07459 000955",
  mobileTel: "+447459000955",
  whatsapp: "07378465065", // confirmed WhatsApp-only
  addressLines: ["9 Littleton Street", "Leicester,"],
  regNo: "16052368",

  formEmail: "info@borkservices.co.uk",
  formCc: "", // optional second inbox,
  mapQuery: "Bork Services Ltd, 9 Littleton Street, Leicester",
  googleReviewUrl: "https://g.page/r/YOUR_PLACE_ID/review", // after Google Business Profile exists
  year: new Date().getFullYear(),
};

export const WA_LINK = `https://wa.me/44${CONFIG.whatsapp.slice(1)}`;

// Local SEO target cities. Confirm with client.
export const CITIES = [
  "Leicester",
  "London",
  "Birmingham",
  "Manchester",
  "Nottingham",
  "Coventry",
  "Derby",
  "Northampton",
  "Sheffield",
  "Leeds",
  "Liverpool",
  "Bristol",
];

// Unsplash free licence (commercial use, no attribution required). Swap for client photos in /public/assets.
const img = (id, w = 1200, h) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=72`;
export const PHOTOS = {
  hero: img("photo-1646980241033-cd7abda2ee88", 1000, 1250),
  domestic: img("photo-1758273238415-01ec03d9ef27"),
  domestic2: img("photo-1758272421751-963195322eaa"),
  commercial: img("photo-1627905646269-7f034dcc5738"),
  commercial2: img("photo-1577412647305-991150c7d163"),
  industrial: img("photo-1718152421680-d1580e843cc9"),
  industrial2: img("photo-1513828646384-e4d8ec30d2bb"),
  tenancy: img("photo-1580256081112-e49377338b7f"),
  about: img("photo-1713110824336-f78c320dcf8e"),
  careers: img("photo-1647381518264-97ff1835026f"),
  pricing: img("photo-1628177142898-93e36e4e3a50"),
  areas: img("photo-1581578731548-c64695cc6952"),
  contact: img("photo-1740657254989-42fe9c3b8cce"),
};
