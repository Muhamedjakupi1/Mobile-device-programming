import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import LogoIcon from "../assets/icon.png"
import ProfileCard from './components/ProfileCard'
const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={LogoIcon} style={{height: 100, width: 100, marginBottom: 30}} /> */}
      {/* <ImageBackground source={LogoIcon} style={{flex: 1}} > */}
      {/* <Image style={{height: 100, width: 100, marginBottom: 30, borderRadius: 50}} source={{uri: 'https://images.unsplash.com/photo-1750535135677-ed85c46d8201?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/> */}
      {/* <Text style={styles.title}>Ushtrime</Text>
      <Text style={{color: 'red', fontSize: 24, marginTop: 20}}>Grupi 1a</Text> */}
      <ProfileCard />
      {/* </ImageBackground> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
})