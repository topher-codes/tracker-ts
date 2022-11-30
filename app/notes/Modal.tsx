'use client';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal');

export default function App() {
	let subtitle: any;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<button onClick={openModal}>Send Emails</button>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Successful Update"
			>
				<h2 ref={(_subtitle) => (subtitle = _subtitle)}>
					The following emails have been sent : Contact
				</h2>
				<h2 ref={(_subtitle) => (subtitle = _subtitle)}>
					Service-Now tickets have been updated
				</h2>
				<button onClick={closeModal}>X</button>
				<div>Press Update</div>
			</Modal>
		</div>
	);
}
