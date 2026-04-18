import {View,Text,Image,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';

export default function Componentes({ navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Componentes</Text>

            <Text style={styles.descriptionBold}>Lista de componentes</Text>
            <Text style={styles.description}>- Chasis: Estructura que soporta todos los componentes y proporciona la base mecánica del carrito.</Text>
            <Text style={styles.description}>- Motores DC (2): Proveen el movimiento a las ruedas; controlados por un driver de motor.</Text>
            <Text style={styles.description}>- Controlador de motores (driver): Permite controlar dirección y velocidad de los motores desde el microcontrolador.</Text>
            <Text style={styles.description}>- Sensor(s) de línea (infrarrojo): Detectan contraste entre la línea y el fondo para guiar el carrito.</Text>
            <Text style={styles.description}>- Ruedas: Montadas en los motores para permitir el desplazamiento.</Text>
            <Text style={styles.description}>- Batería: Fuente de alimentación para motores y electrónica (por ejemplo, pack de baterías Li-ion o pilas recargables).</Text>
            <Text style={styles.description}>- Microcontrolador (por ejemplo Arduino, ESP32): Ejecuta la lógica de control y procesa señales de los sensores.</Text>
            <Text style={styles.description}>- Cables y conectores: Interconexión entre sensores, microcontrolador y driver de motores.</Text>
            <Text style={styles.description}>- (Opcional) Módulo controlador/Shield: Facilita conexiones entre microcontrolador y drivers/motores.</Text>

            <Text style={styles.descriptionBold}>Función de cada componente</Text>
            <Text style={styles.description}>- Chasis: Soporte estructural.</Text>
            <Text style={styles.description}>- Motores: Generan torque para mover las ruedas.</Text>
            <Text style={styles.description}>- Driver: Recibe señales PWM/direccionales del microcontrolador y entrega corriente a los motores.</Text>
            <Text style={styles.description}>- Sensores de línea: Proveen lectura digital/analógica del estado de la superficie (línea/no línea).</Text>
            <Text style={styles.description}>- Microcontrolador: Toma decisiones y genera señales de control.</Text>
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
        marginLeft: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#8b0000',
        textAlign: 'center',
        marginTop: 20,
        textShadowColor: '#2b0000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
});