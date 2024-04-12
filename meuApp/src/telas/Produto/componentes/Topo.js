import React from "react";
import Header from '../../../../assets/jogos.jpg';
import { StyleSheet, Dimensions, Image, StatusBar} from 'react-native';

import Texto from "../../../Componentes/Texto";

//Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return <>
        <StatusBar />
        <Image source={Header} style={styles.topo} />
        <Texto style={styles.titulo}>{titulo}</Texto>
    </>
}

const styles = StyleSheet.create({
    topo: {
      width: "100%",
      height: 1197 / 1600 * width,
    },
    titulo: {
      width: "100%",
      marginTop: "73%",
      position: "absolute",
      textAlign: "left",
      fontSize: 22,
      color: "white",
      backgroundColor: "red",
      fontWeight: "bold",
      padding: 10,
    },
  });