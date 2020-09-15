import selectEntries from '../../selectors/entries';
import entries from '../fixtures/entries';

test('should filter by text value', () => {
  const filters = {
    text: 'an',
  };
  const result = selectEntries(entries, filters);
  expect(result).toEqual([entries[0], entries[1]]);
});

test('should order by most recent to oldest', () => {
  const filters = {
    text: '',
  };
  const result = selectEntries(entries, filters);
  expect(result).toEqual([entries[2], entries[0], entries[1]]);
});
