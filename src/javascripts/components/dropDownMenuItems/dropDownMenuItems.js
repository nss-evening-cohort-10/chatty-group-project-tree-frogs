import d from '../../helpers/data/data';
import utils from '../../helpers/utilities';
import './dropDownMenuItems.scss';

const items = () => {
  const chattyName = d.getChattyData();
  let itemsDomString = '';
  for (let i = 0; i < chattyName.length; i += 1) {
    itemsDomString += `<p class="chattyNames">${chattyName[i].name}</p>`;
  }
  utils.printToDom('channelMenu', itemsDomString);
};
export default { items };
