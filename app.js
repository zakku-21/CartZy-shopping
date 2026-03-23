// ─── CartZy App ───
(() => {
// ── Categories ──
const CATEGORIES = [
  { id: "electronics", name: "Electronics", icon: "📱", color: "#7c5cfc" },
  { id: "fashion-men", name: "Men's Fashion", icon: "👔", color: "#22d3ee" },
  { id: "fashion-women", name: "Women's Fashion", icon: "👗", color: "#fb7185" },
  { id: "home", name: "Home & Living", icon: "🏠", color: "#34d399" },
  { id: "beauty", name: "Beauty & Care", icon: "💄", color: "#f472b6" },
  { id: "sports", name: "Sports & Fitness", icon: "⚽", color: "#60a5fa" },
  { id: "books", name: "Books & Stationery", icon: "📚", color: "#a78bfa" },
  { id: "toys", name: "Toys & Games", icon: "🎮", color: "#fbbf24" },
  { id: "grocery", name: "Grocery & Food", icon: "🛒", color: "#4ade80" },
  { id: "accessories", name: "Accessories", icon: "⌚", color: "#f97316" }
];

// ── Products (20+ per category) ──
const PRODUCTS = [
  // ── Electronics (22) ──
  { id:1, name:"Wireless Bluetooth Earbuds Pro", cat:"electronics", emoji:"🎧", price:1299, mrp:2999, rating:4.5, reviews:3420, trending:true },
  { id:2, name:"Smart Watch Fitness Tracker", cat:"electronics", emoji:"⌚", price:1999, mrp:4999, rating:4.3, reviews:2180, trending:true },
  { id:3, name:"10000mAh Power Bank Fast Charge", cat:"electronics", emoji:"🔋", price:799, mrp:1499, rating:4.4, reviews:5610 },
  { id:4, name:"USB-C Hub 7-in-1 Adapter", cat:"electronics", emoji:"🔌", price:1499, mrp:2999, rating:4.2, reviews:890 },
  { id:5, name:"Portable Bluetooth Speaker", cat:"electronics", emoji:"🔊", price:999, mrp:2499, rating:4.6, reviews:4520, trending:true },
  { id:6, name:"Laptop Stand Aluminium Foldable", cat:"electronics", emoji:"💻", price:1299, mrp:2499, rating:4.1, reviews:1230 },
  { id:7, name:"Wireless Charging Pad 15W", cat:"electronics", emoji:"📶", price:599, mrp:1299, rating:4.0, reviews:2340 },
  { id:8, name:"Noise Cancelling Headphones", cat:"electronics", emoji:"🎵", price:2499, mrp:5999, rating:4.7, reviews:6780 },
  { id:9, name:"32GB USB 3.0 Flash Drive", cat:"electronics", emoji:"💾", price:349, mrp:699, rating:4.3, reviews:8920 },
  { id:10, name:"Webcam HD 1080p with Mic", cat:"electronics", emoji:"📷", price:1799, mrp:3499, rating:4.2, reviews:1560 },
  { id:11, name:"RGB Gaming Mouse Wired", cat:"electronics", emoji:"🖱️", price:699, mrp:1499, rating:4.4, reviews:3450 },
  { id:12, name:"Mechanical Keyboard RGB", cat:"electronics", emoji:"⌨️", price:2299, mrp:4999, rating:4.5, reviews:2890 },
  { id:13, name:"Wireless Mouse Ergonomic", cat:"electronics", emoji:"🖱️", price:499, mrp:999, rating:4.1, reviews:4560 },
  { id:14, name:"Screen Protector Tempered Glass", cat:"electronics", emoji:"📱", price:199, mrp:499, rating:4.0, reviews:12340 },
  { id:15, name:"Mini Projector HD Portable", cat:"electronics", emoji:"📽️", price:4999, mrp:9999, rating:4.3, reviews:890 },
  { id:16, name:"LED Desk Lamp Adjustable", cat:"electronics", emoji:"💡", price:899, mrp:1799, rating:4.4, reviews:2340 },
  { id:17, name:"Digital Alarm Clock LED", cat:"electronics", emoji:"⏰", price:599, mrp:1199, rating:4.2, reviews:3450 },
  { id:18, name:"Car Phone Mount Magnetic", cat:"electronics", emoji:"🚗", price:399, mrp:899, rating:4.1, reviews:5670 },
  { id:19, name:"Tablet Stand Adjustable", cat:"electronics", emoji:"📲", price:699, mrp:1499, rating:4.3, reviews:1230 },
  { id:20, name:"Smart LED Bulb WiFi", cat:"electronics", emoji:"💡", price:499, mrp:999, rating:4.0, reviews:3450 },
  { id:21, name:"Ring Light 10-inch with Stand", cat:"electronics", emoji:"💫", price:999, mrp:2499, rating:4.5, reviews:4560 },
  { id:22, name:"Earphone Wired with Mic", cat:"electronics", emoji:"🎤", price:249, mrp:599, rating:3.9, reviews:8900 },

  // ── Men's Fashion (22) ──
  { id:23, name:"Slim Fit Cotton T-Shirt Pack", cat:"fashion-men", emoji:"👕", price:599, mrp:1499, rating:4.3, reviews:6780, trending:true },
  { id:24, name:"Casual Denim Jeans Stretchable", cat:"fashion-men", emoji:"👖", price:899, mrp:1999, rating:4.2, reviews:4560 },
  { id:25, name:"Formal Shirt White Cotton", cat:"fashion-men", emoji:"👔", price:799, mrp:1699, rating:4.4, reviews:3450 },
  { id:26, name:"Sneakers Running Lightweight", cat:"fashion-men", emoji:"👟", price:1499, mrp:3499, rating:4.5, reviews:5670, trending:true },
  { id:27, name:"Polo T-Shirt Classic Fit", cat:"fashion-men", emoji:"👕", price:699, mrp:1299, rating:4.1, reviews:2340 },
  { id:28, name:"Track Pants Jogger Combo", cat:"fashion-men", emoji:"🩳", price:799, mrp:1599, rating:4.3, reviews:3450 },
  { id:29, name:"Winter Hoodie Fleece Lined", cat:"fashion-men", emoji:"🧥", price:1299, mrp:2999, rating:4.6, reviews:4560 },
  { id:30, name:"Leather Belt Reversible", cat:"fashion-men", emoji:"👔", price:399, mrp:999, rating:4.2, reviews:6780 },
  { id:31, name:"Cotton Boxers Pack of 5", cat:"fashion-men", emoji:"🩲", price:499, mrp:1199, rating:4.0, reviews:8900 },
  { id:32, name:"Sports Shoes Mesh Running", cat:"fashion-men", emoji:"👟", price:1199, mrp:2499, rating:4.4, reviews:3450 },
  { id:33, name:"Cargo Pants Loose Fit", cat:"fashion-men", emoji:"👖", price:999, mrp:2199, rating:4.1, reviews:2340 },
  { id:34, name:"Kurta Pajama Set Cotton", cat:"fashion-men", emoji:"👘", price:899, mrp:1999, rating:4.3, reviews:1230 },
  { id:35, name:"Blazer Slim Fit Casual", cat:"fashion-men", emoji:"🧥", price:2499, mrp:5999, rating:4.5, reviews:890 },
  { id:36, name:"Flip Flops Comfort Slides", cat:"fashion-men", emoji:"🩴", price:299, mrp:699, rating:4.0, reviews:5670 },
  { id:37, name:"Ankle Socks Pack of 6", cat:"fashion-men", emoji:"🧦", price:249, mrp:599, rating:4.2, reviews:7890 },
  { id:38, name:"Printed Graphic T-Shirts", cat:"fashion-men", emoji:"👕", price:449, mrp:999, rating:4.1, reviews:4560 },
  { id:39, name:"Chino Pants Slim Fit", cat:"fashion-men", emoji:"👖", price:1099, mrp:2299, rating:4.3, reviews:2340 },
  { id:40, name:"Denim Jacket Classic", cat:"fashion-men", emoji:"🧥", price:1799, mrp:3999, rating:4.4, reviews:1230 },
  { id:41, name:"Swim Shorts Quick Dry", cat:"fashion-men", emoji:"🩳", price:599, mrp:1299, rating:4.0, reviews:890 },
  { id:42, name:"Loafers Casual Leather", cat:"fashion-men", emoji:"👞", price:1599, mrp:3499, rating:4.5, reviews:2340 },
  { id:43, name:"Cotton Vest Innerwear Pack", cat:"fashion-men", emoji:"👕", price:349, mrp:799, rating:4.1, reviews:5670 },
  { id:44, name:"Aviator Sunglasses UV400", cat:"fashion-men", emoji:"🕶️", price:499, mrp:1299, rating:4.3, reviews:3450 },

  // ── Women's Fashion (22) ──
  { id:45, name:"Anarkali Kurti Floral Print", cat:"fashion-women", emoji:"👗", price:699, mrp:1599, rating:4.4, reviews:5670, trending:true },
  { id:46, name:"Palazzo Pants Combo Set", cat:"fashion-women", emoji:"👖", price:599, mrp:1299, rating:4.2, reviews:4560 },
  { id:47, name:"Cotton Saree with Blouse", cat:"fashion-women", emoji:"🥻", price:999, mrp:2499, rating:4.5, reviews:3450, trending:true },
  { id:48, name:"Leggings Stretchable Pack", cat:"fashion-women", emoji:"👖", price:449, mrp:999, rating:4.1, reviews:8900 },
  { id:49, name:"Crop Top Stylish Ribbed", cat:"fashion-women", emoji:"👚", price:399, mrp:899, rating:4.3, reviews:3450 },
  { id:50, name:"Ethnic Dupatta Embroidered", cat:"fashion-women", emoji:"🧣", price:299, mrp:699, rating:4.0, reviews:2340 },
  { id:51, name:"Denim Skirt A-Line Mini", cat:"fashion-women", emoji:"👗", price:799, mrp:1799, rating:4.2, reviews:1230 },
  { id:52, name:"Handbag Tote Leather", cat:"fashion-women", emoji:"👜", price:1299, mrp:2999, rating:4.4, reviews:4560 },
  { id:53, name:"Sandals Block Heel", cat:"fashion-women", emoji:"👡", price:899, mrp:1999, rating:4.3, reviews:3450 },
  { id:54, name:"Churidar Suit Set 3 Piece", cat:"fashion-women", emoji:"👗", price:1199, mrp:2799, rating:4.5, reviews:2340 },
  { id:55, name:"Jeans Skinny High Waist", cat:"fashion-women", emoji:"👖", price:899, mrp:1999, rating:4.2, reviews:5670 },
  { id:56, name:"Maxi Dress Floral Summer", cat:"fashion-women", emoji:"👗", price:999, mrp:2299, rating:4.4, reviews:3450 },
  { id:57, name:"Sneakers White Platform", cat:"fashion-women", emoji:"👟", price:1499, mrp:2999, rating:4.3, reviews:2340 },
  { id:58, name:"Silk Scarf Printed Large", cat:"fashion-women", emoji:"🧣", price:499, mrp:1199, rating:4.1, reviews:1230 },
  { id:59, name:"Sports Bra Padded Comfort", cat:"fashion-women", emoji:"👙", price:399, mrp:899, rating:4.2, reviews:4560 },
  { id:60, name:"Nightwear Pajama Set Cotton", cat:"fashion-women", emoji:"👚", price:599, mrp:1299, rating:4.0, reviews:3450 },
  { id:61, name:"Salwar Kameez Unstitched", cat:"fashion-women", emoji:"🧵", price:799, mrp:1799, rating:4.3, reviews:2340 },
  { id:62, name:"Wallet Clutch Party Wear", cat:"fashion-women", emoji:"👛", price:699, mrp:1499, rating:4.1, reviews:1230 },
  { id:63, name:"Belly Shoes Ballet Flat", cat:"fashion-women", emoji:"👠", price:599, mrp:1299, rating:4.4, reviews:3450 },
  { id:64, name:"Cardigan Knit Long Sleeve", cat:"fashion-women", emoji:"🧥", price:899, mrp:1999, rating:4.2, reviews:2340 },
  { id:65, name:"Hair Clips Accessories Set", cat:"fashion-women", emoji:"💇", price:199, mrp:499, rating:4.0, reviews:6780 },
  { id:66, name:"Bridal Lehenga Semi-Stitch", cat:"fashion-women", emoji:"👗", price:2999, mrp:7499, rating:4.6, reviews:890 },

  // ── Home & Living (21) ──
  { id:67, name:"Bedsheet Double Cotton 300TC", cat:"home", emoji:"🛏️", price:699, mrp:1599, rating:4.4, reviews:5670, trending:true },
  { id:68, name:"Curtains Blackout 2 Panels", cat:"home", emoji:"🪟", price:899, mrp:1999, rating:4.3, reviews:3450 },
  { id:69, name:"Cushion Covers Set of 5", cat:"home", emoji:"🛋️", price:399, mrp:899, rating:4.2, reviews:4560 },
  { id:70, name:"Wall Clock Modern Minimal", cat:"home", emoji:"🕐", price:599, mrp:1299, rating:4.1, reviews:2340 },
  { id:71, name:"Kitchen Organizer Rack Steel", cat:"home", emoji:"🍳", price:799, mrp:1799, rating:4.3, reviews:3450 },
  { id:72, name:"Bathroom Mat Anti-Slip Set", cat:"home", emoji:"🛁", price:349, mrp:799, rating:4.0, reviews:5670 },
  { id:73, name:"Vacuum Cleaner Handheld", cat:"home", emoji:"🧹", price:2499, mrp:4999, rating:4.5, reviews:2340 },
  { id:74, name:"Storage Boxes Foldable Pack", cat:"home", emoji:"📦", price:499, mrp:1199, rating:4.2, reviews:3450 },
  { id:75, name:"Table Lamp Ceramic Modern", cat:"home", emoji:"🪔", price:899, mrp:1999, rating:4.4, reviews:1230 },
  { id:76, name:"Door Mat Welcome Coir", cat:"home", emoji:"🚪", price:299, mrp:699, rating:4.0, reviews:6780 },
  { id:77, name:"Photo Frame Set Wall Decor", cat:"home", emoji:"🖼️", price:599, mrp:1499, rating:4.3, reviews:2340 },
  { id:78, name:"Towels Bath Cotton Premium", cat:"home", emoji:"🧖", price:499, mrp:1199, rating:4.1, reviews:4560 },
  { id:79, name:"Spice Rack Rotating Holder", cat:"home", emoji:"🫙", price:699, mrp:1499, rating:4.2, reviews:1230 },
  { id:80, name:"Electric Kettle 1.5L Steel", cat:"home", emoji:"☕", price:799, mrp:1599, rating:4.4, reviews:5670 },
  { id:81, name:"Pillow Memory Foam Set of 2", cat:"home", emoji:"🛏️", price:999, mrp:2299, rating:4.5, reviews:3450 },
  { id:82, name:"Artificial Plants Indoor Pot", cat:"home", emoji:"🪴", price:399, mrp:899, rating:4.1, reviews:2340 },
  { id:83, name:"Clothes Drying Stand Foldable", cat:"home", emoji:"👕", price:1199, mrp:2499, rating:4.3, reviews:1230 },
  { id:84, name:"Dinner Set Ceramic 18 Pcs", cat:"home", emoji:"🍽️", price:1999, mrp:4499, rating:4.4, reviews:890 },
  { id:85, name:"Dustbin Steel Pedal 8L", cat:"home", emoji:"🗑️", price:599, mrp:1299, rating:4.0, reviews:3450 },
  { id:86, name:"Mixer Grinder 750W", cat:"home", emoji:"🔌", price:2299, mrp:4999, rating:4.5, reviews:4560 },
  { id:87, name:"Chopping Board Bamboo", cat:"home", emoji:"🪵", price:349, mrp:799, rating:4.2, reviews:5670 },

  // ── Beauty & Care (21) ──
  { id:88, name:"Face Serum Vitamin C 30ml", cat:"beauty", emoji:"✨", price:499, mrp:1299, rating:4.5, reviews:8900, trending:true },
  { id:89, name:"Sunscreen SPF 50 Matte Finish", cat:"beauty", emoji:"☀️", price:399, mrp:799, rating:4.4, reviews:6780 },
  { id:90, name:"Lipstick Matte Combo Pack", cat:"beauty", emoji:"💄", price:599, mrp:1499, rating:4.3, reviews:5670 },
  { id:91, name:"Hair Oil Onion 200ml", cat:"beauty", emoji:"💇", price:299, mrp:699, rating:4.2, reviews:9120 },
  { id:92, name:"Face Wash Charcoal Cleanser", cat:"beauty", emoji:"🧴", price:249, mrp:599, rating:4.1, reviews:7890 },
  { id:93, name:"Moisturizer Cream Aloe Vera", cat:"beauty", emoji:"🧴", price:349, mrp:799, rating:4.3, reviews:4560 },
  { id:94, name:"Nail Polish Set 6 Colors", cat:"beauty", emoji:"💅", price:299, mrp:699, rating:4.0, reviews:3450 },
  { id:95, name:"Eye Shadow Palette 12 Shades", cat:"beauty", emoji:"👁️", price:699, mrp:1599, rating:4.4, reviews:2340 },
  { id:96, name:"Hair Dryer 1800W Foldable", cat:"beauty", emoji:"💨", price:899, mrp:1999, rating:4.2, reviews:3450 },
  { id:97, name:"Perfume 100ml Long Lasting", cat:"beauty", emoji:"🌸", price:799, mrp:1799, rating:4.5, reviews:5670, trending:true },
  { id:98, name:"Makeup Brush Set 12 Pcs", cat:"beauty", emoji:"🖌️", price:499, mrp:1199, rating:4.3, reviews:4560 },
  { id:99, name:"Face Mask Sheet Pack of 10", cat:"beauty", emoji:"😷", price:349, mrp:799, rating:4.1, reviews:6780 },
  { id:100, name:"Hair Straightener Ceramic", cat:"beauty", emoji:"💇", price:1299, mrp:2999, rating:4.4, reviews:2340 },
  { id:101, name:"Body Lotion 400ml Cocoa", cat:"beauty", emoji:"🧴", price:399, mrp:899, rating:4.2, reviews:3450 },
  { id:102, name:"Compact Powder Matte Finish", cat:"beauty", emoji:"💄", price:249, mrp:599, rating:4.0, reviews:5670 },
  { id:103, name:"Shampoo Anti-Hairfall 350ml", cat:"beauty", emoji:"🧴", price:299, mrp:649, rating:4.3, reviews:8900 },
  { id:104, name:"Beard Oil Growth Formula", cat:"beauty", emoji:"🧔", price:349, mrp:799, rating:4.1, reviews:4560 },
  { id:105, name:"BB Cream SPF 30 Tinted", cat:"beauty", emoji:"✨", price:499, mrp:1199, rating:4.2, reviews:2340 },
  { id:106, name:"Hand Cream Set Travel Size", cat:"beauty", emoji:"🤲", price:299, mrp:699, rating:4.0, reviews:3450 },
  { id:107, name:"Lip Balm Tinted Pack of 3", cat:"beauty", emoji:"💋", price:199, mrp:499, rating:4.1, reviews:7890 },
  { id:108, name:"Kajal Pencil Waterproof", cat:"beauty", emoji:"👁️", price:149, mrp:349, rating:4.3, reviews:9120 },

  // ── Sports & Fitness (21) ──
  { id:109, name:"Yoga Mat 6mm Anti-Slip", cat:"sports", emoji:"🧘", price:499, mrp:1199, rating:4.4, reviews:5670, trending:true },
  { id:110, name:"Dumbbell Set 10kg Pair", cat:"sports", emoji:"🏋️", price:1499, mrp:2999, rating:4.3, reviews:3450 },
  { id:111, name:"Resistance Bands Set of 5", cat:"sports", emoji:"💪", price:399, mrp:899, rating:4.5, reviews:6780 },
  { id:112, name:"Skipping Rope Speed Jump", cat:"sports", emoji:"🏃", price:249, mrp:599, rating:4.2, reviews:4560 },
  { id:113, name:"Water Bottle 1L Steel Insulated", cat:"sports", emoji:"🥤", price:599, mrp:1299, rating:4.4, reviews:7890 },
  { id:114, name:"Badminton Racket Set with Shuttle", cat:"sports", emoji:"🏸", price:799, mrp:1799, rating:4.1, reviews:2340 },
  { id:115, name:"Cricket Bat English Willow", cat:"sports", emoji:"🏏", price:2499, mrp:5499, rating:4.5, reviews:1230 },
  { id:116, name:"Football FIFA Size 5", cat:"sports", emoji:"⚽", price:699, mrp:1499, rating:4.3, reviews:3450 },
  { id:117, name:"Gym Gloves Grip Padded", cat:"sports", emoji:"🧤", price:349, mrp:799, rating:4.0, reviews:2340 },
  { id:118, name:"Cycling Helmet Adjustable", cat:"sports", emoji:"🚴", price:999, mrp:2299, rating:4.2, reviews:1230 },
  { id:119, name:"Protein Shaker Bottle 700ml", cat:"sports", emoji:"🥛", price:299, mrp:699, rating:4.1, reviews:5670 },
  { id:120, name:"Tennis Balls Pack of 3", cat:"sports", emoji:"🎾", price:199, mrp:499, rating:4.0, reviews:3450 },
  { id:121, name:"Pull Up Bar Door Frame", cat:"sports", emoji:"🏋️", price:799, mrp:1799, rating:4.3, reviews:2340 },
  { id:122, name:"Running Armband Phone Holder", cat:"sports", emoji:"📱", price:299, mrp:699, rating:4.1, reviews:4560 },
  { id:123, name:"Foam Roller Muscle Recovery", cat:"sports", emoji:"🧘", price:599, mrp:1299, rating:4.4, reviews:1230 },
  { id:124, name:"Swimming Goggles Anti-Fog", cat:"sports", emoji:"🏊", price:399, mrp:899, rating:4.2, reviews:2340 },
  { id:125, name:"Table Tennis Paddles Set", cat:"sports", emoji:"🏓", price:699, mrp:1499, rating:4.3, reviews:1230 },
  { id:126, name:"Ankle Weights 1kg Pair", cat:"sports", emoji:"💪", price:499, mrp:1099, rating:4.0, reviews:3450 },
  { id:127, name:"Basketball Outdoor Size 7", cat:"sports", emoji:"🏀", price:899, mrp:1999, rating:4.4, reviews:2340 },
  { id:128, name:"Gym Bag Duffle Waterproof", cat:"sports", emoji:"🎒", price:699, mrp:1599, rating:4.2, reviews:4560 },
  { id:129, name:"Hand Grip Strengthener Set", cat:"sports", emoji:"✊", price:249, mrp:599, rating:4.1, reviews:5670 },

  // ── Books & Stationery (21) ──
  { id:130, name:"Atomic Habits by James Clear", cat:"books", emoji:"📖", price:299, mrp:599, rating:4.8, reviews:12340, trending:true },
  { id:131, name:"Notebook Premium A5 Pack of 3", cat:"books", emoji:"📓", price:249, mrp:599, rating:4.3, reviews:5670 },
  { id:132, name:"Pen Set Gel Ink 10 Colors", cat:"books", emoji:"🖊️", price:199, mrp:499, rating:4.2, reviews:8900 },
  { id:133, name:"Diary 2026 Daily Planner", cat:"books", emoji:"📅", price:349, mrp:799, rating:4.1, reviews:3450 },
  { id:134, name:"Art Sketch Pad A4 200 Pages", cat:"books", emoji:"🎨", price:299, mrp:699, rating:4.4, reviews:2340 },
  { id:135, name:"Colored Pencils 48 Set Premium", cat:"books", emoji:"🖍️", price:499, mrp:1199, rating:4.5, reviews:3450 },
  { id:136, name:"Psychology of Money by MH", cat:"books", emoji:"📖", price:249, mrp:499, rating:4.7, reviews:9120 },
  { id:137, name:"Sticky Notes Neon Pack 400", cat:"books", emoji:"📝", price:149, mrp:349, rating:4.0, reviews:6780 },
  { id:138, name:"Desk Organizer Wooden Stylish", cat:"books", emoji:"🗃️", price:699, mrp:1499, rating:4.3, reviews:1230 },
  { id:139, name:"Highlighter Set 6 Pastel Colors", cat:"books", emoji:"🖍️", price:199, mrp:449, rating:4.2, reviews:4560 },
  { id:140, name:"Ikigai Book Bestseller", cat:"books", emoji:"📖", price:199, mrp:449, rating:4.6, reviews:7890 },
  { id:141, name:"Pencil Pouch Canvas Zipper", cat:"books", emoji:"✏️", price:149, mrp:349, rating:4.0, reviews:3450 },
  { id:142, name:"White Board Marker Set 4", cat:"books", emoji:"📝", price:199, mrp:449, rating:4.1, reviews:2340 },
  { id:143, name:"Origami Paper 200 Sheets Color", cat:"books", emoji:"🎨", price:249, mrp:599, rating:4.3, reviews:1230 },
  { id:144, name:"Rich Dad Poor Dad Book", cat:"books", emoji:"📖", price:249, mrp:499, rating:4.7, reviews:8900 },
  { id:145, name:"Washi Tape Decorative Set 10", cat:"books", emoji:"🎀", price:299, mrp:699, rating:4.2, reviews:3450 },
  { id:146, name:"Calligraphy Pen Set Starter", cat:"books", emoji:"✒️", price:399, mrp:899, rating:4.4, reviews:1230 },
  { id:147, name:"Geometry Box Complete Set", cat:"books", emoji:"📐", price:149, mrp:349, rating:4.1, reviews:5670 },
  { id:148, name:"Bookmark Set Magnetic Pack 6", cat:"books", emoji:"🔖", price:149, mrp:349, rating:4.0, reviews:4560 },
  { id:149, name:"Graph Notebook A4 200 Pages", cat:"books", emoji:"📒", price:199, mrp:449, rating:4.2, reviews:2340 },
  { id:150, name:"Paint Brush Set 12 Pcs Art", cat:"books", emoji:"🖌️", price:349, mrp:799, rating:4.3, reviews:1230 },

  // ── Toys & Games (21) ──
  { id:151, name:"Rubik's Cube Speed 3x3", cat:"toys", emoji:"🧩", price:299, mrp:699, rating:4.5, reviews:6780, trending:true },
  { id:152, name:"Lego Building Blocks 500pcs", cat:"toys", emoji:"🧱", price:1499, mrp:2999, rating:4.6, reviews:4560 },
  { id:153, name:"Board Game Family Fun Night", cat:"toys", emoji:"🎲", price:699, mrp:1499, rating:4.3, reviews:3450 },
  { id:154, name:"Remote Control Car Off-Road", cat:"toys", emoji:"🏎️", price:1299, mrp:2999, rating:4.4, reviews:2340 },
  { id:155, name:"Puzzle 1000 Pieces Landscape", cat:"toys", emoji:"🧩", price:499, mrp:1199, rating:4.2, reviews:3450 },
  { id:156, name:"Soft Toys Teddy Bear 30cm", cat:"toys", emoji:"🧸", price:399, mrp:899, rating:4.1, reviews:5670 },
  { id:157, name:"Nerf Blaster Elite Dart Gun", cat:"toys", emoji:"🔫", price:999, mrp:2299, rating:4.5, reviews:2340 },
  { id:158, name:"Carrom Board Full Size", cat:"toys", emoji:"🎯", price:1499, mrp:3499, rating:4.4, reviews:1230 },
  { id:159, name:"Chess Set Wooden Magnetic", cat:"toys", emoji:"♟️", price:599, mrp:1299, rating:4.3, reviews:4560 },
  { id:160, name:"Slime Kit DIY 12 Colors", cat:"toys", emoji:"🫧", price:349, mrp:799, rating:4.0, reviews:3450 },
  { id:161, name:"Action Figure Superhero 15cm", cat:"toys", emoji:"🦸", price:499, mrp:1199, rating:4.2, reviews:2340 },
  { id:162, name:"Drone Mini Camera HD", cat:"toys", emoji:"🚁", price:2999, mrp:5999, rating:4.3, reviews:890 },
  { id:163, name:"Card Game UNO Family Pack", cat:"toys", emoji:"🃏", price:199, mrp:499, rating:4.5, reviews:8900 },
  { id:164, name:"Play-Doh Modeling Set 8pk", cat:"toys", emoji:"🎨", price:399, mrp:899, rating:4.1, reviews:4560 },
  { id:165, name:"Water Gun Super Soaker", cat:"toys", emoji:"💦", price:499, mrp:1099, rating:4.0, reviews:3450 },
  { id:166, name:"Scooter Kids Foldable", cat:"toys", emoji:"🛴", price:1999, mrp:3999, rating:4.4, reviews:1230 },
  { id:167, name:"Toy Kitchen Play Set", cat:"toys", emoji:"🧑‍🍳", price:1299, mrp:2999, rating:4.2, reviews:2340 },
  { id:168, name:"Train Set Electric Track", cat:"toys", emoji:"🚂", price:1799, mrp:3999, rating:4.5, reviews:890 },
  { id:169, name:"Magic Tricks Kit Beginner", cat:"toys", emoji:"🎩", price:599, mrp:1299, rating:4.1, reviews:1230 },
  { id:170, name:"Frisbee Flying Disc 25cm", cat:"toys", emoji:"🥏", price:199, mrp:449, rating:4.0, reviews:3450 },
  { id:171, name:"Binoculars Kids Explorer", cat:"toys", emoji:"🔭", price:499, mrp:1199, rating:4.3, reviews:2340 },

  // ── Grocery & Food (21) ──
  { id:172, name:"Basmati Rice Premium 5kg", cat:"grocery", emoji:"🍚", price:499, mrp:799, rating:4.5, reviews:8900 },
  { id:173, name:"Green Tea 100 Bags Organic", cat:"grocery", emoji:"🍵", price:349, mrp:699, rating:4.4, reviews:6780, trending:true },
  { id:174, name:"Mixed Dry Fruits 500g Pack", cat:"grocery", emoji:"🥜", price:599, mrp:1299, rating:4.6, reviews:5670 },
  { id:175, name:"Honey Pure Raw 500g", cat:"grocery", emoji:"🍯", price:349, mrp:699, rating:4.3, reviews:4560 },
  { id:176, name:"Oats Rolled Whole Grain 1kg", cat:"grocery", emoji:"🥣", price:249, mrp:499, rating:4.2, reviews:7890 },
  { id:177, name:"Olive Oil Extra Virgin 500ml", cat:"grocery", emoji:"🫒", price:499, mrp:999, rating:4.4, reviews:3450 },
  { id:178, name:"Peanut Butter Crunchy 1kg", cat:"grocery", emoji:"🥜", price:399, mrp:799, rating:4.3, reviews:5670 },
  { id:179, name:"Chocolate Dark 72% Bar Pack", cat:"grocery", emoji:"🍫", price:299, mrp:599, rating:4.5, reviews:6780 },
  { id:180, name:"Protein Bars Pack of 6", cat:"grocery", emoji:"💪", price:599, mrp:1199, rating:4.2, reviews:3450 },
  { id:181, name:"Coffee Beans Arabica 250g", cat:"grocery", emoji:"☕", price:449, mrp:899, rating:4.4, reviews:4560 },
  { id:182, name:"Chia Seeds Organic 400g", cat:"grocery", emoji:"🌱", price:299, mrp:699, rating:4.3, reviews:5670 },
  { id:183, name:"Pasta Whole Wheat 500g", cat:"grocery", emoji:"🍝", price:149, mrp:349, rating:4.1, reviews:3450 },
  { id:184, name:"Spices Combo Pack of 8", cat:"grocery", emoji:"🌶️", price:399, mrp:899, rating:4.2, reviews:6780 },
  { id:185, name:"Ghee Pure Cow 1L", cat:"grocery", emoji:"🧈", price:599, mrp:999, rating:4.5, reviews:8900 },
  { id:186, name:"Almond Milk Unsweetened 1L", cat:"grocery", emoji:"🥛", price:249, mrp:499, rating:4.0, reviews:2340 },
  { id:187, name:"Cookies Butter Biscuit 400g", cat:"grocery", emoji:"🍪", price:149, mrp:299, rating:4.1, reviews:4560 },
  { id:188, name:"Muesli Crunchy Breakfast 750g", cat:"grocery", emoji:"🥣", price:399, mrp:799, rating:4.3, reviews:3450 },
  { id:189, name:"Pickle Mango Homestyle 500g", cat:"grocery", emoji:"🥒", price:199, mrp:399, rating:4.2, reviews:5670 },
  { id:190, name:"Noodles Instant Pack of 12", cat:"grocery", emoji:"🍜", price:249, mrp:499, rating:4.0, reviews:7890 },
  { id:191, name:"Coconut Water Pack of 6", cat:"grocery", emoji:"🥥", price:299, mrp:599, rating:4.1, reviews:3450 },
  { id:192, name:"Jam Mixed Fruit 500g", cat:"grocery", emoji:"🍓", price:179, mrp:349, rating:4.0, reviews:4560 },

  // ── Accessories (21) ──
  { id:193, name:"Backpack Laptop 15.6 inch", cat:"accessories", emoji:"🎒", price:1299, mrp:2999, rating:4.4, reviews:5670, trending:true },
  { id:194, name:"Digital Watch LED Sports", cat:"accessories", emoji:"⌚", price:499, mrp:1299, rating:4.2, reviews:4560 },
  { id:195, name:"Wallet Leather RFID Blocking", cat:"accessories", emoji:"👛", price:599, mrp:1499, rating:4.3, reviews:3450 },
  { id:196, name:"Sunglasses Polarized Classic", cat:"accessories", emoji:"🕶️", price:699, mrp:1599, rating:4.4, reviews:5670 },
  { id:197, name:"Belt Buckle Automatic Leather", cat:"accessories", emoji:"👔", price:449, mrp:999, rating:4.1, reviews:3450 },
  { id:198, name:"Cap Baseball Adjustable", cat:"accessories", emoji:"🧢", price:299, mrp:699, rating:4.0, reviews:4560 },
  { id:199, name:"Sling Bag Crossbody Casual", cat:"accessories", emoji:"👜", price:799, mrp:1799, rating:4.3, reviews:2340 },
  { id:200, name:"Key Chain Leather Premium", cat:"accessories", emoji:"🔑", price:149, mrp:349, rating:4.0, reviews:6780 },
  { id:201, name:"Umbrella Windproof Automatic", cat:"accessories", emoji:"☂️", price:499, mrp:1099, rating:4.2, reviews:3450 },
  { id:202, name:"Tie & Pocket Square Set", cat:"accessories", emoji:"👔", price:399, mrp:899, rating:4.1, reviews:1230 },
  { id:203, name:"Travel Pouch Organizer Set", cat:"accessories", emoji:"🧳", price:599, mrp:1299, rating:4.3, reviews:2340 },
  { id:204, name:"Ring Silver Sterling 925", cat:"accessories", emoji:"💍", price:999, mrp:2299, rating:4.5, reviews:3450 },
  { id:205, name:"Bracelet Beaded Lucky Charm", cat:"accessories", emoji:"📿", price:249, mrp:599, rating:4.0, reviews:4560 },
  { id:206, name:"Earrings Stud Gold Plated", cat:"accessories", emoji:"💎", price:349, mrp:799, rating:4.2, reviews:5670 },
  { id:207, name:"Phone Case Shockproof Clear", cat:"accessories", emoji:"📱", price:199, mrp:499, rating:4.1, reviews:8900 },
  { id:208, name:"Neck Pillow Travel Memory Foam", cat:"accessories", emoji:"😴", price:499, mrp:1099, rating:4.3, reviews:3450 },
  { id:209, name:"Passport Holder Leather", cat:"accessories", emoji:"📕", price:399, mrp:899, rating:4.2, reviews:2340 },
  { id:210, name:"Scarf Wool Winter Warm", cat:"accessories", emoji:"🧣", price:499, mrp:1199, rating:4.1, reviews:1230 },
  { id:211, name:"Cufflinks Metal Formal Pair", cat:"accessories", emoji:"✨", price:599, mrp:1299, rating:4.4, reviews:890 },
  { id:212, name:"Hair Band Set Elastic 20pcs", cat:"accessories", emoji:"💇", price:99, mrp:249, rating:4.0, reviews:6780 },
  { id:213, name:"Tote Bag Canvas Printed", cat:"accessories", emoji:"🛍️", price:399, mrp:899, rating:4.2, reviews:3450 }
];

// ── State ──
let activeCategory = "all";
let cartCount = 0;
let productsPerPage = 20;
let currentPage = 1;

// ── DOM Refs ──
const $ = id => document.getElementById(id);
const categoryGrid = $("cz-category-grid");
const trendingScroll = $("cz-trending-scroll");
const productGrid = $("cz-product-grid");
const productCount = $("cz-product-count");
const loadMore = $("cz-load-more");
const loadMoreBtn = $("cz-load-more-btn");
const activeCatBar = $("cz-active-category-bar");
const activeCatTitle = $("cz-active-category-title");
const clearFilter = $("cz-clear-filter");
const showAllBtn = $("cz-show-all-btn");
const searchInput = $("cz-search-input");
const searchResults = $("cz-search-results");
const cartBadge = $("cz-cart-badge");

// ── Helpers ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getProductImagePath(p) {
  return `images/${p.cat}/${slugify(p.name)}.jpg`;
}

function getDiscount(price, mrp) {
  return Math.round(((mrp - price) / mrp) * 100);
}

function getCategoryName(catId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  return cat ? cat.name : catId;
}

function getCategoryColor(catId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  return cat ? cat.color : "#7c5cfc";
}

// ── Render Category Cards ──
function renderCategories() {
  categoryGrid.innerHTML = CATEGORIES.map((cat, i) => {
    const count = PRODUCTS.filter(p => p.cat === cat.id).length;
    return `<button class="cz-category-card ${activeCategory === cat.id ? 'active' : ''}"
      data-category="${cat.id}" style="animation-delay:${i * 0.05}s">
      <div class="cz-category-icon">${cat.icon}</div>
      <div class="cz-category-title">${cat.name}</div>
      <div class="cz-category-count">${count} items</div>
    </button>`;
  }).join("");
}

// ── Product Card HTML ──
function productCard(p, isTrending) {
  const disc = getDiscount(p.price, p.mrp);
  const color = getCategoryColor(p.cat);
  const stars = "★".repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? "½" : "");
  const imgPath = getProductImagePath(p);
  return `<article class="cz-product-card" data-id="${p.id}">
    <div class="cz-product-image">
      <div class="cz-product-image-bg" style="background:linear-gradient(135deg, ${color}22, ${color}11)"></div>
      ${p.trending && isTrending ? '<div class="cz-product-trending-badge">🔥 Trending</div>' : ''}
      <button class="cz-product-wishlist" data-wishlist="${p.id}">🤍</button>
      <img src="${imgPath}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><div class="cz-img-placeholder" style="display:none;"></div>
    </div>
    <div class="cz-product-body">
      <div class="cz-product-category-tag">${getCategoryName(p.cat)}</div>
      <h3>${p.name}</h3>
      <div class="cz-product-rating">${stars} <span>(${p.reviews.toLocaleString()})</span></div>
      <div class="cz-product-price-row">
        <span class="cz-product-price">₹${p.price.toLocaleString()}</span>
        <span class="cz-product-mrp">₹${p.mrp.toLocaleString()}</span>
        <span class="cz-product-discount">${disc}% off</span>
      </div>
      <div class="cz-product-add-btn">
        <button class="cz-button cz-button-primary cz-button-full cz-add-to-cart" data-id="${p.id}">Add to Cart</button>
      </div>
    </div>
  </article>`;
}

