import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";

export default function GestorHorariosScreen() {
    const citas = [
        { id: 1, agente: "Cintia Perez", hora: "11:00", tipo: "Cita con cliente" },
        { id: 2, agente: "Melissa García", hora: "13:00", tipo: "Cita con cliente" },
        { id: 3, agente: "Pedro Lopez", hora: "15:00", tipo: "Cita con cliente" },
        { id: 4, agente: "Susana García", hora: "17:00", tipo: "Cita con cliente" },
    ];

    return (
        <ImageBackground
            source={require("../../assets/FondoClienteDos.png")}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Gestión de agenda de agentes</Text>

                {/*fechas de los horarios*/}
                <View style={styles.selector}>
                    <Text style={styles.selectorText}>Septiembre 2025</Text>
                </View>

                {/* Lista de citas */}
                <ScrollView style={styles.list}>
                    {citas.map((cita) => (
                        <View key={cita.id} style={styles.card}>
                            <Text style={styles.agente}>{cita.agente}</Text>
                            <Text style={styles.tipo}>{cita.tipo}</Text>
                            <Text style={styles.hora}>{cita.hora}</Text>
                        </View>
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
        paddingTop: 200,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#43924f",
        marginBottom: 20,
        textAlign: "center",
    },
    selector: {
        backgroundColor: "rgba(255,255,255,0.9)",
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    selectorText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        color: "#00A86B",
    },
    list: {
        flex: 1,
    },
    card: {
        backgroundColor: "rgba(255,255,255,0.95)",
        borderRadius: 10,
        padding: 15,
        marginBottom: 12,
    },
    agente: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#00A86B",
    },
    tipo: {
        fontSize: 15,
        marginTop: 4,
        color: "#333",
    },
    hora: {
        fontSize: 14,
        marginTop: 2,
        color: "#666",
    },
});
