import React, { useRef, useState } from "react";
import { FaLanguage, FaExchangeAlt, FaCopy } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdAddLink } from "react-icons/md";
import { useForm } from 'react-hook-form';
import sendTextInput from '../../operations/sendInput.js'
import Loader from "../Loader.jsx";

const Translator = () => {
  const [fetching, setFetching] = useState(false);
  const [res, setRes] = useState(null);
  let [inputText, setInputText] = useState("")
  const [isCopied, setIsCopied] = useState(false);

  const fromLanguages = [{ code: "en", name: "English" }]
  const toLanguages = [
    { code: "hi", name: "Hindi" },
    { code: "mr", name: "Marathi" },
    { code: "gu", name: "Gujarati" },
    { code: "ta", name: "Tamil" },
    { code: "kn", name: "Kannada" },
    { code: "te", name: "Telugu" },
    { code: "bn", name: "Bengali" },
    { code: "ml", name: "Malayalam" },
    { code: "pa", name: "Punjabi" },
    { code: "or", name: "Odia" }
  ];


  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClearText = () => {
    setRes("");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Submit login form
  const onSubmit = async (data) => {
    console.log(data);
    //TEXT DATA
    if (data.textData !== '') {
      const Data = `${data.textData} \n Language:${data.targetLang})`
      const response = await sendTextInput(Data,setFetching);
      setRes(response)

      // ------- FILE DATA ------------
    } else if (data.fileData.length !== 0) {
      const fileType = data.fileData.type; // Get the MIME type
      const fileName = data.fileData.name;

      if (fileType === 'application/pdf') {
         
      } else if (fileType === 'text/plain') {
        
      } else if (fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {

      } else {
       
      }
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Section 1 */}
        <div className="text-center mb-8">
          <FaLanguage className="mx-auto h-12 w-12 text-teal-500" />
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Language Translator</h2>
          <p className="mt-2 text-gray-600">Translate text between multiple languages instantly</p>
        </div>

        {/*----------- Section -2  ----------- */}
        <div className="bg-white rounded-lg shadow-lg p-3  flex flex-col gap-y-10">


          {/* form */}
          <form className="" onSubmit={handleSubmit(onSubmit)}>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">

              {/* //Select lanuage to tranlate */}
              <select
                name="targetLang"
                className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2"
                {...register("targetLang", { required: true })}
              >
               
                {toLanguages.map((lang) => (
                  <option key={lang.code} value={lang.name}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Input from */}
            <div className="border-2 h-full p-2 rounded-lg border-gray-800">
              <textarea
                placeholder="Enter text to translate..."
                name="textData"

                className="w-full min-h-50 p-3 focus:ring-0 focus:outline-none"
                {...register("textData")}
              />

              {/* Link Icon (PDF or Video) */}
              <div className="w-full flex items-center justify-between px-2">

                <div className="">
                  <label
                    htmlFor="file-upload"
                    className="text-blue-600 hover:text-blue-800 cursor-pointer flex items-center space-x-2"
                  >
                    {/* Example: PDF Icon (you can replace with any icon library like FontAwesome or Heroicons) */}
                    <MdAddLink className="text-[1.5rem]" />
                  </label>

                  {/* Hidden file input */}
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,video,audio/*"
                    className="hidden"
                    name="fileData"
                    {...register("fileData")}
                  />
                </div>

                <div>
                  {fetching?
                  <Loader/>:
                  <button type="submit" class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Translate</button>
                }
                </div>

              </div>
            </div>

          </form>


          {/* Output from */}
          {res !== null ?
            <textarea
              value={res}
              placeholder="translate..."
              className="w-full h-[30vh] p-3 border border-gray-300 rounded-lg"
            /> :
            null}

        </div>
        {/* Section -2 end--------- */}


      </div>
    </div>
  );
};

export default Translator;