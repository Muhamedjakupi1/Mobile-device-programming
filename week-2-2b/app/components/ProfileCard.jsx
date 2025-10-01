import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      <Text>ProfileCard</Text>
      <ScrollView style={styles.scrollWrapper}>
      <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </ScrollView>
      <TouchableOpacity onPress={() => console.log('Followed')} >
        <Text style={styles.btn}>Follow for more!</Text>
      </TouchableOpacity>
      {/* <Button title="Learn more" onPress={() => console.log('Clicked')}></Button> */}
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 500,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        boxShadow: '4px 4px 6px rgba(0,0,0,0.2)', //shador per ios
        elevation: 6 //shadow per android
    },
    scrollWrapper: {
        maxHeight: 250,
        width: '100%'
    },
    btn: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 15,
        width: 200,
        height: 40,
        textAlign: 'center',
        color: 'white',
        marginTop: 20
    }
})