import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function RegisterPage() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            <TextInput 
            placeholder="UserName"
            style={styles.input}/>
            <TextInput 
            placeholder="Email"
            style={styles.input}/>
            <TextInput 
            placeholder="Senha"
            style={styles.input}/>
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Registrar</Text>
            </TouchableOpacity>
            <View style={styles.ViewLinks}>
                <Link to={{screen: 'LoginPage'}}>Voltar para o Login</Link>
            </View>
        </View>
    )
}