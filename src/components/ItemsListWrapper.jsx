import { useItemsContext } from '../lib/hooks';
import ItemList from './item-list/ItemList';
import EmptyView from './item-list/EmptyView';

const ItemsListWrapper = () => {
  const {
    items,
  } = useItemsContext();

  return (
    <>
      { items.length > 0 ? <ItemList /> : <EmptyView /> }
    </>
  );
}

export default ItemsListWrapper;
