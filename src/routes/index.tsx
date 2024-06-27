import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

import { Box } from '@gluestack-ui/themed';

export function Routes() {
  return (
    <Box flex={1} bg="$trueGray700">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}