import { Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Brands = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.H1}>
        These are the best five(05) supercar brands in the world
      </Text>
      <Text style={styles.H2}>Devel Sixteen</Text>
      <Text style={styles.H2}>Koenigsegg</Text>
      <Text style={styles.H2}>Hennessey Performance Engineering</Text>
      <Text style={styles.H2}>Bugatti</Text>
      <Text style={styles.H2}>9ff</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },

  H1: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 10,
  },

  H2: {
    fontSize: 20,
    textAlign: "justify",
    marginTop: 10,
  },
});

export default Brands;
