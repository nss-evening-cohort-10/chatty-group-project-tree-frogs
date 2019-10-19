import $ from 'jquery';
import utilities from '../../helpers/utilities';
import data from '../../helpers/data/data';
import './messages.scss';

// let messages = [];
// const containerClass = () => {
//   if ($('.chat').className === 'right') {
//     $('#message-container').addClass('right');
//   }
// };

const printMessages = () => {
  let domString = '';
  const chatters = data.getChattyData();
  chatters.forEach((chatter) => {
    domString += `<div id="message-container" class="${chatter.userId === 'batman' ? 'right' : 'left'}">`;
    domString += `<div class="chat ${chatter.userId === 'batman' ? 'right' : 'left'}" >${chatter.message}</div>`;
    domString += '</div>';
    // domString += '<div id="message-container">';
    // domString += `<div class="chat left">${chatter.message}</div>`;
    // domString += `<div class="output"><img src="${chatter.imageUrl}">${chatter.message}</div>`;
    // domString += '</div>';
    // containerClass();
  });
  utilities.printToDom('message-display', domString);
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

export default { printMessages, messageEventListeners };
