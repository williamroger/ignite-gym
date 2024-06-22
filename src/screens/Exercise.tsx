import { HStack, Heading, Icon, VStack, Text, Image, Box, ScrollView } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';

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
      <ScrollView>
        <VStack p="$8">
          <Image 
            source={{ uri: 'https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg' }}
            w="$full"
            h="$80"
            alt="Nome do exercício"
            mb="$3"
            resizeMode="cover"
            rounded="$lg"
          />

          <Box bg="$trueGray600" rounded="$md" pb="$4" px="$4">
            <HStack justifyContent="space-between" alignItems="center" mb="$6" mt="$5">
              <HStack>
                <SeriesSvg />
                <Text color="$trueGray200" ml="$2">3 séries</Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color="$trueGray200" ml="$2">12 repetições</Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}