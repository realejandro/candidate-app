import { useContext, useEffect, useState } from 'react'
import Candidate from '../interfaces/Candidate.interface';
import { Card } from './Card'
import CandidateContext from './CandidateContext';


export const CandidateComponent = () => {

  const [candidate, setCandidate ] =  useState<Candidate>({
    login: '',
    location: '',
    email: '',
    company: '',
    bio: '',
    avatar_url: ''
  });

  const { currentPosition, candidateArray } = useContext(CandidateContext);
  
  useEffect(() => {
    
    if(candidateArray && candidateArray.length > 0) {
      const { login, location, email, company, bio, avatar_url } = candidateArray[currentPosition]
      setCandidate({ login, location, email, company, bio, avatar_url })
      console.log(currentPosition) 
    }
     
  }, [currentPosition, candidateArray])
  
  
  return (
      <Card
        key={ candidate.login }
        login={ candidate.login }
        location={ candidate.location }
        email={ candidate.email }
        company={candidate.company}
        bio={ candidate.bio }
        avatar_url={ candidate.avatar_url }
      />    
  )
}
