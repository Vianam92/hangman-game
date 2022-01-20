const ErrorLetters = (props) => {
  const renderErrorLetters = () =>{
    const filter = props.userLetters.filter(x => props.word.includes(x) === false);
    return filter.map((wordLetter, index) => {
      return <li key={index} className="letter">
        <small>{wordLetter}</small>
      </li>
    })
  };
    return <div className="error">
    <h2 className="title">Letras falladas:</h2>
    <ul className="letters">
      {renderErrorLetters()}
    </ul>
  </div>
}


export default ErrorLetters;