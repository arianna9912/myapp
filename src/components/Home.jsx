import React, { useEffect, useState } from 'react';
import { FaGithub, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import perfil from '../assets/perfil.jpg';


import translations from '../translations/translation.json';



const Home = ({language}) => {

    const [typedText, setTypedText] = useState('');


    useEffect(() => {

        const targetText = language === 'en' ? "Hey there!, I'm Arianna Perez" : "¡Hola!, Soy Arianna Pérez";

        const displayText = targetText.replace(/&#x27;/g, "'")
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            setTypedText((prevText) => {
                if (currentIndex === displayText.length) {
                    clearInterval(typingInterval);
                }
                currentIndex++;
                return displayText.slice(0, currentIndex);
            });
        }, 100);

        return () => {
            clearInterval(typingInterval);
        };
    },[language]);

    return (

        <main class="relative h-screen overflow-hidden font-mono bg-purple-100 dark:bg-gray-800">
            <div class="absolute hidden md:block -bottom-32 -left-32 w-96 h-96">
                <div class="absolute z-20 text-xl text-extrabold right-12 text-start top-1/4">
                    <span class="text-7xl ml-4 inline-block animate-bounce">
                        💻
                    </span>
                    <p>
                        {translations[language].got}
                    </p>
                    <Link to="/contact" className="underline ml-4">
                        {translations[language].lest}
                    </Link>

                </div>
                <svg viewBox="0 0 200 200" class="absolute w-full h-full mb-4" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#9b30ff" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z" transform="translate(100 100)">
                    </path>
                </svg>
            </div>

            <div class="relative z-20 flex items-center">
                <div class="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
                    <div class="flex flex-col">
                        <img src={perfil} class="mx-auto mt-10 rounded-full w-28" />
                        <p class="my-6 text-3xl text-center dark:text-white" > {typedText}
                            <span class="text-4xl inline-block animate-pulse" aria-label="Hand waving">
                                👋
                            </span>
                        </p>
                        <h2 class="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl dark:text-white">
                            {translations[language].build}
                        </h2>
                        <div class="flex items-center justify-center mt-4">
                            <a
                                href="/myapp/CV.pdf"
                                download="Arianna-CV.pdf"
                                className="bg-purple-700 bg-opacity-50 hover:bg-opacity-30 text-gray-900 font-bold py-2 px-8 rounded flex items-center"
                            >
                                <FaDownload className="mr-2 animate-bounce" />
                                {language === 'en' ? 'Download CV' : 'Descargar CV'}

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};
export default Home;