import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsProvider";
import ItemList from './ItemList';
import EmptyView from './EmptyView';

const ItemsListWrapper = () => {
  const {
    items,
  } = useContext( ItemsContext );

  return (
    <>
      { items.length > 0 ? <ItemList /> : <EmptyView /> }
    </>
  );
}

export default ItemsListWrapper;
