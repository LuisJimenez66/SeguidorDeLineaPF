import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default function EquipoTrabajo({ navigation }) {
    
    // Lista de integrantes para mapear y no repetir código
    const integrantes = [
        { nombre: "Bueno Erik", rol: "PROGRAMADOR" },
        { nombre: "Guillen Jose", rol: "ANALISTA" },
        { nombre: "Jimenez Luis", rol: "DISEÑADOR" },
        { nombre: "Lomas Edson", rol: "TESTER" },
        { nombre: "Meraz Fernando", rol: "PROGRAMADOR" },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                
                <View style={styles.header}>
                    <Text style={styles.title}>EQUIPO 6</Text>
                    <Text style={styles.subtitle}>LOS ARTÍFICES DE SATÁN</Text>
                </View>

                <View style={styles.rosterContainer}>
                    {integrantes.map((miembro, index) => (
                        <View key={index} style={styles.memberCard}>
                            <View style={styles.redIndicator} />
                            <View style={styles.textData}>
                                <Text style={styles.memberName}>{miembro.nombre}</Text>
                                <Text style={styles.memberRole}>{miembro.rol}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/equipofoto.jpeg')} style={styles.teamPhoto} />
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
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        fontWeight: '900',
        color: '#ff2a2a',
        letterSpacing: 8,
        textShadowColor: 'rgba(255, 42, 42, 0.7)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#666666',
        textTransform: 'uppercase',
        letterSpacing: 4,
        marginTop: 5,
    },
    rosterContainer: {
        marginBottom: 30,
        gap: 15, // Espaciado entre tarjetas
    },
    memberCard: {
        backgroundColor: '#121212', // Gris muy oscuro
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        padding: 15,
        borderWidth: 1,
        borderColor: '#2a2a2a',
        // Sombra suave roja para dar misterio
        shadowColor: '#ff2a2a',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    redIndicator: {
        width: 4,
        height: '100%',
        backgroundColor: '#ff2a2a',
        borderRadius: 2,
        marginRight: 15,
    },
    textData: {
        flex: 1,
    },
    memberName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff', // Nombre en blanco puro para contraste
        letterSpacing: 1,
        marginBottom: 2,
    },
    memberRole: {
        fontSize: 13,
        fontWeight: '900',
        color: '#ff2a2a', // Rol en rojo vibrante
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    teamPhoto: {
        width: '100%',
        height: 250,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#ff2a2a', // Borde rojo imponente
        resizeMode: 'cover',
    },
});