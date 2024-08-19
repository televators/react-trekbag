import { useMemo, useState } from "react";
import { selectOptions } from "../lib/constants";
import Item from "./Item";
import Select from 'react-select';

const ItemList = ( { items, handleCheckItem, handleDeleteItem } ) => {
  const [sortBy, setSortBy] = useState( 'default' );

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
            onCheckItem={ handleCheckItem }
            onDeleteItem={ () => handleDeleteItem( item.id ) }
          />
        );
      } ) }
    </ul>
  );
}

export default ItemList;
