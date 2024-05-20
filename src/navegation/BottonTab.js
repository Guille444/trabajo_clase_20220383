// Utilidades de React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Pantallas de navegación
import PokemonList from '../screens/PokemonList';
import HomeScreen from '../screens/HomeScreen';
import PokemonAxios from '../screens/PokemonAxios';

// Navegador Bottom Tabs Navigator
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Inicio prueba',
          tabBarActiveTintColor: '#FFC300',
          headerStyle: {
            backgroundColor: '#FFC300',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
            <Tab.Screen
        name="PokemonAxios"
        component={PokemonAxios}
        options={{
          title: 'Lista Pokemon con Axios',
          tabBarActiveTintColor: '#cc0000',
          headerStyle: {
            backgroundColor: '#cc0000',
            borderBottomRightRadius:35,
            borderBottomLeftRadius:35
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="PokemonList"
        component={PokemonList}
        options={{
          title: 'Lista Pokemon Fetch',
          tabBarActiveTintColor: '#3b4cca',
          headerStyle: {
            backgroundColor: '#3b4cca',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
