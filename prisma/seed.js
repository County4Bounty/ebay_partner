const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const sampleProducts = [
  {
    title: "Wireless Noise-Canceling Over-Ear Headphones",
    description: "Premium wireless Bluetooth headphones featuring active noise cancellation, 35-hour battery life, high-fidelity audio drivers, and built-in microphone for crystal-clear calls.",
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: 14999
  },
  {
    title: "Vintage Mechanical Wristwatch with Leather Strap",
    description: "Classic handcrafted automatic timepiece featuring sapphire crystal glass, 50m water resistance, and an authentic calfskin genuine leather band.",
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: 18950
  },
  {
    title: "Professional Mirrorless 4K Digital Camera Kit",
    description: "High-performance full-frame digital camera with 24.2 MP sensor, dual image stabilization, 4K HDR 60fps video recording, and bundled 28-70mm zoom lens.",
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    price: 124900
  },
  {
    title: "Minimalist Ergonomic Mechanical Keyboard (RGB Backlit)",
    description: "Custom mechanical gaming & typing keyboard with hot-swappable tactile switches, double-shot PBT keycaps, and customizable per-key dynamic RGB backlighting.",
    url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    price: 8999
  },
  {
    title: "Designer Polarized Sunglasses (UV400 Protection)",
    description: "Ultra-lightweight timeless sunglasses with polarized anti-glare lenses, durable acetate frame, and 100% UVA/UVB ray shielding.",
    url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    price: 4995
  },
  {
    title: "Ultra-Slim 15.6-inch Portable IPS Monitor",
    description: "Full HD 1080p travel external monitor with USB-C and mini-HDMI connectivity, dual speakers, and foldable protective smart kickstand cover.",
    url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    price: 12900
  },
  {
    title: "Full Grain Leather Laptop Messenger Bag",
    description: "Handcrafted vintage messenger briefcase designed for up to 15.6-inch laptops, with brass buckles, padded compartments, and detachable shoulder strap.",
    url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    price: 7999
  },
  {
    title: "Smart Fitness Tracker with Heart Rate & GPS",
    description: "Waterproof health smartwatch with 1.4-inch AMOLED display, all-day stress tracking, blood oxygen sensor, and multi-sport workout modes.",
    url: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
    price: 6995
  },
  {
    title: "Retro Ceramic Pour-Over Coffee Dripper Set",
    description: "Barista-grade ceramic pour-over cone with borosilicate glass serving carafe and reusable stainless steel micro-mesh filter.",
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    price: 3499
  },
  {
    title: "Wireless Bluetooth Gaming Controller (Multi-Platform)",
    description: "Ergonomic wireless controller with textured grips, dual vibration feedback, responsive hall-effect triggers, and rechargeable 20-hour battery.",
    url: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08",
    price: 5499
  },
  {
    title: "Fast Wireless Charging Stand (15W Qi Certified)",
    description: "Universal dual-coil fast wireless charging stand compatible with all modern smartphones, featuring foreign object detection and overheat safety protection.",
    url: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3",
    price: 2499
  },
  {
    title: "Compact Travel Drone with 4K HDR Gimbal Camera",
    description: "Foldable mini quadcopter with 3-axis mechanical gimbal, 31-minute maximum flight duration, intelligent return-to-home, and 10km HD video transmission.",
    url: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108",
    price: 45900
  }
];

async function seedProducts() {
  try {
    console.log("Seeding fresh marketplace catalog...");
    
    // Clean existing seed products to give the catalog a clean look
    await prisma.orderItem.deleteMany({});
    await prisma.orders.deleteMany({});
    await prisma.products.deleteMany({});

    for (const item of sampleProducts) {
      await prisma.products.create({
        data: item
      });
    }

    console.log(`Successfully seeded ${sampleProducts.length} realistic marketplace products!`);
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();