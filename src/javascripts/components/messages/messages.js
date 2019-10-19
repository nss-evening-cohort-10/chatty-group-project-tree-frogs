import $ from 'jquery';
import utilities from '../../helpers/utilities';
import data from '../../helpers/data/data';
import './messages.scss';

// let messages = [];

const printMessages = () => {
  let domString = '';
  const chatters = data.getChattyData();
  chatters.forEach((chatter) => {
    domString += '<div id="message-container">';
    domString += `<div class="output"><img src="${chatter.imageUrl}">${chatter.message}</div>`;
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

// // Clearing Messages
// const clearMessages = () => {
//   messages = [];
//   chatBuilder();
// };

// will need to add clearMessages to export. I also need a chat builder to use this function.

// Large Text
$('#largeText').change(() => {
  if ($(this).is(':checked')) {
    $('body').addClass('largeText');
  } else {
    $('body').removeClass('largeText');
  }
});

const messageEventListeners = () => {
  $('#increaseSize').click(() => {
    $('#message-display').toggleClass('largeText');
  });
};

export default { printMessages, addMessage, messageEventListeners };
