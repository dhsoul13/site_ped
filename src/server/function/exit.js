/* eslint-disable import/prefer-default-export */
import { getAuth, signOut } from "firebase/auth";

export const exit = async({exitHandler, }) =>{
    try{
        const auth = getAuth();
        await signOut(auth).then(()=>{
            exitHandler()
        }).catch((err)=>{
            throw err
        })
    }catch(e){
        console.log(e)
    }
}