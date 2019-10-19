import $ from 'jquery';
import utilities from '../../helpers/utilities';
import data from '../../helpers/data/data';
import './messages.scss';

const printMessages = () => {
  let domString = '';
  const chatters = data.getChattyData();
  chatters.forEach((chatter) => {
    domString += '<div id="message-container">';
    domString += `<div class="output">${chatter.message}</div>`;
    domString += '</div>';
  });
  utilities.printToDom('message-display', domString);
};
const addMessage = () => {
  $('#outputchatInput').keyup(() => {
    const domStrin = $('#outputchatInput').val();
    $('#outputchatInput').keypress((e) => {
      if (e.keyCode === 13) {
        $('#message-display').html(domStrin);
      }
    });
  });
};

export default { printMessages, addMessage };
