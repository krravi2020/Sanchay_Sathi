export interface Goal {
  id: string;

  category:
    | "House"
    | "Car"
    | "Education"
    | "Vacation"
    | "Retirement"
    | "Emergency Fund";

  targetAmount: number;

  currentAmount: number;

  targetDate: string;

  createdAt: string;
}