import { View, Text, StyleSheet, ImageBackground, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function ClientHomeScreen() {
    const navigation = useNavigation<NavProp>();

    const propiedades = [
        {
            id: 1,
            titulo: "Casa en venta",
            precio: "450.000€",
            ciudad: "Santa Cruz de Tenerife",
            imagen: require("../../assets/propiedades/casaUno.png"),
            descripcion: "Casa en venta en Puerto Santiago, ideal tanto para inversión como para familias.",
        },
        {
            id: 2,
            titulo: "Piso en venta",
            precio: "150.000€",
            ciudad: "La Laguna",
            imagen: require("../../assets/propiedades/casaDos.png"),
            descripcion: "Piso amplio y luminoso en La Laguna, cerca de todos los servicios.",
        },
        {
            id: 3,
            titulo: "Piso Alquiler",
            precio: "600€/Mes",
            ciudad: "Puerto de la Cruz",
            imagen: require("../../assets/propiedades/alquilerDos.png"),
            descripcion: "Piso en alquiler con vistas al mar en Puerto de la Cruz.",
        },
        {
            id: 4,
            titulo: "Piso Alquiler",
            precio: "500€/Mes",
            ciudad: "San Matías",
            imagen: require("../../assets/propiedades/alquilerUno.png"),
            descripcion: "Piso económico ideal para estudiantes o parejas.",
        },
    ];

    return (
        <ImageBackground
            source={require("../../assets/FondoClienteUno.png")}
            style={styles.background}
        >
            <View style={styles.container}>

                {/* Bienvenida */}
                <Text style={styles.bienvenida}>Bienvenido Juan</Text>

                {/* Buscador */}
                <TextInput
                    style={styles.search}
                    placeholder="Buscar propiedad..."
                    placeholderTextColor="#666"
                />

                {/* Lista de propiedades en GRID */}
                <ScrollView contentContainerStyle={styles.grid}>
                    {propiedades.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.card}
                            onPress={() => navigation.navigate("PropertyDetail", { propiedad: item })}
                        >
                            <Image source={item.imagen} style={styles.cardImage} />

                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>{item.titulo}</Text>
                                <Text style={styles.cardPrice}>{item.precio}</Text>
                                <Text style={styles.cardCity}>{item.ciudad}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 190,
        
    },
    bienvenida: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#00A86B",
        marginBottom: 20,
    },
    search: {
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },

 
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingBottom: 40,
    },

    /* 🔥 MODIFICADO: TARJETA EN 2 COLUMNAS */
    card: {
        width: "48%", // 👉 Dos columnas
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 12,
        marginBottom: 15,
        overflow: "hidden",
    },

  
    cardImage: {
        width: "100%",
        height: 120,
    },


    cardInfo: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00A86B",
    },
    cardPrice: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 5,
    },
    cardCity: {
        fontSize: 13,
        color: "#555",
        marginTop: 5,
    },
});
