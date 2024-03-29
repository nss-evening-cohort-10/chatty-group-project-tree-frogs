
import m from './components/messages/messages';
import dark from './components/darkMode/darkMode';
import newM from './components/newMessages/newMessage';
import e from './components/emoji/emoji';
import 'bootstrap';
import '../styles/main.scss';
import a from './components/animate/animate';


const init = () => {
  dark.printDarkCheckbox();
  dark.checkDarkMode();
  m.printMessages();
  newM.addMessage();
  m.messageEventListeners();
  a.animate();
  e.printEmojis();
  e.selectEmoji();
};


init();
