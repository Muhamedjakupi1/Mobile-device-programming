import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import Logo from '../assets/icon.png'
import ProfileCard from './components/ProfileCard'
const Home = () => {
  return (
    <View style={styles.container} >
      {/* <Text style={styles.title}>home</Text>
      <ImageBackground source={Logo} style={styles.img}>
        <Text>Hello World</Text>
        </ImageBackground> */}
      {/* <Image source={{uri: 'https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyJTIwY2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D'}} style={styles.img} /> */}
      {/* <Image source={Logo} style={styles.img} /> */}
      <ProfileCard/>
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
    title : {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
    },
    img: {
      height: 300,
      width: 300
    }

})