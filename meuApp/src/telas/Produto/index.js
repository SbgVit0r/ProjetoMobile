import React from "react";
import {FlatList, StyleSheet} from "react-native";

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from "./componentes/Item";
import Texto from "../../Componentes/Texto";

export default function Produto({topo, detalhes, itens}){

    return <>
        <Texto style={styles.titulo}>{itens.titulo}</Texto>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={itens.lista.nome}
            ListHeaderComponent ={() =>{
                return <>      
                    <Topo {...topo}/>
                    <Detalhes {...detalhes}/>
                </>
            }}
        />
        


    </>
}

const styles = StyleSheet.create({
    titulo : {
        fontSize: 26,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    }
})