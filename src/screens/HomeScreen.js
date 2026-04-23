import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                
                <View style={styles.headerContainer}>
                    <Text style={styles.subtitle}>Carrito seguidor de línea</Text>
                    <Text style={styles.mainTitle}>SATAN</Text>
                </View>
                
                <Image source={require('../../assets/satan2.jpeg')} style={styles.banner} />
                
                <Text style={styles.teamTitle}>Escuadron Velocidad</Text>
                <Image source={require('../../assets/satanplaca.jpeg')} style={styles.banner} />
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DescripcionProyecto')}>
                        <Text style={styles.buttonText}>Descripción del proyecto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Componentes')}>
                        <Text style={styles.buttonText}>Ver componentes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Funcionamiento')}>
                        <Text style={styles.buttonText}>Ver funcionamiento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Conclusiones')}>
                        <Text style={styles.buttonText}>Ver conclusiones</Text>
                    </TouchableOpacity>
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
    headerContainer: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#888888',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 5,
    },
    mainTitle: {
        fontSize: 48,
        fontWeight: '900',
        color: '#ff2a2a',
        letterSpacing: 6,
        textShadowColor: 'rgba(255, 42, 42, 0.5)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 15,
    },
    teamTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 15,
        letterSpacing: 3,
        textTransform: 'uppercase',
    },
    banner: {
        width: '100%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#2a2a2a',
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
        gap: 15,
    },
    button: {
        backgroundColor: '#121212',
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff2a2a',
        shadowColor: '#ff2a2a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
});