// ── Render Trending ──
function renderTrending() {
  const trending = shuffle(PRODUCTS.filter(p => p.trending));
  trendingScroll.innerHTML = trending.map(p => productCard(p, true)).join("");
}

// ── Render Products ──
function renderProducts() {
  let filtered = activeCategory === "all" ? shuffle(PRODUCTS) : PRODUCTS.filter(p => p.cat === activeCategory);
  const total = filtered.length;
  const visible = filtered.slice(0, currentPage * productsPerPage);

  productGrid.innerHTML = visible.map((p, i) => {
    const card = productCard(p, false);
    return card.replace('class="cz-product-card"', `class="cz-product-card" style="animation-delay:${(i % productsPerPage) * 0.03}s"`);
  }).join("");

  productCount.textContent = `Showing ${visible.length} of ${total} products`;
  loadMore.style.display = visible.length < total ? "flex" : "none";

  // Active cat bar
  if (activeCategory !== "all") {
    activeCatBar.style.display = "flex";
    activeCatTitle.textContent = getCategoryName(activeCategory);
    showAllBtn.classList.remove("cz-active-filter");
    showAllBtn.classList.add("cz-pill-btn");
  } else {
    activeCatBar.style.display = "none";
    showAllBtn.classList.add("cz-active-filter");
  }
}

