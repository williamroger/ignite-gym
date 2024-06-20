import { useState } from 'react';
import { VStack, FlatList, HStack, Heading, Text } from '@gluestack-ui/themed';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {
  const [groups, setGroups] = useState(['costas', 'bíceps', 'tríceps', 'ombro']);
  const [groupSelected, setGroupSelected] = useState('costas');
  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terra']);
  return (
    <VStack flex={1} bg="$trueGray700">
      <HomeHeader />

      <FlatList 
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLowerCase() === String(item).toLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        my="$10"
        ml="$8"
        maxHeight="$10"
      />

      <VStack flex={1} px="$8">
        <HStack justifyContent="space-between" alignItems="center" mb="$3">
          <Heading color="$trueGray200" fontSize="$md">
            Exercícios
          </Heading>
          <Text color="$trueGray200" fontSize="$sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList 
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard />
          )}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </VStack>
  );
}