export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryID;
  image: string;
  images: string[];
  features: string[];
  trending?: boolean;
  bestSeller?: boolean;
}

export type CategoryID = 
  | 'curtains' 
  | 'upholstery' 
  | 'blinds' 
  | 'bedding' 
  | 'wallpaper' 
  | 'rugs' 
  | 'carpet' 
  | 'mattress';

export interface Category {
  id: CategoryID;
  name: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
