import { Avatar, AvatarImage } from '@gluestack-ui/themed';

type Props = {
  size: 'md' | '2xl';
  imageUrl: string;
}

export function UserPhoto({ size, imageUrl }: Props) {
  return (
    <Avatar size={size} borderWidth="$2" borderColor="$trueGray400" mr="$4">
      <AvatarImage source={{ uri: imageUrl }} alt="Imagem do usuário" />
    </Avatar>
  );
}