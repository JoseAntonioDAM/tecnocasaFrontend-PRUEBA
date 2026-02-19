import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import ClienteHomeScreen from "../screens/ClienteHomeScreen";
import PropertyDetailScreen from "../screens/PropertyDetailScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import ConfirmScreen from "../screens/ConfirmScreen";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;

  ClienteHome: undefined;
  PropertyDetail: { propiedad: any };
  Schedule: { propiedad: any };
  Confirm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     { /*<Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />*/}

      <Stack.Screen name="ClienteHome" component={ClienteHomeScreen} />
      <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="Confirm" component={ConfirmScreen} />
    </Stack.Navigator>
  );
}
