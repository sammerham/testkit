import Form from './components/Form';
import Icon from './components/Icon';
import Event from './components/Event';
import "@azaleahealth/azalea-kit-ui/dist/themes/light.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Event />
      <Form />
      <Icon />
    </div>
  );
}

export default App;
