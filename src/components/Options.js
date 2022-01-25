const Options = (props) => {
    const onClickPrevent = (eve) =>{
    eve.preventDefault();
    }
    const handleChange = (ev) =>{
        props.handleChange(ev.currentTarget.value);
    };
  return (
    <form onSubmit={onClickPrevent}>
      <label className="title" htmlFor="word">
        Escribe aquí la palabra que hay que adivinar:
      </label>
      <input
        autoFocus
        autoComplete="off"
        className="form__input"
        maxLength="15"
        type={props.inputType}
        id="word"
        name="word"
        onChange={handleChange}
      />
    </form>
  );
};

Options.defaultProps = {
    inputType: 'text'
  };

export default Options;
