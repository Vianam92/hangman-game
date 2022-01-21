import InputLabel from "./InputLabel";

const Form = (props) => {
  return (
    <form className="form">
      <InputLabel handlerInput={props.handlerInput} value={props.lastLetter}/>
    </form>
  );
};

export default Form;
