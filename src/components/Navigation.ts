import type { ParamListBase, RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { FoodModel, Restaurant } from "../redux";

export interface NativeStackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: NativeStackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type Routes = {
  Landing: undefined;
  Home: undefined;
  Main: undefined;
  SearchPage: undefined;
  FoodDetails: { food: FoodModel };
  Restaurant: { restaurant: Restaurant };
};
