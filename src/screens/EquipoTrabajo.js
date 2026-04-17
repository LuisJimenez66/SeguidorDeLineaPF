import {View,Text,Image,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';

export default function EquipoTrabajo({ navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Equipo 6</Text>
            <Text style={styles.description}>Bueno Erik .-Programador</Text>
            <Text style={styles.description}>Guillen Jose .-Analista</Text>
            <Text style={styles.description}>Jimenez Luis .-Diseñador</Text>
            <Text style={styles.description}>Lomas Edson .-Tester</Text>
            <Text style={styles.description}>Meraz Fernando .-Programador</Text>
            <Image source={require('../../assets/equipofoto.jpeg')} style={styles.logo} />
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
    name: {
        fontSize: 22,
        fontWeight: '700',
        color: '#ffffff',
    },
    price: {
        fontSize: 20,
        marginTop: 5,
        color: '#ffffff',
    },  
    description: {
        fontSize: 17,
        marginTop: 20,
        color: '#ffffff',
        lineHeight: 22,
    },
    button: {
        backgroundColor: '#f1b61f',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: "600",
    },
});