import './ToggleSwitch.scss';

const toggleSwitch = document.querySelector('#switch');

export default function ToggleSwitch(event) {
	if (event.target.checked) {
		document.body.classList.add('dark-mode');
	} else {
		document.body.classList.remove('dark-mode');
	}    
}

toggleSwitch.addEventListener('change', ToggleSwitch, false);