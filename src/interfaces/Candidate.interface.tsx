// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    login:string,
    location: string, 
    email: string, 
    company: string, 
    bio: string,
    avatar_url: string,
    goNext ?: (data:number) => void | undefined;
}