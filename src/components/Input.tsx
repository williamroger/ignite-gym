import { Input as GluestackInput, InputField, Text, VStack } from '@gluestack-ui/themed';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  bg?: string;
  border?: 1 | 0;
  isDisabled?: boolean;
  errorMessage?: string | null;
}

export function Input({ bg = '$trueGray700', border = 1, isDisabled, errorMessage = null, ...rest }: Props) {
  return (
    <VStack mb="$4">
      <GluestackInput 
        bg={bg}
        h="$14"
        px="$1"
        mb="$1"
        variant="outline"
        borderWidth={border}
        isDisabled={isDisabled}
        >
        <InputField 
          fontSize="$md"
          color="$white"
          fontFamily="$body"
          placeholderTextColor="$trueGray300"
          {...rest}
        />
      </GluestackInput>
      <Text color="$white">
        {errorMessage}
      </Text>
    </VStack>
  );
}