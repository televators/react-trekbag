import ItemList from './item-list/ItemList';
import EmptyView from './item-list/EmptyView';
import { useItemStore } from '../stores/itemsStore';

const ItemsListWrapper = () => {
  const items = useItemStore( state => state.items );

  return (
    <>
      { items.length > 0 ? <ItemList /> : <EmptyView /> }
    </>
  );
}

export default ItemsListWrapper;
