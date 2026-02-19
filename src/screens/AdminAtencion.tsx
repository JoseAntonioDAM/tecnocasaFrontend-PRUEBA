import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from "react-native";

export default function AdminAtencionScreen() {
  const mensajes = [
    {
      id: 1,
      nombre: "Jose Antonio",
      mensaje: "Hola, necesito una ayuda",
      foto: require("../../assets/susuna.png"),
    },
    {
      id: 2,
      nombre: "Maria",
      mensaje: "Estoy interesada en un piso",
      foto: require("../../assets/susuna.png"),
    },
    {
      id: 3,
      nombre: "Pedro",
      mensaje: "Quería alquilar un piso...",
      foto: require("../../assets/susuna.png"),
    },
    {
      id: 4,
      nombre: "Laura",
      mensaje: "Quiero comprar una casa, ¿Cuándo nos...",
      foto: require("../../assets/susuna.png"),
    },
    {
      id: 5,
      nombre: "Simón",
      mensaje: "Necesito información",
      foto: require("../../assets/susuna.png"),
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/FondoClienteDos.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Atención al Cliente</Text>

        <ScrollView style={styles.list}>
          {mensajes.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <Image source={item.foto} style={styles.avatar} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.nombre}</Text>
                <Text style={styles.message}>{item.mensaje}</Text>
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
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  list: {
    flex: 1,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00A86B",
  },
  message: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
});
