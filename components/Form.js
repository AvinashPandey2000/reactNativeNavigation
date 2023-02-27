import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import React, {useState } from "react";

export default Form = ({ navigation }) => {

// Store the form value in the state
const [formData, setFormData] = useState({
  name: "",
  email: "",
  address:"",
  mobile:"",
  message: "",
});

  return (
 <>
    
      <View style={{ marginTop: 50 }}>
     
        <Text style={styles.heading}>Contact Us</Text>
        {/* Input Section */}
   
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter the Name"
            value={formData.name}
            onChangeText={text => setFormData({...formData, name: text})}

          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            keyboardType="email-address"
            onChangeText={text => setFormData({...formData, email: text})}

          />

          <TextInput
            style={styles.input}
            placeholder="Address"
            value={formData.address}
            onChangeText={text => setFormData({...formData, address: text})}

          />

          <TextInput
            style={styles.input}
            placeholder="Enter the Mobile"
            keyboardType="numeric"
            value={formData.mobile}
            onChangeText={text => setFormData({...formData, mobile: text})}

          />
          <TextInput
            style={styles.input}
            placeholder="Enter the Message"
            value={formData.message}
            onChangeText={text => setFormData({...formData, message: text})}

          />
       
        </View>
     
      </View>

    <View style={styles.button}>
      <Button
        
        title="SUBMIT DETAILS"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>

    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  input: {
    margin: 12,
    padding: 10,
    borderBottomWidth:1,
    borderBottomColor:'red'
  },
  button:{
    marginLeft:40,
    marginRight:40,
    marginTop:40 ,
  }
});
