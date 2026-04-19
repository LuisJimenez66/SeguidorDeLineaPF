import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default function Componentes({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                
                <Text style={styles.title}>COMPONENTES</Text>

                {/* Tarjeta de Hardware Base */}
                <View style={styles.card}>
                    <Text style={styles.componentTitle}>ESTRUCTURA BASE</Text>
                    <Text style={styles.description}>• <Text style={styles.highlight}>Chasis:</Text> Estructura que soporta todos los componentes y proporciona la base mecánica del carrito.</Text>
                    <Text style={styles.description}>• <Text style={styles.highlight}>Motores DC (2):</Text> Proveen el movimiento a las ruedas controlados por un driver de motor.</Text>
                    <Text style={styles.description}>• <Text style={styles.highlight}>Porta pilas (AA):</Text> Soporta y conecta las baterías al circuito.</Text>
                    <Text style={styles.description}>• <Text style={styles.highlight}>Ruedas:</Text> Montadas en los motores para permitir el desplazamiento.</Text>
                    <Text style={styles.description}>• <Text style={styles.highlight}>4 Pilas (AA):</Text> Proporcionan alimentación a los motores.</Text>
                    <Text style={styles.description}>• <Text style={styles.highlight}>Tuercas y tornillos:</Text> Para ensamblar los componentes.</Text>
                    <Image source={require('../../assets/chasis.webp')} style={styles.image} />
                </View>

                {/* Tarjeta de Sensores */}
                <View style={styles.card}>
                    <Text style={styles.componentTitle}>SENSORES DE LÍNEA (TCRT5000)</Text>
                    <Text style={styles.description}>Detectan contraste entre la línea y el fondo para guiar el carrito.</Text>
                    <Image source={require('../../assets/sensor.webp')} style={styles.image} />
                </View>

                {/* Tarjeta de Energía */}
                <View style={styles.card}>
                    <Text style={styles.componentTitle}>POWERBANK</Text>
                    <Text style={styles.description}>Fuente de alimentación principal para el microcontrolador.</Text>
                    <Image source={require('../../assets/pwr.jpg')} style={styles.image} />
                </View>

                {/* Tarjeta de Microcontrolador */}
                <View style={styles.card}>
                    <Text style={styles.componentTitle}>MICROCONTROLADOR (ESP32)</Text>
                    <Text style={styles.description}>El cerebro de SATAN. Ejecuta la lógica de control y procesa las señales de los sensores.</Text>
                    <Image source={require('../../assets/esp.jpg')} style={styles.image} />
                </View>

                {/* Tarjeta de Driver de Motores */}
                <View style={styles.card}>
                    <Text style={styles.componentTitle}>PUENTE H (L298N)</Text>
                    <Text style={styles.description}>Controla la dirección y velocidad de los motores basado en las instrucciones del ESP32.</Text>
                    <Image source={require('../../assets/puente.webp')} style={styles.image} />
                </View>

                {/* Tarjeta de Interfaz Visual */}
                <View style={styles.card}>
                    <Text style={styles.componentTitle}>3 PANTALLAS OLED (0.96")</Text>
                    <Text style={styles.description}>Dan diseño visual, expresividad y un aspecto imponente al carrito.</Text>
                    <Image source={require('../../assets/oled.webp')} style={styles.image} />
                </View>

                {/* Tarjeta de Cableado */}
                <View style={styles.card}>
                    <Text style={styles.componentTitle}>CABLEADO E INTERCONEXIÓN</Text>
                    <Text style={styles.description}>Cables Jumpers y USB-A a Micro USB para la transmisión de datos y energía entre los módulos.</Text>
                    <View style={styles.imageRow}>
                        <Image source={require('../../assets/jumpers.jpg')} style={[styles.imageHalf, { marginRight: 10 }]} />
                        <Image source={require('../../assets/usb.jpg')} style={styles.imageHalf} />
                    </View>
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
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 34,
        fontWeight: '900',
        color: '#ff2a2a',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        letterSpacing: 5,
        textShadowColor: 'rgba(255, 42, 42, 0.5)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 15,
    },
    card: {
        backgroundColor: '#121212',
        borderRadius: 16,
        padding: 20,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#2a2a2a',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    componentTitle: {
        fontSize: 16,
        fontWeight: '900',
        color: '#ff2a2a',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#2a2a2a',
        paddingBottom: 8,
    },
    description: {
        fontSize: 15,
        color: '#cccccc',
        lineHeight: 24,
        marginBottom: 8,
    },
    highlight: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 220, // Altura reducida ligeramente para mejor scrolleo
        marginTop: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#1a1a1a',
        resizeMode: 'cover',
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    imageHalf: {
        flex: 1,
        height: 150,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#1a1a1a',
        resizeMode: 'cover',
    },
});