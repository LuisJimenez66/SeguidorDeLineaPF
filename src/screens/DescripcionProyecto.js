import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default function DescripcionProyecto({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                
                <View style={styles.header}>
                    <Text style={styles.title}>DESCRIPCIÓN</Text>
                    <Text style={styles.subtitle}>DEL PROYECTO</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.descriptionBold}>¿Qué es el carrito seguidor de línea?</Text>
                    <Text style={styles.description}>Es un vehículo móvil pequeño diseñado para seguir una ruta marcada en el suelo usando sensores que detectan el contraste de la luz.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.descriptionBold}>¿Qué problema resuelve?</Text>
                    <Text style={styles.description}>Permite automatizar el seguimiento de una trayectoria sin intervención humana, útil para demostraciones, enseñanza de robótica, o aplicaciones simples de transporte y logística a pequeña escala.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.descriptionBold}>Objetivo general</Text>
                    <Text style={styles.description}>Diseñar y construir un carrito seguidor de línea funcional que detecte y siga una pista, responda a cambios de trayectoria y demuestre control básico de motores mediante un microcontrolador (ESP32).</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.descriptionBold}>Descripción de funcionamiento</Text>
                    <Text style={styles.description}>Los sensores de línea leen el contraste entre la superficie y la línea. Según la lectura, el microcontrolador (ESP32) decide si seguir recto, girar a la derecha o a la izquierda, y manda señales al controlador de motores para ajustar la velocidad de cada rueda y mantener la ruta.</Text>
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
    header: {
        marginTop: 20,
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 34,
        fontWeight: '900',
        color: '#ff2a2a',
        letterSpacing: 4,
        textShadowColor: 'rgba(255, 42, 42, 0.5)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 15,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666666',
        textTransform: 'uppercase',
        letterSpacing: 6,
        marginTop: 2,
    },
    section: {
        marginBottom: 20,
        backgroundColor: '#121212',
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#2a2a2a',
        // Ligera sombra para separar del fondo
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    descriptionBold: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '700',
        marginBottom: 8,
        letterSpacing: 0.5,
    },
    description: {
        fontSize: 15,
        color: '#cccccc',
        lineHeight: 24,
    },
});