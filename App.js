import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './components./src/screens/Header';
import AppGallery from './components./AppGallery';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import Footer from './components./src/screens/Footer';


export default function App() {
  return (
    <SafeAreaProvider>


      <AppHeader />
      <AppGallery />
      <Footer />
    </SafeAreaProvider>

  );
}

