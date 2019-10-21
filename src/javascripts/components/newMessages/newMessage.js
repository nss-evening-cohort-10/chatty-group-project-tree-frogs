import $ from 'jquery';
import utilities from '../../helpers/utilities';
// import data from '../../helpers/data/data';

const printBatman = () => {
  let domString = '';
  const newMessage = $('#chatInput').val().toLowerCase();
  domString += newMessage;
  utilities.printToDom('.col-6', domString);
};

// const printJoker = () => {
//   let domString = '';
//   const newMessage = $('#chatInput').val().toLowerCase();
//   domString += newMessage;
//   utilities.printToDom('offset-6', domString);
// };

const printNewMessage = () => {
//   let domString = '';
//   const dropdown = $('.dropdown-menu');
//   const userData = data.getChattyData();
//   userData.forEach((d) => {
  $('#chatInput').keyup((event) => {
    //       const newMessage = $('#chatInput').val().toLowerCase();
    if (event.keyCode === 13) { // && (dropdown.selectedId === 'batman') && (`${d.userId}` === 'batman')) {
    //         domString += `<div id="message-container2">
    //         <div class='chat right> ${newMessage}
    //         </div>
    //         </div>`;
      printBatman();
    } // else if (event.keyCode === 13 && ($('#joker') === `${d.userId}`)) {
  //         domString += `<div id="message-container">
  //         <div class='chat left'> ${newMessage}
  //         </div>
  //         </div>`;
  //       }
  //     });
  //   });
  });
//   utilities.printToDom('message-display', domString);
};

export default { printNewMessage };
