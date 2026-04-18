import {View,Text,Image,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';

export default function DescripcionProyecto({ navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Descripción del proyecto</Text>

            <Text style={styles.descriptionBold}>¿Qué es el carrito seguidor de línea?</Text>
            <Text style={styles.description}>Es un vehículo móvil pequeño diseñado para seguir una ruta marcada en el suelo (generalmente una línea oscura sobre fondo claro) usando sensores que detectan el contraste.</Text>

            <Text style={styles.descriptionBold}>¿Qué problema resuelve?</Text>
            <Text style={styles.description}>Permite automatizar el seguimiento de una trayectoria sin intervención humana, útil para demostraciones, enseñanza de robótica, o aplicaciones simples de transporte y logística a pequeña escala.</Text>

            <Text style={styles.descriptionBold}>Objetivo general</Text>
            <Text style={styles.description}>Diseñar y construir un carrito seguidor de línea funcional que detecte y siga una pista, responda a cambios de trayectoria y demuestre control básico de motores mediante un microcontrolador.</Text>

            <Text style={styles.descriptionBold}>Descripción general de su funcionamiento</Text>
            <Text style={styles.description}>Los sensores de línea leen el contraste entre la superficie y la línea. Según la lectura, el microcontrolador decide si seguir recto, girar a la derecha o a la izquierda, y manda señales al controlador de motores para ajustar la velocidad de cada rueda y mantener la ruta.</Text>
            <Text style={styles.description}></Text>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    description: {
        fontSize: 17,
        marginTop: 20,
        color: '#000000',
        lineHeight: 22,
        marginLeft: 20,
        marginRight: 20,
    },
    descriptionBold: {
        fontSize: 18,
        marginTop: 18,
        color: '#000000',
        fontWeight: '700',
        marginLeft: 15,
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#b30000',
        textAlign: 'center',
        marginTop: 20,
        textShadowColor: '#400000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
});