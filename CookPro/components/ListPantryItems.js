import styles from '../stylesheet';
import React, { Component } from 'react';
import { Text, View, CheckBox } from 'react-native';

export default class ListPantryItems extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
            this.props.data.
            map((value, index) => {
            return (
                <View key={index}>
                    <Text>{value.name}</Text>
                     <CheckBox
                        value={value.priority}
                        onChange={() => this.props.toggle()}
                    />
                    {/*
                    <CheckBox
                    value={this.props.check}
                    onChange={() => this.props.toggle()}
                    /> */}
                </View>
            )
        })}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })
