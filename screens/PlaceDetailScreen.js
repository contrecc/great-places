import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getActiveChildNavigationOptions } from "react-navigation";

const PlaceDetailScreen = () => {
  return (
    <View>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("placeTitle"),
  };
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({});
