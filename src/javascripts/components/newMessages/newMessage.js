import $ from 'jquery';
import utilities from '../../helpers/utilities';
import data from '../../helpers/data/data';

const printNewMessage = () => {
  let domString = '';
  const userData = data.getChattyData();
  userData.forEach((d) => {
    $('#chatInput').keyup((event) => {
      const newMessage = $('#chatInput').val().toLowerCase();
      if (event.keyCode === 13 && ($('#batman') === `${d.userId}`)) {
        domString += `<div id="message-container2">
        <div class='chat right> ${newMessage}
        </div>
        </div>`;
      } else if (event.keyCode === 13 && ($('#joker') === `${d.userId}`)) {
        domString += `<div id="message-container">
        <div class='chat left'> ${newMessage}
        </div>
        </div>`;
      }
    });
  });
  utilities.printToDom('message-display', domString);
};

export default { printNewMessage };
