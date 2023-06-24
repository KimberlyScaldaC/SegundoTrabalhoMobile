import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPages from '../pages/MoviesPages';
import MovieDetailsPage from '../pages/MovieDetailsPage';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator>      
            <Stack.Screen name='MoviesPage' component={MoviesPages} options={{headerShown: false}}/>
            <Stack.Screen name='MovieDetailsPage' component={MovieDetailsPage}/>      
        </Stack.Navigator>
    );
}