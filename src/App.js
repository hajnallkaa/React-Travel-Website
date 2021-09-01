
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ModalProvider from "./context/providers/ModalProvider";
import Nav from "./components/Nav";
import NavProvider from "./context/providers/NavProvider";
import Toggle from "./components/Toggle";
import {HelmetProvider} from "react-helmet-async";
import DestinationsProvider from "./context/providers/DestinationsProvider";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import SharedProvider from "./context/providers/SharedProvider";
import GalleryProvider from "./context/providers/GalleryProvider";
import AnimationsProvider from "./context/providers/AnimationsProvider";

function App() {
  
  

  return (
    <Router>
      <ModalProvider>
        <NavProvider>
          <GalleryProvider>
          <DestinationsProvider>
            <SharedProvider >
              <AnimationsProvider>
          <Toggle/>
        <Nav />
        <HelmetProvider>
      <Switch>
        
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About}/>
        <Route path='/details/:id' exact component={Details}/>
        <Route path='/contact' exact component={Contact}/>
        <Route component={NotFound}/>
        
      </Switch>
      </HelmetProvider>
      </AnimationsProvider>
      </SharedProvider>
      </DestinationsProvider>
      </GalleryProvider>
      </NavProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;
