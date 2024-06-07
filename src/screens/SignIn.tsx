import { VStack, Image } from '@gluestack-ui/themed';

import BackgroundImg from '@assets/background.png';


export function SignIn() {
  return (
    <VStack flex={1}>
      <Image 
        source={BackgroundImg}
        alt="Pessoas treinando em uma academia"
      />
    </VStack>
  );
}