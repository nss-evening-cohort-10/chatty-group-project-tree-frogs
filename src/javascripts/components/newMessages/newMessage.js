import $ from 'jquery';
import utilities from '../../helpers/utilities';

const printNewMessage = () => {
  let domString = '';
  $('#chatInput').keyup((event) => {
    const newMessage = $('#chatInput').val().toLowerCase();
    if (event.keyCode === 13) {
      domString += newMessage;
    }
    utilities.printToDom('message-container2', domString);
  });
};

// const printNewMessage = () => {
//   const newMessage = $('#chatInput').val();
//   console.log(newMessage);
// };

export default { printNewMessage };
