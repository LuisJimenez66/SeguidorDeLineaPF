import {View,Text,Image,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Galeria({ navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Galería</Text>

            <Image source={require('../../assets/satan2.jpeg')} style={styles.image} />
            <Image source={require('../../assets/satanrueda1.jpeg')} style={styles.image} />
            <Image source={require('../../assets/satanplaca.jpeg')} style={styles.image} />
            <Image source={require('../../assets/satanrueda2.jpeg')} style={styles.image} />
            <View style={styles.vid}>
                <YoutubePlayer 
                    height={250}
                    play={false}
                    videoId={"0pIKmULjk38"} 
                />
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
        borderWidth: 2,
        width: '90%',
        height: 200,
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
    vid: {
        marginTop: 20,
        marginBottom: 30,
        width: '90%',
        height: 180,
        alignSelf: 'center',
    }
});