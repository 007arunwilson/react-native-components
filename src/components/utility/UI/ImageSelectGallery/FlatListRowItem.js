import React from "react";
import { View } from "react-native";

import SingleItem from "./FlatListRowSingleItem";

export default class FlatListRowItem extends React.PureComponent {
  onItemPressHandler = () => {
    //this.props.onItemPressHandler(this.props.id);
  };

  render() {
    const data = this.props.data;

    const image_0_template = data[0] ? (
      <SingleItem updateSelectionNumberHandler={this.props.updateSelectionNumberHandler} dimensionWidth={this.props.dimensionWidth} item={data[0]} />
    ) : null;
    const image_1_template = data[1] ? (
      <SingleItem updateSelectionNumberHandler={this.props.updateSelectionNumberHandler} dimensionWidth={this.props.dimensionWidth} item={data[1]} />
    ) : null;
    const image_2_template = data[2] ? (
      <SingleItem updateSelectionNumberHandler={this.props.updateSelectionNumberHandler} dimensionWidth={this.props.dimensionWidth} item={data[2]} />
    ) : null; 

    return (
      <View style={{flex:1,flexDirection:'row'}} >
        {image_0_template}
        {image_1_template}
        {image_2_template}
      </View>
    );
  }
}
