import React from "react";
import { StyleSheet, Text, Image, View, ScrollView, Button, TouchableOpacity } from "react-native";

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://images.unsplash.com/photo-1750535135677-ed85c46d8201?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />

      <Text style={styles.title}>Jane Doe</Text>

      <ScrollView style={styles.bioContainer}>
        <Text style={styles.bio}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged.
          {"\n\n"}
          This text is long on purpose so you can scroll inside the card. Keep
          scrolling...{"\n\n"}
          More text... 
        </Text>
      </ScrollView>
      <Button title="See more" onPress={() => console.log('Butoni u klikua')}/>
        <TouchableOpacity onPress={() => console.log('Butoni u klikua')}>
            <Text style={styles.btn}>See more...</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    width: 300,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "white",
    alignItems: "center",
    margin: 20,

    // iOS shadow
      boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",

    // Android shadow
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bioContainer: {
    maxHeight: 120,
    width: "100%",
  },
  bio: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  btn: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginTop: 10,
    color: 'white',
  }
});