// ── Events ──
categoryGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".cz-category-card");
  if (!card) return;
  const cat = card.dataset.category;
  activeCategory = activeCategory === cat ? "all" : cat;
  currentPage = 1;
  renderCategories();
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
});

showAllBtn.addEventListener("click", () => {
  activeCategory = "all";
  currentPage = 1;
  renderCategories();
  renderProducts();
});

clearFilter.addEventListener("click", () => {
  activeCategory = "all";
  currentPage = 1;
  renderCategories();
  renderProducts();
});

loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  renderProducts();
});

// ── Cart ──
document.addEventListener("click", (e) => {
  if (e.target.closest(".cz-add-to-cart")) {
    cartCount++;
    cartBadge.textContent = cartCount;
    cartBadge.style.transform = "scale(1.3)";
    setTimeout(() => cartBadge.style.transform = "scale(1)", 200);
    const btn = e.target.closest(".cz-add-to-cart");
    btn.textContent = "✓ Added!";
    btn.style.background = "linear-gradient(135deg, #34d399, #059669)";
    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.style.background = "";
    }, 1500);
  }
});

// ── Wishlist ──
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".cz-product-wishlist");
  if (!btn) return;
  btn.classList.toggle("active");
  btn.textContent = btn.classList.contains("active") ? "❤️" : "🤍";
});

