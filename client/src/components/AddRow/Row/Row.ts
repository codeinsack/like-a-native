export function useRow(emit: any) {
  const changeValue = (value: string) => {
    emit('valueChanged', value);
  };

  return {
    changeValue,
  };
}
