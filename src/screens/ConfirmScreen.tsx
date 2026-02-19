import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function ConfirmScreen() {
  const navigation = useNavigation<NavProp>();

  return (
    <ImageBackground
      source={require("../../assets/FondoClienteDos.png")}
      style={styles.background}
    >
      <View style={styles.container}>

        {/* Tu imagen completa de confirmación */}
        <Image
          source={require("../../assets/citaconfirmacion.png")}
          style={styles.confirmImage}
          resizeMode="contain"
        />

        {/* Texto debajo */}
        <Text style={styles.message}>
          Pronto un agente se pondrá en contacto con usted
        </Text>

        {/* Botón abajo */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ClienteHome")}
        >
          <Text style={styles.buttonText}>Volver al inicio</Text>
        </TouchableOpacity>

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
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 160,
  },
  confirmImage: {
    width: "85%",
    height: 250,
    marginBottom: 30,
  },
  message: {
    fontSize: 18,
    color: "#050505",
    textAlign: "center",
    marginBottom: 80,
  },
  button: {
    backgroundColor: "#00A86B",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    position: "absolute",
    bottom: 350,
    width: "70%",
   
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
