import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Heading, VStack, HStack, Icon } from '@gluestack-ui/themed';

import { UserPhoto } from '@components/UserPhoto';

export function HomeHeader() {
  return (
    <HStack bg="$trueGray600" pt="$16" pb="$5" px="$8" alignItems="center">
      <UserPhoto 
        imageUrl={'https://avatars.githubusercontent.com/u/3818294?v=4'}
        size="md" 
      />
      <VStack flex={1}>
        <Text color="$trueGray100" fontSize="$md">
          Olá,
        </Text>
        <Heading color="$trueGray100" fontSize="$md">
          William
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon 
          as={MaterialIcons}
          name="logout"
          color="$trueGray200"
          w="$7"
          h="$7"
        />
      </TouchableOpacity>
    </HStack>
  );
}