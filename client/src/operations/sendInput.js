import axios from "axios"


export default async function sendInput(langData){
  try{
    const res = axios.post('https//:localhost8080/DEMO_API',langData)
    console.log(res)
  }catch(error){
    console.log('Erroro to send input :' ,error)
  }
}