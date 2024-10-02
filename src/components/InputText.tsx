import React from "react";
import { TextInput } from "react-native";

const InputText = ({ onPress }) => {
  return (
    <TextInput
      placeholder="Search"
      placeholderTextColor="#737373"
      className="text-white text-sm flex-1 py-2"
      onPress={onPress}
      style={{ textAlign: "center" }}
    />
  );
};

export default InputText;