// ── Search ──
let searchTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  const q = searchInput.value.trim().toLowerCase();
  if (q.length < 2) { searchResults.classList.remove("active"); return; }
  searchTimeout = setTimeout(() => {
    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) || getCategoryName(p.cat).toLowerCase().includes(q)
    ).slice(0, 8);
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="cz-search-result-item"><span>No results found</span></div>';
    } else {
      searchResults.innerHTML = results.map(p => {
        const srImg = getProductImagePath(p);
        return `<div class="cz-search-result-item" data-cat="${p.cat}">
          <img class="cz-sr-img" src="${srImg}" alt="" style="width:28px;height:28px;border-radius:6px;object-fit:cover;" onerror="this.outerHTML='<span class=cz-sr-emoji>${p.emoji}</span>'">
          <span class="cz-sr-name">${p.name}</span>
          <span class="cz-sr-price">₹${p.price.toLocaleString()}</span>
        </div>`;
      }).join("");
    }
    searchResults.classList.add("active");
  }, 200);
});

searchResults.addEventListener("click", (e) => {
  const item = e.target.closest(".cz-search-result-item");
  if (!item || !item.dataset.cat) return;
  activeCategory = item.dataset.cat;
  currentPage = 1;
  searchInput.value = "";
  searchResults.classList.remove("active");
  renderCategories();
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".cz-search-bar")) searchResults.classList.remove("active");
});

