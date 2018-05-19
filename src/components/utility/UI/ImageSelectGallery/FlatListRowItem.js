import React from "react";
import { View } from "react-native";

import SingleItem from "./FlatListRowSingleItem";

export default class FlatListRowItem extends React.PureComponent {
  onItemPressHandler = () => {
    //this.props.onItemPressHandler(this.props.id);
  };

  render() {
    const data = this.props.data;

    const image_1_template = data[0] ? (
      <SingleItem dimensionWidth={this.props.dimensionWidth} item={data[0]} />
    ) : null;
    const image_2_template = data[1] ? (
      <SingleItem dimensionWidth={this.props.dimensionWidth} item={data[1]} />
    ) : null;
    const image_3_template = data[2] ? (
      <SingleItem dimensionWidth={this.props.dimensionWidth} item={data[2]} />
    ) : null;

    return (
      <View>
        {image_0_template}
        {image_1_template}
        {image_2_template}
      </View>
    );
  }
}
