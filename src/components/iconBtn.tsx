import React from "react";
import type { ImageSourcePropType } from "react-native";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ButtonProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onPress: Function;
  width: number;
  height: number;
  icon: ImageSourcePropType;
}

const IconBtn: React.FC<ButtonProps> = ({ onPress, icon, width, height }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { width, height }]}
      onPress={() => onPress()}
    >
      <Image style={{ width: width - 8, height: height - 8 }} source={icon} />
    </TouchableOpacity>
  );
};

export default IconBtn;
