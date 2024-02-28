import React,{useState} from 'react';



const Toggle = ({ language, onLanguageChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    const newLanguage = language === 'en' ? 'es' : 'en';
    onLanguageChange(newLanguage);
  };

  return (
    <div className="mb-3">
      
      <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <input
          type="checkbox"
          name="toggle"
          id="Purple"
          className="outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          checked={isChecked}
          onChange={handleToggle}
        />
        
        <label
          htmlFor="Purple"
          className={`block h-6 overflow-hidden rounded-full cursor-pointer ${
            isChecked ? 'bg-purple-500' : 'bg-gray-300'
          }`}
          onClick={handleToggle}
        ></label>
        </div>
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
</svg>

      
      <span className="font-medium text-gray-900" onClick={handleToggle}>
      
      </span>
    </div>
    </div>
  );
};

export default Toggle;