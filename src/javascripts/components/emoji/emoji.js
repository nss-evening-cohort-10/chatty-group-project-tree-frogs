import $ from 'jquery';
import utilities from '../../helpers/utilities';
// import m from '../messages/messages';

const emojis = ['❤️', '😂', '🥺', '🔥', '😍', '😊', '🥰', '👍', '🤔', '💩'];

const printEmojis = () => {
  let domString = '';
  domString += '<div class="dropdown">';
  // eslint-disable-next-line no-multi-str
  domString += '<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"\
       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i id="emoji-icon" class="far fa-grin"></i></button>';
  domString += '<div class="dropdown-menu" aria-labelledby="dropdownMenu2">';
  emojis.forEach((emoji) => {
    domString += `<button class="dropdown-item" type="button">${emoji}</button>`;
  });
  domString += '</div></div>';
  utilities.printToDom('emoji', domString);
};

const selectEmoji = () => {
  $('.dropdown-item').click((e) => {
    let value = e.target.innerHTML;
    $('#chatInput').val(value += $('#chatInput').val());
  });
};

export default { printEmojis, selectEmoji };