// ── Sidebar ──
const hamburger = $("cz-hamburger");
const sidebar = $("cz-sidebar");
const sidebarClose = $("cz-sidebar-close");
const sidebarOverlay = $("cz-sidebar-overlay");

function openSidebar() { sidebar.classList.add("active"); sidebarOverlay.classList.add("active"); hamburger.classList.add("active"); document.body.style.overflow = "hidden"; }
function closeSidebar() { sidebar.classList.remove("active"); sidebarOverlay.classList.remove("active"); hamburger.classList.remove("active"); document.body.style.overflow = ""; }

hamburger.addEventListener("click", openSidebar);
sidebarClose.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);
sidebar.querySelectorAll(".cz-sidebar-link").forEach(l => l.addEventListener("click", closeSidebar));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSidebar(); });

// ── Year ──
const yearEl = $("cz-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Auth System ──
const loginOverlay = $("cz-login-overlay");
const loginModal = $("cz-login-modal");
const modalClose = $("cz-modal-close");
const userBtn = $("cz-user-btn");
const userDropdown = $("cz-user-dropdown");
const userWrapper = $("cz-user-wrapper");
const sidebarUserLink = $("cz-sidebar-user-link");
const loginForm = $("cz-login-form");
const signupForm = $("cz-signup-form");
const showSignup = $("cz-show-signup");
const showLogin = $("cz-show-login");
const loginSubmit = $("cz-login-submit");
const signupSubmit = $("cz-signup-submit");
const logoutBtn = $("cz-logout-btn");
const dropdownName = $("cz-dropdown-name");
const dropdownEmail = $("cz-dropdown-email");
const dropdownAvatar = $("cz-dropdown-avatar");
const userIcon = $("cz-user-icon");

let currentUser = JSON.parse(localStorage.getItem("cz-user") || "null");

function openLoginModal() {
  loginOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
  loginForm.style.display = "";
  signupForm.style.display = "none";
  closeSidebar();
}

function closeLoginModal() {
  loginOverlay.classList.remove("active");
  document.body.style.overflow = "";
  clearFormErrors();
}

function clearFormErrors() {
  loginOverlay.querySelectorAll(".cz-auth-error, .cz-auth-success").forEach(el => el.remove());
  loginOverlay.querySelectorAll(".cz-form-input").forEach(i => i.classList.remove("error"));
}

function showFormError(form, msg) {
  clearFormErrors();
  const el = document.createElement("div");
  el.className = "cz-auth-error active";
  el.textContent = msg;
  form.querySelector("h2").insertAdjacentElement("afterend", el);
}

function setLoggedIn(user) {
  currentUser = user;
  localStorage.setItem("cz-user", JSON.stringify(user));
  const initials = user.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
  userBtn.classList.add("logged-in");
  userIcon.textContent = initials;
  userIcon.style.fontSize = "12px";
  userIcon.style.fontWeight = "700";
  dropdownName.textContent = user.name;
  dropdownEmail.textContent = user.email;
  dropdownAvatar.textContent = initials;
  if (sidebarUserLink) sidebarUserLink.textContent = "👤 " + user.name;
}

function setLoggedOut() {
  currentUser = null;
  localStorage.removeItem("cz-user");
  userBtn.classList.remove("logged-in");
  userIcon.textContent = "👤";
  userIcon.style.fontSize = "";
  userIcon.style.fontWeight = "";
  dropdownName.textContent = "Guest";
  dropdownEmail.textContent = "";
  dropdownAvatar.textContent = "👤";
  userDropdown.classList.remove("active");
  if (sidebarUserLink) sidebarUserLink.textContent = "👤 Login / Sign Up";
}

// Modal open/close
userBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentUser) {
    userDropdown.classList.toggle("active");
  } else {
    openLoginModal();
  }
});

