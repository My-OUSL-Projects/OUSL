import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{
            width: 350,
            height: 200,
            padding: 50,
            alignItems: "center",
            uri: "https://carwow-uk-wp-3.imgix.net/best-supercars-1-lead-scaled.jpg",
          }}
        />
      </View>
      <Text style={styles.H1}>The Best Supercar Brands in the World</Text>
      <Text style={styles.description}>
        As per supercars, there is no set definition for what constitutes a
        hypercar. An attempt to define these is "a limited-production,
        top-of-the-line supercar with a price of around or more than US$1
        million." {"\n"}
        {"\n"}
        As a guide, we've compiled a list of the best five(05) supercar brands
        in the world. Let's take a look at which supercar brands have made it to
        the list.{"\n"}
        {"\n"}
        <Text style={styles.H2}>
          Click below button to find out what they are
        </Text>
      </Text>
      <Button
        onPress={() => navigation.navigate("Brands")}
        title="Go to next page"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },

  scrollView: {
    backgroundColor: "grey",
    marginHorizontal: 20,
  },

  image: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  H1: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    color: "black",
    textAlign: "justify",
    marginBottom: 10,
  },

  H2: {
    fontSize: 20,
    textAlign: "justify",
    marginTop: 10,
    color: "red",
  },
});

export default Home;
