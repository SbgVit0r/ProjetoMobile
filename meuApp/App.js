import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from "@expo-google-fonts/space-grotesk";
import {View} from "react-native";

import ProdutoItem from './src/telas/Produto/';
import mock from './src/mocks/produto.js'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();  

function TabsMenu(){
  return <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if(route.name === "Kit"){
          iconName = focused
          ? 'basket'
          : 'basket-outline';
        } else if (route.name === "Sobre Nós"){
          iconName = focused
          ? 'paw'
          : 'paw-outline'; 
        } else if (route.name === "Produtos"){
          iconName = focused
          ? 'list'
          : 'list-outline';
        } else if (route.name === "Lista de Desejos"){
          iconName = focused
          ? 'heart'
          : 'heart-outline';
        }
        return <Ionicons name={iconName} size={size} color={color}/>
      },
      tabBarActiveTintColor: 'purple',
      tabBarIncativeTintColor: 'gray',
      tabBarHideOnKeyboard: true,
      headerShown: false,
    })}>
      <Tab.Screen name= "Kit" component={MenuKit}/>
      <Tab.Screen name= "Sobre Nós" component={MenuKit}/>
      <Tab.Screen name= "Produtos" component={MenuKit}/>
      <Tab.Screen name= "Lista de Desejos" component={MenuKit}/>
    </Tab.Navigator>
}

export default function App() {

  const [ fonteCarregada ] = useFonts({"SpaceGroteskRegular" : SpaceGrotesk_300Light, 
                                      "SpaceGroteskBold" : SpaceGrotesk_700Bold});

                                        
  if(!fonteCarregada){
    return <View/>
  }

  return <ProdutoItem {...mock}/>
}
