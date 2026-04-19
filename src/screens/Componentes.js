import {View,Text,Image,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';

export default function Componentes({ navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Componentes</Text>

            <Text style={styles.descriptionBold}>Lista de componentes</Text>
            <Text style={styles.description}>- Chasis: Estructura que soporta todos los componentes y proporciona la base mecánica del carrito.</Text>
            <Text style={styles.description}>- Motores DC (2): Proveen el movimiento a las ruedas controlados por un driver de motor.</Text>
            <Text style={styles.description}>- Porta pilas (AA): Soporta y conecta las baterías al circuito.</Text>
            <Text style={styles.description}>- Ruedas: Montadas en los motores para permitir el desplazamiento.</Text>
            <Text style={styles.description}>- 4 Pilas (AA): Proporcionan alimentación a los motores.</Text>
            <Text style={styles.description}>- Tuercas y tornillos: Para ensamblar los componentes.</Text>
            <Image source={require('../../assets/chasis.webp')} style={styles.image} />


            <Text style={styles.description}>- Sensores de línea (Tcrt5000): Detectan contraste entre la línea y el fondo para guiar el carrito.</Text>
            <Image source={require('../../assets/sensor.webp')} style={styles.image} />
            <Text style={styles.description}>- Powerbank: Fuente de alimentación para el microcontrolador.</Text>
            <Image source={require('../../assets/pwr.jpg')} style={styles.image} />
            <Text style={styles.description}>- Microcontrolador (ESP32): Ejecuta la lógica de control y procesa señales de los sensores.</Text>
            <Image source={require('../../assets/esp.jpg')} style={styles.image} />
            <Text style={styles.description}>- Cables (Jumpers y USB-A -- USBMicro ): Interconexión entre sensores, microcontrolador y driver de motores.</Text>
            <Image source={require('../../assets/jumpers.jpg')} style={styles.image} />
            <Image source={require('../../assets/usb.jpg')} style={styles.image} />
            <Text style={styles.description}>- Puente H (L298N): Controla la dirección y velocidad de los motores.</Text>
            <Image source={require('../../assets/puente.webp')} style={styles.image} />
            <Text style={styles.description}>- 3 Pantallas OLED (0.96 pulgadas): Dan diseño visual al carrito.</Text>
            <Image source={require('../../assets/oled.webp')} style={styles.image} />
            
            

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
        borderWidth: 2,
        width: '90%',
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