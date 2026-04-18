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
    description: {
        fontSize: 17,
        marginTop: 20,
        color: '#000000',
        lineHeight: 22,
        marginLeft: 20,
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
    logo: {
        width: 350,
        height: 250,
        marginTop: 20,
        alignSelf: 'center',
        resizeMode: 'contain'
    },

});