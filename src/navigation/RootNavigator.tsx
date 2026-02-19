import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AdminAgenda from "../screens/AdminAgenda";
import AdminAtencionScreen from "../screens/AdminAtencion";
import AdminDocumentacionScreen from "../screens/AdminDocumentacion";
import AdminPropiedadesScreen from "../screens/AdminPropiedades";
import AdminHomeScreen from "../screens/AdminHomeScreen";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;

  ClienteHome: undefined;
  PropertyDetail: { propiedad: any };
  Schedule: { propiedad: any };
  Confirm: undefined;
  AdminAgenda: undefined;
  AdminAtencion: undefined;
  AdminDocumentacion: undefined;
  AdminPropiedades: undefined;
  AdminHomeScreen: undefined;
  EditarPropiedad: { propiedadId: number };

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>


      <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />
      <Stack.Screen name="AdminAgenda" component={AdminAgenda} />
      <Stack.Screen name="AdminPropiedades" component={AdminPropiedadesScreen} />
      <Stack.Screen name="AdminDocumentacion" component={AdminDocumentacionScreen} />
      <Stack.Screen name="AdminAtencion" component={AdminAtencionScreen} />

    </Stack.Navigator>
  );
}
