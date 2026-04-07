import {View,Text,Image,StyleSheet} from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo3.png')}
                style={styles.image}
            />
            <Text style={styles.name}>Usuario demo</Text>
            <Text style={styles.email}>usuario@gmail.com</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 60,
        marginBottom: 20,
    },
    email: {
        fontSize: 18,
        color: '#000000',
        marginTop: 10,
    },
});
