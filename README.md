# Ravikha — Handcrafted Elegance & Crochet Artistry 🌸🧶

A Jamstack static boutique e-commerce web application designed for mobile-first shoppers to discover and order artisan handcrafted crochet hair clips, bohemian hair accessories, keychains, and handmade gifts.

Built specifically for seamless hosting on **GitHub Pages**, featuring client-side persistence, direct **WhatsApp Checkout**, and continuous catalog synchronization via the **GitHub REST API**.

---

## 🌟 Key Features

### 🛍️ Customer Experience
- **Boutique Mobile-First Design:** Warm pastel aesthetic with Terracotta Rose (`#C85A65`), Soft Amber (`#E6A15C`), Linen Cream (`#FAF7F2`), and Playfair Display typography.
- **In-Card Photo Carousels:** Multi-image pagination with touch swipe gestures on mobile and next/previous arrows directly in the catalog grid.
- **Product Detail Modal:** High-resolution image gallery with interactive thumbnail strips, material craftsmanship details, and live quantity calculator.
- **Direct WhatsApp Ordering:**
  - Single-click **Quick Order on WhatsApp** from any product card.
  - Formatted WhatsApp message targeting `+918405818888` with item name, quantity, unit price, and calculated total.
- **Interactive Shopping Bag Drawer:** Slide-over bag supporting multi-item selection, quantity steppers, customer customization notes, and itemized multi-product WhatsApp checkout.
- **Live Search & Filter:** Instant real-time search across product names, categories, and tags; category pill navigation (*All, Hair Clips, Hair Accessories, Keychains, Boho Bands, Accessories, Home & Decor*).

---

### ⚙️ Admin Management & GitHub REST API Sync
- **Serverless Admin Panel:** Accessible directly from the top navigation gear icon or mobile bottom dock.
- **GitHub Contents API Integration:**
  - Connects using GitHub Personal Access Token (PAT) with `repo` scope.
  - Multi-image upload: Converts photos selected from local device to Base64 and commits them directly to `/images/uploads/filename.jpg` via `PUT /repos/{owner}/{repo}/contents/{path}`.
  - Data sync: Commits catalog edits to `/data/products.json` with commit messages.
- **Automatic GitHub Pages Deployment:** Commits trigger GitHub Pages builds, keeping the live store updated worldwide without any backend servers or databases.
- **Offline & Local Resilience:** Full functionality with `localStorage` fallback even without a token.
- **Backup & Restore:** One-click JSON catalog export, JSON import, and factory seed reset.

---

## 📁 Repository Structure

```text
rekha website/
├── index.html                 # Main Single Page Application (HTML5, Tailwind CSS, FontAwesome)
├── data/
│   └── products.json          # Master JSON catalog store (24 handcrafted seed pieces)
├── images/
│   └── uploads/               # Stored product photos
├── js/
│   └── app.js                 # Core SPA logic (render, cart, in-card carousels, WhatsApp, GitHub sync)
├── ravikha_technical_specification.md # Complete technical specification
└── README.md                  # Project overview & deployment guide
```

---

## 🚀 Running Locally

You can run Ravikha immediately using any static web server:

### Option 1: Python HTTP Server (Recommended)
```bash
python -m http.server 8080
```
Then visit: [http://localhost:8080/index.html](http://localhost:8080/index.html)

### Option 2: Direct Browser Launch
Open `index.html` directly in any modern browser (Chrome, Edge, Safari, Firefox). The application contains built-in fallbacks to operate smoothly even under strict local `file://` protocols.

---

## 🌐 Deploying to GitHub Pages

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Ravikha boutique web application"
   git push origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select Branch: `main` and Folder: `/ (root)`.
   - Click **Save**.
3. Your boutique website will be live at:
   `https://<username>.github.io/<repository-name>/`

---

## 📱 WhatsApp Order Integration Details

- **Target Phone Number:** `+91 8405818888`
- **Format:**
  ```text
  ✨ Hello Ravikha! ✨
  I would like to order:
  • Product: Daisy Flower Hair Clips (Pair)
  • Quantity: 2
  • Total Price: ₹100
  Please confirm availability and dispatch details!
  ```

---

## 📄 License & Credits
Crafted with love for **Ravikha** — *Handcrafted Elegance & Crochet Artistry*.
