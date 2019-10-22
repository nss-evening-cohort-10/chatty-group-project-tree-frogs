import $ from 'jquery';
import './animate.scss';

const animate = () => {
  console.log('i click');
  $('body').click(() => {
    $('#leftBatWing').animate({ right: '100%' }, 2000);
    $('#rightBatWing').animate({ left: '100%' }, 2000);
    setTimeout(() => {
      $('#leftBatWing').hide();
      $('#rightBatWing').hide();
    }, 2000);
  });
};

export default { animate };
