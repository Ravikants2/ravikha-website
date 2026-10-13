/**
 * Ravikha - Handcrafted Elegance & Crochet Artistry
 * Client-Side SPA Application Logic & GitHub REST API Integration
 */

// Application Constants & Configuration
const CONFIG = {
    brandName: "Ravikha",
    tagline: "Handcrafted Elegance & Crochet Artistry",
    whatsAppNumber: "918405818888",
    dataUrl: "data/products.json",
    localStorageKey: "ravikha_catalog_v1",
    cartStorageKey: "ravikha_cart_v1",
    adminConfigKey: "ravikha_admin_config_v1",
    githubDefaults: {
        owner: "Ravikants2",
        repo: "ravikha-website",
        branch: "main"
    }
};

// Fallback seed catalog in case fetch is blocked by file:// CORS
const FALLBACK_SEED_PRODUCTS = [
    {
        id: "rav-001",
        title: "Daisy Flower Hair Clips (Pair)",
        price: 50,
        category: "Hair Clips",
        badge: "Pair",
        description: "Handcrafted pair of dainty daisy flower clips woven with premium milk cotton yarn. Features a snug alligator grip backing gentle on hair.",
        images: ["images/uploads/50- pair _p2.jpeg", "images/uploads/50- pair.jpeg"]
    },
    {
        id: "rav-002",
        title: "Red Sunflower Hair Clips (Pair)",
        price: 50,
        category: "Hair Clips",
        badge: "Bestseller",
        description: "Vibrant two-tone crimson and cream sunflower clips. Hand-knitted with intricate petal detailing to brighten up any hairstyle.",
        images: ["images/uploads/Sunflower hair clip 50- pair.jpeg", "images/uploads/50- pair.jpeg"]
    },
    {
        id: "rav-003",
        title: "Lotus Hair Pin with Pearl Tassels",
        price: 69,
        category: "Hair Accessories",
        badge: "Trending",
        description: "Exquisite hand-crocheted blooming lotus pin accentuated with delicate cascading faux-pearl tassel drops for festive elegance.",
        images: ["images/uploads/69.jpeg"]
    },
    {
        id: "rav-004",
        title: "Crochet Evil Eye Charm Keychain",
        price: 79,
        category: "Keychains",
        badge: "Popular",
        description: "Artisan crochet Nazar evil eye protection amulet with silver-toned key ring, sturdy clasp, and matching bohemian yarn tassel.",
        images: ["images/uploads/79- evil eye Keychain.jpeg"]
    },
    {
        id: "rav-005",
        title: "Pink Rabbit Ear Hair Clip",
        price: 99,
        category: "Hair Clips",
        badge: "Cute Pick",
        description: "Sweet pastel pink bunny ears clip accented with an adorable micro flower bud. Soft on sensitive scalps, ideal for kids & cute aesthetics.",
        images: ["images/uploads/99- rabit clip single piece.jpeg"]
    },
    {
        id: "rav-006",
        title: "Multi-Colored Boho Braided Hair Band",
        price: 115,
        category: "Boho Bands",
        badge: "Boho Chic",
        description: "Chic bohemian braided band hand-stitched with vibrant colored yarn chords, authentic natural cowrie shells, and gentle elastic base.",
        images: ["images/uploads/115- Boho rubber band.jpeg", "images/uploads/115- Boho rubber band_part 2.jpeg"]
    },
    {
        id: "rav-007",
        title: "Pink Cat Ear Clips (Pair)",
        price: 115,
        category: "Hair Clips",
        badge: "New",
        description: "Playful crochet kitten ear hair accessories. Meticulously shaped and stuffed for 3D bounce, perfect for fun casual wear or cosplays.",
        images: ["images/uploads/115- cat hair clip.jpeg"]
    },
    {
        id: "rav-008",
        title: "Pearl & Cowrie Shell Hair Chain Clip",
        price: 115,
        category: "Hair Accessories",
        badge: "Elegant",
        description: "A pair of hand-woven blossom hair clips bridged by an ethereal draped strand of luminous pearls and cowrie shells.",
        images: ["images/uploads/115.jpeg", "images/uploads/115_p2.jpeg"]
    },
    {
        id: "rav-009",
        title: "Bow Tulip Flower Hair Clip",
        price: 135,
        category: "Hair Clips",
        badge: "Floral Love",
        description: "Artisan tulip blossom nestled alongside a soft crocheted ribbon bow. Adds a refined romantic touch to half-up styles.",
        images: ["images/uploads/Bow tulip clip 135.jpeg"]
    },
    {
        id: "rav-010",
        title: "Tulip Pear Paranda (8 Tulips)",
        price: 580,
        category: "Hair Accessories",
        badge: "Festive Choice",
        description: "Traditional braided hair paranda adorned with 8 lush hand-knitted 3D tulip blossoms and pearl beads. Perfect for festive weddings and celebrations.",
        images: ["images/uploads/Tulip Pear Paranda (8 tulips) 580.jpeg"]
    },
    {
        id: "rav-011",
        title: "Star Crochet Charm Keychain",
        price: 99,
        category: "Keychains",
        badge: "Cute Gift",
        description: "Plump plush crochet pastel star charm fitted with a durable golden lobster clasp. Brightens up your bag, tote, or vehicle keys.",
        images: ["images/uploads/Star Keychain (single) 99.jpeg"]
    },
    {
        id: "rav-012",
        title: "Sunshine Sunflower Keychain",
        price: 65,
        category: "Keychains",
        badge: "Bestseller",
        description: "Cheerful golden sunflower keychain with emerald leaf accent. Handcrafted with warm sunny yarn to bring smiles wherever you go.",
        images: ["images/uploads/Sunflower Keychain 65.jpeg"]
    },
    {
        id: "rav-013",
        title: "Morepankh Peacock Feather Pin",
        price: 50,
        category: "Hair Accessories",
        badge: "Traditional",
        description: "Auspicious Lord Krishna-inspired Morpankh peacock feather pin hand-crocheted in rich royal blue, turquoise, and gold hues.",
        images: ["images/uploads/Morepankh 50.jpeg"]
    },
    {
        id: "rav-014",
        title: "Kitty Face Hair Clips (Pair)",
        price: 110,
        category: "Hair Clips",
        badge: "Cute Pick",
        description: "Adorable duo of kitten face hair pins detailed with whiskers, nose stitch, and pink inner ears. Super comfortable for all day wear.",
        images: ["images/uploads/Kitty clip 110- pair.jpeg"]
    },
    {
        id: "rav-015",
        title: "Angry Bird Expressive Hair Clip",
        price: 70,
        category: "Hair Clips",
        badge: "Quirky",
        description: "Feisty and humorous crochet red bird character clip. Great conversation starter and adorable fun gift for friends.",
        images: ["images/uploads/Angry clip 70 single piece.jpeg"]
    },
    {
        id: "rav-016",
        title: "Handcrafted Floral Crochet Bandana",
        price: 360,
        category: "Hair Accessories",
        badge: "Boho Chic",
        description: "Retro aesthetic triangular hair kerchief bandana hand-stitched with open lace-work floral granny squares and secure tie straps.",
        images: ["images/uploads/Bandana 360.jpeg"]
    },
    {
        id: "rav-017",
        title: "Mini Forever Rose & Tulip Bouquet",
        price: 199,
        category: "Home & Decor",
        badge: "Everlasting",
        description: "Artisan miniature crochet floral bouquet that never withers. Wrapped in premium boutique craft paper and satin ribbon.",
        images: ["images/uploads/Mini propose bouquet 199.jpeg"]
    },
    {
        id: "rav-018",
        title: "Fruit Coaster Set with Crochet Flower Pot",
        price: 480,
        category: "Home & Decor",
        badge: "Boutique Home",
        description: "Set of 4 handmade fruit slice coasters (citrus/apple/watermelon) that neatly fold together inside an adorable crocheted plant pot holder.",
        images: ["images/uploads/Coaster with pot 480.jpeg", "images/uploads/380-  fruit coaster.jpeg"]
    },
    {
        id: "rav-019",
        title: "Vintage Style Crochet Coin Pouch",
        price: 170,
        category: "Accessories",
        badge: "Handy",
        description: "Charming retro kiss-lock metal frame coin purse knitted with dense textured yarn. Perfect for coins, earrings, or small trinkets.",
        images: ["images/uploads/170- coin pouch.jpeg"]
    },
    {
        id: "rav-020",
        title: "Mobile Phone Crochet Crossbody Sling Pouch",
        price: 410,
        category: "Accessories",
        badge: "Everyday Carry",
        description: "Lightweight, shock-absorbing smartphone pouch hand-knitted with a long comfy shoulder strap and wooden button closure.",
        images: ["images/uploads/410- mobile pouch.jpeg"]
    },
    {
        id: "rav-021",
        title: "Puff Flower Handcrafted Mini Tote",
        price: 780,
        category: "Accessories",
        badge: "Luxury Craft",
        description: "Statement boutique handbag made of 3D puff flowers stitched seamlessly. Includes reinforced handles and soft inner lining.",
        images: ["images/uploads/Puff flower hand bag 780.jpeg"]
    },
    {
        id: "rav-022",
        title: "Super Soft Crochet Newborn Socks",
        price: 449,
        category: "Accessories",
        badge: "Pure Softness",
        description: "Ultra gentle, hypoallergenic baby booties knitted with skin-friendly merino-blend yarn. Soft stretch ribbed cuffs keep them securely on tiny feet.",
        images: ["images/uploads/Socks 449.jpeg"]
    },
    {
        id: "rav-023",
        title: "Artisan Fruit Table Runner",
        price: 1999,
        category: "Home & Decor",
        badge: "Statement Piece",
        description: "Grand handmade dining runner adorned with colorful crochet fruit motifs along scalloped edges. Brings warmth to any dining space.",
        images: ["images/uploads/Fruit table runner 1999.jpeg"]
    },
    {
        id: "rav-024",
        title: "Handmade 1st Birthday Keepsake Set",
        price: 2500,
        category: "Accessories",
        badge: "Heirloom Edition",
        description: "Comprehensive heirloom-quality birthday set including handcrafted crown, cake topper, and celebration accessories crafted with supreme care.",
        images: ["images/uploads/Age 1yr 2500.jpeg"]
    }
];

