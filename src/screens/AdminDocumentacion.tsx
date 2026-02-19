import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from "react-native";

export default function AdminDocumentacionScreen() {
  const categorias = [
    { id: 1, titulo: "Contratos", cantidad: 12 },
    { id: 2, titulo: "Documentos de Propiedades", cantidad: 28 },
    { id: 3, titulo: "Documentación de Clientes", cantidad: 35 },
    { id: 4, titulo: "Facturas", cantidad: 8 },
  ];

  return (
    <ImageBackground
      source={require("../../assets/FondoClienteDos.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Gestión de Documentación</Text>

        <ScrollView style={styles.list}>
          {categorias.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardCount}>{item.cantidad} documentos</Text>
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
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00A86B",
  },
  cardCount: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});
