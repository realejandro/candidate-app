import { createContext, Dispatch, SetStateAction } from "react";

interface CandidateInfo {
    currentPosition: number,
    setCurrentPosition?: Dispatch<SetStateAction<number>>,
    candidateArray?: any[] | undefined
}

const CandidateContext = createContext<CandidateInfo>({ currentPosition:0 })


export default CandidateContext;