
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,TouchableOpacity,
  Text,
  View, Alert
} from 'react-native';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isSelected: this.props.isSelected,
      
    };
  }
  static defaultProps = {
      isSelected: false,
      
  }
 _changeRadioState(){           
    this.props.onPress(this.props.index) ;

    this.setState({
        isSelected: true
    })
 }
 componentWillReceiveProps(){
    this.setState({
        isSelected: this.props.isSelected
    })
 }
 
 render() {
    return (
        
        <TouchableOpacity onPress={() => this._changeRadioState()}>
            <View style={[{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#A9A9A9',
                alignItems: 'center',
                justifyContent: 'center',
            }, this.props.style]}>
                {
                this.state.isSelected ?
                    <View style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#6495ED',
                    }}/>
                    : null
                }
            </View>
        </TouchableOpacity>
    );
  }
}


class RadioControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        is_active_at_index : this.props.index_active,
    };
    this._renderRadioBtn = this._renderRadioBtn.bind(this)
  }
  static defaultProps = {
      radio_props: [],
      index_active: 0,
  }
 
_radioButtonPress(index){
   
   this.setState({is_active_at_index: index}, function () {
    this.setState({})
    });
}

_renderRadioBtn(obj, i) {
    return (
      <RadioButton
            key={i}
            index={i}
            isSelected={this.state.is_active_at_index === i}
            onPress={(index) =>{ this._radioButtonPress(index) ;                        
            }}
      />
    )
  }

  render() {
    var render_content = false;
    if (this.props.radio_props.length) {
      render_content = this.props.radio_props.map(this._renderRadioBtn)
      
    }

    return (
        <View>
          {render_content}
        </View>
    );
  }
}

export  {RadioButton}
export default RadioControl