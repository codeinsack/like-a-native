export function useAddRow(props: any, emit: any) {
  const changeItemsData = (targetValue: string, targetIndex: number) => {
    const updatedItemsData = props.items.map((value, index) =>
      index === targetIndex ? targetValue : value
    );
    emit('itemsDataChanged', updatedItemsData);
  };

  return {
    changeItemsData,
  };
}
