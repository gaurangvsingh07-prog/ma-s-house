export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  isSignature?: boolean;
  category: string;
}

export interface MenuCategory {
  id: string;
  label: string;
}

export interface Location {
  address: string;
  area: string;
  city: string;
  mapUrl: string;
}

export interface Hours {
  days: string;
  open: string;
  close: string;
}

export interface ContactInfo {
  whatsapp: string;
  phone: string;
  displayPhone: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  location: Location;
  hours: Hours;
  contact: ContactInfo;
  rating: number;
  reviewCount: number;
}
