import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Início</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <a href="test">Test link tttttt</a>
                </NavigationMenuLink>

              </NavigationMenuContent>
            </NavigationMenuItem>
            <div className="relative ml-3"><ModeToggle></ModeToggle></div>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="">


        </div>
        <div className="border-2 border-solid w-24 sm:w-32 md:w-40 lg:w-48 justify-center mr-auto ml-auto">
          <a href="https://vite.dev" target="_blank" className="w-sm border-2 border-solid">
            <img src={viteLogo} className="logo w-24 sm:w-32 md:w-40 lg:w-48" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react w-24 sm:w-32 md:w-40 lg:w-48" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">

          <Button onClick={() => setCount((count) => count + 1)} variant="outline">
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </ThemeProvider>
    </>

  )
}

export default App
