import React from 'react';
import styles from '../stylesheet';
import AddPantryItem from '../components/AddPantryItem';
import ListPantryItems from '../components/ListPantryItems';
import { ScrollView, Text, View, Button, FlatList } from 'react-native';



export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [
          {
            name: 'Apple',
            check: true
        },
        {
            name: 'Spinach',
            check: true
        },
        {
            name: 'Olive Oil',
            check: false
        },  
        {
            name: 'Beans',
            check: false
        },
        {
            name: 'Bread',
            check: true
        },
        {
            name: 'Bananas',
            check: true
        },
        {
            name: 'Tomatos',
            check: true
        },
        {
            name: 'Chicken Broth',
            check: false
        },
        {
            name: 'Peppers',
            check: true
        },
        {
            name: 'Parmesan',
            check: true
        },
        {
            name:'Mozzarella',
            check: true
        },
        {
            name:'Chicken',
            check: true
        },
        {
            name:'Tomatoes',
            check: true
        },
      ],
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

  togglePriorityInList = (index) => {
    let objs = this.state.items;
    objs[index].check = !objs[index].check ;
    this.setState({ items: objs })
  }

  addItem = () => {
    const obj = {
      name: this.state.itemName,
      check: this.state.check
    }
    const newObj = [...this.state.items, obj]
    this.setState({ items: newObj })  
  }

  deleteItem = (index) => {
    const newObj = [...this.state.items];
    newObj.splice(index, 1);
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
      
        <ListPantryItems data={this.state.items} toggle={this.togglePriorityInList} update={this.updateItemName} delete={this.deleteItem}/>

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