if (sidebarUserLink) {
  sidebarUserLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentUser) {
      userDropdown.classList.toggle("active");
    } else {
      openLoginModal();
    }
  });
}

modalClose.addEventListener("click", closeLoginModal);
loginOverlay.addEventListener("click", (e) => {
  if (e.target === loginOverlay) closeLoginModal();
});

// Toggle login/signup
showSignup.addEventListener("click", (e) => {
  e.preventDefault();
  clearFormErrors();
  loginForm.style.display = "none";
  signupForm.style.display = "";
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  clearFormErrors();
  signupForm.style.display = "none";
  loginForm.style.display = "";
});

// Login submit
loginSubmit.addEventListener("click", () => {
  const email = $("cz-login-email").value.trim();
  const pass = $("cz-login-password").value;
  if (!email || !pass) { showFormError(loginForm, "Please fill in all fields"); return; }
  if (!email.includes("@")) { showFormError(loginForm, "Please enter a valid email"); return; }
  // Check stored users
  const users = JSON.parse(localStorage.getItem("cz-users") || "[]");
  const found = users.find(u => u.email === email);
  if (found && found.password !== pass) { showFormError(loginForm, "Incorrect password"); return; }
  const user = found || { name: email.split("@")[0], email, password: pass };
  if (!found) { users.push(user); localStorage.setItem("cz-users", JSON.stringify(users)); }
  setLoggedIn(user);
  closeLoginModal();
});

