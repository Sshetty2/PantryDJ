import HomeScreen from './pages/HomeScreen';
import Recipes from './pages/Recipes';
import Favorites from './pages/Favorites';
import LoginPage from './pages/LoginPage';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Recipes: {screen: Recipes},
  Favorites: {screen: Favorites},
  LoginPage: {screen: LoginPage}
});

const App = createAppContainer(MainNavigator);

export default App;