import { useRef } from "react";
import { v4 as uuid } from 'uuid';
import { useItemStore } from "../../stores/itemsStore";
import Button from "./Button";

const AddItemForm = ( { onAddItem } ) => {
  const addItem = useItemStore( ( state ) => state.addItem );
  const inputRef = useRef();

  const handleSubmit = ( e ) => {
    e.preventDefault();

    const formData = new FormData( e.currentTarget );
    const newItemText = formData.get( 'add-item' );

    if ( ! newItemText ) {
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: uuid(),
      text: newItemText,
      packed: false,
    };

    addItem( newItem );
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="add-item">
        <h2>Add an item</h2>
      </label>

      <input
        id='add-item'
        name='add-item'
        autoFocus
        ref={ inputRef }
      />

      <Button isPrimary={ true }>Add to list</Button>
    </form>
  );
}

export default AddItemForm;
