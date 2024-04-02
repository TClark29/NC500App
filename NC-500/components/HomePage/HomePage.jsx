import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import HomepageButton from "./HomepageButtons";
import { Card, Appbar, Avatar } from "react-native-paper";

const HomePage = ({ navigation }) => {
  const { height } = Dimensions.get("window");
  const cardHeight = (height - 190 - 0 - 200 - 20) / 2;

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="NC500" />
        <Avatar.Image
          size={60}
          source={require("../../assets/NC500-Logo800.jpg")}
        />
      </Appbar.Header>
      <View style={styles.body}>
        <View style={styles.firstRow}>
          <HomepageButton
            imageSource={require("../../assets/Archery.jpg")}
            text={"Things To Do"}
            navigation={navigation}
            navLink={"ThingsToDo"}
          />
          <HomepageButton
            imageSource={require("../../assets/aboutNC500.jpg")}
            text={"About the NC500"}
            navigation={navigation}
            navLink={"AboutPage"}
          />
        </View>
        <View style={styles.secondRow}>
          <Card>
            <TouchableOpacity
              onPress={() => navigation.navigate("RoutePlanRouteSelect")}
            >
              <Card.Cover
                source={require("../../assets/routePlanning.jpg")}
                style={[styles.fullWidth, { height: cardHeight }]}
              />
              <Text style={styles.textOverlay}>Journey Planner</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Itinerary")}>
              <Card.Cover
                source={require("../../assets/routePlanning.jpg")}
                style={[styles.fullWidth, { height: cardHeight }]}
              />
              <Text style={styles.textOverlay}>Itinerary</Text>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  header: {},
  body: {},
  firstRow: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondRow: {
    paddingHorizontal: 10,
  },
  fullWidth: {
    marginVertical: 5,
  },
  textOverlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomePage;
