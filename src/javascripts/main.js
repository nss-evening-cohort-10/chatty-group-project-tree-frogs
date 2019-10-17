import 'bootstrap';
import '../styles/main.scss';
import dark from './components/darkMode/darkMode';

const init = () => {
  dark.printDarkCheckbox();
  dark.activateDarkMode();
};

init();
