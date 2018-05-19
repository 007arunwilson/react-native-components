const Data = [];
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

export default class FlatListRowSingleItem extends React.Component {
  render() {
    return (
      <View styles={styles}>
        <TouchableOpacity onPress={this.onItemPressHandler}>
          <Image source={{ uri: this.props.item.url }} />
        </TouchableOpacity>
      </View>
    );
  }
}
