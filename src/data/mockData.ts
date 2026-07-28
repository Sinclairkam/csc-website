import { Product, BranchFacility, CattlePriceGrade } from '../types';

export const PRODUCTS: Product[] = [
  // Official CSC Promotional Special Cuts
  {
    id: 'prod-001',
    name: 'T-Bone Steak',
    localName: 'Steki ye T-Bone',
    category: 'prime',
    grade: 'AAA Prime',
    description: 'Classic T-bone cut featuring tenderloin and strip loin on the bone. Grain-fed perfection ideal for braais and family grills.',
    cookingMethod: 'Best for Braai, Flame Grill & Pan-Seared',
    retailPriceKg: 6.00,
    bulkPriceTon: 5800,
    minBulkOrderKg: 50,
    marblingScore: 'Grade A4 (High Marbling)',
    storageTemp: '-18°C Frozen / 0-2°C Chilled',
    packagingFormat: 'Vacuum-sealed or 10kg Master Box',
    imageUrl: 'https://i.8upload.com/image/9df92669a92287ad/t-bone.png',
    featured: true,
    tags: ['Premium Braai Favorite', 'Special Cuts Promo', 'Top Quality Beef']
  },
  {
    id: 'prod-002',
    name: 'Rump Steak',
    localName: 'Rump Cut',
    category: 'prime',
    grade: 'Super Grade',
    description: 'Tender and flavorful pasture-raised rump steak with a rich fat cap. Highly versatile cut for steakhouse grilling and pan frying.',
    cookingMethod: 'Grilling, Pan Frying, Stir-fry Strips',
    retailPriceKg: 5.95,
    bulkPriceTon: 5750,
    minBulkOrderKg: 50,
    marblingScore: 'Grade A3',
    storageTemp: '0°C - 2°C Chilled',
    packagingFormat: 'Vacuum-sealed primal blocks or portioned steaks',
    imageUrl: 'https://i.8upload.com/image/253dc44ee9d70144/rump-steak.png',
    featured: true,
    tags: ['Tender & Flavorful Cut', 'Special Cuts Promo', 'Top Quality Beef']
  },
  {
    id: 'prod-003',
    name: 'Sirloin Steak',
    localName: 'Sirloin Cut',
    category: 'prime',
    grade: 'AAA Prime',
    description: 'Juicy, well-marbled sirloin steak. Rich in natural flavor with ideal fat trimming for outdoor braais and executive dining.',
    cookingMethod: 'Charcoal Braai, Cast Iron Sear',
    retailPriceKg: 5.90,
    bulkPriceTon: 5700,
    minBulkOrderKg: 50,
    marblingScore: 'Grade A4',
    storageTemp: '0°C to 2°C Vacuum Chilled',
    packagingFormat: 'Individual Cryovac Vacuum Seal or 10kg Cartons',
    imageUrl: 'https://i.8upload.com/image/ee0286cad9e52eb9/sirloin-steak.png',
    featured: true,
    tags: ['Great for Braais & Grills', 'Special Cuts Promo', 'Expertly Processed']
  },
  {
    id: 'prod-004',
    name: 'Steak on Bone',
    localName: 'Bone-In Steak Cut',
    category: 'prime',
    grade: 'Super Grade',
    description: 'Succulent bone-in steak cut for deep, savory bone-marrow flavor. Keeps meat incredibly tender and juicy during high-heat braaing.',
    cookingMethod: 'Open Flame Braai, Pan-Sear',
    retailPriceKg: 5.85,
    bulkPriceTon: 5650,
    minBulkOrderKg: 50,
    marblingScore: 'Grade A3',
    storageTemp: '-18°C Frozen / 0-2°C Chilled',
    packagingFormat: 'Vacuum sealed tray packs',
    imageUrl: 'https://i.8upload.com/image/dcf9c5322f57c245/rawbone-in-steak.png',
    featured: true,
    tags: ['Juicy Bone-In Cut', 'Special Cuts Promo', 'Keeping It Fresh']
  },
  {
    id: 'prod-005',
    name: 'Blade Steak',
    localName: 'Blade Steak Joint',
    category: 'prime',
    grade: 'Choice Grade',
    description: 'Generously marbled blade cut with intense beefy flavor. Perfect for tender slow-cooked stews, pot roasts, and winter comfort meals.',
    cookingMethod: 'Slow Braise, Pot Roasting, Rich Stews',
    retailPriceKg: 5.50,
    bulkPriceTon: 5300,
    minBulkOrderKg: 50,
    marblingScore: 'Grade A2',
    storageTemp: '0°C - 2°C Chilled / -18°C Frozen',
    packagingFormat: 'Vacuum-sealed 2kg-5kg portions',
    imageUrl: 'https://i.8upload.com/image/37d252afdbc2a1a2/blade-steak.png',
    featured: true,
    tags: ['Perfect for Slow Cooking & Stews', 'Special Cuts Promo', 'Family Meal Classic']
  },
  {
    id: 'prod-006',
    name: 'Brisket',
    localName: 'Brisket Joint',
    category: 'prime',
    grade: 'Choice Grade',
    description: 'Full beef brisket with fat layer intact. Ideal for slow-smoking, barbecue pitmasters, oven roasting, or traditional long stewing.',
    cookingMethod: 'Low & Slow Smoke, Oven Roast, Stewing',
    retailPriceKg: 4.90,
    bulkPriceTon: 4700,
    minBulkOrderKg: 50,
    marblingScore: 'Standard Pasture Marbling',
    storageTemp: '-18°C Frozen',
    packagingFormat: 'Whole 5kg-8kg brisket primal slabs',
    imageUrl: 'https://i.8upload.com/image/21a828de590476d8/beef-brisket.png',
    featured: true,
    tags: ['Ideal for Roasting & Slow Braai', 'Special Cuts Promo', 'Value Price']
  },
  {
    id: 'prod-007',
    name: 'Beef Ribs',
    localName: 'Emaribhu ye Mhombe',
    category: 'prime',
    grade: 'Choice Grade',
    description: 'Meaty beef ribs cut from prime rib section. A family meal classic with fantastic fat-to-meat ratio for roasting and braaing.',
    cookingMethod: 'Barbecue Braai, Oven Baking, Slow Stew',
    retailPriceKg: 4.75,
    bulkPriceTon: 4500,
    minBulkOrderKg: 50,
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
    localName: 'Muswe wemombe / Ox Tail',
    category: 'offals',
    grade: 'Super Grade',
    description: 'Carefully trimmed, thick-section ox tail cuts. High collagen content provides rich, velvety gravies. A staple Zimbabwean delicacy.',
    cookingMethod: 'Slow Braise, Potjie, Traditional Slow Stew',
    retailPriceKg: 13.50,
    bulkPriceTon: 10800,
    minBulkOrderKg: 100,
    storageTemp: '-18°C Frozen',
    packagingFormat: '1kg Retail trays or 10kg Wholesale poly-cartons',
    imageUrl: 'https://i.8upload.com/image/5abc4d6b1d4e84c1/ox-tail.png',
    tags: ['Delicacy', 'High Collagen', 'Traditional Favorite']
  },
  {
    id: 'prod-009',
    name: 'Ox Trotters (Mazondo)',
    localName: 'Mazondo / Amangqina',
    category: 'offals',
    grade: 'Super Grade',
    description: 'Thoroughly flame-cleaned, singed, and split ox trotters. Packed with gelatine and essential minerals, prepared under strict hygienic inspection.',
    cookingMethod: 'Overnight Slow Stewing, Traditional Herbs',
    retailPriceKg: 5.50,
    bulkPriceTon: 4200,
    minBulkOrderKg: 200,
    storageTemp: '-18°C Deep Frozen',
    packagingFormat: '2kg vacuum bags or 20kg bulk sacks',
    imageUrl: 'https://i.8upload.com/image/eb4c32f79cf43294/ox-trotters.png',
    tags: ['Traditional Staple', 'High Demand']
  },
  {
    id: 'prod-010',
    name: 'Beef Tripe & Honeycomb (Guru/Matumbu)',
    localName: 'Guru / Matumbu / Ulusu',
    category: 'offals',
    grade: 'Choice Grade',
    description: 'Thoroughly washed, double-scalded beef honeycomb tripe and intestines. Free of impurities and ready for direct pot preparation.',
    cookingMethod: 'Traditional Simmering with Chilies & Tomatoes',
    retailPriceKg: 4.80,
    bulkPriceTon: 3600,
    minBulkOrderKg: 300,
    storageTemp: '-18°C Frozen',
    packagingFormat: '5kg block frozen units',
    imageUrl: 'https://i.8upload.com/image/f81492b222dc9854/tripe.png',
    tags: ['Fresh Scalded', 'Supermarket Staple']
  },
  {
    id: 'prod-011',
    name: 'Fresh Ox Liver & Kidneys',
    localName: 'Chisusu / Chiropa',
    category: 'offals',
    grade: 'Super Grade',
    description: 'Nutrient-rich, deep-crimson fresh ox liver and kidneys harvested daily from veterinary-inspected cattle at Bulawayo Main Abattoir.',
    cookingMethod: 'Quick Pan-fry with Onions, Breakfast Skillets',
    retailPriceKg: 6.20,
    bulkPriceTon: 4900,
    minBulkOrderKg: 150,
    storageTemp: '0°C to 2°C Chilled / -18°C Frozen',
    packagingFormat: '1kg tray packs or 15kg cartons',
    imageUrl: 'https://i.8upload.com/image/5abc4d6b1d4e84c1/ox-tail.png',
    tags: ['High Iron', 'Daily Harvest']
  },

  // Processed & Sausages
  {
    id: 'prod-012',
    name: 'CSC Master Boerewors (Traditional Recipe)',
    localName: 'CSC Master Boerewors',
    category: 'processed',
    grade: 'AAA Prime',
    description: 'Heritage Bulawayo recipe containing 85% prime ground beef, roasted coriander, black pepper, and nutmeg in natural hog casing. No fillers.',
    cookingMethod: 'Open Fire Braai, Oven Bake, Skillet',
    retailPriceKg: 9.80,
    bulkPriceTon: 7800,
    minBulkOrderKg: 100,
    storageTemp: '-18°C Frozen / 2°C Fresh',
    packagingFormat: '500g, 1kg retail spirals, or 10kg catering coils',
    imageUrl: 'https://i.8upload.com/image/61994aec3753225e/sausage.png',
    featured: true,
    tags: ['Flagship Product', 'Braai Champion', 'No Fillers']
  },
  {
    id: 'prod-013',
    name: 'Cured Smoked Beef Pastrami & Cold Cuts',
    localName: 'Beef Pastrami',
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
    address: 'Industrial Sites, Stand 402, Masvingo',
    phone: '+263 (39) 262611 / 262615',
    email: 'masvingo.works@csc.co.zw',
    role: 'Lowveld Cattle Hub & Outgrower Processing Centre',
    capacity: '400 Cattle per day / 1,000 Tonnes Cold Storage',
    services: [
      'Direct Farmer Cattle Purchases',
      'Feedlot Fattening Program',
      'Custom Service Slaughtering',
      'SADC Border Export Clearance'
    ],
    operatingHours: 'Mon - Fri: 07:30 - 16:30',
    coordinates: { lat: -20.0744, lng: 30.8328 },
    image: 'https://images.unsplash.com/photo-1545468843-27956a3a7ef3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'branch-gwr',
    name: 'Gweru Abattoir & Midlands Hub',
    city: 'Gweru',
    address: 'Heavy Industrial Sites, Coventry Road, Gweru',
    phone: '+263 (54) 222311 / 222315',
    email: 'gweru.sales@csc.co.zw',
    role: 'Central Province Meat Distribution Hub',
    capacity: '350 Cattle per day / 800 Tonnes Cold Storage',
    services: [
      'Midlands Livestock Auction Depot',
      'Mine Mess & School Wholesale',
      'Cold Chain Logistics Center'
    ],
    operatingHours: 'Mon - Fri: 07:30 - 16:30',
    coordinates: { lat: -19.4586, lng: 29.8169 },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'branch-mut',
    name: 'Mutare Eastern Highlands Cold Store Depot',
    city: 'Mutare',
    address: 'Industrial Road, Stand 112, Mutare',
    phone: '+263 (20) 64412 / 64415',
    email: 'mutare.depot@csc.co.zw',
    role: 'Eastern Border Export & Regional Cold Storage Depot',
    capacity: '500 Tonnes Cold Storage / Transit Reefer Bay',
    services: [
      'Mozambique Export Corridor Dispatch',
      'Resort & Hotel Cold Supply',
      'Retail Meat Distribution'
    ],
    operatingHours: 'Mon - Fri: 07:30 - 16:30',
    coordinates: { lat: -18.9728, lng: 32.6694 },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  }
];

