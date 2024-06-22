import { Heading, VStack, SectionList, Text } from '@gluestack-ui/themed';

import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';
import { useState } from 'react';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '26.06.24',
      data: ['Puxada frontal', 'Remada unilateral']
    },
    {
      title: '25.06.24',
      data: ['Puxada frontal',]
    }
  ]);

  return (
    <VStack flex={1} bg="$trueGray700">
      <ScreenHeader title="Histórico de Exercícios" />
      
      <SectionList 
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color="$trueGray200" fontSize="$md" mt="$10" mb="$3">
            {section.title}
          </Heading>
        )}
        px="$8"
        ListEmptyComponent={() => (
          <Text color="$trueGray100" textAlign="center" mt="$16">
            Não há exercícios registrados ainda. {'\n'}
            Vamos começar hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}