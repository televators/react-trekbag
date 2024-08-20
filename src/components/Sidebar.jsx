import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsProvider";
import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

const Sidebar = () => {
  const {
    handleAddItem,
    handleMarkAllComplete,
    handleMarkAllIncomplete,
    handleReset,
    handleRemoveAll,
  } = useContext( ItemsContext );

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={ handleAddItem } />

      <ButtonGroup
        onMarkAllComplete={ handleMarkAllComplete }
        onMarkAllIncomplete={ handleMarkAllIncomplete }
        onReset={ handleReset }
        onRemoveAll={ handleRemoveAll }
      />
    </div>
  );
}

export default Sidebar;
