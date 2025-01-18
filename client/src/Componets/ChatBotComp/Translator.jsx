import React, { useRef, useState } from "react";
import { FaLanguage, FaExchangeAlt, FaCopy } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import sendInput from "../../operations/sendInput";
import { MdAddLink } from "react-icons/md";
import { useForm } from 'react-hook-form';

const Translator = () => {
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [res, setRes] = useState(null);
  let inputText = useRef("");
  const [isCopied, setIsCopied] = useState(false);

  const fromLanguages = [{ code: "en", name: "English" }]
  const toLanguages = [
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "zh", name: "Chinese" },
  ];

  const handleTranslate = () => {
    let langData = inputText.current.value.trim();
    if (langData !== '') {
      console.log(langData)
      // const response = sendInput(langData);
      setRes(langData);
    } else {
      return;
    }
  };


  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClearText = () => {
    inputText.current.value = '';
    setRes("");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Submit login form
  const onSubmit = async (data) => {
    if(data.textData!==''){
      const response = sendInput(data.textData);
      setRes(response)
    }else{
      return ;
    }
  }
    return ( 
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Section 1 */}
          <div className="text-center mb-8">
            <FaLanguage className="mx-auto h-12 w-12 text-blue-500" />
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Language Translator</h2>
            <p className="mt-2 text-gray-600">Translate text between multiple languages instantly</p>
          </div>

          {/*----------- Section -2  ----------- */}
          <div className="bg-white rounded-lg shadow-lg p-6">


            {/* form */}
            <form className="" onSubmit={handleSubmit(onSubmit)}>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">

                {/* //Select lanuage to tranlate */}
                <select
                  name="targetLang"
                  className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2"
                  {...register("targetLang", { required: true })}
                >
                  <option value="">Select language</option>
                  {toLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Input from */}
              <div className="border-2 h-45 p-2 rounded-lg border-gray-800">
                <textarea
                  placeholder="Enter text to translate..."
                  name="textData"

                  className="w-full h-30 p-3 focus:ring-0 focus:outline-none"
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
                      accept=".pdf,video/*"
                      className="hidden"
                      name="fileData"
                      {...register("fileData")}
                    />
                  </div>

                  <div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Translate</button>
                  </div>

                </div>
              </div>

            </form>


            {/* Output from */}
            {res !== null ?
              <textarea
                value={res}
                placeholder=" translate..."
                className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              /> :
              null}

          </div>
          {/* Section -2 end--------- */}


        </div>
      </div>
    );
  };

  export default Translator;