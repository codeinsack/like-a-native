export function useRow(emit: any) {
  const changeValue = (value: string) => {
    emit('rowValueChanged', value);
  };

  return {
    changeValue,
  };
}
