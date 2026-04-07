import { View, Text, Button, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../../assets/logo1SF3.png')} style={styles.logo} />
            <Image source={{ uri: "https://www.autonocion.com/wp-content/uploads/2019/06/Mustang-electric-1960-2.jpg"}} style={styles.banner} />
            <Text style={styles.sectionTitle}>Productos destacados</Text>
            <View style={styles.productsPreview}>
                <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('ProductDetail', { name: 'Rines mustang', price: '200', image: "https://www.alpaimports.com/cdn/shop/files/w12k_2048x.jpg?v=1697319142", descripcion: 'Rines para mustang con tapas y todo' })}>
                    <Image source={{ uri: "https://www.alpaimports.com/cdn/shop/files/w12k_2048x.jpg?v=1697319142"}} style={styles.productImage} />
                    <Text style={styles.productName}>Rines mustang</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('ProductDetail', { name: 'Faros chevrolet', price: '150', image: "https://http2.mlstatic.com/D_NQ_NP_620185-MLM87145102067_072025-O.webp", descripcion: 'Faros para una chevrolet pick up 1970' })}>
                    <Image source={{ uri: "https://http2.mlstatic.com/D_NQ_NP_620185-MLM87145102067_072025-O.webp"}} style={styles.productImage} />
                    <Text style={styles.productName}>Faros chevrolet</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.banner} source={{uri: "https://cdn.dealeraccelerate.com/ab/1/1264/53855/1920x1440/1970-chevrolet-c10"}} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductList')}>
                <Text style={styles.buttonText}>Ver catalogo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.buttonText}>Ver mi carrito</Text>
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