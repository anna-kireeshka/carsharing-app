export interface City {
  updatedAt: number;
  createdAt: number;
  name: string;
  id: number;
}
[];
export interface Pvz {
  name: string;
  cityId: number;
  address: string;
}
[];

export interface Car {
  number: string;
  priceMax: number;
  priceMin: number;
  name: string;
  thumbnail: any;
  description: string;
  categoryId: any;
  colors: string[];
}
[];

export interface CarFilter {
  updatedAt: number;
  createdAt: number;
  name: string;
  description: string;
  id: string;
}
[];

export interface ValueInput {
  valuePvz: string;
  valueCity: string;
  dateFrom: string;
  dateTo: string;
}

export interface Rate {
  updatedAt: number;
  createdAt: number;
  price: number;
  rateTypeId: {
    unit: string;
    name: string;
    id: string;
  }[];

  id: string;
}
[];

export interface ColorFilter {
  name: string;
  checked: boolean;
  val: string;
}
[];

export interface CarAdditionally {
  name: string;
  checked: boolean;
  val: string;
  price: number;
}
[];

export interface ProfileState {
  city?: City[];
  pvz?: Pvz[];
  carFilter: CarFilter[];
  car?: Car[];
  rate?: Rate[];
  valueCity?: ValueInput["valueCity"];
  valuePvz?: ValueInput["valuePvz"];
  cityId?: any;
  pvzId?: any;
  carModel?: any;
  carNumber?: any;
  colorFilter?: ColorFilter[];
  carAdditionally?: CarAdditionally[];
  carColor?: any;
  additionallyFilter?: any;
  rateFilter?: any;
  dateFrom?: ValueInput["dateFrom"];
  dateTo?: ValueInput["dateTo"];
}
