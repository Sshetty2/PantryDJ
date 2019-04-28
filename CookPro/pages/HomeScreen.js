import React from 'react';
import styles from '../stylesheet';
import AddPantryItem from '../components/AddPantryItem';
import ListPantryItems from '../components/ListPantryItems';
import { ScrollView, Text, View, Button, FlatList } from 'react-native';

const pantry = [
  {
      name: 'Apple',
      check: true
  },
  {
      name: 'Spinach',
      priority: true
  },
  {
      name: 'Olive Oil',
      priority: false
  },  
  {
      name: 'Beans',
      priority: false
  },
  {
      name: 'Bread',
      priority: true
  },
  {
      name: 'Bananas',
      priority: true
  },
  {
      name: 'Tomatos',
      priority: true
  },
  {
      name: 'Chicken Broth',
      priority: false
  },
  {
      name: 'Peppers',
      priority: true
  },
  {
      name: 'Parmesan',
      priority: true
  },
  {
      name:'Mozzarella',
      priority: true
  },
  {
      name:'Chicken',
      priority: true
  },
  {
      name:'Tomatoes',
      priority: true
  },

];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: pantry,
      itemName: '',
      check: false
    }
    this.togglePriority = this.togglePriority.bind(this);
    this.updateItemName = this.updateItemName.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  updateItemName = (text) => {
    this.setState({ itemName: text })
  }

  togglePriority = () => {
    this.setState({
      check: !this.state.check
    })
  }

  addItem = () => {
    const obj = {
      name: this.state.itemName,
      check: this.state.check
    }
    const newObj = [...this.state.items, obj]
    this.setState({ items: newObj })  
  }

  static navigationOptions = {
    title: 'PantryDJ',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#8fBA21'
    },
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View styles={styles.container}>

      <ScrollView style={styles.viewPadding}>

        <View style={[styles.displayChildrenInline, styles.greyBackground]}>
          <Text style={styles.alignLeft}>Add an item</Text>
          <Text>Prioritize</Text>
          <Button
            color="#8FBA21"
            title="Add"
            onPress={() => this.addItem()}>
          </Button>
        </View>

        <AddPantryItem update={this.updateItemName} toggle={this.togglePriority} check={this.state.check} itemName={this.state.itemName}/>
      
        <ListPantryItems data={this.state.items} toggle={this.togglePriority} update={this.updateItemName}/>

        <View style={styles.navBar}>
          <Button 
            color="#8fBA21"
            title="Home"
            onPress={() => navigate('Home')}>
          </Button>
          <Button 
            color="#8fBA21"
            title="Recipes"
            onPress={() => navigate('Recipes')}>
          </Button>
          <Button 
            color="#8fBA21"
            title="Favorites"
            onPress={() => navigate('Favorites')}>
          </Button>
          </View> 
        </ScrollView>
      </View>
    );
  }
}

