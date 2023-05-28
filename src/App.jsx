import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { AboutMe } from "./components/about-me";
import { Contact } from "./components/contact";
import { Main } from "./components/main";
import { Projects } from "./components/projects";
import { Sidenav } from "./components/sidenav";
import { Skills } from "./components/skills";

export function App() {
  const { pathname } = useLocation();
  return (
    <div className="h-full max-w-wrapper mx-auto">
      {pathname === "/" ? (
        <div className="pb-24">
          <Sidenav />
          <Main />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      ) : (
        <Outlet />
      )}
      <ScrollRestoration />
    </div>
  );
}

export default App;
