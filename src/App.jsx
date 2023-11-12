import Footer from "./component/footer";
import First from "./first";
import "./parts/about/about";
import About from "./parts/about/about";
import "./parts/projects/projects";
import Projects from "./parts/projects/projects";
import "./parts/timeline/timeline";
import Timeline from "./parts/timeline/timeline";
import "./parts/welcome/welcome";
import Welcome from "./parts/welcome/welcome";

function App() {
  return ( 
      <> <First />
      <Welcome />
      <About />
      <First />
      <Timeline/>
      <Projects/>
      <Footer/>
      </>
  );
}
export default App;
