import { NavigationContainer} from '@react-navigation/native';
import Header from './components/header'
import BottomTabNavigator from './components/bottomTabNavigator';
import { SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Header/>
        <BottomTabNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}