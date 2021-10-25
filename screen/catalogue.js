import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ListItem } from "react-native-elements";
import axios from "axios";

export default class Catalogue extends Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      url: "http://127.0.0.1:5000/",
    };
  }

  componentDidMount() {
    this.getPlanet();
  }

  getPlanet = () => {
    const url = this.state.url;
    axios
      .get(url)
      .then((response) => {
        return this.setState({
          listData: response.data.data,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  renderItem = ({ item, index }) => {
    // <ListItem
    //   key={index}
    //   title={`Planet:${item.name}`}
    //   subtitle={`Distance from earth:${item.distance_from_earth}`}
    //   titleStyle={styles.title}
    //   containerStyle={styles.listContainer}
    //   bottomDivider
    //   onPress={() => {
    //     this.props.navigation.navigate("Detail", { planet_name: item.name });
    //   }}
    // />;
    
    <ListItem key={index}
    bottomDivider>
    
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.distance_from_earth}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
  };

  keyExtractor = (item, index) => {
    index.toString();
  };

  render() {
    const listData = this.state.listData;
    if (listData.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text>Loading..... </Text>
        </View>
      );
    }
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <Text style={styles.headerText}>Planet Catalogue</Text>
          </View>
          <View style={styles.lowerContainer}>
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.listData}
            renderItem={this.renderItem}
            />
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#edc988" },
  upperContainer: { flex: 0.1, justifyContent: "center", alignItems: "center" },
  headerText: { fontSize: 30, fontWeight: "bold", color: "#132743" },
  lowerContainer: { flex: 0.9 },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyContainerText: { fontSize: 20 },
  title: { fontSize: 18, fontWeight: "bold", color: "#d7385e" },
  listContainer: { backgroundColor: "#eeecda" },
});