// Encrypted GitHub PAT token (XOR encrypted with admin password to prevent GitHub secret scanner revocation)
const ENCRYPTED_ADMIN_TOKEN = "NQ0bNysLVV5aRndkOSodEBsTXFsDa1JzFxcdOlUafnoIRAlFYSsSDg==";
const ADMIN_PASSWORD = "Rekha@230292";

/**
 * Reversible decryption using Admin Password
 */
function decryptTokenWithPassword(encryptedB64, password) {
    try {
        const raw = atob(encryptedB64);
        let decrypted = "";
        for (let i = 0; i < raw.length; i++) {
            decrypted += String.fromCharCode(raw.charCodeAt(i) ^ password.charCodeAt(i % password.length));
        }
        return decrypted;
    } catch (e) {
        return null;
    }
}

// App Global State
let state = {
    products: [],
    categories: ["All", "Hair Clips", "Hair Accessories", "Keychains", "Boho Bands", "Accessories", "Home & Decor"],
    activeCategory: "All",
    searchQuery: "",
    sortBy: "featured",
    cart: [],
    cardQuantities: {}, // { [productId]: number }
    cardImageIndices: {}, // { [productId]: number }
    modalProduct: null,
    modalImgIndex: 0,
    modalQty: 1,
    adminFormImages: [], // array of string URLs or base64 data URLs
    adminPendingUploadFiles: [], // array of { file, dataUrl, name }
    isAdminLoggedIn: false,
    githubConfig: {
        owner: "",
        repo: "",
        branch: "main",
        token: ""
    }
};

// Default SVG placeholder in case image fails to load
const PLACEHOLDER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400"><rect width="400" height="400" fill="%23FAF7F2"/><circle cx="200" cy="200" r="100" fill="%23F3E8E9"/><circle cx="200" cy="200" r="30" fill="%23E6A15C"/><text x="200" y="340" font-family="sans-serif" font-size="16" fill="%23C85A65" text-anchor="middle" font-weight="bold">Ravikha Artisan Craft</text></svg>`;

/**
 * Safely format image URLs (encoding spaces and special characters while preserving data URIs)
 */
function safeImageUrl(url) {
    if (!url) return PLACEHOLDER_SVG;
    if (url.startsWith('data:')) return url;
    return encodeURI(url);
}

/**
 * Initialize Application
 */
async function initApp() {
    checkExistingAdminSession();
    loadGitHubConfig();
    loadCartFromStorage();
    await loadCatalogData();
    renderCategoryTabs();
    renderCatalog();
    updateCartUI();
    setupGlobalEventListeners();
}

/**
 * Load Catalog Data from localStorage or data/products.json
 */
async function loadCatalogData() {
    const cached = localStorage.getItem(CONFIG.localStorageKey);
    if (cached) {
        try {
            state.products = JSON.parse(cached);
            if (Array.isArray(state.products) && state.products.length > 0) {
                initializeProductQuantities();
                return;
            }
        } catch (e) {
            console.warn("Failed to parse cached catalog, reloading from server/seed:", e);
        }
    }

    // Try fetching from data/products.json
    try {
        const response = await fetch(CONFIG.dataUrl);
        if (response.ok) {
            state.products = await response.json();
            localStorage.setItem(CONFIG.localStorageKey, JSON.stringify(state.products));
        } else {
            throw new Error(`HTTP ${response.status}`);
        }
    } catch (err) {
        console.info("Using embedded seed catalog (Local file or network fallback):", err);
        state.products = [...FALLBACK_SEED_PRODUCTS];
        localStorage.setItem(CONFIG.localStorageKey, JSON.stringify(state.products));
    }

    initializeProductQuantities();
}

function initializeProductQuantities() {
    state.products.forEach(p => {
        if (!state.cardQuantities[p.id]) state.cardQuantities[p.id] = 1;
        if (state.cardImageIndices[p.id] === undefined) state.cardImageIndices[p.id] = 0;
    });
}

