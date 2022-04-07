import type { Dispatch } from "react";
import type { LocationGeocodedAddress } from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UpdateLocationAction {
  readonly type: "ON_UPDATE_LOCATION";
  payload: LocationGeocodedAddress;
}

export interface UserErrorAction {
  readonly type: "ON_USER_ERROR";
  payload: any;
}

export type UserAction = UpdateLocationAction | UserErrorAction;

export const onUpdateLocation = (location: LocationGeocodedAddress) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const locationStr = JSON.stringify(location);
      //this saves location to local storage
      await AsyncStorage.setItem("user_location", locationStr);
      dispatch({
        type: "ON_UPDATE_LOCATION",
        payload: location,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};
