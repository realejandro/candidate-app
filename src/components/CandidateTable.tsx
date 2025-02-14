
import Candidate from '../interfaces/Candidate.interface'

export const CandidateTable = ( { login, location, email, company, bio, avatar_url } : Candidate ) => {
  
  const onReject = () => {
    console.log("reject candidate")
  }

  return (
    <tbody>
      <tr>
        <td style={{ alignItems:"center" }}>
          <img src={ avatar_url } style={{ width:"50%",borderRadius: "10%", display:"block", margin: "auto"}}/>
        </td>
        <td>{ login }</td>
        <td>{ location }</td>
        <td>{ email }</td>
        <td>{ company }</td>
        <td>{ bio }</td>
        <td>
          <button onClick={onReject}>reject</button>
        </td>
      </tr>
    </tbody>
  )
}
