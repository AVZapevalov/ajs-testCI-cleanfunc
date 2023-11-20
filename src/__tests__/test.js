import getHealthStatus from '../getHealthStatus';

test('getHealthStatus returns "healthy" when health is greater than 50', () => {
  const result = getHealthStatus({ name: 'Magicain', health: 60 });
  expect(result).toBe('healthy');
});

test('getHealthStatus returns "wounded" when health is between 15 and 50', () => {
  const result = getHealthStatus({ name: 'Лучник', health: 30 });
  expect(result).toBe('wounded');
});

test('getHealthStatus returns "critical" when health is less than 15', () => {
  const result = getHealthStatus({ name: 'Паладин', health: 10 });
  expect(result).toBe('critical');
});
