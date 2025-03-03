import "./styles.css";

export function openNewProjectForm() {

	const container = document.querySelector('#container');
		document.body.appendChild(container);

		const formContainer = document.createElement('div');
			container.appendChild(formContainer);
			formContainer.id = "form-container"

			const newProjectForm = document.createElement('form');
				formContainer.appendChild(newProjectForm);
				newProjectForm.id = "new-project-form";

				const projectTitleLabel = document.createElement('label');
				newProjectForm.appendChild(projectTitleLabel);
					projectTitleLabel.classList.add = "label";
					projectTitleLabel.for ="project-title-input";
					projectTitleLabel.textContent = "Project Title";
	
				const projectTitleInput = document.createElement('input');
				newProjectForm.appendChild(projectTitleInput);
					projectTitleInput.classList.add = "input";
					projectTitleInput.id ="project-title-input";
					projectTitleInput.type = "text";
		
					const projectDescriptionLabel = document.createElement('label');
					newProjectForm.appendChild(projectDescriptionLabel);
						projectDescriptionLabel.classList.add = "label";
						projectDescriptionLabel.for ="project-description-input";
						projectDescriptionLabel.textContent = "Description";
		
					const projectDescriptionInput = document.createElement('input');
					newProjectForm.appendChild(projectDescriptionInput);
						projectDescriptionInput.classList.add = "input";
						projectDescriptionInput.id ="project-description-input";
						projectDescriptionInput.type = "text";

	
			const projectDueDateLabel = document.createElement('label');
			newProjectForm.appendChild(projectDueDateLabel);
				projectDueDateLabel.classList.add = "label";
				projectDueDateLabel.for ="project-due-date-input";
				projectDueDateLabel.textContent = "Due Date";
			
			const projectDueDateInput = document.createElement('input');
			newProjectForm.appendChild(projectDueDateInput);
				projectDueDateInput.classList.add = "input";
				projectDueDateInput.id ="project-due-date-input";
				projectDueDateInput.type = "date";

	const projectPriorityLabel = document.createElement('label');
	newProjectForm.appendChild(projectPriorityLabel);
		projectPriorityLabel.id = "project-priority-label";
		projectPriorityLabel.classList.add = "label";
		projectPriorityLabel.for ="project-priority-input";
		projectPriorityLabel.textContent = "Priority";
		
		const priorityContainer = document.createElement('div');
			newProjectForm.appendChild(priorityContainer);
			priorityContainer.id = "priority-container";

			const projectHighPriorityInput = document.createElement('input');
			priorityContainer.appendChild(projectHighPriorityInput);
				projectHighPriorityInput.classList.add = "input";
				projectHighPriorityInput.id ="project-high-priority-input";
				projectHighPriorityInput.type = "radio";

				const projectHighPriorityLabel = document.createElement('label');
				priorityContainer.appendChild(projectHighPriorityLabel);
					projectHighPriorityLabel.id= "high-label";
					projectHighPriorityLabel.classList.add = "label";
					projectHighPriorityLabel.for ="project-high-priority-input";
					projectHighPriorityLabel.textContent = "High";

			const projectMediumPriorityInput = document.createElement('input');
			priorityContainer.appendChild(projectMediumPriorityInput);
				projectMediumPriorityInput.classList.add = "input";
				projectMediumPriorityInput.id ="project-medium-priority-input";
				projectMediumPriorityInput.type = "radio";

				const projectMediumPriorityLabel = document.createElement('label');
				priorityContainer.appendChild(projectMediumPriorityLabel);
					projectMediumPriorityLabel.id = "medium-label";
					projectMediumPriorityLabel.classList.add = "label";
					projectMediumPriorityLabel.for ="project-medium-priority-input";
					projectMediumPriorityLabel.textContent = "Medium";

			
			const projectLowPriorityInput = document.createElement('input');
			priorityContainer.appendChild(projectLowPriorityInput);
				projectLowPriorityInput.classList.add = "input";
				projectLowPriorityInput.id ="project-low-priority-input";
				projectLowPriorityInput.type = "radio";
		
			const projectLowPriorityLabel = document.createElement('label');
			priorityContainer.appendChild(projectLowPriorityLabel);
				projectLowPriorityLabel.id = "low-label";
				projectLowPriorityLabel.classList.add = "label";
				projectLowPriorityLabel.for ="project-low-priority-input";
				projectLowPriorityLabel.textContent = "Low";
		
		const projectNotesLabel = document.createElement('label');
		newProjectForm.appendChild(projectNotesLabel);
			projectNotesLabel.classList.add = "label";
			projectNotesLabel.for ="project-notes-input";
			projectNotesLabel.textContent = "Notes";
	
		const projectNotesInput = document.createElement('input');
		newProjectForm.appendChild(projectNotesInput);
			projectNotesInput.classList.add = "input";
			projectNotesInput.id ="project-notes-input";
			projectNotesInput.type = "text";

			const submitForm = document.createElement('submit');
			newProjectForm.appendChild(submitForm);


}
