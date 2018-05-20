const Data = [];
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

export default class FlatListRowSingleItem extends React.Component {

  state = { selected: false };

  render() {
    
    console.log('[render]',this.state.selected);

    let styleObject = {
      width: (this.props.dimensionWidth / 3) - 2,
      height: (this.props.dimensionWidth / 3) - 2
    };

    if(this.state.selected)
    {
      styleObject = {
        width: (this.props.dimensionWidth / 3) - 2,
        height: (this.props.dimensionWidth / 3) - 2,
        borderColor:'#333',
        borderWidth:4,
      };
    }

    return (
      <View style={{ padding: 1 }}>
        <TouchableOpacity onPress={this.selectionHandler}>
          <Image
            style={styleObject}
            source={{ uri: this.props.item.node.image.uri }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  selectionHandler = () => {

    console.log(this.state);
    let state_obj = {...this.state};
    let selected_current = state_obj.selected;
    let selected_new = !selected_current;
    this.setState({selected:selected_new});

  }

}
