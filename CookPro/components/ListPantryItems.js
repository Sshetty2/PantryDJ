import styles from '../stylesheet';
import React, { Component } from 'react';
import { Text, View, CheckBox, Button } from 'react-native';

export default class ListPantryItems extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.displayChildrenInline}>
            <Text style={styles.rightAlign}>Prioritize</Text>
            <Text style={styles.rightAlign}>Delete</Text>
        </View>
            {
                this.props.data.
                map((value, index) => {
                return (
                    <View key={index} style={styles.displayChildrenInline}>
                        <Text>{value.name}</Text>
                        <CheckBox
                            value={value.check}
                            onChange={() => this.props.toggle(index)}
                        />
                        <Button
                            onPress={() => this.props.delete(index)}
                            title="X"
                        />
                    </View>
                )
            })}
      </View>
    );
  }
}
