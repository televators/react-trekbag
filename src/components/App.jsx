import { useEffect, useState } from 'react';
import { defaultItems } from '../lib/constants.js';
import BackgroundHeading from './BackgroundHeading';
import Header from './Header';
import ItemList from './ItemList';
import EmptyView from './EmptyView';
import Sidebar from './Sidebar';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState( () => JSON.parse( localStorage.getItem( 'items' ) ) || defaultItems );

  useEffect( () => {
    localStorage.setItem( 'items', JSON.stringify( items ) );
  }, [items] );

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

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header items={ items } />

        { items.length > 0 ? (
          <ItemList
            items={ items }
            handleCheckItem={ handleCheckItem }
            handleDeleteItem={ handleDeleteItem }
          />
        ) : (
          <EmptyView />
        ) }

        <Sidebar
          handleAddItem={ handleAddItem }
          handleMarkAllComplete={ handleMarkAllComplete }
          handleMarkAllIncomplete={ handleMarkAllIncomplete }
          handleReset={ handleReset }
          handleRemoveAll={ handleRemoveAll }
        />
      </main>

      <Footer />
    </>
  )
}

export default App
