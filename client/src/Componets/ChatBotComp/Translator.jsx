import React, { useState } from "react";
import { FaLanguage, FaExchangeAlt, FaCopy } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Translator = () => {
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
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

  const handleTranslate = () => {
    if (!inputText.trim()) {
      setTranslatedText("");
      return;
    }
    setTranslatedText(`${inputText} \n Language:${toLanguages.find(lang => lang.code === targetLanguage)?.name})`)
  };

  const handleSwapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setTranslatedText("");
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClearText = () => {
    setInputText("");
    setTranslatedText("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <FaLanguage className="mx-auto h-12 w-12 text-blue-500" />
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Language Translator</h2>
          <p className="mt-2 text-gray-600">Translate text between multiple languages instantly</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <select
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
              className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {fromLanguages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleSwapLanguages}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaExchangeAlt className="h-6 w-6 text-blue-500" />
            </button>

            <select
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
              className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {toLanguages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <div className="relative mb-6">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to translate..."
              className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
            {inputText && (
              <button
                onClick={handleClearText}
                className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <IoMdClose className="h-5 w-5 text-gray-500" />
              </button>
            )}
          </div>

          <button
            onClick={handleTranslate}
            disabled={!inputText.trim()}
            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            Translate
          </button>

          {translatedText && (
            <div className="relative p-4 border border-gray-300 rounded-lg bg-gray-50">
              <p className="text-gray-900 mb-2">{translatedText}</p>
              <button
                onClick={() => handleCopyText(translatedText)}
                className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-200 transition-colors"
                title="Copy to clipboard"
              >
                <FaCopy className="h-5 w-5 text-gray-500" />
              </button>
              {isCopied && (
                <span className="absolute bottom-2 right-2 text-sm text-green-600">
                  Copied!
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Translator;