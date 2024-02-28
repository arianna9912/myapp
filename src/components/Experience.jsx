import React from 'react';
import { ReactComponent as TailwindIcon } from './tailwindcss-mark.svg';
import { FaHtml5, FaJs, FaPython, FaVuejs } from 'react-icons/fa';
import translations from '../translations/translation.json';

const Experience = ({language}) => {
    return (

        <section class="bg-purple-100 py-20">


            <div class="container mx-auto px-4">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl mt-auto font-semibold text-gray-700 xl:text-5xl lg:text-3xl mb-4">{translations[language].experience}</h2>

                </div>
                <div class="flex flex-wrap -mx-4 mt-12">
                    <div class="w-full md:w-1/3 px-4 mb-8">
                        <div class="rounded-md bg-white shadow-md p-8">
                            <div class="flex items-center mb-4">
                                <FaJs class="text-4xl text-yellow-400" />
                                <FaVuejs class="text-4xl text-purple-500" />
                                <FaPython class="ml-2 text-4xl text-green-600" />
                            </div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-600">{translations[language].inventory}</h3>
                            <ul class="list-disc pl-6">
                                <li className="text-lg text-gray-700 mb-4">{translations[language].requirements}</li>
                                <li className="text-lg text-gray-700 mb-4">{translations[language].design}</li>
                                <li className="text-lg text-gray-700 mb-4">{translations[language].vue}</li>
                                <li className="text-lg text-gray-700 mb-4">{translations[language].multiple}</li>
                                <li className="text-lg text-gray-700 mb-4"> {translations[language].rest}</li>

                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/3 px-4 mb-8">
                        <div class="rounded-md bg-white shadow-md p-8">
                            <div class="flex items-center mb-4">
                                <FaJs class="text-4xl text-yellow-400" />
                                <FaHtml5 class="text-4xl text-red-500" />
                                <FaPython class="ml-2 text-4xl text-green-600" />
                                <TailwindIcon className="w-8 h-8 ml-4 text-purple-600" />
                            </div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-600">{translations[language].platform} </h3>
                            <ul class="list-disc pl-6">
                                <li className="text-lg text-gray-700 mb-4">{translations[language].security}</li>
                                <li className="text-lg text-gray-700 mb-4">{translations[language].sales}</li>
                                <li className="text-lg text-gray-700 mb-4">{translations[language].communication}</li>
                                <li className="text-lg text-gray-700 mb-4">{translations[language].design}</li>
                                <li className="text-lg text-gray-700 mb-4">{translations[language].requirements}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/3 px-4 mb-8">
                        <div class="rounded-md bg-white shadow-md p-8">
                            <div class="flex items-center mb-4">
                                <FaJs class="text-4xl text-yellow-400" />
                                <FaHtml5 class="text-4xl text-red-500" />
                                <FaPython class="ml-2 text-4xl text-green-600" />
                                <TailwindIcon className="w-8 h-8 ml-4 text-purple-600" />
                            </div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-600">{translations[language].magister} </h3>
                            <ul class="list-disc pl-6">
                                <li className="text-lg text-gray-700 mb-4"> {translations[language].rest}</li>
                                <li className="text-lg text-gray-700 mb-4">{translations[language].database}</li>
                                <li className="text-lg text-gray-700 mb-4">{translations[language].design}</li>
                                <li className="text-lg text-gray-700 mb-4">{translations[language].vanilla}</li>
                                <li className="text-lg text-gray-700 mb-4">{translations[language].requirements}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Experience;