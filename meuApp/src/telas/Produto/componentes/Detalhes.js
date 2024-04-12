import React from "react";
import { StyleSheet,  Alert} from 'react-native';

import Texto from '../../../Componentes/Texto' //Componente de Exibição de Texto
import Botao from '../../../Componentes/Botao'


export default function Detalhes({nome, detalhes, preco, botao}){
    return <>
            <Texto style={styles.nome}>{nome}</Texto>
            <Texto style={styles.descricao}>{detalhes}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            <Botao textoBotao={botao} acaoBotao={()=>{Alert.alert("Lista de Desejos!", "Em breve a funcionalidade lista de desejos estará disponível!")}}></Botao>
   </>
}

const styles = StyleSheet.create({
    nome: {
        marginTop: 60,
        fontSize: 24,
        marginLeft: 10,
        fontWeight: "bold",
    },
    descricao: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        color: "black",
        fontSize: 18,
    },
    preco:{
        color: "#2A9F85",
        fontSize: 26,
        marginLeft: 10,
        fontWeight: "bold",
    },
});