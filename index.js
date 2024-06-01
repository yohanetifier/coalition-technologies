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
		const patientsWrapper = document.getElementById('patientsWrapper');
		data.forEach((patient) => {
			console.log('patient', patient);
			// Crée un nouvel élément pour chaque patient
			const patientDiv = document.createElement('div');
			patientDiv.classList.add('singlePatient');

			const img = document.createElement('img');
			img.classList.add('patientImg');
			img.src = patient.imageURL || ''; // suppose que l'image est dans patient.imageURL
			img.alt = '';

			const infoDiv = document.createElement('div');

			const nameP = document.createElement('p');
			nameP.classList.add('patientName');
			nameP.textContent = patient.name; // suppose que le nom est dans patient.name

			const genderP = document.createElement('p');
			genderP.classList.add('patientGender');
			genderP.textContent = `${patient.gender}, ${patient.age}`; // suppose que le genre et l'âge sont dans patient.gender et patient.age

			// Ajoute les éléments au div principal
			infoDiv.appendChild(nameP);
			infoDiv.appendChild(genderP);
			patientDiv.appendChild(img);
			patientDiv.appendChild(infoDiv);

			// Ajoute le div patient à la patientsWrapper
			patientsWrapper.appendChild(patientDiv);
		});
	})
	.catch((error) => {
		console.error('Error:', error);
	});
