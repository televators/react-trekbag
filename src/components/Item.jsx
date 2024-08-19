const Item = ( { item, onCheckItem, onDeleteItem } ) => {
  return (
    <li className='item'>
      <label htmlFor={ item.id }>
        <input
          type='checkbox'
          id={ item.id }
          checked={ item.packed }
          onChange={ () => onCheckItem( item.id ) }
        />
        { item.text }
      </label>

      <button onClick={ onDeleteItem }>❌</button>
    </li>
  );
};

export default Item;
