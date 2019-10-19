
import utilities from '../../helpers/utilities';
import data from '../../helpers/data/data';
import './messages.scss';

const printMessages = () => {
  let domString = '';
  const chatters = data.getChattyData();
  chatters.forEach((chatter) => {
    domString += '<div id="message-container">';
    // domString += `<div class="output"></div>`;
    domString += `<div class="chat-left">${chatter.message}</div>`;
    domString += `<div class="chat-right">${chatter.message}</div>`;
    domString += '</div>';
  });
  utilities.printToDom('message-display', domString);
};

export default { printMessages };
