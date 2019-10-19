import m from './components/messages/messages';
import dark from './components/darkMode/darkMode';
import 'bootstrap';
import '../styles/main.scss';


const init = () => {
  dark.printDarkCheckbox();
  dark.checkDarkMode();
  m.printMessages();
  // m.clearMessages();
  // m.messageEventListeners();
};

init();
