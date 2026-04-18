import {View,Text,Image,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';

export default function Creditos({ navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Créditos</Text>

            <Text style={styles.descriptionBold}>Grupo</Text>
            <Text style={styles.description}>5 B BIS</Text>

            <Text style={styles.descriptionBold}>Integrantes</Text>
            <Text style={styles.description}>- Erik Gabriel Bueno Cao Romero </Text>
            <Text style={styles.description}>- Guillen Lopez Jose Alberto</Text>
            <Text style={styles.description}>- Jimenez Delgado Luis Hector</Text>
            <Text style={styles.description}>- Lomas Corral Edson </Text>
            <Text style={styles.description}>- Meraz Sida Fernando </Text>

            <Text style={styles.descriptionBold}>Materia</Text>
            <Text style={styles.description}>Desarrollo de Aplicaciones Moviles</Text>

            <Text style={styles.descriptionBold}>Docente</Text>
            <Text style={styles.description}>Ana Laura Lara Chairez</Text>

            <Text style={styles.descriptionBold}>Cuatrimestre</Text>
            <Text style={styles.description}>5</Text>

            <Text style={styles.descriptionBold}>Fecha de entrega</Text>
            <Text style={styles.description}>24 Abril 2026</Text>
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
    infoContainer: {
        padding: 20,
        backgroundColor: '#090909',
        borderRadius: 12,
        height: 250,
        width: '95%',
        alignSelf: 'center',
        marginTop: 20,  
    },
    description: {
        fontSize: 17,
        marginTop: 20,
        color: '#000000',
        lineHeight: 22,
        marginLeft: 20,
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
        color: '#a8001f',
        textAlign: 'center',
        marginTop: 20,
        textShadowColor: '#330007',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
});