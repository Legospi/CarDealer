// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import StartModule from '../src/modules/start/StartModule';
// import InventoryScreen from '../src/modules/inventory/InventoryScreen';
// import InformationRequestModule from '../src/modules/information/InformationRequestModule';
// import TestDriveModule from '../src/modules/test_drive/TestDriveModule';
// import ServiceRequestScreen from '../src/modules/services/ServiceRequestScreen'; 
// import ServiceHistoryScreen from '../src/modules/services/ServiceHistoryScreen'; 
// import VehicleDetailsScreen from '../src/modules/details/VehicleDetailsScreen';
// import ContactScreen from '../src/modules/contact/ContactScreen'; 

// const Stack = createStackNavigator();

// const AppNavigation = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="CarDealer App" component={StartModule} />
//                 <Stack.Screen name="Inventory" component={InventoryScreen} options={{ title: 'Catálogo De Vehículos' }} />
//                 <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} options={{ title: 'Detalles del Vehículo' }} /> 
//                 <Stack.Screen name="InformationRequest" component={InformationRequestModule} options={{ title: 'Solicitud De Información' }} />
//                 <Stack.Screen name="TestDrive" component={TestDriveModule}/>
//                 <Stack.Screen name="ServiceRequest" component={ServiceRequestScreen} options={{ title: 'Solicitud De Servicio' }} /> 
//                 <Stack.Screen name="ServiceHistory" component={ServiceHistoryScreen} options={{ title: 'Historial De Servicio' }} /> 
//                 <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contáctenos' }} /> 
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// export default AppNavigation;
