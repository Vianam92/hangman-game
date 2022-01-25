const InputLabel = (props) => {

  const handleChangeInput = (eve) => {
    //escucho la letra de la usuaria
    props.handlerInput(eve.currentTarget.value);
};
  return (
    <>
      <label className="title" htmlFor="last-letter">
        Escribe una letra:
      </label>
      <input
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type={props.inputType}
        name="last-letter"
        id="last-letter"
        onChange={handleChangeInput}
        value={props.value}
      />
    </>
  );
};

InputLabel.defaultProps = {
  inputType: 'text'
};
export default InputLabel;
