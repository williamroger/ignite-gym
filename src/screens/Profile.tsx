import { TouchableOpacity } from 'react-native';
import { VStack, Text, ScrollView, Center, Heading, useToast, Toast, ToastTitle } from '@gluestack-ui/themed';
import * as ImagePicker from 'expo-image-picker';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useState } from 'react';

export function Profile() {
  const [userPhoto, setUserPhoto] = useState('https://avatars.githubusercontent.com/u/3818294?v=4');
  const toast = useToast();
  
  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }
      
      if (photoSelected.assets[0].uri) {
        /* verifica se existe a propriedade fileSize e se o tamanho é maior que 5mb */
        if (photoSelected.assets[0].fileSize && (photoSelected.assets[0].fileSize / 1024 / 1024) > 1) {
          return toast.show({
            placement: 'top',
            render: () => (
              <Toast action="error" variant="accent">
                <ToastTitle>
                  {'Essa imagem é muito grande. Escolha uma imagem de até 5MB.'}
                </ToastTitle>
              </Toast>
            )
          })
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <VStack flex={1} bg="$trueGray700">
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt="$6" px="$10">
          <UserPhoto 
            imageUrl={userPhoto}
            size="2xl" 
          />
          <TouchableOpacity onPress={handleUserPhotoSelect}>
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