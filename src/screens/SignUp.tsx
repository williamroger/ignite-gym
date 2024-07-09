import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Center, Text, Heading, ScrollView } from '@gluestack-ui/themed';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail.').email('e-mail inválido.'),
  password: yup.string().required('Informe a senha.').min(6, 'a senha deve ter pelo menos 6 caractéres.'),
  password_confirm: yup.string().required('Confirme a sua senha.').oneOf([yup.ref('password'), null], 'A confirmação de senha não conferem.'),
});

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });
  
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp({ name, email, password, password_confirm, }: FormDataProps) {
    console.log('data: ', { name, email, password, password_confirm });
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
                  errorMessage={errors.name?.message}
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
                  errorMessage={errors.email?.message}
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
                  errorMessage={errors.password?.message}
                  textContentType="oneTimeCode"
                  autoCorrect={false}
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
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                  errorMessage={errors.password_confirm?.message}
                />
              )}
            />

            <Button title="Criar e cessar" onPress={handleSubmit(handleSignUp)} />

            <Center mt="$12">
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