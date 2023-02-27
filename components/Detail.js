import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function Detail({ navigation }) {
  return (
    <View>
      <Text>detail</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Form')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})