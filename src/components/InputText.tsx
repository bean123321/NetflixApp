import React from "react";
import { TextInput } from "react-native";

const InputText = ({
  value,
  onChangeText,
  onFocus,
}: {
  value?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Search"
      placeholderTextColor="#737373"
      className="text-white text-sm flex-1 py-2"
      onFocus={onFocus}
      style={{ textAlign: "center" }}
    />
  );
};

export default InputText;
