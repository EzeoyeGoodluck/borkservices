# Bork Services Ltd website

Vite + React 18 + React Router 6 + Tailwind CSS 3. Deploys to Vercel with no settings changes (`vercel.json` handles SPA routing).

## Setup
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in dist/

## Project layout
    index.html                  page shell, fonts, favicon, meta
    public/
      assets/favicon.png        icon mark on navy tile
      assets/logo.svg           wordmark file (for social previews; the site itself uses the inline component)
      assets/reviews.json       Google reviews feed (empty until the Google Business Profile exists)
      robots.txt, sitemap.xml
    src/
      config.js                 ALL client details: phones, address, WhatsApp, email, form endpoint, review link, cities, photo URLs
      data/services.js          content for the Domestic, Commercial and Industrial pages
      components/
        BorkLogo.jsx            inline SVG logo (pipe icon + wordmark), no image file needed
        Logo.jsx                wrapper: <Logo height={46} /> or <Logo white /> on dark backgrounds
        Header.jsx              top bar + sticky nav with Services dropdown, mobile menu below 1024px
        Footer.jsx
        QuoteForm.jsx           posts to CONFIG.formAction, pre-selects service from ?service=
        ReviewsWidget.jsx       renders reviews.json, shows a "coming soon" state when empty
        ServiceCards.jsx        three service cards with photos
        ui.jsx                  PageHero, Section, H2, buttons, FeatureGrid, Checklist, CtaBand, ContactList
        useSeo.js               per-page title, description and canonical
      pages/                    Home, About, Services, ServiceDetail, Pricing, Areas, Reviews, Contact, Careers, Legal (Privacy + Terms), NotFound

## Routes
    /                     /about              /services
    /services/domestic-cleaning   /services/commercial-cleaning   /services/industrial-cleaning
    /pricing              /areas (#city anchors)   /reviews
    /contact (?service=)  /careers            /privacy   /terms

## Still waiting on Chukwudi (search the code for TODO and [TBC])
- Office phone and mobile number           -> src/config.js
- Registered address (the "44" one is wrong) -> src/config.js, plus the map placeholder in pages/Contact.jsx
- Official price list                      -> ROWS in pages/Pricing.jsx
- Confirmed city list for local SEO        -> CITIES in src/config.js
- Confirm email is info@borkservices.co.uk (meeting notes said "BoxServices", likely a typo)
- Original logo vector, if he has one      -> replace the paths in BorkLogo.jsx

## Form endpoint
Create a Formspree form (or any endpoint that accepts a POST with JSON Accept header) and paste the URL into CONFIG.formAction.

## Reviews
No placeholder reviews, by design. After launch, populate public/assets/reviews.json from the Google Business Profile
(Places API "reviews" field or a manual export) in this shape:
    { "rating": 4.9, "count": 37, "reviews": [ { "author": "Name", "rating": 5, "text": "...", "date": "2026-10-01" } ] }

## Photos
Unsplash free-licence images (commercial use, no attribution required), listed in PHOTOS in src/config.js.
Swap for the client's own photos by dropping files in public/assets and changing the URLs.

## SEO note
This is a client-rendered SPA. Google renders JavaScript, but if local rankings in the listed cities are a priority,
the next step is prerendering (vite-plugin-prerender) or Next.js so each page ships as static HTML.

## Push to GitHub
    git init && git add . && git commit -m "Bork Services site"
    git branch -M main
    git remote add origin https://github.com/EzeoyeGoodluck/Bork-Services.git
    git push -u origin main --force      # --force replaces the old static-site history
