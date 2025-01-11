import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/navbar/nav'
import Card from './components/card/card'
import { ThemeProvider } from './context/themecontext'
import './App.css'

// function ThemeApp({ ThemeMode }) {
//   return (
//     <div className={`app ${ThemeMode}`}>
//       <Nav ThemeMode={ThemeMode} />
//       <Card ThemeMode={ThemeMode}/>
//     </div>
//   );
// }

function App() {
  const [ThemeMode, setThemeMode] = useState('light')

 

  const darktheme = () =>{
    setThemeMode('dark')
  }

  const lighttheme = () =>{
    setThemeMode('light')
  }



  return (
    <>
      <ThemeProvider value={{ ThemeMode, lighttheme, darktheme }}>
        <Nav ThemeMode={ThemeMode} />
         <Card ThemeMode={ThemeMode} />
      </ThemeProvider>
    </>
  );
}

export default App
