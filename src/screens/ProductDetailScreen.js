import {View,Text,Image,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';

export default function ProductDetailScreen({route, navigation, cart, setCart}) {
    const { name, price, image, descripcion } = route.params;
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>${price}</Text>
                <Text style={styles.description}>{descripcion}</Text>
                <TouchableOpacity style={styles.button} onPress={() => {
                    const newProduct = { name, price: parseFloat(price), image, quantity: 1 };
                    const existing = cart.find(p => p.name === name);
                    if (existing) {
                        const updated = cart.map(p => p.name === name ? { ...p, quantity: (p.quantity || 1) + 1 } : p);
                        setCart(updated);
                    } else {
                        setCart([...cart, newProduct]);
                    }
                    alert('Producto agregado al carrito');
                }}>
                    <Text style={styles.buttonText}>Agregar al carrito</Text>
                </TouchableOpacity>
            </View>
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