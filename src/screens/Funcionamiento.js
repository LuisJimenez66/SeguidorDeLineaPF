import {View,Text,Image,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';

export default function Funcionamiento({ navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Funcionamiento</Text>

            <Text style={styles.descriptionBold}>¿Cómo detecta la línea?</Text>
            <Text style={styles.description}>Los sensores de línea (Tcrt5000) miden la reflectancia del suelo. Una línea más oscura refleja menos luz que el fondo, por lo que el sensor detecta un cambio en la señal cuando está sobre la línea.</Text>

            <Text style={styles.descriptionBold}>¿Cómo responde al cambio de trayectoria?</Text>
            <Text style={styles.description}>El microcontrolador (ESP32) compara lecturas de múltiples sensores (izquierda, centro, derecha). Según qué sensor detecte la línea, ajusta la velocidad de cada motor para corregir la trayectoria.</Text>

            <Text style={styles.descriptionBold}>Flujo básico de funcionamiento</Text>
            <Text style={styles.description}>1. Leer sensores de línea continuamente.</Text>
            <Text style={styles.description}>2. Determinar posición relativa de la línea (izquierda/centro/derecha).</Text>
            <Text style={styles.description}>3. Ejecutar rutinas de control (sentencias if) para calcular señales a los motores.</Text>
            <Text style={styles.description}>4. Enviar señales PWM/direccionales al driver de motores.</Text>
            <Text style={styles.description}>5. Repetir el ciclo continuamente hasta finalizar la prueba.</Text>

            <Text style={styles.descriptionBold}>Etapas del proceso</Text>
            <Text style={styles.description}>- Inicialización: encendido y calibración básica de sensores.</Text>
            <Text style={styles.description}>- Detección: lectura y filtrado de sensores.</Text>
            <Text style={styles.description}>- Decisión: algoritmo de control que determina acción.</Text>
            <Text style={styles.description}>- Actuación: envío de señales al driver de motores.</Text>
            <Text style={styles.description}></Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    image: {
        borderColor: '#000000',
        borderWidth: 4,
        width: '95%',
        height: 350,
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 12,
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
        color: '#b2002d',
        textAlign: 'center',
        marginTop: 20,
        textShadowColor: '#300010',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
});