export function useAddRow(props: any, emit: any) {
  const updateItems = (targetValue: string, targetIndex: number) => {
    const updatedItemsData = props.items.map((value, index) =>
      index === targetIndex ? targetValue : value
    );
    emit('itemsUpdated', updatedItemsData);
  };

  const addItem = () => {
    const updatedItemsData = props.items.concat('');
    emit('itemsUpdated', updatedItemsData);
  };

  const deleteItem = (targetIndex: number) => {
    const updatedItemsData = props.items.filter((value, index) => index !== targetIndex);
    emit('itemsUpdated', updatedItemsData);
  };

  return {
    updateItems,
    addItem,
    deleteItem,
  };
}
