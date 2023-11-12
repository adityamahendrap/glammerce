export interface IUser {
  id: string;
  email: string;
  name: string;
  email_verified_at: string;
  image: string;
  phone_number: string;
  provider: string;
}

export interface IProductCombination {
  sku: string;
  stock: number;
  price: number;
  combination: string;
  key: string;
  image_id: string;
  product_id: string;
}

export interface IProductAttributeValue {
  id: string;
  value: string;
}

export interface IProductAttribute {
  id: string;
  name: string;
  product_attribute_values: IProductAttributeValue[];
}

export interface IProduct {
  id: string;
  name: string;
  rating: number;
  brand_id: string;
  description: string;
  slug: string;
  price: number;
  total_sold: number;
  product_attributes: IProductAttribute[];
  product_combinations: IProductCombination[];
}
