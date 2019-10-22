import $ from 'jquery';
import moment from 'moment';
import './timeStamp.scss';

const rightTimeStamp = () => {
  const mome = moment().format('MMMM Do YYYY, h:mm:ss a');
  return $(`<p class="right-side-Chatty-time-stamp">${mome}</p>`).insertAfter('.col-6');
};

export default { rightTimeStamp };
