import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import About from './sections/About.jsx'
const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero /> 
      <Services />
      <About />
    </main>
  );
};

export default App;
