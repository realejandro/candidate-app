
import { useEffect, useState } from 'react';
import { CandidateComponent } from '../components/CandidateComponent';
import CandidateContext from '../components/CandidateContext';
import { searchGithub } from '../api/API';


const CandidateSearch = () => {
  const [ result, setResult ] = useState([])
  const [ candidateUsername, setCandidateUsername ] = useState('');
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect( () => {
      searchGithub().then( data => {
        setResult(data);
        setCandidateUsername(data[currentPosition].login)
        if(data && data.length > 0) {
          setCurrentPosition(0)
        }
      });  
    }, [])
  
    console.log(candidateUsername)
  return (
    <div>
      <h1>CandidateSearch</h1>
      <CandidateContext.Provider value={{ currentPosition, setCurrentPosition, candidateArray:result }}>
        <CandidateComponent />
      </CandidateContext.Provider>
    </div>
    );
};

export default CandidateSearch;