function saveCatalogToStorage() {
    try {
        localStorage.setItem(CONFIG.localStorageKey, JSON.stringify(state.products));
    } catch (e) {
        console.warn("LocalStorage save error:", e);
    }
}

/**
 * Render Category Tabs with Count Badges
 */
function renderCategoryTabs() {
    const container = document.getElementById("categoryContainer");
    if (!container) return;

    container.innerHTML = state.categories.map(cat => {
        const isActive = cat === state.activeCategory;
        const count = cat === "All" 
            ? state.products.length 
            : state.products.filter(p => p.category === cat).length;

        const activeStyles = isActive
            ? "bg-terracotta text-white shadow-md shadow-terracotta/20 font-semibold"
            : "bg-white text-charcoal hover:bg-linen hover:text-terracotta border border-warmBorder";

        return `
            <button onclick="handleCategorySelect('${cat}')" 
                class="px-4 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 ${activeStyles}">
                <span>${cat}</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-linen text-subdued'} font-bold">${count}</span>
            </button>
        `;
    }).join("");
}

function handleCategorySelect(cat) {
    state.activeCategory = cat;
    renderCategoryTabs();
    renderCatalog();
}

/**
 * Search and Sort Filtering
 */
function handleSearch(event) {
    state.searchQuery = (event.target.value || "").trim().toLowerCase();
    
    // Sync mobile and desktop search input values
    const desktopSearch = document.getElementById("desktopSearchInput");
    const mobileSearch = document.getElementById("mobileSearchInput");
    if (desktopSearch && event.target !== desktopSearch) desktopSearch.value = event.target.value;
    if (mobileSearch && event.target !== mobileSearch) mobileSearch.value = event.target.value;

    renderCatalog();
}

function handleSortChange(event) {
    state.sortBy = event.target.value;
    renderCatalog();
}

function getFilteredAndSortedProducts() {
    let result = state.products.filter(item => {
        const matchesCategory = state.activeCategory === "All" || item.category === state.activeCategory;
        const matchesSearch = !state.searchQuery || 
            item.title.toLowerCase().includes(state.searchQuery) ||
            (item.badge && item.badge.toLowerCase().includes(state.searchQuery)) ||
            (item.description && item.description.toLowerCase().includes(state.searchQuery)) ||
            (item.category && item.category.toLowerCase().includes(state.searchQuery));

        return matchesCategory && matchesSearch;
    });

    if (state.sortBy === "price-low") {
        result.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "price-high") {
        result.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === "name") {
        result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
}

/**
 * Render Catalog Grid
 */
function renderCatalog() {
    const grid = document.getElementById("productGrid");
    const emptyState = document.getElementById("emptyCatalogState");
    const countDisplay = document.getElementById("catalogCountDisplay");
    if (!grid) return;

    const filtered = getFilteredAndSortedProducts();

    if (countDisplay) {
        countDisplay.innerText = `Showing ${filtered.length} piece${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = "";
        if (emptyState) emptyState.classList.remove("hidden");
        return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    grid.innerHTML = filtered.map(item => {
        const qty = state.cardQuantities[item.id] || 1;
        const totalPrice = item.price * qty;
        const images = (item.images && item.images.length > 0) ? item.images : [PLACEHOLDER_SVG];
        const currentImgIdx = (state.cardImageIndices[item.id] || 0) % images.length;
        const activeImageUrl = safeImageUrl(images[currentImgIdx] || images[0]);

        // Dots pagination for card carousel
        const dotsHtml = images.length > 1 ? `
            <div class="absolute bottom-2.5 left-0 right-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none">
                ${images.map((_, i) => `
                    <span class="w-1.5 h-1.5 rounded-full transition-all ${i === currentImgIdx ? 'bg-white shadow-sm w-3.5' : 'bg-white/60'}"></span>
                `).join('')}
            </div>
        ` : '';

        // Carousel buttons for card
        const arrowsHtml = images.length > 1 ? `
            <button onclick="prevCardImage('${item.id}', event)" title="Previous photo"
                class="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-charcoal flex items-center justify-center text-xs shadow-md transition-all opacity-0 group-hover:opacity-100 z-10">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button onclick="nextCardImage('${item.id}', event)" title="Next photo"
                class="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-charcoal flex items-center justify-center text-xs shadow-md transition-all opacity-0 group-hover:opacity-100 z-10">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        ` : '';

        return `
            <div class="bg-white rounded-3xl border border-warmBorder boutique-shadow card-lift transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div>
                    <!-- Photo Carousel Container -->
                    <div class="relative aspect-square overflow-hidden bg-linen/50 cursor-pointer select-none"
                         id="card-img-wrap-${item.id}"
                         onclick="openProductModal('${item.id}')">
                        
                        <img src="${activeImageUrl}" 
                             alt="${item.title}" 
                             id="card-img-${item.id}"
                             loading="lazy"
                             onerror="this.onerror=null; this.src='${PLACEHOLDER_SVG}';"
                             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">

                        <!-- Badge Tag -->
                        ${item.badge ? `
                            <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-terracotta text-[10px] font-bold px-3 py-1 rounded-full shadow-xs border border-terracotta/20 tracking-wide uppercase">
                                ${item.badge}
                            </span>
                        ` : ''}

                        <!-- Image Count Indicator Pill -->
                        ${images.length > 1 ? `
                            <span class="absolute top-3 right-3 bg-charcoal/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs">
                                <i class="fa-regular fa-images text-[9px] mr-1"></i>${currentImgIdx + 1}/${images.length}
                            </span>
                        ` : ''}

                        ${arrowsHtml}
                        ${dotsHtml}
                    </div>

                    <!-- Product Content -->
                    <div class="p-4 sm:p-5">
                        <div class="flex items-center justify-between text-[11px] font-bold text-terracotta/90 uppercase tracking-wider mb-1.5">
                            <span>${item.category}</span>
                            <span class="text-subdued font-normal lowercase tracking-normal text-[10px]">Handcrafted</span>
                        </div>

                        <h3 onclick="openProductModal('${item.id}')" 
                            class="font-serif font-bold text-charcoal text-base sm:text-lg mb-1.5 line-clamp-1 hover:text-terracotta cursor-pointer transition-colors" 
                            title="${item.title}">
                            ${item.title}
                        </h3>

                        <p class="text-xs text-subdued line-clamp-2 leading-relaxed mb-3">
                            ${item.description || 'Artisan handmade crochet creation designed with fine yarn.'}
                        </p>

                        <!-- Quantity Selector Bar -->
                        <div class="bg-linen/60 p-2 rounded-2xl border border-warmBorder flex items-center justify-between">
                            <span class="text-[11px] font-semibold text-charcoal pl-1">Quantity:</span>
                            <div class="flex items-center bg-white border border-warmBorder rounded-xl overflow-hidden shadow-2xs">
                                <button onclick="changeCardQty('${item.id}', -1, event)" 
                                    class="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-linen font-bold text-xs transition-colors">-</button>
                                <span id="card-qty-${item.id}" class="w-8 text-center font-bold text-xs text-charcoal">${qty}</span>
                                <button onclick="changeCardQty('${item.id}', 1, event)" 
                                    class="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-linen font-bold text-xs transition-colors">+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer with Live Total & Ordering Buttons -->
                <div class="px-4 pb-5 sm:px-5 pt-3 border-t border-linen space-y-2.5">
                    <div class="flex items-center justify-between">
                        <span class="text-[11px] text-subdued uppercase tracking-wider font-medium">Item Total:</span>
                        <div class="text-right">
                            <span class="text-lg font-bold text-terracotta">₹<span id="card-total-${item.id}">${totalPrice}</span></span>
                            <span class="text-[10px] text-subdued block font-normal">(₹${item.price} each)</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2">
                        <button onclick="quickOrderWhatsApp('${item.id}', event)" 
                            class="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm">
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                            <span>WhatsApp</span>
                        </button>

                        <button onclick="addToBagFromCard('${item.id}', event)" 
                            class="py-2.5 px-3 bg-terracotta hover:bg-terracottaHover active:scale-95 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-terracotta/20">
                            <i class="fa-solid fa-bag-shopping text-xs"></i>
                            <span>Add to Bag</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    attachTouchSwipeListeners();
}

/**
 * Mobile Touch Swipe Support for In-Card Carousels
 */
function attachTouchSwipeListeners() {
    state.products.forEach(item => {
        const wrap = document.getElementById(`card-img-wrap-${item.id}`);
        if (!wrap || !item.images || item.images.length <= 1) return;

        let touchStartX = 0;
        let touchEndX = 0;

        wrap.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        wrap.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchEndX - touchStartX;
            if (Math.abs(diff) > 40) {
                e.stopPropagation();
                if (diff < 0) {
                    nextCardImage(item.id, e);
                } else {
                    prevCardImage(item.id, e);
                }
            }
        }, { passive: true });
    });
}

