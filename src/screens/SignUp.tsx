import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Center, Text, Heading, ScrollView } from '@gluestack-ui/themed';
import { useForm, Controller } from 'react-hook-form';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp() {
  const { control } = useForm();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp() {
    
  }

  return (
    <>
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        showsVerticalScrollIndicator={false} 
      >
        <VStack flex={1} bg="$trueGray700" pb="$16">
          <Image 
            source={BackgroundImg}
            defaultSource={BackgroundImg}
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
              Crie sua conta
            </Heading>
          </Center>
          <VStack px="$10">
            <Controller 
              control={control}
              name="name"
              render={({ field: { onChange, value }}) => (
                <Input
                  placeholder="Nome"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />  
            
            <Controller 
              control={control}
              name="email"
              render={({ field: { onChange, value }}) => (
                <Input 
                  placeholder="E-mail" 
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />

            <Controller 
              control={control}
              name="password"
              render={({ field: { onChange, value }}) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            
            <Controller 
              control={control}
              name="password_confirm"
              render={({ field: { onChange, value }}) => (
                <Input
                  placeholder="Confirmar senha"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />

            <Button title="Criar e cessar" onPress={handleSignUp} />

            <Center mt="$24">
              <Button 
                title="Voltar para o login" 
                variant="outline" 
                onPress={handleGoBack}
              />
            </Center>
          </VStack>
        </VStack>
      </ScrollView>
    </>
  );
}