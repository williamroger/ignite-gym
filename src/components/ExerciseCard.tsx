import { HStack, Heading, Image, VStack, Text, Icon } from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="$trueGray500" alignItems="center" p="$2" pr="$4" rounded="$md" mb="$3">
        <Image 
          source={{ uri: 'https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg'}}
          alt="Imagem do exercício"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize="$lg" color="$white" fontFamily="$heading">
            Puxada unilateral
          </Heading>
          <Text fontSize="$sm" color="$trueGray200" mt="$1" numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon 
          as={Entypo}
          name="chevron-thin-right"
          color="$trueGray300"
        />
      </HStack>
    </TouchableOpacity>
  );
}