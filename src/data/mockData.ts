import { Product, BranchFacility, TrustMetric, SlaughterGrade } from '../types';

export const TRUST_METRICS: TrustMetric[] = [
  {
    id: 'm-1',
    label: 'Cattle Processed Annually',
    value: '250,000+',
    subtext: 'Across 5 Sovereign Abattoirs',
    category: 'capacity'
  },
  {
    id: 'm-2',
    label: 'Cold Storage Capacity',
    value: '8,500 Tonnes',
    subtext: 'Continuous -18°C Cold Chain',
    category: 'infrastructure'
  },
  {
    id: 'm-3',
    label: 'Sovereign Heritage',
    value: '87 Years',
    subtext: 'Established in 1937',
    category: 'heritage'
  },
  {
    id: 'm-4',
    label: 'Registered Livestock Ranches',
    value: '12,000+',
    subtext: 'Zimbabwe Smallholder & Commercial Farmers',
    category: 'farmers'
  }
];

export const PRODUCTS: Product[] = [
  // Prime Beef Cuts
  {
    id: 'prod-001',
    name: 'T-Bone Steak (AAA Prime Grade)',
    localName: 'T-Bone Steak',
    category: 'prime',
    grade: 'AAA Prime',
    description: 'Iconic dual-cut steak featuring the tenderloin fillet and flavorful striploin separated by the signature T-shaped bone. Sourced from grass-fed, grain-finished cattle.',
    cookingMethod: 'Braai / Open Flame Grill, Pan Seared in Butter & Herbs',
    retailPriceKg: 6.00,
    bulkPriceTon: 5200,
    minBulkOrderKg: 100,
    marblingScore: 'Grade A4 (High Marbling)',
    storageTemp: '-18°C Frozen / 0-2°C Chilled',
    packagingFormat: 'Vacuum-sealed or 10kg Master Box',
    imageUrl: 'https://i.8upload.com/image/9df92669a92287ad/t-bone.png',
    featured: true,
    tags: ['Premium Braai Favorite', 'Special Cuts Promo', 'Top Quality Beef']
  },
  {
    id: 'prod-002',
    name: 'Rump Steak (AAA Prime Cut)',
    localName: 'Rump Steak',
    category: 'prime',
    grade: 'AAA Prime',
    description: 'Deeply flavorful, lean primal cut with a rich fat cap that renders naturally during grilling. Highly sought after for traditional Zimbabwean family braais.',
    cookingMethod: 'Braai, Cast Iron Skillet, High-Heat Roast',
    retailPriceKg: 5.95,
    bulkPriceTon: 5100,
    minBulkOrderKg: 100,
    marblingScore: 'Grade A3',
    storageTemp: '0°C - 2°C Chilled',
    packagingFormat: 'Vacuum-sealed primal blocks or portioned steaks',
    imageUrl: 'https://i.8upload.com/image/253dc44ee9d70144/rump-steak.png',
    featured: true,
    tags: ['Tender & Flavorful Cut', 'Special Cuts Promo', 'Top Quality Beef']
  },
  {
    id: 'prod-003',
    name: 'Sirloin Steak (AAA Prime Grade)',
    localName: 'Sirloin Steak',
    category: 'prime',
    grade: 'AAA Prime',
    description: 'A well-marbled, tender striploin steak offering an exceptional balance of juicy beef flavor and tender texture. Ideal for hotel restaurants and steakhouses.',
    cookingMethod: 'Pan-Seared, Charcoal Braai, Broiled',
    retailPriceKg: 5.90,
    bulkPriceTon: 5050,
    minBulkOrderKg: 100,
    marblingScore: 'Grade A4',
    storageTemp: '0°C to 2°C Vacuum Chilled',
    packagingFormat: 'Individual Cryovac Vacuum Seal or 10kg Cartons',
    imageUrl: 'https://i.8upload.com/image/ee0286cad9e52eb9/sirloin-steak.png',
    featured: true,
    tags: ['Great for Braais & Grills', 'Special Cuts Promo', 'Expertly Processed']
  },
  {
    id: 'prod-004',
    name: 'Steak on Bone (Prime Cut)',
    localName: 'Steak on Bone',
    category: 'prime',
    grade: 'Super Grade',
    description: 'Bone-in beef steak cut directly across the primal, locking in marrow rich juices during high-temperature roasting or open-flame braais.',
    cookingMethod: 'Open-Flame Braai, Wood Smoker, Cast Iron',
    retailPriceKg: 5.85,
    bulkPriceTon: 4950,
    minBulkOrderKg: 100,
    marblingScore: 'Grade A3',
    storageTemp: '-18°C Frozen / 0-2°C Chilled',
    packagingFormat: 'Vacuum sealed tray packs',
    imageUrl: 'https://i.8upload.com/image/dcf9c5322f57c245/rawbone-in-steak.png',
    featured: true,
    tags: ['Juicy Bone-In Cut', 'Special Cuts Promo', 'Keeping It Fresh']
  },
  {
    id: 'prod-005',
    name: 'Blade / Chuck Steak',
    localName: 'Blade Steak',
    category: 'prime',
    grade: 'Choice Grade',
    description: 'Flavor-packed shoulder cut rich in collagen. Excellent for slow-simmered beef stews, curry dishes, or braised Sunday roasts.',
    cookingMethod: 'Slow Braised Stews, Pressure Cooker, Pot Roast',
    retailPriceKg: 5.50,
    bulkPriceTon: 4600,
    minBulkOrderKg: 150,
    marblingScore: 'Grade A2',
    storageTemp: '0°C - 2°C Chilled / -18°C Frozen',
    packagingFormat: 'Vacuum-sealed 2kg-5kg portions',
    imageUrl: 'https://i.8upload.com/image/37d252afdbc2a1a2/blade-steak.png',
    featured: true,
    tags: ['Perfect for Slow Cooking & Stews', 'Special Cuts Promo', 'Family Meal Classic']
  },
  {
    id: 'prod-006',
    name: 'Beef Brisket Slab',
    localName: 'Beef Brisket',
    category: 'prime',
    grade: 'Choice Grade',
    description: 'Full packer beef brisket cut from the breast region. Features thick muscle fibers layered with deep connective tissue that transforms into meltingly tender meat when slow smoked.',
    cookingMethod: 'Low & Slow Wood Smoking, Oven Braising, Corned Beef Curing',
    retailPriceKg: 4.90,
    bulkPriceTon: 4100,
    minBulkOrderKg: 200,
    marblingScore: 'Standard Pasture Marbling',
    storageTemp: '-18°C Frozen',
    packagingFormat: 'Whole 5kg-8kg brisket primal slabs',
    imageUrl: 'https://i.8upload.com/image/21a828de590476d8/beef-brisket.png',
    featured: true,
    tags: ['Ideal for Roasting & Slow Braai', 'Special Cuts Promo', 'Value Price']
  },
  {
    id: 'prod-007',
    name: 'Beef Ribs (Short & Prime Rib Cut)',
    localName: 'Beef Ribs',
    category: 'prime',
    grade: 'Super Grade',
    description: 'Generously meaty beef ribs cut from the prime rib section. Features rich intercostal meat and fat layers that caramelize beautifully over open braai coals.',
    cookingMethod: 'Charcoal Braai, Slow Oven Bake with Glaze, Smoker',
    retailPriceKg: 4.75,
    bulkPriceTon: 3950,
    minBulkOrderKg: 150,
    marblingScore: 'Grade A2',
    storageTemp: '-18°C Deep Frozen',
    packagingFormat: '10kg Poly-lined master boxes',
    imageUrl: 'https://i.8upload.com/image/dfc94289e525bb47/ribs.png',
    featured: true,
    tags: ['Family Meal Classic', 'Special Cuts Promo', 'Best Value']
  },

  // Specialty & Offals
  {
    id: 'prod-008',
    name: 'Selected Ox Tail',
    localName: 'Muswe (Shona) / Umsila (Ndebele)',
    category: 'offals',
    grade: 'AAA Prime',
    description: 'Gelatinous, bone-in gelatin rich ox tail sections. World-renowned for rich, dark gravy production and gourmet Zimbabwean zim-style stews.',
    cookingMethod: 'Slow Stewed with Red Wine & Vegetables, Potjie Pot',
    retailPriceKg: 11.80,
    bulkPriceTon: 9500,
    minBulkOrderKg: 100,
    storageTemp: '-18°C Frozen',
    packagingFormat: '1kg Retail trays or 10kg Wholesale poly-cartons',
    imageUrl: 'https://i.8upload.com/image/5abc4d6b1d4e84c1/ox-tail.png',
    tags: ['Delicacy', 'High Collagen', 'Traditional Favorite']
  },
  {
    id: 'prod-009',
    name: 'Cleaned Ox Trotters (Mazondo)',
    localName: 'Mazondo / Amangqina',
    category: 'offals',
    grade: 'Super Grade',
    description: 'Thoroughly scalded, de-haired, and split bovine feet. Packed with natural collagen and mineral rich marrow. A national delicacy across Zimbabwe.',
    cookingMethod: 'Long Slow Boiling (4+ hours) with Garlic, Chili & Herbs',
    retailPriceKg: 4.20,
    bulkPriceTon: 3300,
    minBulkOrderKg: 200,
    storageTemp: '-18°C Deep Frozen',
    packagingFormat: '2kg vacuum bags or 20kg bulk sacks',
    imageUrl: 'https://i.8upload.com/image/eb4c32f79cf43294/ox-trotters.png',
    tags: ['Traditional Staple', 'High Demand']
  },
  {
    id: 'prod-010',
    name: 'Beef Tripe & Honeycomb (Guru / Matumbu)',
    localName: 'Guru & Matumbu',
    category: 'offals',
    grade: 'Choice Grade',
    description: 'Freshly washed and sanitized rumen and reticulum offals. Sourced under strict veterinary inspection at the Bulawayo Abattoir.',
    cookingMethod: 'Simmered with Onions, Tomatoes & Peppers',
    retailPriceKg: 3.80,
    bulkPriceTon: 2900,
    minBulkOrderKg: 300,
    storageTemp: '-18°C Frozen',
    packagingFormat: '5kg block frozen units',
    imageUrl: 'https://i.8upload.com/image/f81492b222dc9854/tripe.png',
    tags: ['Fresh Scalded', 'Supermarket Staple']
  },
  {
    id: 'prod-011',
    name: 'Ox Liver & Kidney Combo Pack',
    localName: 'Chiropa & Weti',
    category: 'offals',
    grade: 'Super Grade',
    description: 'Nutrient-dense, iron-rich whole ox liver slices paired with cleaned ox kidneys. High in Vitamin A, iron, and essential minerals.',
    cookingMethod: 'Quick Pan Fry with Onions, Sautéed in Gravy',
    retailPriceKg: 4.50,
    bulkPriceTon: 3600,
    minBulkOrderKg: 150,
    storageTemp: '0°C to 2°C Chilled / -18°C Frozen',
    packagingFormat: '1kg tray packs or 15kg cartons',
    imageUrl: 'https://i.8upload.com/image/5abc4d6b1d4e84c1/ox-tail.png',
    tags: ['High Iron', 'Daily Harvest']
  },

  // Processed Meats & Sausages
  {
    id: 'prod-012',
    name: 'CSC Master Boerewors (Heritage Recipe)',
    localName: 'CSC Boerewors',
    category: 'processed',
    grade: 'AAA Prime',
    description: 'Crafted according to CSC’s 1940s flagship recipe. 90% prime beef coarsed minced with toasted coriander seeds, nutmeg, black pepper, and vinegar in natural casings.',
    cookingMethod: 'Open Coals Braai, Pan Fry, Oven Bake',
    retailPriceKg: 6.80,
    bulkPriceTon: 5400,
    minBulkOrderKg: 100,
    storageTemp: '-18°C Frozen / 2°C Fresh',
    packagingFormat: '500g, 1kg retail spirals, or 10kg catering coils',
    imageUrl: 'https://i.8upload.com/image/61994aec3753225e/sausage.png',
    featured: true,
    tags: ['Flagship Product', 'Braai Champion', 'No Fillers']
  },
  {
    id: 'prod-013',
    name: 'Smoked Pastrami & Beef Cured Slices',
    localName: 'Smoked Beef Pastrami',
    category: 'processed',
    grade: 'AAA Prime',
    description: 'Hardwood smoked, salt-cured beef brisket coated in crushed peppercorns and mustard seeds. Sliced thinly for gourmet delis and hotel buffets.',
    cookingMethod: 'Ready-to-eat Deli Slices, Hot Sandwiches',
    retailPriceKg: 16.20,
    bulkPriceTon: 13200,
    minBulkOrderKg: 50,
    storageTemp: '2°C to 4°C Chilled Vacuum',
    packagingFormat: '500g sliced packs or 2.5kg whole logs',
    imageUrl: 'https://i.8upload.com/image/21a828de590476d8/beef-brisket.png',
    tags: ['HORECA Special', 'Ready to Eat']
  },
  {
    id: 'prod-014',
    name: 'CSC Institutional Beef Sausages (Skinless)',
    localName: 'Catering Sausages',
    category: 'processed',
    grade: 'Choice Grade',
    description: 'Cost-effective, high-protein beef sausages formulated specifically for school boardings, hospital catering, defense forces, and mining messes.',
    cookingMethod: 'Shallow Fry, Boiling, Steam Kettle',
    retailPriceKg: 6.40,
    bulkPriceTon: 4800,
    minBulkOrderKg: 300,
    storageTemp: '-18°C Frozen',
    packagingFormat: '5kg catering packs (approx 100 pieces per bag)',
    imageUrl: 'https://i.8upload.com/image/61994aec3753225e/sausage.png',
    tags: ['School & Military Supply', 'Bulk Economy']
  }
];

