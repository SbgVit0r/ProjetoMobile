import React from "react"

import Topo from './Produto/componentes/Topo';
import Detalhes from './Produto/componentes/Detalhes';

export default function Index({topo, detalhes}){
    return <>
        <Topo {...topo}/>
        <Detalhes {...detalhes}/>
    </>
}


