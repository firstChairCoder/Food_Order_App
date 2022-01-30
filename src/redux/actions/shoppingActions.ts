/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import type { Dispatch } from "react";
import type { LocationGeocodedAddress } from "expo-location";

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

export const onAvailability = () => {
  return async (dispatch: Dispatch<ShoppingAction>) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/food/availability/78787878`
      );
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
