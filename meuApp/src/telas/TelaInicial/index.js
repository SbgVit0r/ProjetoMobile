import React from "react";
import {Image, ScrollView} from "react-native";

import Texto from '../.../componentes/Texto';
import styles from './estilos';

export default function Index({info}){
    return <ScrollView style={styles.container}>
                <Image source={info.logo} style={styles.logo}/>
            </ScrollView>
    
}