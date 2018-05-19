import React from 'react';

export default class FlatListRowItem extends React.PureComponent {
    onItemPressHandler = () => {
      //this.props.onItemPressHandler(this.props.id);
    };
  
    render() {

      const data = this.props.data;

      const image_1_template = data[0]?<Image source={{uri:data[0]}} />:null;
      const image_2_template = data[1]?<Image source={{uri:data[0]}} />:null;
      const image_3_template = data[2]?<Image source={{uri:data[0]}} />:null;

      return (
        <TouchableOpacity onPress={this.onItemPressHandler}>
          <View>
            {image_0_template}
            {image_1_template}
            {image_2_template}
          </View>
        </TouchableOpacity>
      );
    }
  }