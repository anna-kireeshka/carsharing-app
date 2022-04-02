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
  thumbnail: {
    path: string;
  };
  tank: number;
  description: string;
  categoryId: any;
  colors: string[];
  id: string;
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
export interface ConfirmOrder {
  orderStatusId: string;
  cityId: string;
  pointId: string;
  carId: string;
  color: string;
  dateFrom: number;
  dateTo?: number;
  rateId: string;
  price: number;
  isFullTank?: boolean;
  isNeedChildChair?: boolean;
  isRightWheel?: boolean;
}
[];

export interface FinalOrder {
  orderStatusId: string;
  cityId: string;
  pointId: string;
  carId: string;
  color: string;
  dateFrom: number;
  dateTo?: number;
  rateId: string;
  price: number;
  isFullTank?: boolean;
  isNeedChildChair?: boolean;
  isRightWheel?: boolean;
  id?: string;
}
[];

export interface OrderStatus {
  status: string;
  id: number;
}
[];

export interface ProfileState {
  city?: City[];
  pvz?: Pvz[];
  carFilter: CarFilter[];
  car?: Car[];
  rate?: Rate[];
  orderStatus?: OrderStatus[];
  valueCity?: ValueInput["valueCity"];
  valuePvz?: ValueInput["valuePvz"];
  cityId?: any;
  pvzId?: any;
  carModel?: any;
  colorFilter?: ColorFilter[];
  colorCheck?: ColorFilter["checked"];
  carAdditionally?: CarAdditionally[];
  checked: CarAdditionally["checked"];
  carColor?: any;
  additionallyFilter?: any;
  dateFrom?: ValueInput["dateFrom"];
  dateTo?: ValueInput["dateTo"];
  dateToMs?: number;
  dateFromMs?: number;
  rateFilter?: any;
  carPrice?: Car["priceMin"];
  maxCarPrice?: Car["priceMax"];
  fuel?: Car["tank"];
  img?: Car["thumbnail"]["path"];
  carNumber?: Car["number"];
  ratePrice?: Rate["price"];
  rateId?: Rate["id"];
  timePrice?: any;
  additionallyPrice?: CarAdditionally["price"];
  durationMinute?: number;
  categoryId?: any;
  loadingCarList?: boolean;
  fullPrice?: number;
  carId?: Car["id"];
  orderId?: OrderStatus["id"];
  confirmOrder?: ConfirmOrder[];
  finalOrder?: FinalOrder[];
  id?: string;
  orderCard: [];
}
