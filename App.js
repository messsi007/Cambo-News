import { StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
export default function app(){
  return (
    <SafeAreaView>
      <View style = {{backgroundcolor: 'pink'}}>
      <Text>Hello my bro!</Text>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
box: {
 position: 'absoslute',
 top: 200,
 margin: 5,
 shadowColor: 'red',
 borderWidth: 1,
 padding: 10,
 backgroundColor: 'green',
}
})