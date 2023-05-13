import Gallery from './components/Gallery/Gallery';
import { PHOTOS } from './constants/photoConstants';

function App() {
  return (
    <div>
      <Gallery photos={PHOTOS} />
    </div>
  );
}

export default App;