export const CATTLE_PRICE_GRADES: CattlePriceGrade[] = [
  {
    grade: 'AAA Prime',
    code: 'SUP-01',
    pricePerKgCDM: 4.80,
    description: 'Young grain-fed or high-energy pasture finished steers (0-2 teeth), flawless fat coverage & marbling.',
    minWeightKg: 220
  },
  {
    grade: 'Super Grade',
    code: 'SUP-02',
    pricePerKgCDM: 4.25,
    description: 'Prime steers and heifers (2-4 teeth) with even fat layer and firm muscle structure.',
    minWeightKg: 200
  },
  {
    grade: 'Choice Grade',
    code: 'CHO-01',
    pricePerKgCDM: 3.75,
    description: 'Good quality steers or young cows (4-6 teeth), suitable for commercial butchery cuts.',
    minWeightKg: 180
  },
  {
    grade: 'Commercial',
    code: 'COM-01',
    pricePerKgCDM: 3.20,
    description: 'Mature cows or oxen with medium fat cover, suited for institutional sausage & mince processing.',
    minWeightKg: 160
  },
  {
    grade: 'Economy',
    code: 'ECO-01',
    pricePerKgCDM: 2.60,
    description: 'Lean mature cattle, processed primarily for corned beef, canned meat, and bone meal by-products.',
    minWeightKg: 140
  }
];

