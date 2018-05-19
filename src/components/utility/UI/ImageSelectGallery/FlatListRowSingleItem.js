const Data = [];
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

export default class FlatListRowSingleItem extends React.Component {
  render() {
    return (
      <View >
        <TouchableOpacity onPress={this.onItemPressHandler}>
          <Image style={{width:this.props.dimensionWidth/3,height:this.props.dimensionWidth/3}} source={{ uri: this.props.item.url }} />
        </TouchableOpacity>
      </View>
    );
  }
}