export const BRANCHES: BranchFacility[] = [
  {
    id: 'branch-byo',
    name: 'Bulawayo Headquarters & Retail Outlet',
    city: 'Bulawayo',
    address: '61-69 Birkenhead Road, Belmont Industrial Area, P.O. Box 953, Bulawayo, Zimbabwe',
    phone: 'Hotline: 0779897736 / +263 (9) 477151',
    email: 'hq.bulawayo@csc.co.zw',
    role: 'National Headquarters, Primary Abattoir, Retail Outlet & Tannery Complex',
    capacity: '800 Cattle per day / 2,500 Tonnes Cold Storage Capacity',
    isHeadquarters: true,
    services: [
      'Bulawayo Retail Meat Outlet',
      'Industrial Cattle Slaughter',
      'Veterinary Inspection & Classification',
      'Meat Canning & Sausage Works',
      'Hide Tannery & Salting',
      'National Wholesale Depot'
    ],
    operatingHours: 'Mon - Fri: 07:00 - 17:00 | Sat: 07:30 - 13:00',
    coordinates: { lat: -20.1711, lng: 28.5832 },
    image: 'https://i.8upload.com/image/cd6b4979459155ab/cscimage.jpg'
  },
  {
    id: 'branch-hre',
    name: 'Harare Abattoir & Northern Distribution Depot',
    city: 'Harare',
    address: 'Willowvale Industrial Complex, Gleneagles Road, Harare',
    phone: '+263 (242) 621500 / 621509',
    email: 'harare.depot@csc.co.zw',
    role: 'Capital Region Meat Hub & Processing Plant',
    capacity: '600 Cattle per day / 1,800 Tonnes Cold Storage',
    services: [
      'Northern Region Cattle Slaughter',
      'Supermarket Chain Wholesale Dispatch',
      'Hotel & Government Contract Fulfillment',
      'Deep Freeze Preservation'
    ],
    operatingHours: 'Mon - Fri: 07:00 - 16:30 | Sat: 08:00 - 12:00',
    coordinates: { lat: -17.8683, lng: 30.9852 },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'branch-mvg',
    name: 'Masvingo Abattoir & Feedlot Ranch',
    city: 'Masvingo',
    address: 'Industrial Road, Masvingo',
    phone: '+263 (2392) 262611',
    email: 'masvingo@csc.co.zw',
    role: 'Southern Cattle Belt Abattoir & Feedlot Station',
    capacity: '400 Cattle per day / Feedlot Capacity 5,000 Head',
    services: [
      'Farmer Direct Off-Take & Auctions',
      'Feedlot Fattening Program',
      'Regional Slaughter & Cold Storage'
    ],
    operatingHours: 'Mon - Fri: 07:00 - 16:00',
    coordinates: { lat: -20.0744, lng: 30.8328 },
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'branch-chinhoyi',
    name: 'Chinhoyi Abattoir Complex',
    city: 'Chinhoyi',
    address: 'Mashonaland West Industrial Zone, Chinhoyi',
    phone: '+263 (267) 2122341',
    email: 'chinhoyi@csc.co.zw',
    role: 'Grain-Belt Cattle Slaughter & Cold Store',
    capacity: '350 Cattle per day / 1,000 Tonnes Storage',
    services: [
      'Mashonaland West Livestock Off-Take',
      'Sovereign Reserve Processing'
    ],
    operatingHours: 'Mon - Fri: 07:30 - 16:00',
    coordinates: { lat: -17.3622, lng: 30.1919 },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'branch-marondera',
    name: 'Marondera Abattoir & Tannery Works',
    city: 'Marondera',
    address: 'Industrial Sites, Marondera',
    phone: '+263 (279) 232001',
    email: 'marondera@csc.co.zw',
    role: 'Eastern Cattle Hub & By-Product Processing',
    capacity: '300 Cattle per day',
    services: [
      'Highland Cattle Slaughter',
      'Tannery Raw Hide Salting'
    ],
    operatingHours: 'Mon - Fri: 07:30 - 16:00',
    coordinates: { lat: -18.1853, lng: 31.5519 },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  }
];

