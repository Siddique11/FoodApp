import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{result.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      <Text>{result.location.display_address}</Text>
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginRight: 5,
  },
  container: {
    margin: 15,
  },
});
