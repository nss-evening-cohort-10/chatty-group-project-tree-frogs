import $ from 'jquery';
import './animate.scss';

const animate = () => {
  $('body').click(() => {
    console.log('i click');
    $('#leftBatWing').animate({ right: '100%' }, 2000);
    $('#rightBatWing').animate({ left: '100%' }, 2000);
    setTimeout(() => {
      $('#leftBatWing').hide();
      $('#righttBatWing').hide();
    }, 2000);
  });
};

export default { animate };
