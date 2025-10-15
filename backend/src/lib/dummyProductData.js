const dummyData = [
  {
    "name": "AeroFlex Cotton Slim Fit T-Shirt",
    "description": "Premium quality slim fit t-shirt made from 100% breathable cotton.",
    "price": 799,
    "category": "Clothing",
    "stock": 150,
    "images": ["https://example.com/images/aeroflex-tshirt-front.jpg"],
    "brand": "AeroFlex",
    "sku": "Aq-TSHIRT-001",
    "tags": ["tshirt","cotton","casual","men","fashion"]
  },
  {
    "name": "Zenith Running Shoes",
    "description": "Lightweight running shoes for all terrains with comfortable cushioning.",
    "price": 2999,
    "category": "Footwear",
    "stock": 80,
    "images": ["https://example.com/images/zenith-shoes.jpg"],
    "brand": "Zenith",
    "sku": "ZN-SHOES-001",
    "tags": ["shoes","running","sports","men","outdoor"]
  },
  {
    "name": "Aurora Bluetooth Headphones",
    "description": "Noise-cancelling over-ear headphones with 20 hours battery life.",
    "price": 4499,
    "category": "Electronics",
    "stock": 60,
    "images": ["https://example.com/images/aurora-headphones.jpg"],
    "brand": "Aurora",
    "sku": "AU-HEADPHONES-001",
    "tags": ["headphones","bluetooth","audio","music","electronics"]
  },
  {
    "name": "EcoSmart Water Bottle",
    "description": "Insulated stainless steel bottle keeps drinks cold for 24 hours.",
    "price": 499,
    "category": "Accessories",
    "stock": 200,
    "images": ["https://example.com/images/ecosmart-bottle.jpg"],
    "brand": "EcoSmart",
    "sku": "ES-BOTTLE-001",
    "tags": ["water bottle","eco","stainless","travel","sports"]
  },
  {
    "name": "Orion Yoga Mat",
    "description": "Non-slip yoga mat with extra cushioning and durability.",
    "price": 1299,
    "category": "Fitness",
    "stock": 120,
    "images": ["https://example.com/images/orion-yogamat.jpg"],
    "brand": "Orion",
    "sku": "OR-YOGAMAT-001",
    "tags": ["yoga","fitness","mat","exercise","health"]
  },
  {
    "name": "Nimbus Smartwatch",
    "description": "Track your fitness, heart rate, and notifications on the go.",
    "price": 6999,
    "category": "Electronics",
    "stock": 40,
    "images": ["https://example.com/images/nimbus-watch.jpg"],
    "brand": "Nimbus",
    "sku": "NI-WATCH-001",
    "tags": ["smartwatch","fitness","electronics","wearable","tech"]
  },
  {
    "name": "Luxe Leather Wallet",
    "description": "Genuine leather wallet with multiple compartments.",
    "price": 1599,
    "category": "Accessories",
    "stock": 90,
    "images": ["https://example.com/images/luxe-wallet.jpg"],
    "brand": "Luxe",
    "sku": "LX-WALLET-001",
    "tags": ["wallet","leather","fashion","men","accessory"]
  },
  {
    "name": "Strato Gaming Mouse",
    "description": "High precision RGB gaming mouse with customizable buttons.",
    "price": 2299,
    "category": "Electronics",
    "stock": 70,
    "images": ["https://example.com/images/strato-mouse.jpg"],
    "brand": "Strato",
    "sku": "ST-MOUSE-001",
    "tags": ["gaming","mouse","electronics","RGB","PC"]
  },
  {
    "name": "Aurora LED Desk Lamp",
    "description": "Adjustable LED lamp with multiple brightness levels.",
    "price": 899,
    "category": "Home",
    "stock": 110,
    "images": ["https://example.com/images/aurora-lamp.jpg"],
    "brand": "Aurora",
    "sku": "AU-LAMP-001",
    "tags": ["lamp","LED","home","desk","lighting"]
  },
  {
    "name": "Cedarwood Scented Candle",
    "description": "Long-lasting aromatic candle for a relaxing ambiance.",
    "price": 599,
    "category": "Home",
    "stock": 150,
    "images": ["https://example.com/images/cedar-candle.jpg"],
    "brand": "Cedarwood",
    "sku": "CW-CANDLE-001",
    "tags": ["candle","home","aroma","decor","relax"]
  },
  {
    "name": "Vertex Laptop Backpack",
    "description": "Durable backpack with padded laptop compartment and multiple pockets.",
    "price": 2499,
    "category": "Accessories",
    "stock": 95,
    "images": ["https://example.com/images/vertex-backpack.jpg"],
    "brand": "Vertex",
    "sku": "VX-BACKPACK-001",
    "tags": ["backpack","laptop","travel","bags","accessory"]
  },
  {
    "name": "Solaris Sunglasses",
    "description": "UV-protected stylish sunglasses for everyday wear.",
    "price": 1199,
    "category": "Accessories",
    "stock": 140,
    "images": ["https://example.com/images/solaris-sunglasses.jpg"],
    "brand": "Solaris",
    "sku": "SO-SUN-001",
    "tags": ["sunglasses","fashion","UV","men","women"]
  },
  {
    "name": "Pulse Fitness Tracker",
    "description": "Monitor heart rate, steps, and calories burned daily.",
    "price": 3999,
    "category": "Fitness",
    "stock": 60,
    "images": ["https://example.com/images/pulse-tracker.jpg"],
    "brand": "Pulse",
    "sku": "PL-TRACKER-001",
    "tags": ["fitness","tracker","health","wearable","electronics"]
  },
  {
    "name": "Nimbus Wireless Earbuds",
    "description": "Compact earbuds with superior sound quality and long battery life.",
    "price": 2999,
    "category": "Electronics",
    "stock": 75,
    "images": ["https://example.com/images/nimbus-earbuds.jpg"],
    "brand": "Nimbus",
    "sku": "NI-EARBUDS-001",
    "tags": ["earbuds","wireless","audio","electronics","music"]
  },
  {
    "name": "Zenith Trekking Shoes",
    "description": "Durable trekking shoes designed for comfort and rough terrains.",
    "price": 3499,
    "category": "Footwear",
    "stock": 50,
    "images": ["https://example.com/images/zenith-trekking.jpg"],
    "brand": "Zenith",
    "sku": "ZN-TREK-001",
    "tags": ["shoes","trekking","outdoor","men","sports"]
  },
  {
    "name": "Orion Resistance Bands Set",
    "description": "Set of 5 resistance bands for full-body workouts.",
    "price": 899,
    "category": "Fitness",
    "stock": 180,
    "images": ["https://example.com/images/orion-bands.jpg"],
    "brand": "Orion",
    "sku": "OR-BANDS-001",
    "tags": ["fitness","resistance","workout","bands","exercise"]
  },
  {
    "name": "EcoSmart Travel Mug",
    "description": "Leak-proof travel mug with double insulation.",
    "price": 699,
    "category": "Accessories",
    "stock": 210,
    "images": ["https://example.com/images/ecosmart-mug.jpg"],
    "brand": "EcoSmart",
    "sku": "ES-MUG-001",
    "tags": ["mug","travel","eco","accessory","drinkware"]
  },
  {
    "name": "Luxe Aviator Jacket",
    "description": "Classic leather jacket with comfortable fit and premium finish.",
    "price": 7999,
    "category": "Clothing",
    "stock": 40,
    "images": ["https://example.com/images/luxe-jacket.jpg"],
    "brand": "Luxe",
    "sku": "LX-JACKET-001",
    "tags": ["jacket","leather","fashion","men","clothing"]
  },
  {
    "name": "Strato Mechanical Keyboard",
    "description": "High-quality mechanical keyboard with customizable RGB backlight.",
    "price": 3499,
    "category": "Electronics",
    "stock": 65,
    "images": ["https://example.com/images/strato-keyboard.jpg"],
    "brand": "Strato",
    "sku": "ST-KEYBOARD-001",
    "tags": ["keyboard","mechanical","gaming","RGB","electronics"]
  },
  {
    "name": "Aurora Table Lamp",
    "description": "Elegant table lamp with warm LED lighting for study or decor.",
    "price": 1499,
    "category": "Home",
    "stock": 130,
    "images": ["https://example.com/images/aurora-table-lamp.jpg"],
    "brand": "Aurora",
    "sku": "AU-TABLELAMP-001",
    "tags": ["lamp","home","LED","decor","lighting"]
  }
]

export default dummyData;