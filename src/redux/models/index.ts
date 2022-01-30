import type { LocationGeocodedAddress } from "expo-location";

//Category
export interface Category {
  title: string;
  icon: string;
}

//Food model
export interface FoodModel {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  readyTime: number;
  image: [string];
}

// Restaurant model
export interface Restaurant {
  _id: string;
  name: string;
  foodType: string;
  address: string;
  phone: string;
  images: string;
  food: [FoodModel];
}

export interface FoodAvailability {
  categories: [Category];
  restuarants: [Restaurant];
  foods: [FoodModel];
}

export interface UserModel {
  firstName: string;
  lastName: string;
  contactNumber: string;
  token: string;
}

export interface UserState {
  user: UserModel;
  location: LocationGeocodedAddress;
  error: string | undefined;
}

export interface ShoppingState {
  availability: FoodAvailability;
  //TBA
}
