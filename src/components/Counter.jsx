import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsProvider";

const Counter = () => {
  const {
    items,
  } = useContext( ItemsContext );

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