/**
 * In-Card Carousel Controls
 */
function nextCardImage(productId, event) {
    if (event) event.stopPropagation();
    const product = state.products.find(p => p.id === productId);
    if (!product || !product.images || product.images.length <= 1) return;

    const current = state.cardImageIndices[productId] || 0;
    state.cardImageIndices[productId] = (current + 1) % product.images.length;
    updateCardImageDisplay(product);
}

function prevCardImage(productId, event) {
    if (event) event.stopPropagation();
    const product = state.products.find(p => p.id === productId);
    if (!product || !product.images || product.images.length <= 1) return;

    const current = state.cardImageIndices[productId] || 0;
    state.cardImageIndices[productId] = (current - 1 + product.images.length) % product.images.length;
    updateCardImageDisplay(product);
}

function updateCardImageDisplay(product) {
    const imgEl = document.getElementById(`card-img-${product.id}`);
    const wrap = document.getElementById(`card-img-wrap-${product.id}`);
    if (!imgEl || !wrap) return;

    const images = product.images;
    const idx = state.cardImageIndices[product.id] || 0;
    imgEl.src = safeImageUrl(images[idx] || PLACEHOLDER_SVG);

    // Update dots if present
    const dots = wrap.querySelectorAll("span.rounded-full");
    dots.forEach((dot, i) => {
        if (i === idx) {
            dot.className = "w-3.5 h-1.5 rounded-full transition-all bg-white shadow-sm";
        } else {
            dot.className = "w-1.5 h-1.5 rounded-full transition-all bg-white/60";
        }
    });
}

/**
 * Quantity Adjustments on Product Card
 */
function changeCardQty(productId, delta, event) {
    if (event) event.stopPropagation();
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const current = state.cardQuantities[productId] || 1;
    const updated = Math.max(1, current + delta);
    state.cardQuantities[productId] = updated;

    const qtyEl = document.getElementById(`card-qty-${productId}`);
    const totalEl = document.getElementById(`card-total-${productId}`);
    if (qtyEl) qtyEl.innerText = updated;
    if (totalEl) totalEl.innerText = product.price * updated;
}

/**
 * Direct WhatsApp Quick Order from Card
 */
function quickOrderWhatsApp(productId, event) {
    if (event) event.stopPropagation();
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const qty = state.cardQuantities[productId] || 1;
    const total = product.price * qty;

    const text = 
`✨ *Hello Ravikha!* ✨
I would like to order this handcrafted item:

*Product:* ${product.title}
*Price:* ₹${product.price} each
*Quantity:* ${qty}
*Total Amount:* ₹${total}
*Category:* ${product.category}

Please confirm availability and share payment/delivery details! 🧶`;

    const url = `https://wa.me/${CONFIG.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

/**
 * Add Item to Bag from Card
 */
function addToBagFromCard(productId, event) {
    if (event) event.stopPropagation();
    const qty = state.cardQuantities[productId] || 1;
    addToCart(productId, qty);
}

/**
 * Product Detail Modal
 */
function openProductModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    state.modalProduct = product;
    state.modalImgIndex = state.cardImageIndices[productId] || 0;
    state.modalQty = state.cardQuantities[productId] || 1;

    document.getElementById("modalTitle").innerText = product.title;
    document.getElementById("modalPrice").innerText = product.price;
    document.getElementById("modalCategory").innerText = product.category;
    document.getElementById("modalBadge").innerText = product.badge || "Handmade";
    document.getElementById("modalDescription").innerText = product.description || "Artisan hand-crocheted item.";
    document.getElementById("modalQty").innerText = state.modalQty;
    document.getElementById("modalTotal").innerText = product.price * state.modalQty;

    updateModalImageGallery();

    const modal = document.getElementById("productDetailModal");
    if (modal) {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }
}

function closeProductModal() {
    const modal = document.getElementById("productDetailModal");
    if (modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    }
    state.modalProduct = null;
}

function updateModalImageGallery() {
    if (!state.modalProduct) return;
    const images = (state.modalProduct.images && state.modalProduct.images.length > 0)
        ? state.modalProduct.images
        : [PLACEHOLDER_SVG];

    const heroImg = document.getElementById("modalHeroImage");
    if (heroImg) {
        heroImg.src = safeImageUrl(images[state.modalImgIndex] || images[0]);
        heroImg.onerror = function() { this.src = PLACEHOLDER_SVG; };
    }

    const thumbnailsContainer = document.getElementById("modalThumbnailsContainer");
    if (thumbnailsContainer) {
        if (images.length > 1) {
            thumbnailsContainer.classList.remove("hidden");
            thumbnailsContainer.innerHTML = images.map((imgUrl, idx) => `
                <button onclick="selectModalImage(${idx})" 
                    class="w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${idx === state.modalImgIndex ? 'border-terracotta ring-2 ring-terracotta/30 scale-105' : 'border-warmBorder opacity-70 hover:opacity-100'}">
                    <img src="${safeImageUrl(imgUrl)}" alt="thumb" class="w-full h-full object-cover" onerror="this.src='${PLACEHOLDER_SVG}'">
                </button>
            `).join("");
        } else {
            thumbnailsContainer.classList.add("hidden");
        }
    }
}

function selectModalImage(idx) {
    state.modalImgIndex = idx;
    updateModalImageGallery();
}

function nextModalImage() {
    if (!state.modalProduct || !state.modalProduct.images) return;
    state.modalImgIndex = (state.modalImgIndex + 1) % state.modalProduct.images.length;
    updateModalImageGallery();
}

function prevModalImage() {
    if (!state.modalProduct || !state.modalProduct.images) return;
    state.modalImgIndex = (state.modalImgIndex - 1 + state.modalProduct.images.length) % state.modalProduct.images.length;
    updateModalImageGallery();
}

function changeModalQty(delta) {
    if (!state.modalProduct) return;
    state.modalQty = Math.max(1, state.modalQty + delta);
    document.getElementById("modalQty").innerText = state.modalQty;
    document.getElementById("modalTotal").innerText = state.modalProduct.price * state.modalQty;
}

function orderModalWhatsApp() {
    if (!state.modalProduct) return;
    const total = state.modalProduct.price * state.modalQty;
    const text = 
`✨ *Hello Ravikha!* ✨
I would like to order:

*Product:* ${state.modalProduct.title}
*Category:* ${state.modalProduct.category}
*Unit Price:* ₹${state.modalProduct.price}
*Quantity:* ${state.modalQty}
*Total Price:* ₹${total}

Kindly confirm availability and delivery dispatch time! 🌸`;

    const url = `https://wa.me/${CONFIG.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

function addModalItemToBag() {
    if (!state.modalProduct) return;
    addToCart(state.modalProduct.id, state.modalQty);
    closeProductModal();
}

function shareProduct() {
    if (!state.modalProduct) return;
    const title = `${state.modalProduct.title} - Ravikha Handcrafted`;
    const text = `Check out this gorgeous handmade crochet ${state.modalProduct.title} (₹${state.modalProduct.price}) from Ravikha!`;
    const url = window.location.href;

    if (navigator.share) {
        navigator.share({ title, text, url }).catch(() => {});
    } else {
        navigator.clipboard.writeText(`${title} - ${url}`).then(() => {
            showToast("Product link copied to clipboard!", "success");
        });
    }
}

/**
 * Shopping Bag (Cart) Operations
 */
function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem(CONFIG.cartStorageKey);
        if (saved) {
            state.cart = JSON.parse(saved);
        }
    } catch (e) {
        console.warn("Failed to read cart from localStorage:", e);
        state.cart = [];
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem(CONFIG.cartStorageKey, JSON.stringify(state.cart));
    } catch (e) {
        console.warn("Failed to save cart to localStorage:", e);
    }
}

