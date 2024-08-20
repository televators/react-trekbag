import Button from "./Button";

const ButtonGroup = ( {
  onMarkAllComplete,
  onMarkAllIncomplete,
  onReset,
  onRemoveAll,
} ) => {
  const buttons = [
    {
      text: 'Mark all as complete',
      onClick: onMarkAllComplete,
    },
    {
      text: 'Mark all as incomplete',
      onClick: onMarkAllIncomplete,
    },
    {
      text: 'Reset',
      onClick: onReset,
    },
    {
      text: 'Remove all items',
      onClick: onRemoveAll,
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
