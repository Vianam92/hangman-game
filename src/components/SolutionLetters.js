let wordLetters;
const SolutionLetters = ({userLetters,word}) => {
  const renderSolutionLetters = () =>{
    wordLetters = word.split('');
     return wordLetters.map((wordLetter,index) => {
       return <li key={index} className = "letter">
         <small>{userLetters.includes(wordLetter)?wordLetter:""}</small>
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
