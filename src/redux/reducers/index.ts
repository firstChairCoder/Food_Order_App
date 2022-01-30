import { combineReducers } from "redux";

import { userReducer } from "./userReducer";
import { shoppingReducer } from "./shoppingReducer";

export type ApplicationState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  userReducer,
  shoppingReducer,
});
