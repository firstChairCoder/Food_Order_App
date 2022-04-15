/* eslint-disable @typescript-eslint/ban-types */
import type { FC } from "react";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { onAvailability, onSearchFoods } from "../redux";
import type {
  UserState,
  ApplicationState,
  ShoppingState,
  Restaurant,
  FoodModel,
} from "../redux";
import {
  CategoryCard,
  IconBtn,
  RestaurantCard,
  SearchBar,
} from "../components";

const styles = StyleSheet.create({
  body: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  innerNav: {
    marginTop: 50,
    flex: 4,
    backgroundColor: "white",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  navigation: {
    flex: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#F15B5D",
    marginLeft: 20,
  },
});

interface HomeProps {
  userReducer: UserState;
  shoppingReducer: ShoppingState;
  onAvailability: Function;
  onSearchFoods: Function;
}

export const _HomeScreen: FC<HomeProps> = (props) => {
  const { location } = props.userReducer;
  const { availability } = props.shoppingReducer;

  const navigation = useNavigation();

  const { categories, foods, restaurants } = availability;

  useEffect(() => {
    props.onAvailability(location.postalCode);
    //for deeper search screen API call
    setTimeout(() => {
      props.onSearchFoods(location.postalCode);
    }, 1000);
  }, []);

  const onPressRestaurant = (item: Restaurant) => {
    navigation.navigate("Restaurant", { restaurant: item });
  };

  const onPressFood = (item: FoodModel) => {
    navigation.navigate("FoodDetails", { food: item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.innerNav}>
          <Text>{`${location.name},${location.street},${location.city}`}</Text>
          {/* <Text> Edit</Text> */}
        </View>
        <View
          style={{
            height: 60,
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 4,
          }}
        >
          <SearchBar
            didTouch={() => {
              navigation.navigate("SearchPage");
            }}
            onTextChange={() => {}}
          />
          <IconBtn
            onPress={() => {}}
            icon={require("../../assets/images/hambar.png")}
            width={50}
            height={40}
          />
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <CategoryCard
                item={item}
                onPress={() => {
                  console.warn("Category tapped");
                }}
              />
            )}
          />

          {/* Top Restaurants */}
          <View>
            <Text style={styles.title}>Top Restaurants</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            keyExtractor={(item) => `${item._id}`}
            renderItem={({ item }) => (
              <RestaurantCard item={item} onPress={onPressRestaurant} />
            )}
          />

          {/* 30 Minutes or less */}
          <View>
            <Text style={styles.title}>30 Minutes or Less</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={foods}
            keyExtractor={(item) => `${item._id}`}
            renderItem={({ item }) => (
              <RestaurantCard item={item} onPress={onPressFood} />
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.userReducer,
  shoppingReducer: state.shoppingReducer,
});

const HomeScreen = connect(mapToStateProps, { onAvailability, onSearchFoods })(
  _HomeScreen
);

export { HomeScreen };
