/* eslint-disable @typescript-eslint/ban-types */
import { useNavigation } from "@react-navigation/native";
import type { FC } from "react";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { FoodCard, IconBtn } from "../components";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  navigation: {
    flex: 1,
    marginTop: 43,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    flex: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingBottom: 160,
  },
  category: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "500",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 20,
  },
  name: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "700",
  },
});

interface FoodDetailsProps {
  navigation: { goBack: Function };
  route: { params: any };
}

export const FoodDetailsScreen: FC<FoodDetailsProps> = ({ route }) => {
  const navigation = useNavigation();

  const { food } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <IconBtn
          icon={require("../../assets/images/back_arrow.png")}
          onPress={() => navigation.goBack()}
          width={30}
          height={30}
        />
        <Text style={styles.heading}>{food.name}</Text>
      </View>
      <View style={styles.body}>
        <ImageBackground
          source={{ uri: `${food.images[0]}` }}
          style={{ width, height: 300, justifyContent: "flex-end" }}
        >
          <View
            style={{
              height: 120,
              backgroundColor: "rgba(0,0,0,0.6)",
              padding: 10,
            }}
          >
            <Text style={styles.name}>{food.name}</Text>
            <Text style={styles.category}>{food.category} </Text>
          </View>
        </ImageBackground>
        <View style={{ flex: 1, padding: 20 }}>
          <Text> Food Will be ready within {food.readyTime} Minute(s)</Text>
          <Text>{food.description} </Text>
        </View>
        <View style={{ height: 120 }}>
          <FoodCard
            item={food}
            onPress={() => {}}
            // onUpdateCart={props.onUpdateCart}
          />
        </View>
      </View>
    </View>
  );
};
