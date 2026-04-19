import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Galeria({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.title}>GALERÍA</Text>

                <Image source={require('../../assets/satan2.jpeg')} style={styles.image} />
                <Image source={require('../../assets/satanrueda1.jpeg')} style={styles.image} />
                <Image source={require('../../assets/satanplaca.jpeg')} style={styles.image} />
                <Image source={require('../../assets/satanrueda2.jpeg')} style={styles.image} />
                
                <View style={styles.vidContainer}>
                    <YoutubePlayer 
                        height={210}
                        play={false}
                        videoId={"0pIKmULjk38"} 
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    contentContainer: {
        paddingBottom: 40,
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: '#ff2a2a',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        letterSpacing: 4,
        textShadowColor: 'rgba(255, 42, 42, 0.5)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 15,
    },
    image: {
        width: '90%',
        height: 220,
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#2a2a2a',
    },
    vidContainer: {
        marginTop: 30,
        marginBottom: 30,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#2a2a2a',
        backgroundColor: '#121212',
    },
    description: {
        fontSize: 17,
        marginTop: 20,
        color: '#cccccc',
        lineHeight: 22,
        marginLeft: 20,
    },
    descriptionBold: {
        fontSize: 18,
        marginTop: 18,
        color: '#ffffff',
        fontWeight: '700',
        marginLeft: 15,
    },
});