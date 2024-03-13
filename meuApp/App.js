import Produto from './src/tela/ProdutoItens.js';

import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from "@expo-google-fonts/space-grotesk";


export default function App() {

  const [ fonteCarregada ] = useFonts({"SpaceGroteskRegular" : SpaceGrotesk_300Light,
                                          "SpaceGroteskBold" : SpaceGrotesk_700Bold});



  return <Produto/>
}
