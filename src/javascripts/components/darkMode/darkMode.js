import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './darkMode.scss';

const printDarkCheckbox = () => {
  const domString = `
  <div class="darkMode d-flex justify-content-center">
  <button class="btn btn-primary" id="activateDark">Activate Dark Mode</button>
  </div>
  `;
  utilities.printToDom('dark-mode-checkbox', domString);
};

const checkDarkMode = () => {
  $('body').css('background-color', 'black');
  $('.navbar').css('background-color', 'gray');
  $('.navbar').css('color', 'white');
  $('.light-logo').toggle();
  $('.dark-logo').toggle();
  // $('.dark-logo').show();
  // $('.light-logo').hide();
};

const activateDarkMode = () => {
  $('#activateDark').on('click', () => {
    checkDarkMode();
  });
};

export default { printDarkCheckbox, activateDarkMode };
