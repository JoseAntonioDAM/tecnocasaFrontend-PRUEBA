import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function AdminHomeScreen() {
    const navigation = useNavigation<NavProp>();

    return (
        // Fondo de pantalla
        <ImageBackground
            source={require("../../assets/FondoClienteDos.png")}
            style={styles.background}
        >

            <View style={styles.container}>


                <Image // Imagen de susuna administadora.
                    source={require("../../assets/susuna.png")}
                    style={styles.profileImage}
                />


                <Text style={styles.name}>Susana Garcia</Text>
                <Text style={styles.role}>Administrativo/a</Text>


                <Text style={styles.sectionTitle}>Funciones</Text>



                {/* Botones y enlaces para las otras ventanas las rotas de navegacion */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("AdminAgenda")}
                >
                    <Text style={styles.buttonText}>Gestión de agenda de agentes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("AdminPropiedades")}
                >
                    <Text style={styles.buttonText}>Modificar Propiedades</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("AdminDocumentacion")}
                >
                    <Text style={styles.buttonText}>Gestión de documentación</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("AdminAtencion")}
                >
                    <Text style={styles.buttonText}>Atención a clientes</Text>
                </TouchableOpacity>

                {/* Mensaje de la pantalla  */}
                <Text style={styles.note}>
                    * Este perfil se encarga de la gestión administrativa y del apoyo a los agentes inmobiliarios.
                </Text>

            </View>
        </ImageBackground>
    );
}

// Estilos de cada componete y clase 
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 175,
        paddingHorizontal: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
        
    },
    name: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000000",
    },
    role: {
        fontSize: 18,
        color: "#00A86B",
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 20,
    },
    button: {
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.9)",
        paddingVertical: 14,
        borderRadius: 10,
        marginBottom: 12,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
        color: "#00A86B",
    },
    note: {
        marginTop: 25,
        fontSize: 18,
        color: "#000000",
        textAlign: "center",
        opacity: 0.8,
    },
});
