export type ProductCategory = 'prime' | 'offals' | 'processed' | 'industrial';

export type CutGrade = 'AAA Prime' | 'Super Grade' | 'Choice Grade' | 'Commercial' | 'Industrial';

export interface Product {
  id: string;
  name: string;
  localName?: string; // Shona/Ndebele name, e.g., Mazondo / Ox Trotters
  category: ProductCategory;
  grade: CutGrade;
  description: string;
  cookingMethod: string;
  retailPriceKg: number; // in USD
  bulkPriceTon: number; // in USD per Ton
  minBulkOrderKg: number;
  marblingScore?: string;
  storageTemp: string;
  packagingFormat: string;
  imageUrl: string;
  featured?: boolean;
  tags: string[];
}

export interface QuoteItem {
  product: Product;
  quantityKg: number;
  packagingPreference: string;
  customNotes?: string;
}

export interface BranchFacility {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  role: string;
  capacity: string;
  isHeadquarters?: boolean;
  services: string[];
  operatingHours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
}

export interface CattlePriceGrade {
  grade: CutGrade | 'Economy' | 'Manufacturing';
  code: string;
  pricePerKgCDM: number; // Cold Dressed Mass price in USD
  description: string;
  minWeightKg: number;
}

export interface BulkEstimateRequest {
  category: ProductCategory;
  productId: string;
  quantityKg: number;
  branchId: string;
  frequency: 'one-off' | 'weekly' | 'fortnightly' | 'monthly';
  packagingSpec: 'whole-carcass' | 'quartered' | 'primal-vacuum' | 'retail-portioned';
  customerType: 'supermarket' | 'butchery' | 'hotel' | 'institution' | 'exporter' | 'other';
}

export interface FarmerHerdSubmission {
  farmerName: string;
  farmName: string;
  district: string;
  province: string;
  phone: string;
  email: string;
  cattleCount: number;
  breed: string;
  preferredBranch: string;
  serviceRequested: 'direct-sale' | 'custom-slaughter' | 'feedlot-contract';
  estimatedDeliveryDate: string;
}
