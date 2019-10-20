import m from './components/messages/messages';
import dark from './components/darkMode/darkMode';
import 'bootstrap';
import menuItems from './components/dropDownMenuItems/dropDownMenuItems';
import t from './components/timeStamp/timeStamp';
import '../styles/main.scss';


const init = () => {
  dark.printDarkCheckbox();
  dark.checkDarkMode();
  m.printMessages();
  menuItems.items();
  m.addMessage();
  t.leftTimeStamp();
  t.rightTimeStamp();
};

init();
