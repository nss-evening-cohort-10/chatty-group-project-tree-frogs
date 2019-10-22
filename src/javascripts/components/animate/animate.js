import $ from 'jquery';

const animate = () => {
  $('body').on('click', '.wings', () => {
    console.log('i click');
    $('#leftBatWing').animate({ right: '100%' }, 2000);
    $('#rightBatWing').animate({ left: '100%' }, 2000);
  });
};

export default { animate };
