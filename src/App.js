import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Navigation } from './components/navigation/Navigation';
import { AppContextProvider } from './context/ContextProvider';
import { Routes } from './routes/Routes';

function App() {
  return (
   <AppContextProvider>
     <Router basename="/hotel overlook">
        <Navigation/>
        <Routes/>
     </Router>
     <Footer/>
   </AppContextProvider>
  );
}

export default App;
