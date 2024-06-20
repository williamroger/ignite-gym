import { HStack, Heading, VStack, Text } from "@gluestack-ui/themed";

export function HistoryCard() {
  return (
    <HStack 
      w="$full" 
      px="$5" 
      py="$4" 
      mb="$3" 
      bg="$trueGray600" 
      rounded="$md" 
      alignItems="center" 
      justifyContent="space-between"
    >
      <VStack>
        <Heading color="white" fontSize="$md" textTransform="capitalize">
          Costas
        </Heading>
        <Text color="$trueGray100" fontSize="$lg" numberOfLines={2}>
          Puxada frontal
        </Text>
      </VStack>
      <Text color="$trueGray300" fontSize="$md">
        08:53
      </Text>
    </HStack>
  );
}