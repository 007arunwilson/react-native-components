const Data = [];
import React from 'react';

export default class FlatListRowSingleItem extends React.Component {

    render() {

        return (
            <Image source={{uri:this.props.item.url}} />
        );

    }

}