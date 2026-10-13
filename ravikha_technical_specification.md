# Technical Specification Document (spec.md)

## 1. Project Overview & Branding

* **Brand Name:** Ravikha
* **Tagline:** Handcrafted Elegance & Crochet Artistry
* **Architecture:** Jamstack Static Web Application (Single-Page App / SPA)
* **Hosting Platform:** GitHub Pages
* **Data & Image Storage:** GitHub Repository (`/data/products.json` & `/images/uploads/`) via GitHub REST API.
* **Target Audience:** Mobile-first online buyers looking for artisan hair clips, crochet headpieces, keychains, and accessories.

---

## 2. Core Functional Requirements

### 2.1 Public Frontend (Customer View)
1. **Responsive & Mobile-First UI:** Modern boutique aesthetic utilizing warm pastel tones, clean typography, and mobile-touch friendly interactions.
2. **Product Catalog & Grid:**
   - Visual display of product cards with multi-image support.
   - Interactive photo pagination/carousel (`Next` / `Previous` buttons + touch swipe) on individual product cards without leaving the catalog view.
   - Clear display of product title, badge tags (e.g., "Pair", "Bestseller"), and price (in ₹ INR).
3. **Product Detail Modal:**
   - Expanded multi-image carousel with interactive thumbnails.
   - Detailed product descriptions and material highlights.
   - Quantity selector (`-` / `+`).
   - **Direct WhatsApp Ordering:** Formatted checkout link targeting `+918405818888` with item name, quantity, unit price, and calculated total.
4. **Category Filtering & Search Bar:**
   - Instant filter tabs (*All*, *Hair Clips*, *Hair Accessories*, *Keychains*, *Boho Bands*).
   - Real-time client-side search bar for item names and keywords.

---

### 2.2 Admin Panel & Synchronization Workflow

Because the application is hosted statically on GitHub Pages, persistent file storage and data edits are handled via the **GitHub REST API**.

1. **Admin Authentication:**
   - Secure login modal accepting admin credentials and a **GitHub Personal Access Token (PAT)** with `repo` scope.
   - Token is stored securely in encrypted browser `localStorage` or session cache.
2. **Product CRUD Operations (Create, Read, Update, Delete):**
   - Add new items with multi-image uploads.
   - Edit existing item names, categories, tags, descriptions, and prices.
   - Remove items from the active catalog.
3. **GitHub Image & Data Storage Sync:**
   - **Multi-Image Uploads:** Admins select local images from their device; the app converts images into Base64 format and commits them directly to the repository path `/images/uploads/filename.jpg` using the GitHub Contents API (`PUT /repos/{owner}/{repo}/contents/{path}`).
   - **Data File Sync:** Upon updating or adding products, the updated catalog payload is saved as a JSON commit to `/data/products.json`.
   - **Automated Deployment:** Commits trigger standard GitHub Pages builds, keeping all catalog edits globally synchronized across devices.

---

## 3. Initial Product Seed Data

Below is the initial structured catalog for **Ravikha**:

| ID | Title | Price (INR) | Category | Badge | Images |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `rav-001` | Daisy Flower Hair Clips (Pair) | ₹50 | Hair Clips | Pair | `50- pair _p2.jpeg`, `50- pair.jpeg` |
| `rav-002` | Red Sunflower Hair Clips (Pair) | ₹50 | Hair Clips | Bestseller | `50- pair.jpeg`, `115.jpeg` |
| `rav-003` | Lotus Hair Pin with Pearl Tassels | ₹69 | Hair Accessories | Trending | `69.jpeg` |
| `rav-004` | Crochet Evil Eye Charm Keychain | ₹79 | Keychains | Popular | `79- evil eye Keychain.jpeg` |
| `rav-005` | Pink Rabbit Ear Hair Clip | ₹99 | Hair Clips | Cute Pick | `99- rabit clip single piece.jpeg` |
| `rav-006` | Multi-Colored Boho Braided Hair Band | ₹115 | Boho Bands | Boho Chic | `115- Boho rubber band.jpeg`, `115- Boho rubber band_part 2.jpeg` |
| `rav-007` | Pink Cat Ear Clips | ₹115 | Hair Clips | New | `115- cat hair clip.jpeg` |
| `rav-008` | Pearl & Cowrie Shell Hair Chain Clip | ₹115 | Hair Accessories | Elegant | `115.jpeg`, `115_p2.jpeg` |

---

## 4. Technical Architecture & File Structure

```text
ravikha-github-pages/
│
├── index.html                 # Main SPA (HTML5, Tailwind CSS, FontAwesome JS)
├── data/
│   └── products.json          # Master JSON catalog store
├── images/
│   └── uploads/               # Stored product photos committed by admin
├── js/
│   └── app.js                 # App logic (UI render, filters, GitHub API sync)
└── spec.md                    # Project specification file
```

---

## 5. System Workflows & Data Flow

### 5.1 Admin GitHub Sync Flow
1. Admin opens Admin Panel & logs in with GitHub PAT.
2. Admin fills out item form and attaches 1 or more local photo files.
3. System reads image files as Base64 strings.
4. App sends `PUT` HTTP requests to GitHub REST API to save images in repository `images/uploads/`.
5. App updates local state array and sends a `PUT` commit to update `data/products.json`.
6. Page refreshes catalog dynamically and notifies user via Toast alert.

### 5.2 Customer WhatsApp Order Flow
1. Customer views catalog or product modal.
2. Adjusts quantity (`+` / `-`).
3. Clicks **"Order on WhatsApp"**.
4. Application constructs WhatsApp URL:
   `https://wa.me/918405818888?text=Hello%20Ravikha!%20I%20would%20like%20to%20order:...`
5. Redirects customer directly to WhatsApp chat.

---

## 6. UI/UX & Styling Guidelines

* **Color Palette:**
  * **Primary Accent:** Terracotta Rose (`#C85A65`)
  * **Secondary Accent:** Soft Warm Amber (`#E6A15C`)
  * **Background:** Soft Cream / Linen (`#FAF7F2`)
  * **Cards:** Pure White (`#FFFFFF`) with subtle soft shadows (`rgba(200, 90, 101, 0.08)`)
  * **Text:** Charcoal Black (`#2D282A`) & Muted Subdued (`#6B6567`)
* **Typography:**
  * Headings: *Playfair Display* (Serif)
  * Body & Buttons: *Plus Jakarta Sans* (Sans-serif)