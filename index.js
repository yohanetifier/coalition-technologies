const username = 'coalition';
const password = 'skills-test';
const credentials = btoa(`${username}:${password}`);

fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Basic ${credentials}`
	}
})
	.then((response) => response.json())
	.then((data) => {
		const patientsWrapper = document.querySelector('.patientsWrapper');
		data.forEach((patient) => {
			const patientDiv = document.createElement('div');
			patientDiv.classList.add('singlePatient');

			const img = document.createElement('img');
			img.classList.add('patientImg');
			img.src = patient.profile_picture || '';
			img.alt = '';

			const infoDiv = document.createElement('div');

			const nameP = document.createElement('p');
			nameP.classList.add('patientName');
			nameP.textContent = patient.name;
			const genderP = document.createElement('p');
			genderP.classList.add('patientGender');
			genderP.textContent = `${patient.gender}, ${patient.age}`;
			infoDiv.appendChild(nameP);
			infoDiv.appendChild(genderP);
			patientDiv.appendChild(img);
			patientDiv.appendChild(infoDiv);

			patientsWrapper.appendChild(patientDiv);
		});
	})
	.catch((error) => {
		console.error('Error:', error);
	});
