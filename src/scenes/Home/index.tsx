import { Link } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { commonStyles } from "@src/styles/common";
import React, { FC } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Props } from "./types";

export const Home = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.linkWrapper}>
        <Link style={commonStyles.link} to={{ screen: "ScreenA" }}>
          Go to ScreenA
        </Link>
        <Link style={commonStyles.link} to={{ screen: "ScreenB" }}>
          Go to ScreenB
        </Link>
      </View>
    </SafeAreaView>
  );
};
