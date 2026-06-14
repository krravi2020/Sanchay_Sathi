export interface Asset {
  id: string;
  assetType: string;
  assetName: string;
  currentValue: number;
}

export interface AllocationData {
  name: string;
  value: number;
}