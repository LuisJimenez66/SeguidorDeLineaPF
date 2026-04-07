import {View,Text,FlatList,StyleSheet,TouchableOpacity,Image} from 'react-native';

export default function CartScreen({cart, setCart}) {

    const increment = (name) => {
        const updated = cart.map(p => p.name === name ? { ...p, quantity: (p.quantity || 1) + 1 } : p);
        setCart(updated);
    };

    const decrement = (name) => {
        const updated = cart.map(p => {
            if (p.name === name) {
                const qty = (p.quantity || 1) - 1;
                return { ...p, quantity: qty };
            }
            return p;
        }).filter(p => (p.quantity || 1) > 0);
        setCart(updated);
    };

    const removeItem = (name) => {
        setCart(cart.filter(p => p.name !== name));
    };

    const total = cart.reduce((sum, item) => sum + (parseFloat(item.price) * (item.quantity || 1)), 0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi Carrito</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.Image} />
                        <View style={styles.Info}>
                            <Text style={styles.Name}>{item.name}</Text>
                            <Text style={styles.Price}>${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}</Text>
                            <View style={styles.qtyContainer}>
                                <TouchableOpacity style={styles.qtyButton} onPress={() => decrement(item.name)}>
                                    <Text style={styles.qtyText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.qtyDisplay}>{item.quantity || 1}</Text>
                                <TouchableOpacity style={styles.qtyButton} onPress={() => increment(item.name)}>
                                    <Text style={styles.qtyText}>+</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.name)}>
                                    <Text style={styles.buttonText}>Eliminar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Tu carrito está vacío</Text>
                }
                contentContainerStyle={styles.listContainer}
            />
            <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCart([])}>
                <Text style={styles.buttonText}>Vaciar carrito</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        padding: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#f1b61f',
        borderRadius: 10,
        marginBottom: 15,
        overflow: 'hidden',
        elevation: 5,
    },
    Image: {
        width: 110,
        height: 117,
        margin:0,
    },
    Info: {
        padding: 10,
        justifyContent: 'center',
    },
    Name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
    },
    Price: {
        fontSize: 16,
        color: '#000000',
        marginTop: 5,
        fontWeight: '600',
    },
    emptyText: {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
        marginTop: 49,
    },
    listContainer: {
        paddingBottom: 20,
    },
    total: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 14,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#000000',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        borderColor: '#fcfcfc',
        borderWidth: 2,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    qtyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 0,
        backgroundColor: '#f1b61f',
        height: 40,
        borderRadius: 6,

    },
    qtyButton: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 4,
        marginHorizontal: 6,
        marginBottom: 0,
    },
    qtyText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 0,
    },
    qtyDisplay: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 0,
        backgroundColor: '#f1b61f',
    },
    removeButton: {
        backgroundColor: '#000000',
        padding: 8,
        borderRadius: 6,
        marginLeft: 10,
        marginBottom: 0,
    },
});
