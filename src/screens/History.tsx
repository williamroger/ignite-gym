import { VStack } from '@gluestack-ui/themed';
import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';

export function History() {
  return (
    <VStack flex={1} bg="$trueGray700">
      <ScreenHeader title="Histórico de Exercícios" />

      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  );
}