import Button from "./Button";

const ButtonGroup = ( {
  handleMarkAllComplete,
  handleMarkAllIncomplete,
  handleReset,
  handleRemoveAll,
} ) => {
  const buttons = [
    {
      text: 'Mark all as complete',
      onClick: handleMarkAllComplete,
    },
    {
      text: 'Mark all as incomplete',
      onClick: handleMarkAllIncomplete,
    },
    {
      text: 'Reset',
      onClick: handleReset,
    },
    {
      text: 'Remove all items',
      onClick: handleRemoveAll,
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
