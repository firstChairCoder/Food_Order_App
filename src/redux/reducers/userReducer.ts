import type { LocationGeocodedAddress } from "expo-location";

import type { UserAction } from "../actions";
import type { UserModel, UserState } from "../models";

const initialState: UserState = {
  user: {} as UserModel,
  location: {} as LocationGeocodedAddress,
  error: undefined,
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case "ON_UPDATE_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export { userReducer };