export const TRUST_METRICS = [
  { label: 'Founded', value: '1937', subtext: '89 Years of Beef Authority' },
  { label: 'Annual Capacity', value: '300,000+', subtext: 'Cattle Processed Capacity' },
  { label: 'Cold Storage', value: '12,000 Tons', subtext: 'Nationwide Temperature Telemetry' },
  { label: 'Vet Clearance', value: '100%', subtext: 'Government Inspected Halal Certified' }
];

export const FAQS = [
  {
    q: 'How do I place a wholesale bulk beef order with CSC?',
    a: 'Wholesale orders can be calculated using our online B2B Bulk Estimator or by selecting cuts from our catalog and clicking "Add to Bulk Inquiry". Submit your quote request, and our sales executive at Bulawayo HQ or your nearest depot will contact you within 2 business hours with formal terms, proforma invoice, and cold-chain delivery scheduling.'
  },
  {
    q: 'Can private livestock farmers bring cattle for custom slaughtering?',
    a: 'Yes! CSC provides Custom Service Slaughtering at Bulawayo, Harare, and Masvingo abattoirs. Farmers pay a fixed service fee per head, and CSC handles humane slaughter, official veterinary grading, carcass chilling, and quartering. You retain full ownership of the graded meat.'
  },
  {
    q: 'Are CSC beef products certified Halal?',
    a: 'All CSC abattoirs operate full Halal-compliant slaughter lines supervised and certified by the Supreme Islamic Council of Zimbabwe. Halal certificates are issued per export or wholesale batch upon request.'
  },
  {
    q: 'What cold-chain guarantees does CSC offer for long-distance transport?',
    a: 'CSC operates a fleet of temperature-monitored refrigerated trucks equipped with GPS telemetry. Meat is maintained strictly between -18°C (frozen) or 0°C to 2°C (chilled) from our cold bays to your facility across Zimbabwe and SADC borders.'
  }
];
