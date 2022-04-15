/* eslint-disable react-native/no-unused-styles */
/* eslint-disable @typescript-eslint/ban-types */
import type { FC } from "react";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  addText: {
    fontSize: 18,
    color: "#FFF",
  },
  btn: {
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "#F15B5B",
  },
  btnPlusMinus: {
    height: 58,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#F15B5B",
  },
  optionsView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  plusMinusText: {
    fontSize: 30,
    color: "#F15B5B",
  },
  qty: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
});

interface ButtonProps {
  onAdd: Function;
  qty?: number;
  onRemove?: Function;
}

const AddRemoveBtn: FC<ButtonProps> = ({ onAdd, qty, onRemove }) => {
  // if (qty > 0) {
  //   return (
  //     <View style={styles.optionsView}>
  //       <TouchableOpacity style={styles.btnPlusMinus} onPress={() => onAdd()}>
  //         <Text style={styles.plusMinusText}> + </Text>
  //       </TouchableOpacity>

  //       <View
  //         style={{
  //           width: 40,
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <Text style={styles.qty}>{qty}</Text>
  //       </View>

  //       <TouchableOpacity
  //         style={styles.btnPlusMinus}
  //         onPress={() => onRemove()}
  //       >
  //         <Text style={styles.plusMinusText}> - </Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // } else {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => onAdd()}>
      <Text style={styles.addText}> Add</Text>
    </TouchableOpacity>
  );
};
// };

export default AddRemoveBtn;
