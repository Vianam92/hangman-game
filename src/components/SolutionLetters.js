let wordLetters;
const SolutionLetters = (props) => {
  const renderSolutionLetters = () =>{
    wordLetters = props.word.split('');
     return wordLetters.map((wordLetter,index) => {
       return <li key={index} className = "letter">
         <small>{props.userLetters.includes(wordLetter)?wordLetter:""}</small>
         </li>
     })
   }
  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
};

export default SolutionLetters;
