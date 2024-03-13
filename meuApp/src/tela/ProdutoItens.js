import React from 'react';
import {StyleSheet, Text, StatusBar, Image, View, Dimensions} from 'react-native';

import Topo from '../../assets/jogos.jpg'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Produto(){
    return <>
        <StatusBar/>
        <Image source={Topo} style={styles.topo} />
        <View style={styles.produto}>
            <View styles={styles.logotipo}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.nome}>Kirby and The Forgotten Land</Text>   
            </View>
            <Text style={styles.descricao}>Embarque em uma aventura totalmente nova como a poderosa bolinha, Kirby. Explore livremente em fases 3D enquanto descobre um mundo misterioso com estruturas abandonadas de uma civilização passada - como um shopping center?! Copie as habilidades dos inimigos, como o novo Drill e Ranger, e use-as para atacar, explorar seus arredores e salvar os Waddle Dees sequestrados do feroz Beast Pack ao lado do misterioso Elfilin.</Text>
            <Text style={styles.preco}>R$ 299,90</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    topo: {
        width:"100%",
        height: 1197 / 1600 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "right",
        fontSize: 22,
        color: "white",
        fontWeight: "bold",
        padding: 10,
        paddingTop: 20
    },
    produto: {
        backgroundColor: "grey",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "red",
        fontSize: 26,
        
        fontFamily: "SpaceGrostekBold",        
    },
    descricao: {
        marginTop: 10,
        marginBottom: 10,
        color: "black",
        fontSize: 18,
    },
    preco:{
        color: "#2A9F85",
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 8,
    },
    logo: {
        borderRadius: 60,
        width: 80,
        height: 80,
    },
    logotipo: {
        flexDirection: "row",
        paddingTop: 20
    }
});