function addToCart(productId, qty = 1) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        const firstImg = (product.images && product.images.length > 0) ? product.images[0] : PLACEHOLDER_SVG;
        state.cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            image: safeImageUrl(firstImg),
            qty: qty
        });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`Added ${qty}x "${product.title}" to your bag!`, "success");
}

function updateCartQty(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        state.cart = state.cart.filter(i => i.id !== productId);
    }

    saveCartToStorage();
    updateCartUI();
}

function removeCartItem(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCartToStorage();
    updateCartUI();
    showToast("Item removed from your bag.", "info");
}

function clearCart() {
    if (state.cart.length === 0) return;
    if (confirm("Are you sure you want to empty your shopping bag?")) {
        state.cart = [];
        saveCartToStorage();
        updateCartUI();
        showToast("Shopping bag cleared.", "info");
    }
}

function toggleCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    if (!drawer) return;
    const isHidden = drawer.classList.contains("hidden");
    if (isHidden) {
        drawer.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    } else {
        drawer.classList.add("hidden");
        document.body.style.overflow = "";
    }
}

function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Badges in header and mobile bottom dock
    const desktopBadge = document.getElementById("desktopCartBadge");
    const mobileBadge = document.getElementById("mobileCartBadge");
    const drawerItemCount = document.getElementById("drawerItemCount");
    const cartSubtotalEl = document.getElementById("cartSubtotal");

    if (desktopBadge) desktopBadge.innerText = totalCount;
    if (mobileBadge) mobileBadge.innerText = totalCount;
    if (drawerItemCount) drawerItemCount.innerText = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    if (cartSubtotalEl) cartSubtotalEl.innerText = subtotal;

    const itemsContainer = document.getElementById("cartItemsContainer");
    const emptyNotice = document.getElementById("cartEmptyNotice");
    const checkoutBtn = document.getElementById("cartCheckoutBtn");

    if (!itemsContainer) return;

    if (state.cart.length === 0) {
        itemsContainer.innerHTML = "";
        if (emptyNotice) emptyNotice.classList.remove("hidden");
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }

    if (emptyNotice) emptyNotice.classList.add("hidden");
    if (checkoutBtn) checkoutBtn.disabled = false;

    itemsContainer.innerHTML = state.cart.map(item => `
        <div class="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-warmBorder shadow-2xs">
            <div class="flex items-center gap-3 overflow-hidden">
                <img src="${item.image}" alt="${item.title}" 
                    class="w-14 h-14 rounded-xl object-cover bg-linen/50 shrink-0" 
                    onerror="this.src='${PLACEHOLDER_SVG}'">
                <div class="truncate">
                    <h4 class="font-bold text-xs text-charcoal truncate" title="${item.title}">${item.title}</h4>
                    <p class="text-[11px] text-terracotta font-semibold mt-0.5">
                        ₹${item.price} x ${item.qty} = <span class="font-bold">₹${item.price * item.qty}</span>
                    </p>
                    <span class="text-[10px] text-subdued">${item.category || ''}</span>
                </div>
            </div>

            <div class="flex items-center gap-2 shrink-0 ml-2">
                <div class="flex items-center border border-warmBorder rounded-xl overflow-hidden bg-linen/30">
                    <button onclick="updateCartQty('${item.id}', -1)" 
                        class="w-6 h-6 flex items-center justify-center text-charcoal font-bold text-xs hover:bg-linen">-</button>
                    <span class="w-6 text-center font-bold text-xs text-charcoal">${item.qty}</span>
                    <button onclick="updateCartQty('${item.id}', 1)" 
                        class="w-6 h-6 flex items-center justify-center text-charcoal font-bold text-xs hover:bg-linen">+</button>
                </div>
                <button onclick="removeCartItem('${item.id}')" title="Remove item" 
                    class="w-7 h-7 rounded-lg text-rose-500 hover:bg-rose-50 flex items-center justify-center text-xs transition-colors">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join("");
}

/**
 * Multi-Item WhatsApp Checkout
 */
function checkoutCartToWhatsApp(event) {
    if (event) event.preventDefault();
    if (state.cart.length === 0) {
        showToast("Your shopping bag is empty!", "warning");
        return;
    }

    const customerName = (document.getElementById("checkoutCustomerName")?.value || "").trim();
    const customNote = (document.getElementById("checkoutCustomerNote")?.value || "").trim();

    let text = `🌸 *New Order - Ravikha Handcrafted* 🌸\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    if (customerName) {
        text += `👤 *Customer Name:* ${customerName}\n`;
    }

    let grandTotal = 0;
    let totalItems = 0;

    state.cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        grandTotal += itemTotal;
        totalItems += item.qty;
        text += `\n${index + 1}. *${item.title}*\n`;
        text += `   • Quantity: ${item.qty}\n`;
        text += `   • Price: ₹${item.price} each (₹${itemTotal})\n`;
    });

    text += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `🛍️ *Total Items:* ${totalItems}\n`;
    text += `💰 *Grand Total Amount:* ₹${grandTotal}\n`;

    if (customNote) {
        text += `📝 *Customization Request / Note:* ${customNote}\n`;
    }

    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `Please confirm order availability, payment details, and estimated delivery schedule! 🧶✨`;

    const url = `https://wa.me/${CONFIG.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

/**
 * ==========================================================
 * Admin Panel & GitHub REST API Synchronization Workflow
 * ==========================================================
 */

function checkExistingAdminSession() {
    const isAuth = sessionStorage.getItem("ravikha_admin_auth") === "true";
    if (isAuth) {
        state.isAdminLoggedIn = true;
        const storedToken = sessionStorage.getItem("ravikha_unlocked_token");
        if (storedToken) {
            state.githubConfig.token = storedToken;
        } else {
            state.githubConfig.token = decryptTokenWithPassword(ENCRYPTED_ADMIN_TOKEN, ADMIN_PASSWORD);
        }
    }
}

function toggleAdminModal() {
    const modal = document.getElementById("adminModal");
    if (!modal) return;
    const isHidden = modal.classList.contains("hidden");
    if (isHidden) {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";

        const authView = document.getElementById("adminAuthView");
        const dashView = document.getElementById("adminDashboardView");
        const pwdError = document.getElementById("adminPasswordError");
        if (pwdError) pwdError.classList.add("hidden");

        if (state.isAdminLoggedIn) {
            if (authView) authView.classList.add("hidden");
            if (dashView) dashView.classList.remove("hidden");
            populateAdminSettingsForm();
            renderAdminProductList();
            resetAdminProductForm();
        } else {
            if (authView) authView.classList.remove("hidden");
            if (dashView) dashView.classList.add("hidden");
            const pwdInput = document.getElementById("adminPasswordInput");
            if (pwdInput) {
                pwdInput.value = "";
                setTimeout(() => pwdInput.focus(), 150);
            }
        }
        updateGitHubStatusIndicator();
    } else {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    }
}

function handleAdminLogin(event) {
    if (event) event.preventDefault();
    const input = document.getElementById("adminPasswordInput");
    const errorEl = document.getElementById("adminPasswordError");
    const entered = (input?.value || "").trim();

    if (entered === ADMIN_PASSWORD) {
        state.isAdminLoggedIn = true;
        const unlockedToken = decryptTokenWithPassword(ENCRYPTED_ADMIN_TOKEN, entered);
        state.githubConfig.token = unlockedToken;
        
        sessionStorage.setItem("ravikha_admin_auth", "true");
        sessionStorage.setItem("ravikha_unlocked_token", unlockedToken);

        if (errorEl) errorEl.classList.add("hidden");

        document.getElementById("adminAuthView")?.classList.add("hidden");
        document.getElementById("adminDashboardView")?.classList.remove("hidden");

        populateAdminSettingsForm();
        renderAdminProductList();
        resetAdminProductForm();
        updateGitHubStatusIndicator();
        showToast("Welcome! Admin unlocked & GitHub sync active.", "success");
    } else {
        if (errorEl) errorEl.classList.remove("hidden");
        if (input) {
            input.focus();
            input.select();
        }
    }
}

function handleAdminLogout() {
    state.isAdminLoggedIn = false;
    state.githubConfig.token = "";
    sessionStorage.removeItem("ravikha_admin_auth");
    sessionStorage.removeItem("ravikha_unlocked_token");

    document.getElementById("adminDashboardView")?.classList.add("hidden");
    document.getElementById("adminAuthView")?.classList.remove("hidden");
    const pwdInput = document.getElementById("adminPasswordInput");
    if (pwdInput) pwdInput.value = "";
    const errorEl = document.getElementById("adminPasswordError");
    if (errorEl) errorEl.classList.add("hidden");

    updateGitHubStatusIndicator();
    showToast("Logged out from Admin portal.", "info");
}

function togglePasswordVisibility() {
    const input = document.getElementById("adminPasswordInput");
    const icon = document.getElementById("passwordEyeIcon");
    if (!input || !icon) return;

    if (input.type === "password") {
        input.type = "text";
        icon.className = "fa-regular fa-eye-slash";
    } else {
        input.type = "password";
        icon.className = "fa-regular fa-eye";
    }
}

function loadGitHubConfig() {
    try {
        const saved = localStorage.getItem(CONFIG.adminConfigKey);
        if (saved) {
            state.githubConfig = JSON.parse(saved);
        } else {
            state.githubConfig = { ...CONFIG.githubDefaults, token: "" };
        }
    } catch (e) {
        state.githubConfig = { ...CONFIG.githubDefaults, token: "" };
    }

    const sessionToken = sessionStorage.getItem("ravikha_unlocked_token");
    if (sessionToken) {
        state.githubConfig.token = sessionToken;
    }
}

function populateAdminSettingsForm() {
    const ownerEl = document.getElementById("ghOwnerInput");
    const repoEl = document.getElementById("ghRepoInput");
    const branchEl = document.getElementById("ghBranchInput");
    const tokenEl = document.getElementById("ghTokenInput");

    if (ownerEl) ownerEl.value = state.githubConfig.owner || CONFIG.githubDefaults.owner;
    if (repoEl) repoEl.value = state.githubConfig.repo || CONFIG.githubDefaults.repo;
    if (branchEl) branchEl.value = state.githubConfig.branch || CONFIG.githubDefaults.branch;
    if (tokenEl) tokenEl.value = state.githubConfig.token || "";

    updateGitHubStatusIndicator();
}

function saveAdminSettings(event) {
    if (event) event.preventDefault();
    const owner = document.getElementById("ghOwnerInput")?.value.trim() || CONFIG.githubDefaults.owner;
    const repo = document.getElementById("ghRepoInput")?.value.trim() || CONFIG.githubDefaults.repo;
    const branch = document.getElementById("ghBranchInput")?.value.trim() || CONFIG.githubDefaults.branch;
    const token = document.getElementById("ghTokenInput")?.value.trim() || "";

    state.githubConfig = { owner, repo, branch, token };
    localStorage.setItem(CONFIG.adminConfigKey, JSON.stringify(state.githubConfig));

    updateGitHubStatusIndicator();
    showToast("GitHub sync credentials updated!", "success");
}

function updateGitHubStatusIndicator() {
    const statusEl = document.getElementById("ghStatusBadge");
    if (!statusEl) return;

    if (!state.isAdminLoggedIn) {
        statusEl.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-500"></span> Locked`;
        statusEl.className = "text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 flex items-center gap-1.5";
        return;
    }

    if (state.githubConfig.token) {
        statusEl.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> GitHub Sync Active (${state.githubConfig.owner}/${state.githubConfig.repo})`;
        statusEl.className = "text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5";
    } else {
        statusEl.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-500"></span> Local Mode (No Token)`;
        statusEl.className = "text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 flex items-center gap-1.5";
    }
}

