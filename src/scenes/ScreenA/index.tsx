import { Link } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { commonStyles } from "@src/styles/common";
import React, { FC } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Props } from "./types";

export const ScreenA = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Link style={commonStyles.link} to={{ screen: "ScreenB" }}>
        Go to ScreenB
      </Link>
    </SafeAreaView>
  );
};
