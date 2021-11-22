import head from './header';
import tagline from './tagline';
import logo from './../icons/logo';
import makeElement from './../../utils/makeElement';

const banner = function () {
	const header = document.createElement('header');
	header.classList.add('ui-page-header');
	const icon = makeElement(logo());
	const h1 = head('Russell Media');
	const taglineElm = tagline('Reminders By Russell');
	header.append(icon);
	header.append(h1);
	header.append(taglineElm);

	return header;
};

export default banner;
