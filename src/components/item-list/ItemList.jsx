import { useMemo, useState } from "react";
import { useItemStore } from "../../stores/itemsStore";
import { selectOptions } from "../../lib/constants";
import Select from 'react-select';
import Item from "./Item";

const ItemList = () => {
  const [sortBy, setSortBy] = useState( 'default' );

  const items = useItemStore( state => state.items );
  const checkItem = useItemStore( state => state.checkItem );
  const deleteItem = useItemStore( state => state.deleteItem );

  const sortedItems = useMemo( () => [...items].sort( ( a, b ) => {
    if ( sortBy === 'packed' ) {
      return b.packed - a.packed;
    } else if ( sortBy === 'unpacked' ) {
      return a.packed - b.packed;
    } else {
      return;
    }
  } ), [items, sortBy] );

  return (
    <ul>
      { ( items.length > 1 ) && (
        <section className="sorting">
          <Select
            defaultValue={ selectOptions[0] }
            options={ selectOptions }
            onChange={ ( option ) => setSortBy( option.value ) }
          />
        </section>
      ) }

      { sortedItems.map( ( item ) => {
        return (
          <Item
            key={ item.id }
            item={ item }
            onCheckItem={ checkItem }
            onDeleteItem={ () => deleteItem( item.id ) }
          />
        );
      } ) }
    </ul>
  );
}

export default ItemList;
