import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default function Creditos({ navigation }) {
    
    const integrantes = [
        "Erik Gabriel Bueno Cao Romero",
        "Guillen Lopez Jose Alberto",
        "Jimenez Delgado Luis Hector",
        "Lomas Corral Edson",
        "Meraz Sida Fernando"
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                
                <Text style={styles.title}>CRÉDITOS</Text>

                {/* Bloque de Información Académica */}
                <View style={styles.card}>
                    <View style={styles.infoBlock}>
                        <Text style={styles.label}>MATERIA</Text>
                        <Text style={styles.value}>Desarrollo de Aplicaciones Móviles</Text>
                    </View>
                    
                    <View style={styles.divider} />
                    
                    <View style={styles.infoBlock}>
                        <Text style={styles.label}>DOCENTE</Text>
                        <Text style={styles.value}>Ana Laura Lara Chairez</Text>
                    </View>
                    
                    <View style={styles.divider} />
                    
                    <View style={styles.rowLayout}>
                        <View style={styles.halfBlock}>
                            <Text style={styles.label}>GRUPO</Text>
                            <Text style={styles.value}>5 B BIS</Text>
                        </View>
                        <View style={styles.halfBlock}>
                            <Text style={styles.label}>CUATRIMESTRE</Text>
                            <Text style={styles.value}>5</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />
                    
                    <View style={styles.infoBlock}>
                        <Text style={styles.label}>FECHA DE ENTREGA</Text>
                        <Text style={styles.value}>24 Abril 2026</Text>
                    </View>
                </View>

                {/* Bloque de Integrantes */}
                <Text style={styles.subtitle}>INTEGRANTES DEL EQUIPO</Text>
                
                <View style={styles.card}>
                    {integrantes.map((nombre, index) => (
                        <View key={index} style={styles.memberRow}>
                            <View style={styles.redDot} />
                            <Text style={styles.memberName}>{nombre}</Text>
                        </View>
                    ))}
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
        fontSize: 34,
        fontWeight: '900',
        color: '#ff2a2a',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        letterSpacing: 6,
        textShadowColor: 'rgba(255, 42, 42, 0.5)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 15,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666666',
        letterSpacing: 3,
        marginBottom: 10,
        marginLeft: 5,
    },
    card: {
        backgroundColor: '#121212',
        borderRadius: 16,
        padding: 20,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#2a2a2a',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    infoBlock: {
        marginVertical: 10,
    },
    rowLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    halfBlock: {
        flex: 1,
    },
    label: {
        fontSize: 12,
        fontWeight: '900',
        color: '#ff2a2a',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 4,
    },
    value: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
    },
    divider: {
        height: 1,
        backgroundColor: '#2a2a2a',
        marginVertical: 5,
    },
    memberRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#1a1a1a', // Línea separadora muy tenue entre integrantes
    },
    redDot: {
        width: 8,
        height: 8,
        backgroundColor: '#ff2a2a',
        borderRadius: 4,
        marginRight: 15,
        shadowColor: '#ff2a2a',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    memberName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#cccccc',
        letterSpacing: 0.5,
    },
});