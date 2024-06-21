import { TouchableOpacity } from 'react-native';
import { VStack, Text, ScrollView, Center, Heading } from '@gluestack-ui/themed';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function Profile() {
  return (
    <VStack flex={1} bg="$trueGray700">
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt="$6" px="$10">
          <UserPhoto 
            imageUrl={'https://avatars.githubusercontent.com/u/3818294?v=4'}
            size="2xl" 
          />
          <TouchableOpacity>
            <Text 
              color="$green500" 
              fontFamily="$heading" 
              fontSize="$md" 
              mt="$2" 
              mb="$8"
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input 
            placeholder="Nome"
            bg="$trueGray600"
            border={0}
          />

          <Input
            value="williamroger@studius.app"
            bg="$trueGray600"
            border={0}
            isDisabled
          />
        </Center>

        <VStack px="$10" mt="$12" mb="$9">
          <Heading color="$trueGray200" fontSize="$md" mb="$2">
            Alterar senha
          </Heading>

          <Input
            placeholder="Senha antiga"
            bg="$trueGray600"
            border={0}
            secureTextEntry
          />

          <Input
            placeholder="Nova senha"
            bg="$trueGray600"
            border={0}
            secureTextEntry
          />

          <Input
            placeholder="Confirmar nova senha"
            bg="$trueGray600"
            border={0}
            secureTextEntry
          />

          <Button title="Atualizar" mt="$4" />
        </VStack>
      </ScrollView>
    </VStack>
  );
}