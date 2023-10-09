import CheckBox from 'react-native-checkbox';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const CustomCheckbox = ({checked, onChange, text}) => {
    const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CheckBox style={styles.checkbox} color="#3B71F3" value={isChecked} onValueChange={setChecked} />
        <Text>{text}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      checkbox: {
        margin: 8,

        
      }
  });

export default CustomCheckbox;