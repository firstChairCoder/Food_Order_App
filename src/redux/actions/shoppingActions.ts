import axios from "axios";
import type { Dispatch } from "react";

import { BASE_URL } from "../../utils";
import type { FoodAvailability } from "../models";

export interface AvailabilityAction {
  readonly type: "ON_AVAILABILITY";
  payload: FoodAvailability;
}

export interface ShoppingErrorAction {
  readonly type: "ON_SHOPPING_ERROR";
  payload: any;
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction;

export const onAvailability = (postcode: string) => {
  //console.log(`postal code, $(postcode)`)
  return async (dispatch: Dispatch<ShoppingAction>) => {
    try {
      const response = await axios.get<FoodAvailability>(
        `${BASE_URL}/food/availability/${postcode}`
      );
      //console.log(response)
      if (response) {
        dispatch({
          type: "ON_AVAILABILITY",
          payload: response.data,
        });
      } else {
        dispatch({
          type: "ON_SHOPPING_ERROR",
          payload: "Availability error",
        });
      }
    } catch (error) {
      dispatch({
        type: "ON_SHOPPING_ERROR",
        payload: error,
      });
    }
  };
};
