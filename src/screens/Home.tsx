import { VStack } from '@gluestack-ui/themed';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
  return (
    <VStack flex={1} bg="$trueGray700">
      <HomeHeader />
    </VStack>
  );
}