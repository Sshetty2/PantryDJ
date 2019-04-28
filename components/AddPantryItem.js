import React from 'react';
import styles from '../stylesheet';
import { TextInput, View, CheckBox } from 'react-native';

export default class AddPantryItem extends React.Component {

  render() {
    return (
      <View style={[styles.displayChildrenInline, styles.greyBackground]}>
        <TextInput
          style={styles.textInput}
          onChangeText={(e) => this.props.update(e)}
          value={this.props.itemName}
        />
        <CheckBox
          value={this.props.check}
          onChange={() => this.props.toggle()}
        />
    </View>
    );
  }
}