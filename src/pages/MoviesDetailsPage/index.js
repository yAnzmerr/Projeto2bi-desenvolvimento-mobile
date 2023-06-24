import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native-web"

export default function MoviesDetailsPage({ route }){
    
    const { filme } = route = route.params;

    return(
        <view style={{backgroundColor: 'grey'}}>
            <Text>{filme.attributes.titulo}</Text>
            <br></br>
            <Text>{filme.attributes.sinopse}</Text>
            <TouchableOpacity>
                <text>Voltar</text>
            </TouchableOpacity>
        </view>
    )
}