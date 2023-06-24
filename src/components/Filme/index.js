import { Text, Image, Button, View } from "react-native";

import styles from './styles';
import { Link } from "@react-navigation/native";

export default function Filme({filme}){
    return(
        <View style={styles.container}>
            <View style={styles.vImg}>
                <Image style={styles.img} source={{uri: filme.poster}}/>
            </View>
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
                <Text style={styles.sinopse}>{filme.attributes.sinopse.length > 200 ? filme.attributes.sinopse.substring(0,200) + "..." : filme.attributes.sinopse }</Text>
                <Link to={{screen: "MoviesDetailsPage", params: {filme: filme}}}>Saiba mais...</Link>
                <Button style={styles.button}
                title="comprar" 
                color='#E86A33'
                padding='100px'
                borderRadius='80px'            
                />
            </View>
        </View>
    );
}