import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B2A4C'
    },
    imgLogo: {
        height: '150px',
        width: '150px',
        marginBottom: 15
    },
    input: {
        border: '1px solid black',
        width: '70%',
        height: '40',
        padding: 5,
        marginBottom: 10,
        backgroundColor: '#B31312',
        borderRadius: '17px',
        border: '2px solid black'
    },
    btnLogin: {
        border: '2px solid black',
        width: '40%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '17px',
        backgroundColor: '#EA906C'
    },
    viewLinks: {
       marginTop: 10,
       flexDirection: 'row',
       width: '70%',
       justifyContent: 'space-between'
    }

});

export default styles;