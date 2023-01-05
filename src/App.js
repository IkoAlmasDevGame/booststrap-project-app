import './App.css';
import './Style/LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './Components/NavigationBar';
import IntroApp from './Components/Intro';
import LatestNews from './Components/latest';
import Created from './Components/created';
import OldNews from './Components/old';

function App() {
  return (
    <div>
      <div className='MyBg'>
        <NavigationBar />
        <IntroApp />
      </div>
      <div className='latest-news'>
        <LatestNews />
      </div>
      <div className='old-news'>
        <OldNews />
      </div>
      <div className='created'>
        <Created />
      </div>
    </div>
  );
}

export default App;
