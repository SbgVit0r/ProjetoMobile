import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from "@expo-google-fonts/space-grotesk";
import {View} from "react-native";

import ProdutoItem from './src/telas/Produto/';
import mock from './src/mocks/produto.js'

export default function App() {

  const [ fonteCarregada ] = useFonts({"SpaceGroteskRegular" : SpaceGrotesk_300Light, 
                                      "SpaceGroteskBold" : SpaceGrotesk_700Bold});
                                          
  if(!fonteCarregada){
    return <View/>
  }

  return <ProdutoItem {...mock}/>
}
