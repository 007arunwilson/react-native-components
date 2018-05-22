const Data = [];
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

export default class FlatListRowSingleItem extends React.Component {

  state = { selected: false };

  render() {

    let styleObject = {
      width: (this.props.dimensionWidth / 3) - 2,
      height: (this.props.dimensionWidth / 3) - 2
    };

    if(this.state.selected)
    {
      styleObject = {
        width: (this.props.dimensionWidth / 3) - 2,
        height: (this.props.dimensionWidth / 3) - 2,
        borderColor:'#4191f0',
        borderWidth:5,
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
    this.props.updateSelectionNumberHandler(selected_new, this.props.item)
    .then(({selection_status,count_of_selected})=>{
      
        this.setState(state=>{

          let state_immutable = {...state};
          state_immutable.count = count_of_selected;
          state_immutable.selected = selection_status;

          return state_immutable;

        });

    });

  }

}
