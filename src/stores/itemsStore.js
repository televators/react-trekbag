import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultItems } from "../lib/constants";

export const useItemStore = create(
  persist( ( set ) => ( {
    items: defaultItems,
    addItem: ( newItem ) => {
      set( state => ( { items: [...state.items, newItem] } ) );
    },
    checkItem: ( id ) => {
      set( state => {
        const newItems = state.items.map( item => {
          if ( item.id === id ) {
            return { ...item, packed: ! item.packed };
          }

          return item;
        } );

        return { items: newItems };
      } );
    },
    deleteItem: ( id ) => {
      set( state => {
        const newItems = state.items.filter( item => item.id !== id );

        return { items: newItems };
      } );
    },
    markAllComplete: () => {
      set( state => {
        const newItems = state.items.map( item => ( { ...item, packed: true } ) );

        return { items: newItems };
      } );
    },
    markAllIncomplete: () => {
      set( state => {
        const newItems = state.items.map( item => ( { ...item, packed: false } ) );

        return { items: newItems };
      } );
    },
    resetItems: () => {
      set( () => ( { items: defaultItems } ) );
    },
    removeAllItems: () => {
      set( () => ( { items: [] } ) );
    },
  } ), { name: 'items' } )
);
