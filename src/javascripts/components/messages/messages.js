import $ from 'jquery';
import utilities from '../../helpers/utilities';
import data from '../../helpers/data/data';
import time from '../timeStamp/timeStamp';
import './messages.scss';

const deleteLink = () => {
  $('.card-link').hide();
};

const deleteSingleMessage = () => {
  deleteLink();
  $('.chat').hover(() => {
    $('.card-link').show();
    $('.card-link').click((e) => {
      const message = e.target.closest('.chat');
      message.remove();
      deleteLink();
    });
  });
};

const printMessages = () => {
  let domString = '';
  let num = 0;
  const chatters = data.getChattyData();
  console.log(chatters);
  // for (let i = 0; i < 20; i += 1) {
  chatters.forEach((chatter) => {
    domString += `<div class="col-6 ${chatter.userId === 'joker' ? '' : 'offset-6'}">`;
    domString += `<div id="message-${num += 1}" class="chat">${chatter.message}`;
    domString += '<a href="#" class="card-link">delete</a></div>';
    domString += '</div>';
  });
  utilities.printToDom('message-display', domString);
  deleteSingleMessage();
  time.rightTimeStamp();
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
