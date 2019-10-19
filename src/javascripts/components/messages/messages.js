import $ from 'jquery';
import utilities from '../../helpers/utilities';
import data from '../../helpers/data/data';
import './messages.scss';

const printMessages = () => {
  let domString = '';
  const chatters = data.getChattyData();
  chatters.forEach((chatter) => {
    domString += '<div id="message-container2">';
    domString += `<div class="chat right">${chatter.message}</div>`;
    domString += '</div>';
    domString += '<div id="message-container">';
    domString += `<div class="chat left">${chatter.message}</div>`;
    // domString += `<div class="output"><img src="${chatter.imageUrl}">${chatter.message}</div>`;
    domString += '</div>';
  });
  utilities.printToDom('message-display', domString);
};

// // Clearing Messages
const clearMessages = () => {
  $('#message-display').empty();
};

// Large Text
$('#largeText').change(() => {
  if ($(this).is(':checked')) {
    $('body').addClass('largeText');
  } else {
    $('body').removeClass('largeText');
  }
});

const messageEventListeners = () => {
  $('#largeTextC').click(() => {
    $('#message-display').toggleClass('largeText');
  });
  $('#clearChat').click(clearMessages);
};

export default { printMessages, messageEventListeners };
