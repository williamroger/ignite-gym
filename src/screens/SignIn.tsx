import { VStack, Image, Center, Text, Heading, ScrollView } from '@gluestack-ui/themed';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn() {
  return (
    <>
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        showsVerticalScrollIndicator={false} 
      >
        <VStack flex={1} bg="$trueGray700" pb="$16">
          <Image 
            source={BackgroundImg}
            size="full"
            alt="Pessoas treinando em uma academia"
            resizeMode="contain"
            position="absolute"
            top="-$1/4"
          />
          <Center my="$24">
            <LogoSvg />
            <Text color="$trueGray100" size="sm">Treine sua mente e o seu corpo</Text>
          </Center>

          <Center>
            <Heading 
              color="$trueGray100" 
              size="xl" 
              mb="$6" 
              fontFamily="$heading"
            >
              Acesse sua conta
            </Heading>
          </Center>
          <VStack px="$10">
            <Input 
              placeholder="E-mail" 
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input 
              placeholder="Senha" 
              secureTextEntry
            />

            <Button title="Acessar" />

            <Center mt="$24">
              <Text 
                color="$trueGray100" 
                fontSize="$sm" 
                mb="$3" 
                fontFamily="$body">
                  Ainda não tenho acesso
              </Text>

              <Button title="Criar conta" variant="outline" />
            </Center>
          </VStack>
        </VStack>
      </ScrollView>
    </>
  );
}