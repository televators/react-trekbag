import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

const Sidebar = ( {
  handleAddItem,
  handleMarkAllComplete,
  handleMarkAllIncomplete,
  handleReset,
  handleRemoveAll,
} ) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={ handleAddItem } />

      <ButtonGroup
        handleMarkAllComplete={ handleMarkAllComplete }
        handleMarkAllIncomplete={ handleMarkAllIncomplete }
        handleReset={ handleReset }
        handleRemoveAll={ handleRemoveAll }
      />
    </div>
  );
}

export default Sidebar;
