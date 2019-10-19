import m from './components/messages/messages';
import dark from './components/darkMode/darkMode';
import 'bootstrap';
import menuItems from './components/dropDownMenuItems/dropDownMenuItems';

import '../styles/main.scss';


const init = () => {
  dark.printDarkCheckbox();
  dark.checkDarkMode();
  m.printMessages();
  menuItems.items();
  m.addMessage();
};

init();
