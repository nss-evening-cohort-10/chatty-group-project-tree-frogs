import $ from 'jquery';
// import utilities from '../../helpers/utilities';
import data from '../../helpers/data/data';
import m from '../messages/messages';

const addMessage = () => {
  const d = data.getChattyData();
  // const chattyId = Math.round(10000 * Math.random());
  console.log('hi');
  $('#chatInput').on('keydown', (e) => {
    const newChattyData = {};
    if (e.keyCode === 13 && $('#jokerRadio').is(':checked')) {
      const newMessage = $('#chatInput').val().toLowerCase();
      console.log(newMessage);
      // newChattyData.id = chattyId;
      newChattyData.userId = 'joker';
      newChattyData.message = newMessage;
      console.log('pushed joker');
      data.setData(newChattyData);
      console.log(d.length);
      $('#chatInput').val('');
      // m.printMessages();
    } else if (e.keyCode === 13 && $('#batmanRadio').is(':checked')) {
      const newMessage = $('#chatInput').val().toLowerCase();
      // newChattyData.id = chattyId;
      newChattyData.userId = 'batman';
      newChattyData.message = newMessage;
      console.log('pushed batman');
      data.setData(newChattyData);
      console.log(d.length);
      $('#chatInput').val('');
      // m.printMessages();
    }
    m.printMessages();
  });
};

// const printBatman = () => {
//   let domString = '';
//   const newMessage = $('#chatInput').val().toLowerCase();
//   domString += `<div class="chat">
//   <div class="col-6">${newMessage}</div>
//   </div>`;
//   utilities.printToDom('message-display', domString);
// };

// // const printJoker = () => {
// //   let domString = '';
// //   const newMessage = $('#chatInput').val().toLowerCase();
// //   domString += newMessage;
// //   utilities.printToDom('offset-6', domString);
// // };

// const printNewMessage = () => {
// //   let domString = '';
// //   const dropdown = $('.dropdown-menu');
// //   const userData = data.getChattyData();
// //   userData.forEach((d) => {
//   $('#chatInput').keyup((event) => {
//     //       const newMessage = $('#chatInput').val().toLowerCase();
//     if (event.keyCode === 13) { // && (dropdown.selectedId === 'batman') && (`${d.userId}` === 'batman')) {
//     //         domString += `<div id="message-container2">
//     //         <div class='chat right> ${newMessage}
//     //         </div>
//     //         </div>`;
//       printBatman();
//     } // else if (event.keyCode === 13 && ($('#joker') === `${d.userId}`)) {
//   //         domString += `<div id="message-container">
//   //         <div class='chat left'> ${newMessage}
//   //         </div>
//   //         </div>`;
//   //       }
//   //     });
//   //   });
//   });
// //   utilities.printToDom('message-display', domString);
// };

export default { addMessage };
