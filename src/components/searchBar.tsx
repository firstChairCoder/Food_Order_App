import type { FC } from "react";
import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    height: 32,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    borderRadius: 20,
    borderColor: "#E5E5E5",
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  search: {
    flex: 9,
    height: 42,
    fontSize: 20,
    marginLeft: 5,
  },
});

interface SearchBarProps {
  onEndEditing?: any | undefined;
  didTouch?: any | undefined;
  autoFocus?: boolean | undefined;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onTextChange: Function;
}

const SearchBar: FC<SearchBarProps> = ({
  onEndEditing,
  didTouch,
  autoFocus = false,
  onTextChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          style={styles.searchIcon}
          source={require("../../assets/images/search.png")}
        />
        <TextInput
          style={styles.search}
          placeholder={"Search Foods"}
          autoFocus={autoFocus}
          onTouchStart={didTouch}
          onChangeText={(text) => onTextChange(text)}
          onEndEditing={onEndEditing}
        />
      </View>
    </View>
  );
};

export default SearchBar;
