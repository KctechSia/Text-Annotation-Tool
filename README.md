# Text-Annotation-Tool
This project is a simple and interactive Text Annotation App built to help users highlight and tag parts of text like names, places, and organizations. It’s commonly used in Natural Language Processing (NLP) tasks such as training AI models to recognize important information in text.

The app was built using:
Backend: Python (Flask)
Frontend: HTML, CSS, JavaScript
Hosted on: Replit

It was designed for:
Students learning NLP or data annotation

Data labeling teams supporting AI model training
Users can select parts of a sentence and label them as PERSON, ORGANIZATION, or LOCATION. These tags help AI learn how to understand language better.

What I Learned
This project helped me learn how real NLP tools are built and how the frontend and backend communicate:
How to design interactive annotation interfaces with JavaScript.
How to receive, process, and return JSON data with Flask (Python).
How frontend and backend talk to each other using fetch() and HTTP requests.
Basics of Named Entity Recognition and how annotations are used in machine learning.
How to deploy a working app on Replit and test data flow.
It also gave me hands-on practice with:
Structuring projects with separate frontend and backend
Understanding client-server architecture
Debugging API and CORS issues

How It Works
User types or pastes text into a textbox.
User selects a part of the text and assigns it a label (e.g., PERSON).
The annotation is sent to the backend (Flask).
The backend receives and returns the data as JSON.
The result is shown below in a structured format.

Technologies Used
Python
Flask
HTML, CSS, JavaScript
JSON
Replit (for deployment)

Live Demo
Visit the live app
(Replace this with your actual Replit URL)

Project Structure
main.py → Flask backend code
index.html → HTML interface
script.js → JavaScript logic for selection and tagging
style.css → App styling
