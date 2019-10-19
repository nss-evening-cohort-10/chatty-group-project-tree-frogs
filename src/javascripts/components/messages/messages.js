import utilities from '../../helpers/utilities';
import data from '../../helpers/data/data';
import './messages.scss';

// let messages = [];

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
