const Button = ( { children, isPrimary = false, onClick } ) => {
  return (
    <button
      className={ `btn ${ ! isPrimary ? 'btn--secondary' : '' }` }
      onClick={ onClick }
    >
      { children }
    </button>
  );
}

export default Button;
