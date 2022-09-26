export type CartItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  weight: number;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
