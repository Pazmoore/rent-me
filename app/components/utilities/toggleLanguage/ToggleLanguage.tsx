import React, { useState } from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import ReactCountryFlag from "react-country-flag"
import './toggle-language.scss'

const ToggleLanguage = () => {
  const [open, setOpen] = useState(false)
  const [languageIndex, setLanguageIndex] = useState(0)
  const [language, setLanguage] = useState<string[]>(['ENG', 'ESP', 'GER', 'ITA'])
  const [languages, setLanguages] = useState<string[]>(['English', 'Spanish', 'German', 'Italian'])
  const handleClick = () => setOpen(!open)
  const handleHover = () => setOpen(false)
  const changeLanguage = (lang: string, index: number) => {
    setLanguageIndex(index)
  }

  return (
    <div className='languages'>
      <ReactCountryFlag countryCode="US" svg cdnSuffix="svg" cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/" className="flag"/>
      <div onMouseLeave={handleHover}>
        <Tooltip title={<Typography>Select language</Typography>}>
          <div onClick={handleClick} className="select">
            {language[languageIndex]}
            <Image src='/images/header/arrow.svg' alt="img" width={25} height={25} className='img-color'/>
          </div>
        </Tooltip>
        {
          open && (
            <div className={`content ${open && 'active'}`}>
            <div className="list disabled">{languages[languageIndex]}</div>
            {
              languages.map((language: string, i: number) => (
                <div key={i} onClick={() => changeLanguage(language, i)} className="list">
                  {languages[i]}
                </div>
              ))
            }
          </div>
          )
        }
      </div>
    </div>
  )
}

export default ToggleLanguage



// import { useEffect, useState } from "react";
// import { parseCookies, setCookie } from "nookies";

// The following cookie name is important because it's Google-predefined for the translation engine purpose
// const COOKIE_NAME = "googtrans";

// // Know a predefined nickname of a language and provide its title (the name for displaying)
// interface LanguageDescriptor {
//   name: string;
//   title: string;
// }

// // The following definition describes typings for JS-based declarations in public/scripts/lang-config.js
// declare global {
//   namespace globalThis {
//     var __GOOGLE_TRANSLATION_CONFIG__: {
//       languages: LanguageDescriptor[];
//       defaultLanguage: string;
//     };
//   }
// }

// const ToggleLanguage = () => {
//   const [currentLanguage, setCurrentLanguage] = useState<string>();
//   const [languageConfig, setLanguageConfig] = useState<any>();

//   // Activate the translation engine the following way when the component has initialized
//   useEffect(() => {
//     // 1. Read the cookie
//     const cookies = parseCookies()
//     const existingLanguageCookieValue = cookies[COOKIE_NAME];

//     let languageValue;
//     if (existingLanguageCookieValue) {
//       // 2. If the cookie is defined, extract a language nickname from there.
//       const sp = existingLanguageCookieValue.split("/");
//       if (sp.length > 2) {
//         languageValue = sp[2];
//       }
//     }
//     // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and user has still not decided about languageValue, take a current language from the predefined defaultLanguage below
//     if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
//       languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
//     }
//     if (languageValue) {
//       // 4. Set the current language if there is a related decision.
//       setCurrentLanguage(languageValue);
//     }
//     // 5. Set the language config.
//     if (global.__GOOGLE_TRANSLATION_CONFIG__) {
//       setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
//     }
//   }, []);

//   // Don't display anything if current language information is unavailable.
//   if (!currentLanguage || !languageConfig) {
//     return null;
//   }

//   // Switch the current language
//   const switchLanguage = (lang: string) => () => {
//     // Set the related cookie and reload the page
//     // "/auto/" prefix is Google's definition as far as a cookie name
//     setCookie(null, COOKIE_NAME, "/auto/" + lang)
//     window.location.reload();
//   };

//   return (
//     <div className="text-center notranslate">
//       {languageConfig.languages.map((ld: LanguageDescriptor, i: number) => (
//         <>
//           {currentLanguage === ld.name ||
//           (currentLanguage === "auto" &&
//             languageConfig.defaultLanguage === ld) ? (
//             <span key={`l_s_${ld}`} className="mx-3 text-orange-300">
//               {ld.title}
//             </span>
//           ) : (
//             <a
//               key={`l_s_${ld}`}
//               onClick={switchLanguage(ld.name)}
//               className="mx-3 text-blue-300 cursor-pointer hover:underline"
//             >
//               {ld.title}
//             </a>
//           )}
//         </>
//       ))}
//     </div>
//   );
// };

// export { ToggleLanguage, COOKIE_NAME };