'use strict';

const openButtonModal = document.querySelector('.open-modal');


function createModalButton(className, text, func) {
	const button = document.createElement('button');
	button.setAttribute('type', 'button');
	button.className = className;
	button.innerText = text;
	button.addEventListener('click', () => {
		func();
	});

	return button;
}

function closeModal() {
	const modal = document.querySelector('.modal-backdrop');
	modal.remove();
}

function openModal() {
	const backdrop = document.createElement('div');
	backdrop.className = 'modal-backdrop';
	document.body.appendChild(backdrop);

	backdrop.addEventListener('click', function (event) {
		if (event.target === backdrop && event.target !== modal) {
			backdrop.remove();
		}
	});

	const modal = document.createElement('div');
	modal.className = 'modal';
	backdrop.appendChild(modal);
	
	const cross = createModalButton('modal-cross', 'X', closeModal);
	const buttonOk = createModalButton('button-ok', 'Ok', closeModal);
	const buttonCancel = createModalButton('modal-cancel', 'Cancel', closeModal);

	/*
	const cross = document.createElement('button');
	cross.setAttribute('type', 'button');
	cross.className = 'modal-cross';
	cross.innerHTML = ' &#x2715';
	cross.addEventListener('click', () => {
		closeModal();
	}); */

	
	/* const buttonOk = document.createElement('button');
	buttonOk.setAttribute('type', 'button');
	buttonOk.className = 'button-ok';
	buttonOk.innerText = 'OK';
	buttonOk.addEventListener('click', () => {
		closeModal();
	}); */

	/* const buttonCancel = document.createElement('button');
	buttonCancel.setAttribute('type', 'button');
	buttonCancel.className = 'modal-cancel';
	buttonCancel.innerText = 'Cancel';
	buttonCancel.addEventListener('click', () => {
		closeModal();
	});
 */
	modal.appendChild(cross);
	modal.appendChild(buttonOk);
	modal.appendChild(buttonCancel);
}

openButtonModal.addEventListener('click', openModal);


