import m from './components/messages/messages';
import dark from './components/darkMode/darkMode';
import newM from './components/newMessages/newMessage';
import t from './components/timeStamp/timeStamp';
import 'bootstrap';
import '../styles/main.scss';


const init = () => {
  dark.printDarkCheckbox();
  dark.checkDarkMode();
  m.printMessages();
  newM.printNewMessage();
  t.leftTimeStamp();
  t.rightTimeStamp();
  m.messageEventListeners();
};

init();
