import { Button, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      <Text>ProfileCard</Text>
      <ScrollView style={styles.scrollWrapper}>
<Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
      </ScrollView>
      <TouchableOpacity onPress={() => {console.log('Followed')}}>
        <Text style={styles.btn}>Follow</Text>
      </TouchableOpacity>
      {/* <Button style={styles.btn} onPress={() => {console.log('Clicked')}}>Click Me</Button> */}
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    card: {
        width:300,
        height:400,
        backgroundColor: 'white',
        borderRadius: 10,
        boxShadow: '0px 4px 6px rgba(0,0,0,0.2)', // shadow per ios
        elevation: 4, // shadow per android
    },
    scrollWrapper: {
        maxHeight: 120,
        width: '100%',
    },
    btn: {
        width: 200,
        height: 50,
        backgroundColor: 'blue',
        color: 'white',
    }
})