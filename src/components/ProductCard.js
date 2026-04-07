import {View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"


export default function productCard ({name,price,image, navigation, descripcion}) {
    return(
        <TouchableOpacity style={styles.Card} onPress={() => navigation.navigate('ProductDetail', { name, price, image, descripcion })}>
            <Image source={{ uri: image }} style={styles.Image} />
            <View style={styles.Info}>
                <Text style={styles.Name}>{name}</Text>
                <Text style={styles.Price}>${price}</Text>
            </View>
        </TouchableOpacity>
    );
}




const styles = StyleSheet.create({
    Card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        margin: 10,
        width: 250,
        overflow: 'hidden',
        marginBottom: 20,
        elevation: 5,
        shadowColor: '#7a7a7a',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    Image: {
        width: "100%",
        height: 230,
    },
    Info: {
        padding: 10,
    },
    Name: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
    },
    Price: {
        fontSize: 16,
        marginTop: 5,
        color: '#000000',
    },  
})