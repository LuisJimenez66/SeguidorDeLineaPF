import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";  



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({cart, setCart}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Inicio' }} />
            <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Productos' }} />
            <Stack.Screen name="ProductDetail" options={{ title: 'Detalle' }} >
                {props => (<ProductDetailScreen {...props} cart={cart} setCart={setCart} />)}
            </Stack.Screen>
        </Stack.Navigator>
    );
}


export default function AppNavigator() {
    const [cart, setCart] = useState([]);
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Cart') {
                        iconName = 'cart';
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;   
                    },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: '#f1b61f',
                })}       
            >
                <Tab.Screen name="Home" options={{ headerShown: false }} >
                    {() => <HomeStack cart={cart} setCart={setCart} />}
                </Tab.Screen>
                <Tab.Screen name="Cart">
                    {() => <CartScreen cart={cart} setCart={setCart} />}
                </Tab.Screen>
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}