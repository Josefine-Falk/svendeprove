import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Navigation } from './components/navigation/Navigation';
import { AuthProvider } from './components/login/AuthProvider';
import { Routes } from './routes/Routes';

function App() {
  return (
   <AuthProvider>
     <Router basename="/hoteloverlook">
        <Navigation/>
        <Routes/>
     </Router>
     <Footer/>
   </AuthProvider>
  );
}

export default App;
