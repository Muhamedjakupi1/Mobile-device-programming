import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import ProfileCard from './components/ProfileCard'
import Logo from '../assets/icon.png'

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={{width: 200, height: 200}}/>
            {/* <ProfileCard /> */}
            {/* <Text style={styles.title}>Home</Text> */}
            {/* <ImageBackground source={Logo} style={{width: 300, height: 300}}>
                <Text>Ushtrime</Text>
                </ImageBackground> */}
            {/* <Image source={{uri: 'https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyJTIwY2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D'}} style={{width: 100, height: 100}}/> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight:'bold',
        color: 'orange'
    }

})