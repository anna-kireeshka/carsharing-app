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

export interface ValueInput {
  valuePvz: string;
  valueCity: string;
}
export interface ProfileState {
  city?: City[];
  pvz?: Pvz[];
  valueCity?: ValueInput["valueCity"];
  valuePvz?: ValueInput["valuePvz"];
  cityId?: any;
  pvzId?: any;
}
