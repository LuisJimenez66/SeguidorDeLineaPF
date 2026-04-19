import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default function Funcionamiento({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.title}>FUNCIONAMIENTO</Text>

                <View style={styles.section}>
                    <Text style={styles.descriptionBold}>¿Cómo detecta la línea?</Text>
                    <Text style={styles.description}>Los sensores de línea (Tcrt5000) miden la reflectancia del suelo. Una línea más oscura refleja menos luz que el fondo, por lo que el sensor detecta un cambio en la señal cuando está sobre la línea.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.descriptionBold}>¿Cómo responde al cambio de trayectoria?</Text>
                    <Text style={styles.description}>El microcontrolador (ESP32) compara lecturas de múltiples sensores (izquierda, centro, derecha). Según qué sensor detecte la línea, ajusta la velocidad de cada motor para corregir la trayectoria.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.descriptionBold}>Flujo básico de funcionamiento</Text>
                    <Text style={styles.description}>1. Leer sensores de línea continuamente.</Text>
                    <Text style={styles.description}>2. Determinar posición relativa de la línea (izquierda/centro/derecha).</Text>
                    <Text style={styles.description}>3. Ejecutar rutinas de control (sentencias if) para calcular señales a los motores.</Text>
                    <Text style={styles.description}>4. Enviar señales PWM/direccionales al driver de motores.</Text>
                    <Text style={styles.description}>5. Repetir el ciclo continuamente hasta finalizar la prueba.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.descriptionBold}>Etapas del proceso</Text>
                    <Text style={styles.description}>• Inicialización: encendido y calibración básica de sensores.</Text>
                    <Text style={styles.description}>• Detección: lectura y filtrado de sensores.</Text>
                    <Text style={styles.description}>• Decisión: algoritmo de control que determina acción.</Text>
                    <Text style={styles.description}>• Actuación: envío de señales al driver de motores.</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    contentContainer: {
        paddingBottom: 40,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        color: '#ff2a2a',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        letterSpacing: 3,
        textShadowColor: 'rgba(255, 42, 42, 0.5)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 15,
    },
    section: {
        marginBottom: 20,
        backgroundColor: '#121212',
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#2a2a2a',
    },
    descriptionBold: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '700',
        marginBottom: 10,
        letterSpacing: 0.5,
    },
    description: {
        fontSize: 15,
        color: '#cccccc',
        lineHeight: 24,
        marginBottom: 6,
    },
});