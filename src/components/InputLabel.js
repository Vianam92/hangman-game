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
        type="text"
        name="last-letter"
        id="last-letter"
        onChange={handleChangeInput}
        value={props.value}
      />
    </>
  );
};

export default InputLabel;
