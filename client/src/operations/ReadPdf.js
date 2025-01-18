import fs from 'fs'
import pdf from 'pdf-parse'
import sendInput from './sendInput';


export default async function readPdf(filePath){
   try{
     // Read the PDF file into a buffer
     const dataBuffer = fs.readFileSync(filePath);
   
      // Parse the PDF and extract text using await
     const data = await pdf(dataBuffer);
     
     sendInput(data.text);

   }catch(error){
    console.error('Error extracting text from PDF:', error);
   }
}
