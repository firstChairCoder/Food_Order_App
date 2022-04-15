/* eslint-disable @typescript-eslint/ban-types */
import { useNavigation } from "@react-navigation/native";
import type { FC } from "react";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { FoodCard, IconBtn, SearchBar } from "../components";
import type { ApplicationState, FoodModel, ShoppingState } from "../redux";

const styles = StyleSheet.create({
  body: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  navigation: {
    flex: 1,
    marginTop: 43,
  },
});

interface SearchProps {
  navigation: { goBack: Function };
  shoppingReducer: ShoppingState;
}

const _SearchScreen: FC<SearchProps> = (props) => {
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(false);
  const [keyword, setKeyword] = useState("");

  const { availableFoods } = props.shoppingReducer;

  const onPressFood = (item: FoodModel) => {
    navigation.navigate("FoodDetails", { food: item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View
          style={{
            height: 68,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <IconBtn
            icon={require("../../assets/images/back_arrow.png")}
            width={40}
            height={40}
            onPress={() => navigation.goBack()}
          />
          <SearchBar
            onTextChange={setKeyword}
            didTouch={() => setIsEditing(true)}
            onEndEditing={() => setIsEditing(false)}
          />
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          data={
            isEditing
              ? availableFoods.filter((item) => {
                  return item.name.includes(keyword);
                })
              : availableFoods
          }
          keyExtractor={(item) => `${item._id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <FoodCard item={item} onPress={onPressFood} />
          )}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  shoppingReducer: state.shoppingReducer,
});

const SearchScreen = connect(mapStateToProps, {})(_SearchScreen);

export { SearchScreen };
