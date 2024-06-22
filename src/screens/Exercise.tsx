import { HStack, Heading, Icon, VStack, Text } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg';

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1} bg="$trueGray700">
      <VStack px="$8" bg="$trueGray600" pt="$12">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon 
            as={Feather}
            name="arrow-left"
            color="$trueGray300"
            size="xl"
          />
        </TouchableOpacity>
        <HStack justifyContent="space-between" alignItems="center" mt="$4" mb="$8">
          <Heading color="$trueGray100" fontSize="$lg" flexShrink={1}>
            Puxada frontal
          </Heading>
          <HStack>
            <BodySvg />
            <Text color="$trueGray200" ml="$1" textTransform="capitalize">Costas</Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}