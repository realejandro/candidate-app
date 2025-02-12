import { useContext } from 'react'
import Candidate from '../interfaces/Candidate.interface';
import CandidateContext from './CandidateContext';



export const Card = ( { login, location, email, company, bio, avatar_url } : Candidate ) => {
  
  const { currentPosition, setCurrentPosition, candidateArray } = useContext(CandidateContext);

  const storeLocalData = ( localStorageName : string, newData: Candidate) => {
    const localArray: Candidate[] = JSON.parse(localStorage.getItem(localStorageName) || '[]');
    const result = [...localArray, newData ]
    localStorage.setItem(localStorageName, JSON.stringify(result) )
    
  }
   
  const addCandidate = () => {
    console.log("add to list"); 
    const currentCandidate : Candidate = { login, location, email, company, bio, avatar_url }
    storeLocalData('candidateList', currentCandidate);
    setCurrentPosition?.( currentPosition + 1)
  }

  const deleteCandidate = () => {
    if(candidateArray && candidateArray?.length > 0 ) {
      setCurrentPosition?.(currentPosition - 1);
    }
  }

  return (
    <div className='candidateCard'>
        <article>
            <img src={ avatar_url } style={{width:"100%"}} />
        </article>
        <div>          
          <h2> { login } </h2>
          <p>Location: { location } </p>
          <p>Email: { email } </p>
          <p>company: { company } </p>
          <p>Bio: { bio } </p>
        </div>

        <div className='candidateButtons'>
          <button onClick={deleteCandidate }>-</button>
          <button onClick={addCandidate}>+</button>
        </div>

    </div>
  )
}
