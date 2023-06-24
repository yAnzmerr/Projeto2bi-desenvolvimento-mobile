import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from '../pages/MoviesPage';
import MoviesDetailsPage from '../pages/MoviesDetailsPage';

const stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
       <stack.Navigator>
        <stack.Screen name='MoviesPage' component={MoviesPage} options={{ headerShown: false}} />
        <stack.Screen name='MoviesDetailsPage' component={MoviesDetailsPage} />
       </stack.Navigator>
    )
}