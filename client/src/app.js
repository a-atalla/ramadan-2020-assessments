import { renderCard } from './card';
import { submitVideoRequest } from './api/video-request';

class App {
    constructor() {
        this.getElements();
        this.bindEvents();
    }

    getElements() {
        this.submitBtn = document.getElementById('submitButton');
        this.listOfRequests = document.getElementById('listOfRequests');
        // form fields
        this.form = document.getElementById('form')
    }

    bindEvents() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const submitData = {
            author_name: formData.get('author_name'),
            author_email: formData.get('author_email'),
            topic_title: formData.get('topic_title'),
            topic_details: formData.get('topic_details'),
            expected_result: formData.get('expected_result'),
            target_level: formData.get('target_level')
        }

        submitVideoRequest(submitData)
            .then((result) => {
                this.listOfRequests.innerHTML += renderCard(result);
            })
            .catch((console.log))

    }

    populatelistOfRequests() {
        // get all from the server and add to teh dom
    }
}

export default new App();
