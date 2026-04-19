import {View,Text,Image,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';

export default function Conclusiones({ navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Conclusiones</Text>

            <Text style={styles.descriptionBold}>Aprendizajes del equipo</Text>
            <Text style={styles.description}>Durante el desarrollo aprendimos sobre integración de sensores con el microcontrolador, control básico de motores y calibración de sensores de línea.</Text>

            <Text style={styles.descriptionBold}>Dificultades presentadas</Text>
            <Text style={styles.description}>Se presentaron desafíos en la calibración de los sensores en distintas superficies, ajustes de PID/algoritmos de control para evitar oscilaciones y suministro estable de energía a los motores.</Text>

            <Text style={styles.descriptionBold}>Posibles mejoras futuras</Text>
            <Text style={styles.description}>- Implementar un control PID más robusto para mejorar la estabilidad.</Text>
            <Text style={styles.description}>- Añadir más sensores para mayor precisión en curvas cerradas.</Text>
            <Text style={styles.description}>- Mejorar el chasis y la distribución de peso para mejor tracción.</Text>
            <Text style={styles.description}>- Integrar comunicación inalámbrica para telemetría y ajustes en tiempo real.</Text>
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
        color: '#b3002a',
        textAlign: 'center',
        marginTop: 20,
        textShadowColor: '#220009',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
});