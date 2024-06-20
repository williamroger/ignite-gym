import { useState } from 'react';
import { VStack, FlatList } from '@gluestack-ui/themed';
import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';

export function Home() {
  const [groups, setGroups] = useState(['costas', 'bíceps', 'tríceps', 'ombro']);
  const [groupSelected, setGroupSelected] = useState('costa');
  return (
    <VStack flex={1} bg="$trueGray700">
      <HomeHeader />

      <FlatList 
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        my="$10"
        mx="$8"
        maxHeight="$10"
      />
    </VStack>
  );
}