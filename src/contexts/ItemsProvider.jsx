import { createContext, useEffect, useState } from 'react';
import { defaultItems } from '../lib/constants.js';

export const ItemsContext = createContext();

const ItemsProvider = ( { children } ) => {
  const [items, setItems] = useState( () => JSON.parse( localStorage.getItem( 'items' ) ) || defaultItems );

  //#region Event handlers
  const handleAddItem = ( newItem ) => {
    setItems( ( prev ) => [...prev, newItem] );
  };

  const handleCheckItem = ( id ) => {
    const newItems = items.map( ( item ) => {
      if ( item.id === id ) {
        return { ...item, packed: ! item.packed };
      }

      return item;
    } );

    setItems( newItems );
  };

  const handleDeleteItem = ( id ) => {
    const newItems = items.filter( ( item ) => item.id !== id );
    setItems( newItems );
  };

  const handleMarkAllComplete = () => {
    setItems( ( prev ) => prev.map( ( item ) => ( { ...item, packed: true } ) ) );
  };

  const handleMarkAllIncomplete = () => {
    setItems( ( prev ) => prev.map( ( item ) => ( { ...item, packed: false } ) ) );
  };

  const handleReset = () => {
    setItems( defaultItems );
  };

  const handleRemoveAll = () => {
    setItems( [] );
  };
  //#endregion

  useEffect( () => {
    localStorage.setItem( 'items', JSON.stringify( items ) );
  }, [items] );

  return (
    <ItemsContext.Provider value={ {
      items,
      handleAddItem,
      handleCheckItem,
      handleDeleteItem,
      handleMarkAllComplete,
      handleMarkAllIncomplete,
      handleReset,
      handleRemoveAll,
    } }>
      { children };
    </ItemsContext.Provider>
  );
}

export default ItemsProvider;
