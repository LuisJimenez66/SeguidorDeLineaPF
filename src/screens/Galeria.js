import {View,Text,Image,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';

export default function Galeria({ navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Galería</Text>

            <Text style={styles.description}>Aquí agregar fotografías y material visual del proyecto</Text>

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
        color: '#9b002f',
        textAlign: 'center',
        marginTop: 20,
        textShadowColor: '#2b0000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
});