import React from 'react';
import styles from '../stylesheet';
import { View, Button } from 'react-native';

export default class BottomNavigation extends React.Component {
    
  static navigationOptions = {
    title: 'PantryDJ',
  };
  render() {
      
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.displayChildrenInline}>
        <Button 
          title="Home"
          onPress={() => navigate('Home')}
        >
        </Button>
        <Button 
          title="Recipes"
          onPress={() => navigate('Recipes')}
        >
        </Button>
        <Button 
          title="Favorites"
          onPress={() => navigate('Favorites')}
        >
        </Button>
      </View>  
    );
  }
}