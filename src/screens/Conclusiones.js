import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default function Conclusiones({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                
                <Text style={styles.title}>CONCLUSIONES</Text>

                <View style={styles.card}>
                    <View style={styles.headerRow}>
                        <View style={styles.redIndicator} />
                        <Text style={styles.descriptionBold}>APRENDIZAJES DEL EQUIPO</Text>
                    </View>
                    <Text style={styles.description}>Durante el desarrollo aprendimos sobre integración de sensores con el microcontrolador, control básico de motores y calibración de sensores de línea.</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.headerRow}>
                        <View style={styles.redIndicator} />
                        <Text style={styles.descriptionBold}>DIFICULTADES PRESENTADAS</Text>
                    </View>
                    <Text style={styles.description}>Se presentaron desafíos en la calibración de los sensores en distintas superficies, ajustes de PID y algoritmos de control para evitar oscilaciones, así como el suministro estable de energía a los motores.</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.headerRow}>
                        <View style={styles.redIndicator} />
                        <Text style={styles.descriptionBold}>POSIBLES MEJORAS FUTURAS</Text>
                    </View>
                    <Text style={styles.listItem}>• Implementar un control PID más robusto para mejorar la estabilidad.</Text>
                    <Text style={styles.listItem}>• Añadir más sensores para mayor precisión en curvas cerradas.</Text>
                    <Text style={styles.listItem}>• Mejorar el chasis y la distribución de peso para mejor tracción.</Text>
                    <Text style={styles.listItem}>• Integrar comunicación inalámbrica para telemetría y ajustes en tiempo real.</Text>
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
        fontSize: 32,
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
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#2a2a2a',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#1a1a1a',
        paddingBottom: 8,
    },
    redIndicator: {
        width: 4,
        height: 18,
        backgroundColor: '#ff2a2a',
        marginRight: 10,
        borderRadius: 2,
        shadowColor: '#ff2a2a',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    descriptionBold: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '800',
        letterSpacing: 1.5,
    },
    description: {
        fontSize: 15,
        color: '#cccccc',
        lineHeight: 24,
    },
    listItem: {
        fontSize: 15,
        color: '#cccccc',
        lineHeight: 24,
        marginBottom: 8,
        paddingLeft: 5,
    },
});