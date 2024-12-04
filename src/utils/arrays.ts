type CompareFn<T extends object> = (item: T) => T[keyof T];

export const swapItemsInArray = <T extends object>(
  array: T[],
  item1: T,
  item2: T,
  compareFn: CompareFn<T>
): T[] => {
  const item1Index = array.findIndex(
    (item) => compareFn(item) === compareFn(item1)
  );
  const item2Index = array.findIndex(
    (item) => compareFn(item) === compareFn(item2)
  );
  array[item1Index] = item2;
  array[item2Index] = item1;
  return [...array];
};
