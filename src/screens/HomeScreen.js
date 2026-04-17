import { View, Text, Button, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Carrito seguidor de linea</Text>
            <Text style={styles.sectionTitle}>..::SATAN::..</Text>
            <Image source={require('../../assets/satan2.jpeg')} style={styles.banner} />
            <Text style={styles.sectionTitle}>Equipo 6</Text>
            <Image source={require('../../assets/satanplaca.jpeg')} style={styles.banner} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DescripcionProyecto')}>
                <Text style={styles.buttonText}>Descripcion del proyecto</Text>
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
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 20,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#f1b61f',
    },
    banner: {
        width: '90%',
        height: 180,
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 12,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#f1b61f',
        marginTop: 30,
        marginLeft: 20,
    },
    productsPreview: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    productCard: {
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#000000',
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        margin: 10,
        borderColor: '#f1b61f',
        borderWidth: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    productImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});