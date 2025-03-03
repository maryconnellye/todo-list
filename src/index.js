import "./styles.css";
import { openNewProjectForm } from "./newProjectForm";
	
const header = document.querySelector('#header');
document.body.appendChild(header);

const addNewProjectButton = document.querySelector('#add-new-project-button');
	header.appendChild(addNewProjectButton);

		addNewProjectButton.addEventListener('mousedown', () => {
			addNewProjectButton.style.transform = "scale(1.1)";
		})

		addNewProjectButton.addEventListener('mouseup', () => {
			addNewProjectButton.style.transform = "scale(1)";
		})

		addNewProjectButton.addEventListener('click', openNewProjectForm());

