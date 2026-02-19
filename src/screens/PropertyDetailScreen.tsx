import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function PropertyDetailScreen() {
  const navigation = useNavigation<NavProp>();
  const route = useRoute();
  const { propiedad }: any = route.params;

  return (
    <ImageBackground
      source={require("../../assets/FondoClienteDos.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>

        {/* Imagen grande */}
        <Image source={propiedad.imagen} style={styles.image} />

        {/* Título */}
        <Text style={styles.title}>{propiedad.titulo}</Text>

        {/* Precio */}
        <Text style={styles.price}>{propiedad.precio}</Text>

        {/* Ciudad */}
        <Text style={styles.city}>{propiedad.ciudad}</Text>

        {/* Descripción */}
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.description}>
          {propiedad.descripcion}
        </Text>

        {/* Ubicación */}
        <Text style={styles.sectionTitle}>Ubicación</Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://maps.app.goo.gl/Mnwe6t1mRrM5rR5s8")}>
          <Text style={styles.link}>Ver en Google Maps</Text>
        </TouchableOpacity>

        {/* Botón agendar */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Schedule", { propiedad })}
        >
          <Text style={styles.buttonText}>Agenda tu cita</Text>
        </TouchableOpacity>

      </ScrollView>
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
    padding: 40,
    paddingBottom: 30,
    paddingTop: 175,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#00A86B",
  },
  price: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 20,
  },
  city: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
    color: "#00A86B",
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
  link: {
    fontSize: 16,
    color: "#007AFF",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00A86B",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
