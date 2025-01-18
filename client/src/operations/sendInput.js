import axios from "axios"


export default async function sendInput(langData){
  console.log("langData",langData)
  const object={
    inputValue:langData,
  }
  try{
    const res = await axios.post('http://localhost:3003/api/v1/langflow/run-flow',object)
    console.log("RESPONSE : ",res)
    return 'HELLO'
  }catch(error){
    console.log('Erroro to send input :' ,error)
  }
}