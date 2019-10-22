import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './darkMode.scss';

const printDarkCheckbox = () => {
  const domString = `
  <div class="darkMode d-flex justify-content-center">
  <input type="checkbox" class="custom-control-input" id="customCheck1" name="darkMode">
  <label class="custom-control-label" for="customCheck1">Activate Dark Mode</label>
  </div>
  </div>
  `;
  utilities.printToDom('dark-mode-checkbox', domString);
};

const activateDarkMode = () => {
  $('body').css({
    'background-image': 'url(https://rukminim1.flixcart.com/image/832/832/poster/h/t/8/batman-with-bats-poster-plo365-medium-original-imadzrfsjfjujphh.jpeg?q=70)',
    'background-repeat': 'no-repeat',
    'background-size': '100%',
  });
  $('.navbar').css('background-color', 'gray');
  $('.navbar').css('color', 'white');
  $('#message-display').css('background-color', 'darkgray');
  $('.custom-control-label').css('color', 'white');
  $('.dark-logo').toggle();
  $('.light-logo').toggle();
};

const activateLightMode = () => {
  $('body').css({
    'background-image': 'url(http://fc09.deviantart.net/fs70/i/2013/153/6/d/batman_tattoo9_by_artfoundry-d67mp41.png)',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
  });
  $('.navbar').css('background-color', 'rgb(207, 193, 193)');
  $('#message-display').css('background-color', 'white');
  $('.custom-control-label').css('color', 'black');
  $('.navbar').css('color', 'white');
  $('.light-logo').toggle();
  $('.dark-logo').toggle();
};

const checkDarkMode = () => {
  $('input:checkbox[name=darkMode]').click(() => {
    if ($('input:checkbox[name=darkMode]').is(':checked')) {
      activateDarkMode();
    } else if ($('input:not(:checked')) {
      activateLightMode();
    }
  });
};

export default { printDarkCheckbox, checkDarkMode };
