"use server"

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import dbConnect from "./db";



export async function RegisterUser( prevState: string | undefined,
    formData: FormData) {
    try {
        await dbConnect()
        
        const {username, email, password, signature} =  Object.fromEntries(formData);


        console.log(username)



        redirect("/login")
    
    } catch (error) {
        console.log(error)
        return "sorry cant seem to register user"
    }
}


export async function AuthenticateUser( prevState: string | undefined,
    formData: FormData) {
    try {
        
        const { email, password, signature} =  Object.fromEntries(formData);


        console.log(email)

        

        redirect("/login")
    
    } catch (error) {
        console.log(error)
        return "sorry cant seem to register user"
    }
}