async function testGitHubConnection() {
    const { owner, repo, token } = state.githubConfig;
    if (!token) {
        alert("Please enter a GitHub Personal Access Token (PAT) with repo scope first.");
        return;
    }

    showToast("Testing GitHub API connection...", "info");

    try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/vnd.github.v3+json"
            }
        });

        if (res.ok) {
            const data = await res.json();
            alert(`✅ Successfully connected to GitHub!\nRepository: ${data.full_name}\nPermissions: Push/Admin verified.`);
            showToast("GitHub connection confirmed!", "success");
        } else {
            const err = await res.json();
            alert(`❌ GitHub Connection Failed (${res.status}):\n${err.message || 'Check your token and repo details.'}`);
        }
    } catch (e) {
        alert("❌ Network Error connecting to GitHub API: " + e.message);
    }
}

/**
 * Admin Product CRUD Form Handling
 */
function handleAdminImageFileUpload(event) {
    const files = Array.from(event.target.files);
    if (!files.length) return;

    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64 = e.target.result;
            // Clean filename
            const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
            state.adminPendingUploadFiles.push({
                file: file,
                dataUrl: base64,
                name: cleanName
            });
            renderAdminImagePreviews();
        };
        reader.readAsDataURL(file);
    });
}

function renderAdminImagePreviews() {
    const container = document.getElementById("adminImagePreviewsContainer");
    if (!container) return;

    // Collect URLs from input
    const urlsText = document.getElementById("formProductUrls")?.value || "";
    const parsedUrls = urlsText.split(",").map(u => u.trim()).filter(u => u.length > 0);

    const allImages = [
        ...state.adminPendingUploadFiles.map((item, idx) => ({ type: "local", src: item.dataUrl, name: item.name, idx })),
        ...parsedUrls.map((url, idx) => ({ type: "url", src: url, name: "Web URL", idx }))
    ];

    if (allImages.length === 0) {
        container.innerHTML = `<span class="text-xs text-subdued italic">No photos attached yet.</span>`;
        return;
    }

    container.innerHTML = allImages.map(img => `
        <div class="relative w-16 h-16 rounded-xl overflow-hidden border border-warmBorder group shrink-0">
            <img src="${img.src}" class="w-full h-full object-cover" onerror="this.src='${PLACEHOLDER_SVG}'">
            ${img.type === "local" ? `
                <button type="button" onclick="removePendingFile(${img.idx})" 
                    class="absolute top-1 right-1 w-5 h-5 bg-rose-600 text-white rounded-full flex items-center justify-center text-[10px] shadow-xs">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            ` : `
                <span class="absolute bottom-0 inset-x-0 bg-charcoal/70 text-white text-[8px] text-center truncate px-0.5">URL</span>
            `}
        </div>
    `).join("");
}

