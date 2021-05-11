import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
//import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createDrawerNavigator } from 'react-navigation-drawer';

import Colors from "../constants/Colors"
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            //headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    mode: 'card',
    //initialRouteName: 'MealDetail', //if we start with this initial screen
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'red'//Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(MealsNavigator);
