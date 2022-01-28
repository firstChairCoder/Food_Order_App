import { useContext } from "react";
import type {
  NavigationProp,
  NavigationRouteContext,
} from "@react-navigation/core";
import { NavigationContext } from "@react-navigation/core";

export function useNavigation() {
  return useContext(
    NavigationContext
  ) as NavigationProp<NavigationRouteContext>;
}
