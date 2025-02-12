import { useEffect, useState } from "react";
import { CandidateTable } from "../components/CandidateTable";
import Candidate from "../interfaces/Candidate.interface";



const SavedCandidates = () => {
  
  const [ candidateData, setCandidateData] = useState<Candidate[]>([]);

  useEffect(() => {
    console.log(candidateData)
  },[candidateData])

  useEffect( () => {
    const localData = JSON.parse(localStorage.getItem('candidateList') || '[]')
    setCandidateData(localData);
  },[])
  

  return (  
      <div>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        {
            candidateData.map( ( candidate ) => {
              console.log(candidate)
              return(
                <CandidateTable
                  key={ candidate.login }
                  { ...candidate } 
                />
              )
            })
          }
      </table>
    </div>
  );
};

export default SavedCandidates;