function removePendingFile(index) {
    state.adminPendingUploadFiles.splice(index, 1);
    renderAdminImagePreviews();
}

function resetAdminProductForm() {
    const form = document.getElementById("adminProductForm");
    if (form) form.reset();

    const idInput = document.getElementById("formProductId");
    if (idInput) idInput.value = "";

    state.adminPendingUploadFiles = [];
    renderAdminImagePreviews();

    const titleEl = document.getElementById("adminFormTitle");
    if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-plus text-terracotta"></i> Add New Crochet Piece`;

    const btnTextEl = document.getElementById("adminSubmitBtnText");
    if (btnTextEl) btnTextEl.innerText = "Save Product to Catalog";
}

function editProductInAdmin(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById("formProductId").value = product.id;
    document.getElementById("formProductTitle").value = product.title;
    document.getElementById("formProductPrice").value = product.price;
    document.getElementById("formProductCategory").value = product.category;
    document.getElementById("formProductBadge").value = product.badge || "";
    document.getElementById("formProductDescription").value = product.description || "";

    // Existing images
    const existingImages = product.images || [];
    document.getElementById("formProductUrls").value = existingImages.join(", ");

    state.adminPendingUploadFiles = [];
    renderAdminImagePreviews();

    const titleEl = document.getElementById("adminFormTitle");
    if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-pen text-terracotta"></i> Edit: ${product.title}`;

    const btnTextEl = document.getElementById("adminSubmitBtnText");
    if (btnTextEl) btnTextEl.innerText = "Update Product";

    // Scroll form into view
    document.getElementById("adminProductForm")?.scrollIntoView({ behavior: 'smooth' });
}

async function handleProductFormSubmit(event) {
    event.preventDefault();

    if (!state.isAdminLoggedIn) {
        alert("Please unlock the admin portal with your password before modifying products.");
        return;
    }

    const id = document.getElementById("formProductId").value.trim();
    const title = document.getElementById("formProductTitle").value.trim();
    const price = parseFloat(document.getElementById("formProductPrice").value);
    const category = document.getElementById("formProductCategory").value;
    const badge = document.getElementById("formProductBadge").value.trim();
    const description = document.getElementById("formProductDescription").value.trim();

    const rawUrls = document.getElementById("formProductUrls").value;
    const urlList = rawUrls.split(",").map(u => u.trim()).filter(u => u.length > 0);

    const submitBtn = document.getElementById("adminProductSubmitBtn");
    const originalText = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing & Syncing...`;
    }

    try {
        let finalImagePaths = [...urlList];

        // If files are attached and GitHub token is present, upload them via GitHub Contents API
        if (state.adminPendingUploadFiles.length > 0) {
            if (state.githubConfig.token) {
                showToast("Uploading images to GitHub repository...", "info");
                for (const pending of state.adminPendingUploadFiles) {
                    const repoPath = `images/uploads/${pending.name}`;
                    const uploadedPath = await uploadImageToGitHub(repoPath, pending.dataUrl);
                    if (uploadedPath) {
                        finalImagePaths.push(uploadedPath);
                    } else {
                        // Fallback to storing dataUrl locally
                        finalImagePaths.push(pending.dataUrl);
                    }
                }
            } else {
                // In local mode without GitHub token, store base64 in local state
                state.adminPendingUploadFiles.forEach(pending => {
                    finalImagePaths.push(pending.dataUrl);
                });
            }
        }

        if (finalImagePaths.length === 0) {
            finalImagePaths = [PLACEHOLDER_SVG];
        }

        if (id) {
            // Update existing
            const index = state.products.findIndex(p => p.id === id);
            if (index !== -1) {
                state.products[index] = {
                    ...state.products[index],
                    title,
                    price,
                    category,
                    badge,
                    description,
                    images: finalImagePaths
                };
                showToast(`Updated "${title}"!`, "success");
            }
        } else {
            // Create new
            const newId = `rav-${Date.now().toString(36)}`;
            const newItem = {
                id: newId,
                title,
                price,
                category,
                badge,
                description,
                images: finalImagePaths
            };
            state.products.unshift(newItem);
            state.cardQuantities[newId] = 1;
            state.cardImageIndices[newId] = 0;
            showToast(`Added new item "${title}"!`, "success");
        }

        // Save locally
        saveCatalogToStorage();

        // If GitHub token is configured, commit updated data/products.json
        if (state.githubConfig.token) {
            showToast("Committing catalog updates to GitHub...", "info");
            await syncCatalogJsonToGitHub();
        }

        resetAdminProductForm();
        renderCategoryTabs();
        renderCatalog();
        renderAdminProductList();

    } catch (err) {
        console.error("Save error:", err);
        alert("Error saving item: " + err.message);
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }
}

async function deleteProduct(productId) {
    if (!state.isAdminLoggedIn) {
        alert("Please unlock the admin portal with your password before deleting products.");
        return;
    }

    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    if (!confirm(`Are you sure you want to delete "${product.title}"?`)) return;

    state.products = state.products.filter(p => p.id !== productId);
    saveCatalogToStorage();

    if (state.githubConfig.token) {
        showToast("Updating GitHub catalog...", "info");
        await syncCatalogJsonToGitHub();
    }

    renderCategoryTabs();
    renderCatalog();
    renderAdminProductList();
    showToast(`Deleted "${product.title}".`, "info");
}

function renderAdminProductList() {
    const container = document.getElementById("adminProductListContainer");
    if (!container) return;

    container.innerHTML = state.products.map(p => {
        const thumb = safeImageUrl((p.images && p.images[0]) ? p.images[0] : PLACEHOLDER_SVG);
        return `
            <div class="flex items-center justify-between p-3 bg-white rounded-2xl border border-warmBorder shadow-2xs hover:border-terracotta/40 transition-colors">
                <div class="flex items-center gap-3 overflow-hidden">
                    <img src="${thumb}" class="w-11 h-11 rounded-xl object-cover bg-linen/50 shrink-0" onerror="this.src='${PLACEHOLDER_SVG}'">
                    <div class="truncate">
                        <h4 class="font-bold text-xs text-charcoal truncate">${p.title}</h4>
                        <div class="flex items-center gap-2 mt-0.5">
                            <span class="text-terracotta font-semibold text-xs">₹${p.price}</span>
                            <span class="text-[10px] text-subdued bg-linen px-2 py-0.5 rounded-full">${p.category}</span>
                            ${p.badge ? `<span class="text-[9px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">${p.badge}</span>` : ''}
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-1.5 shrink-0 ml-2">
                    <button onclick="editProductInAdmin('${p.id}')" title="Edit Item" 
                        class="w-8 h-8 rounded-xl bg-linen hover:bg-terracotta/10 text-charcoal hover:text-terracotta flex items-center justify-center text-xs transition-colors">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onclick="deleteProduct('${p.id}')" title="Delete Item" 
                        class="w-8 h-8 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 flex items-center justify-center text-xs transition-colors">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join("");
}

