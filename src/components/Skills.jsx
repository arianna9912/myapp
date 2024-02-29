import React from 'react'
import translations from '../translations/translation.json';
const Skills = ({language}) => {
  const languages = [
    { name: 'HTML5', percentage: '80%' },
    { name: 'CSS3', percentage: '80%' },
    { name: 'Python', percentage: '80%' },
    { name: 'Javascript', percentage: '90%' },
    { name: 'ReactJS', percentage: '90%' },
    { name: 'VueJS', percentage: '90%' },
    { name: 'TailwindCSS', percentage: '90%' },
    { name: 'Django', percentage: '80%' },
    { name: 'Django Rest Framework', percentage: '85%' },
    { name: 'MySQL, PostgreSQL,SQLServer', percentage: '85%' },
    { name: 'Git, Github,Postman', percentage: '80%' },
    { name: 'Scrum', percentage: '90%' },
    { name: 'English', percentage: '85%' },
  ];

  const getBarColor = (percentage) => {
    if (parseInt(percentage) >= 90) {
      return 'bg-purple-700';
    } else if (parseInt(percentage) >= 70) {
      return 'bg-gradient-to-r from-purple-700 to-gray-200';
    } else {
      return 'bg-gray-400';
    }
  };


  return (
    <div className='bg-purple-100'>
      <div className="flex items-center justify-center">
      <h2 className="text-3xl mt-10 font-semibold text-gray-700 xl:text-5xl lg:text-3xl mb-4">{translations[language].skills}</h2>
      
      </div>
      <div className="flex justify-center items-center h-auto mt-10">
        <div className="w-full lg:w-5/12">
          {languages.map((language, index) => (
            <div key={index} className="px-4 mb-12">
              <div className="bg-stroke dark:bg-dark-3 relative h-2.5 w-full rounded-2xl">
              <div
                  className={`absolute top-0 left-0 h-full w-full  rounded-2xl ${getBarColor(language.percentage)}`}
                ></div>
                  <span className="bg-purple-500 absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white">
                    <span className="bg-purple-500 mt-4 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                    {language.name} {language.percentage}
                  </span>
                </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;