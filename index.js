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
		jessicaData = data.filter(
			(patient) => patient.name === 'Jessica Taylor'
		);
		/* Display the list of the patient */
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
		/* Display the data of Jessica Taylor */
		// Sélectionne l'élément tbody
		const tbody = document.getElementById('diagnoticPatientContent');

		// Crée un nouvel élément <tr>
		jessicaData.forEach((patient, index) => {
			patient.diagnostic_list.forEach((diagnostic) => {
				const tr = document.createElement('tr');
				tr.classList.add('rowContent');

				// Crée et configure les éléments <td>
				const tdProblem = document.createElement('td');
				tdProblem.classList.add('problemContent');
				tdProblem.textContent = diagnostic.name;

				const tdDescription = document.createElement('td');
				tdDescription.classList.add('descriptionContent');
				tdDescription.textContent = diagnostic.description;

				const tdStatus = document.createElement('td');
				tdStatus.classList.add('statusContent');
				tdStatus.textContent = diagnostic.status;

				// Ajoute les <td> au <tr>
				tr.appendChild(tdProblem);
				tr.appendChild(tdDescription);
				tr.appendChild(tdStatus);

				// Ajoute le <tr> au <tbody>
				tbody.appendChild(tr);
			});
			// patient.diagnotic_list.map(({ name }) => {
			// 	console.log(name);
			// });
		});
	})
	.catch((error) => {
		console.error('Error:', error);
	});
