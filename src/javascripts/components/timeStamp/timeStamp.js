import $ from 'jquery';
import moment from 'moment';
import './timeStamp.scss';

const rightTimeStamp = () => {
  const mome = moment().format('MMMM Do YYYY, h:mm:ss a');
  return $(`<p class="right-side-Chatty-time-stamp">${mome}</p>`).insertAfter('.right');
};
const leftTimeStamp = () => {
  const mome = moment().format('MMMM Do YYYY, h:mm:ss a');
  return $(`<p class="left-side-Chatty-time-stamp">${mome}</p>`).insertAfter('.left');
};
export default { leftTimeStamp, rightTimeStamp };
