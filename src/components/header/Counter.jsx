import { useItemStore } from "../../stores/itemsStore";

const Counter = () => {
  const items = useItemStore( ( state ) => state.items );

  const itemCount = items.length;
  let checkedItemCount = 0;

  for ( const item of items ) {
    if ( item.packed === true ) checkedItemCount++;
  }

  return (
    <p className="counter__text">
      <span className="counter__text__numbers">
        <b>{ checkedItemCount }</b>/{ itemCount }
      </span> Packed
    </p>
  );
}

export default Counter;
