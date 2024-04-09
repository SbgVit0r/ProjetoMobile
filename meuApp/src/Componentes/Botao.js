import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import Texto from './Texto';

export default function Botao({children}){
    return <TouchableOpacity style = {estilos.botao}>
        <Texto style={estilos.botaoTexto}>{children}</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: '#009DFF',
        paddingVertical: 16,
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