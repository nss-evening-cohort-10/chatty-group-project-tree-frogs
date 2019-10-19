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
  $('body').css('background-color', 'black');
  $('.navbar').css('background-color', 'gray');
  $('.navbar').css('color', 'white');
  $('#message-display').css('background-color', 'darkgray');
  $('.custom-control-label').css('color', 'white');
  $('.dark-logo').toggle();
  $('.light-logo').toggle();
};

const activateLightMode = () => {
  $('body').css('background-color', 'white');
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
