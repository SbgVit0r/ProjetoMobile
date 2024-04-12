import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import Texto from './Texto';

export default function Botao({textoBotao, acaoBotao}){
    return <TouchableOpacity style = {estilos.botao} onPress={acaoBotao}>
            <Texto style={estilos.botaoTexto}>{textoBotao}</Texto>
        </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: '#009DFF',
        paddingVertical: 16,
        margin: 30,
        borderRadius: 6
    },
    botaoTexto: {
        textAlign: "center",
        color: "#FFFFFFFF",
        fontSize:20,
        lineHeight: 26,
        fontWeight: "bold"
    }
})