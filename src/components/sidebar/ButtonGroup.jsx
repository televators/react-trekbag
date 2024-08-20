import { useItemStore } from "../../stores/itemsStore";
import Button from "./Button";

const ButtonGroup = () => {
  const markAllComplete = useItemStore( ( state ) => state.markAllComplete );
  const markAllIncomplete = useItemStore( ( state ) => state.markAllIncomplete );
  const resetItems = useItemStore( ( state ) => state.resetItems );
  const removeAllItems = useItemStore( ( state ) => state.removeAllItems );

  const buttons = [
    {
      text: 'Mark all as complete',
      onClick: markAllComplete,
    },
    {
      text: 'Mark all as incomplete',
      onClick: markAllIncomplete,
    },
    {
      text: 'Reset',
      onClick: resetItems,
    },
    {
      text: 'Remove all items',
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      { buttons.map( ( button ) => {
        return (
          <Button
            key={ button.text + button.onClick.toString() }
            onClick={ button.onClick }
          >
            { button.text }
          </Button>
        );
      } ) }
    </section>
  );
}

export default ButtonGroup;
