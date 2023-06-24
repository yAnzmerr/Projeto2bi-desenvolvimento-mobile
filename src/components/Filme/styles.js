import { StyleSheet, Dimensions } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.7;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2B2A4C',
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        borderRadius: 20,
        margin: 20,
        padding: 20
    },

    conteudo: {
        flex: 1,
    },

    vImg: {
        backgroundColor: 'black',
        height: '100%',
        width: '40%',
        marginRight: 15,
        padding: 5
    },

    img: {
        width: '100%',
        height: '100%'
    },

    titulo: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#EA906C'
    },

    sinopse: {
        fontSize: 15,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#B31312'
    },


});

export default styles;