export const SLAUGHTER_GRADES: SlaughterGrade[] = [
  {
    gradeCode: 'AAA Prime',
    name: 'Super AAA Prime Grade',
    ageRange: 'Young Cattle (under 24 months)',
    fatCover: 'Moderate, even white fat cover',
    idealUse: 'Gourmet Steakhouses, High-End Hotels, Export Striploins & Fillets',
    basePayoutPerKg: 3.40
  },
  {
    gradeCode: 'Super',
    name: 'Super Grade',
    ageRange: '24 - 36 months',
    fatCover: 'Good firm fat layer',
    idealUse: 'Supermarket retail cuts, prime roasts, high-grade boerewors',
    basePayoutPerKg: 3.10
  },
  {
    gradeCode: 'Choice',
    name: 'Choice Grade',
    ageRange: '36 - 42 months',
    fatCover: 'Medium fat cover',
    idealUse: 'Institutional catering, stewing beef, minced beef, processed sausages',
    basePayoutPerKg: 2.80
  },
  {
    gradeCode: 'Commercial',
    name: 'Commercial Grade',
    ageRange: 'Mature cattle (42+ months)',
    fatCover: 'Variable fat cover',
    idealUse: 'Canned corned beef, dried biltong, manufacturing beef, stock cubes',
    basePayoutPerKg: 2.30
  }
];
