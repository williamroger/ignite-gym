import { PressableProps } from 'react-native';
import { Text, Pressable } from '@gluestack-ui/themed';

type Props = PressableProps & {
  name: string;
  isActive: boolean;
 }

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable 
      mr="$3" 
      w="$24"
      h="$10"
      bg="$trueGray600" 
      rounded="$md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      {...rest}
    >
      <Text 
        color={isActive ? "$green500" : "$trueGray300"}
        textTransform="uppercase"
        fontSize="$xs"
        fontFamily="$heading"
      >
        {name}
      </Text>
    </Pressable>
  );
}