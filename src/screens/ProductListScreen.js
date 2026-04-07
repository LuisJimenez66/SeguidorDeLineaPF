import {View,Text, StyleSheet, FlatList} from 'react-native';
import ProductCard from '../components/ProductCard';
export default function ProductListScreen({navigation}) {
    const products = [
        {
            id: '1',
            name: 'Faros delanteros',
            price: '100',
            image: 'https://i.ebayimg.com/images/g/BGAAAeSwjQtowoH4/s-l1200.webp',
            descripcion: 'Faros delanteros de alta calidad para un coche no me acuerdo cual',
        },
        {
            id: '2',
            name: 'Rines',
            price: '150',
            image: 'https://http2.mlstatic.com/D_604960-MLM90327372618_082025-O.jpg',
            descripcion: 'Rines de aleación de alta calidad no me acuerdo del modelo del coche, es un volsbaguen',
        },
        {
            id: '3',
            name: 'Bocinas',
            price: '200',
            image: 'https://http2.mlstatic.com/D_NQ_NP_839046-MLA99885256231_112025-O.webp',
            descripcion: 'Bocinas de alta calidad para un sonido claro',
        },
        {
            id: '4',
            name: 'Asientos',
            price: '1000',
            image: 'https://m.media-amazon.com/images/I/61ZtsSdYP2L.jpg',
            descripcion: 'Asientos de cuero estilo de carreras para un honda civic',
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Catalogo de Productos</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductCard name={item.name} price={item.price} image={item.image}  descripcion={item.descripcion} navigation={navigation} />
                )}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingHorizontal: 16,
        paddingTop: 20,
        alignItems: 'center',

    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#f1b61f',
        marginBottom: 18,
        alignContent: 'center',
    },
    listContainer: {
        paddingBottom: 20,
    },
});