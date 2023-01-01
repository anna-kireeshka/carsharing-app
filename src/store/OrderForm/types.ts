export interface City {
  updatedAt?: number;
  createdAt?: number;
  name: string;
  id: number;
}

export interface Pvz {
  name: string;
  cityId: number;
  address: {
    id: string;
    name: string;
  };
}

export interface Car {
  number: string;
  priceMax: number;
  priceMin: number;
  name: string;
  thumbnail: {
    path: string;
  };
  tank: number;
  description?: string;
  categoryId: string;
  colors: string[];
  id: string;
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

export interface FinalOrder extends ConfirmOrder {
  id?: string;
}

export interface OrderStatus {
  status: string;
  id: number;
}

export interface ProfileState {
  city?: City[];
  pvz?: Pvz[];
  car?: Car[];
  rate?: Rate[];
  colorFilter?: ColorFilter[];
  carAdditionally?: CarAdditionally[];
  orderStatus?: OrderStatus[];
  finalOrder?: FinalOrder[];

  valueCity?: string;
  valuePvz?: string;
  cityId?: number;
  pvzId?: number;
  carModel?: string;
  carColor?: string;
  dateFrom?: string;
  dateTo?: string;
  carNumber?: string;
  carId?: Car["id"];

  dateToMs?: number;
  dateFromMs?: number;

  colorCheck?: ColorFilter["checked"];
  checked: CarAdditionally["checked"];

  additionallyFilter?: any;
  rateFilter?: any;
  carPrice?: number;
  maxCarPrice?: number;
  fuel?: Car["tank"];
  img?: Car["thumbnail"]["path"];
  ratePrice?: Rate["price"];
  rateId?: Rate["id"];
  timePrice?: number;
  additionallyPrice?: CarAdditionally["price"];
  durationMinute?: number | string;
  loadingCarList?: boolean;
  fullPrice?: number;

  orderId?: OrderStatus["id"];
  confirmOrder?: ConfirmOrder[];
  loadedResponsPost: boolean;
  id?: string;
  orderCard: [];

  isCarLocationValidation: false;
  isCarModelValidation: false;
  isCarAdditionalyValidation: false;
  isFinalOrderValidation: false;
}
