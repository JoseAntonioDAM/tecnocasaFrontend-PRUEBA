import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function ScheduleScreen() {
  const navigation = useNavigation<NavProp>();
  const route = useRoute();
  const { propiedad }: any = route.params;

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha, setFecha] = useState("9 Septiembre 2025"); // valor por defecto

  return (
    <ImageBackground
      source={require("../../assets/FondoClienteDos.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>Agenda tu cita</Text>

        {/* Nombre */}
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#666"
          value={nombre}
          onChangeText={setNombre}
        />

        {/* Apellido */}
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="#666"
          value={apellido}
          onChangeText={setApellido}
        />

        {/* Teléfono */}
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
          value={telefono}
          onChangeText={setTelefono}
        />

        {/* Correo */}
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="#666"
          keyboardType="email-address"
          value={correo}
          onChangeText={setCorreo}
        />

        {/* Fecha (versión simple) */}
        <Text style={styles.subtitle}>Selecciona una fecha</Text>

        <TouchableOpacity
          style={styles.dateBox}
          onPress={() => setFecha("9 Septiembre 2025")}
        >
          <Text style={styles.dateText}>📅 {fecha}</Text>
        </TouchableOpacity>

        {/* Botón Confirmar */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Confirm")}
        >
          <Text style={styles.buttonText}>Confirmar cita</Text>
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
    paddingHorizontal: 30,
    paddingTop: 170,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00A86B",
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00A86B",
    marginTop: 20,
    marginBottom: 10,
  },
  dateBox: {
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
  button: {
    width: "100%",
    backgroundColor: "#00A86B",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
