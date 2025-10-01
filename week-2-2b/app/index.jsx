import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import Logo from '../assets/icon.png'
import ProfileCard from './components/ProfileCard'

const Home = () => {
    return (
        <View style={styles.container}>
            <ProfileCard />
            {/* <Text style={styles.title}>Home</Text> */}
            {/* <ImageBackground style={styles.img} source={Logo}>
                <Text>Hello World!</Text>
            </ImageBackground> */}
            {/* <Image style={[styles.img, {width: 200, height: 200}]} source={{uri: 'https://media.istockphoto.com/id/2182811460/photo/3d-render-portrait-of-cute-smiling-brunette-guy.webp?a=1&s=612x612&w=0&k=20&c=NqL1Jg-snNIpugEuUyu0-Pa_j4xs9bSiKbmjcAN9nrQ='}}
            /> */}
            {/* <Image source={Logo} style={{width: 200, height:200}}/> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        color: 'orange',
        fontWeight: 'bold'
    },
    img: {
        // borderRadius: 10,
        height: 400
    }
})