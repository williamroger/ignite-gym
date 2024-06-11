import { Input as GluestackInput, InputField } from '@gluestack-ui/themed';
import { TextInputProps } from 'react-native';

export function Input({ ...rest }: TextInputProps) {
  return (
    <GluestackInput 
      bg="$trueGray700"
      h="$14"
      px="$1"
      mb="$4"
      variant="outline"
      >
      <InputField 
        fontSize="$md"
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$trueGray300"
        {...rest}
      />
    </GluestackInput>
  );
}