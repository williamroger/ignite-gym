import { Input as GluestackInput, InputField } from '@gluestack-ui/themed';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  bg?: string;
  border?: 1 | 0;
  isDisabled?: boolean;
}

export function Input({ bg = '$trueGray700', border = 1, isDisabled, ...rest }: Props) {
  return (
    <GluestackInput 
      bg={bg}
      h="$14"
      px="$1"
      mb="$4"
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
  );
}