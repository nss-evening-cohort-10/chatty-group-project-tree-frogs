import $ from 'jquery';
import utilities from '../../helpers/utilities';

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
    const selectedEmoji = e.target;
    const em = emojis.codePointAt(selectedEmoji);
    // domString += `${selectedEmoji}`;
    // const output = $('#chatInput').val($('#chatInput').val() + selectedEmoji.html());
    utilities.printToDom('chatInput', em);
  });
};
export default { printEmojis, selectEmoji };
