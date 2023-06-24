import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';

const stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <stack.Navigator>
            <stack.Screen name ="LoginPage" component={LoginPage} options={{headerShown: false}} />
            <stack.Screen name ="RegisterPage" component={RegisterPage} options={{headerShown: false}} />
            <stack.Screen name ="ForgetPasswordPage" component={ForgetPasswordPage} options={{headerShown: false}} />
        </stack.Navigator>
    );
}