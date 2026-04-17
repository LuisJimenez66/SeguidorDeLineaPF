import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import Componentes from "../screens/Componentes";
import DescripcionProyecto from "../screens/DescripcionProyecto";
import EquipoTrabajo from "../screens/EquipoTrabajo";
import Funcionamiento from "../screens/Funcionamiento";
import Galeria from "../screens/Galeria";
import Conclusiones from "../screens/Conclusiones";
import Creditos from "../screens/Creditos";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";  



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({cart, setCart}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Inicio' }} />
            <Stack.Screen name="EquipoTrabajo" component={EquipoTrabajo} options={{ title: 'Equipo de trabajo' }} />
            <Stack.Screen name="DescripcionProyecto" component={DescripcionProyecto} options={{ title: 'Descripción del proyecto' }} />
            <Stack.Screen name="Componentes" component={Componentes} options={{ title: 'Componentes' }} />
            <Stack.Screen name="Funcionamiento" component={Funcionamiento} options={{ title: 'Funcionamiento' }} />
            <Stack.Screen name="Galeria" component={Galeria} options={{ title: 'Galería' }} />
            <Stack.Screen name="Conclusiones" component={Conclusiones} options={{ title: 'Conclusiones' }} />
            <Stack.Screen name="Creditos" component={Creditos} options={{ title: 'Créditos' }} />
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
                    } else if (route.name === 'EquipoTrabajo') {
                        iconName = 'people';
                    } else if (route.name === 'Galeria') {
                        iconName = 'images';
                    } else if (route.name === 'Creditos') {
                        iconName = 'star';
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
                <Tab.Screen name="EquipoTrabajo" component={EquipoTrabajo} />
                <Tab.Screen name="Creditos" component={Creditos} />
                <Tab.Screen name="Galeria" component={Galeria} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}