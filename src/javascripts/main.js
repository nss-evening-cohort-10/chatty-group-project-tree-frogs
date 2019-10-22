import m from './components/messages/messages';
import dark from './components/darkMode/darkMode';
import newM from './components/newMessages/newMessage';
import 'bootstrap';
import '../styles/main.scss';


const init = () => {
  dark.printDarkCheckbox();
  dark.checkDarkMode();
  m.printMessages();
  newM.addMessage();
  // t.leftTimeStamp();
  // t.rightTimeStamp();
  m.messageEventListeners();
  // m.deleteSingleMessage();
};

init();
