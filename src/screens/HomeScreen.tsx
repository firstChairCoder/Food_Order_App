import type { FC } from "react";
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import {
  onUpdateLocation,
  onAvailability,
  // Restaurant,
  // FoodModel,
} from "../redux";
import type {
  UserState,
  ApplicationState,
  ShoppingState,
  // Restaurant,
  // FoodModel,
} from "../redux";

const styles = StyleSheet.create({
  // body: {
  //   flex: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
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
});

interface HomeProps {
  userReducer: UserState;
  shoppingReducer: ShoppingState;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onAvailability: Function;
}

export const _HomeScreen: FC<HomeProps> = (props) => {
  const { location } = props.userReducer;
  const { availability } = props.shoppingReducer;

  // const { categories, foods } = availability;

  // useEffect(() => {
  //   props.onAvailability(location.postalCode);
  //   // setTimeout(() => {
  //   //   props.onSearchFoods(location.postalCode);
  //   // }, 1000);
  // }, []);

  // const onTapRestaurant = (item: Restaurant) => {
  //   navigate("RestaurantPage", { restaurant: item });
  // };

  // const onTapFood = (item: FoodModel) => {
  //   navigate("FoodDetailPage", { food: item });
  // };

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
          {/* <SearchBar
            didTouch={() => {
              navigate("SearchPage");
            }}
            onTextChange={() => {}}
          />
          <ButtonWithIcon
            onTap={() => {}}
            icon={require("../images/hambar.png")}
            width={50}
            height={40}
          /> */}
        </View>
      </View>

      {/* <View style={styles.body}>
        <ScrollView>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) => (
              <CategoryCard
                item={item}
                onTap={() => {
                  alert("Category tapped");
                }}
              />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "600",
                color: "#f15b5d",
                marginLeft: 20,
              }}
            >
              {" "}
              Top Restaurants
            </Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            renderItem={({ item }) => (
              <RestaurantCard item={item} onTap={onTapRestaurant} />
            )}
            keyExtractor={(item) => `${item._id}`}
          />

          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "600",
                color: "#f15b5d",
                marginLeft: 20,
              }}
            >
              {" "}
              30 Minutes Foods
            </Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={foods}
            renderItem={({ item }) => (
              <RestaurantCard item={item} onTap={onTapFood} />
            )}
            keyExtractor={(item) => `${item._id}`}
          />
        </ScrollView>
      </View> */}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.userReducer,
  shoppingReducer: state.shoppingReducer,
});

const HomeScreen = connect(mapToStateProps, { onAvailability })(_HomeScreen);

export { HomeScreen };
