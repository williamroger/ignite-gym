import { Button as GluestackButton, ButtonText, } from '@gluestack-ui/themed';
import { PressableProps } from 'react-native';

type ButtonProps = PressableProps & {
  title: string;
  variant?: 'solid' | 'outline';
} 

export function Button({ title, variant = 'solid', ...rest }: ButtonProps) {
  return (
    <GluestackButton 
      w="$full"
      h="$14"
      variant={variant}
      // bg="$green700"
      {...rest}
    >
      <ButtonText
        color="$white"
        fontFamily="$heading"
        fontSize="$sm"
      >
        {title}
      </ButtonText>
    </GluestackButton>
  );
}