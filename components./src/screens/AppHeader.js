import { Header } from 'react-native-elements';
import {SafeAreaProvider,} from 'react-native-safe-area-context';
import { StyleSheet} from 'react-native';

export default function AppHeader() {
  return (
    <SafeAreaProvider>
        <Header style={styles.container}/>

    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
    container: {
    
      backgroundColor: 'blue',
      width:1000
 
    },
  });
  