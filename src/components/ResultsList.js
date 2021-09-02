import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  const showhide = !results.length ? true : false;
  // if (!results.length) {
  //   return null;
  // }
  return (
    <View style={styles.container}>
      {showhide ? (
        <Spinner visible={showhide} />
      ) : (
        <>
          <Text style={styles.titleStyle}>{title}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ResultsShow", { id: item.id })
                  }
                >
                  <ResultsDetail result={item} />
                </TouchableOpacity>
              );
            }}
          />
        </>
      )}
    </View>
  );
};

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
