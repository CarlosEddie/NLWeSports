import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <text>
        {props.title}
      </text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>
        Hello World!!!!
      </Text>

      <Button title='Click here' />
      <Button title='Do not click here' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#939',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tittle: {
    color: '#daa520',
    fontSize: 22,
  }
});
