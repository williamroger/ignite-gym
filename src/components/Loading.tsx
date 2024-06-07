import { Spinner, Center } from '@gluestack-ui/themed';

export function Loading() {
  return (
    <Center flex={1} bg="$trueGray700" >
      <Spinner color="$green500" />
    </Center>
  );
}