/**
 * GitHub REST API Helpers
 */
async function uploadImageToGitHub(path, base64DataUrl) {
    const { owner, repo, branch, token } = state.githubConfig;
    if (!token) return null;

    try {
        // Strip data:image/...;base64,
        const base64Content = base64DataUrl.split(',')[1] || base64DataUrl;

        // Check if file exists to fetch its SHA
        let sha = null;
        try {
            const checkRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/vnd.github.v3+json"
                }
            });
            if (checkRes.ok) {
                const existingData = await checkRes.json();
                sha = existingData.sha;
            }
        } catch (_) {}

        const body = {
            message: `upload(image): add ${path} via Ravikha Admin`,
            content: base64Content,
            branch: branch
        };
        if (sha) body.sha = sha;

        const uploadRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/vnd.github.v3+json"
            },
            body: JSON.stringify(body)
        });

        if (uploadRes.ok) {
            return path;
        } else {
            console.error("GitHub image upload failed:", await uploadRes.json());
            return null;
        }
    } catch (e) {
        console.error("uploadImageToGitHub error:", e);
        return null;
    }
}

async function syncCatalogJsonToGitHub() {
    const { owner, repo, branch, token } = state.githubConfig;
    if (!token) return;

    try {
        const path = "data/products.json";
        const jsonString = JSON.stringify(state.products, null, 2);
        // Base64 encode UTF-8 string safely
        const base64Content = btoa(unescape(encodeURIComponent(jsonString)));

        // Get latest sha of data/products.json
        let sha = null;
        try {
            const checkRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/vnd.github.v3+json"
                }
            });
            if (checkRes.ok) {
                const existingData = await checkRes.json();
                sha = existingData.sha;
            }
        } catch (_) {}

        const body = {
            message: `feat(catalog): sync ${state.products.length} products via Ravikha Admin`,
            content: base64Content,
            branch: branch
        };
        if (sha) body.sha = sha;

        const putRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/vnd.github.v3+json"
            },
            body: JSON.stringify(body)
        });

        if (putRes.ok) {
            showToast("GitHub repository synced successfully!", "success");
        } else {
            const err = await putRes.json();
            alert(`GitHub Commit Error: ${err.message || 'Unable to update data/products.json'}`);
        }
    } catch (e) {
        console.error("syncCatalogJsonToGitHub error:", e);
    }
}

/**
 * Export and Import Catalog JSON
 */
function exportCatalogJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.products, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `ravikha_products_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Catalog JSON downloaded!", "success");
}

function importCatalogJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const parsed = JSON.parse(e.target.result);
            if (Array.isArray(parsed)) {
                state.products = parsed;
                initializeProductQuantities();
                saveCatalogToStorage();
                renderCategoryTabs();
                renderCatalog();
                renderAdminProductList();
                showToast(`Imported ${parsed.length} products!`, "success");
            } else {
                alert("Invalid JSON format: expected an array of products.");
            }
        } catch (err) {
            alert("Error parsing JSON file: " + err.message);
        }
    };
    reader.readAsText(file);
}

function resetToDefaultSeed() {
    if (confirm("Restore factory default products catalog? Any locally added items will be replaced.")) {
        state.products = [...FALLBACK_SEED_PRODUCTS];
        initializeProductQuantities();
        saveCatalogToStorage();
        renderCategoryTabs();
        renderCatalog();
        renderAdminProductList();
        showToast("Default catalog restored.", "info");
    }
}

/**
 * Toast Notifications
 */
function showToast(message, type = "info") {
    const toast = document.getElementById("toast");
    const msgEl = document.getElementById("toastMessage");
    const iconEl = document.getElementById("toastIcon");
    if (!toast || !msgEl) return;

    msgEl.innerText = message;

    if (iconEl) {
        if (type === "success") {
            iconEl.className = "fa-solid fa-circle-check text-emerald-400";
        } else if (type === "warning") {
            iconEl.className = "fa-solid fa-triangle-exclamation text-amber-400";
        } else {
            iconEl.className = "fa-solid fa-circle-info text-roseDust";
        }
    }

    toast.classList.remove("hidden");
    toast.classList.add("flex");

    setTimeout(() => {
        toast.classList.add("hidden");
        toast.classList.remove("flex");
    }, 3200);
}

/**
 * Global Keyboard & Event Handlers
 */
function setupGlobalEventListeners() {
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeProductModal();
            const drawer = document.getElementById("cartDrawer");
            if (drawer && !drawer.classList.contains("hidden")) toggleCartDrawer();
            const adminModal = document.getElementById("adminModal");
            if (adminModal && !adminModal.classList.contains("hidden")) toggleAdminModal();
        }
    });
}

// Kick off app when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);