// Signup submit
signupSubmit.addEventListener("click", () => {
  const name = $("cz-signup-name").value.trim();
  const email = $("cz-signup-email").value.trim();
  const pass = $("cz-signup-password").value;
  const confirm = $("cz-signup-confirm").value;
  if (!name || !email || !pass || !confirm) { showFormError(signupForm, "Please fill in all fields"); return; }
  if (!email.includes("@")) { showFormError(signupForm, "Please enter a valid email"); return; }
  if (pass.length < 4) { showFormError(signupForm, "Password must be at least 4 characters"); return; }
  if (pass !== confirm) { showFormError(signupForm, "Passwords do not match"); return; }
  const users = JSON.parse(localStorage.getItem("cz-users") || "[]");
  if (users.find(u => u.email === email)) { showFormError(signupForm, "An account with this email already exists"); return; }
  const user = { name, email, password: pass };
  users.push(user);
  localStorage.setItem("cz-users", JSON.stringify(users));
  setLoggedIn(user);
  closeLoginModal();
});

// Logout
logoutBtn.addEventListener("click", () => { setLoggedOut(); });

// Close dropdown on outside click
document.addEventListener("click", (e) => {
  if (!e.target.closest(".cz-user-wrapper")) userDropdown.classList.remove("active");
});

// Escape closes modal
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && loginOverlay.classList.contains("active")) closeLoginModal(); });

// Restore session
if (currentUser) setLoggedIn(currentUser);

// ── Init ──
renderCategories();
renderTrending();
renderProducts();

})();
