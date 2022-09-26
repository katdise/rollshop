export type Roll = {
  id: string;
  title: string;
  desc: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface RollSliceState {
  items: Roll[];
  status: Status;
}

export type SearchRollParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};
