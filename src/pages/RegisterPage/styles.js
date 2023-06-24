import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgLogo : {
        height: '150px',
        width: '150px',
        marginBottom: 15,

    },
    input: {
        border: '1px solid black',
        width: '70%',
        height: 40,
        marginBottom: 10,
        padding: 5,
        borderRadius: 10,

    },
    btnLogin: {
        border: '2px solid black',
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#6e96e4'
    },
    ViewLinks: {
        flexDirection: "row",
        marginTop: 15,
        justifyContent: 'space-between',
        width:'70%',
        
    },
})

export default styles;

// : {

// },