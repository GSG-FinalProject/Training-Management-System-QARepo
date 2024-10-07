# Training Management System (QA)

## Overview
This repository contains the Quality Assurance (QA) testing for the Training Management System project. The system is designed to manage training courses, tasks, and feedback among different users (Admin, Trainers, and Trainees). This project ensures that the application is thoroughly tested to provide a seamless experience.

## Project Overview
The Training Management System includes various roles with specific functionalities:

- **Admin**: Manages trainers, trainees, and training programs.
- **Trainer**: Adds courses, assigns tasks, and provides feedback.
- **Trainee**: Views courses, submits tasks, and receives feedback.

## Test Videos
Here are some videos demonstrating the test cases:

https://github.com/user-attachments/assets/5c8de65e-a88f-48a1-bf4a-4724c6d48528

<br>

https://github.com/user-attachments/assets/1a5f99d2-a79e-4f1b-89ac-07357d758ef3

<br>

https://github.com/user-attachments/assets/26392ea2-f0eb-4ce0-b31c-6395c38a6ac3

## Features Tested
- Admin functionalities (CRUD operations on trainers and trainees).
- Trainer functionalities (course management, task assignment, feedback).
- Trainee functionalities (task submission and modifications).
- Authentication and authorization features.

## Test Frameworks and Tools
- **Testing Framework**: Cypress for end-to-end testing.
- **Assertion Library**: Chai for assertions in tests.
- **Version Control**: GitHub for versioning and collaboration.

## Installation
To set up the QA testing environment, follow these steps:

1. Clone the Repository:
    ```bash
    git clone https://github.com/GSG-FinalProject/Training-Management-System-QARepo
    cd training-management-system-qa
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage
To run the tests, use the following command:
```bash
npx cypress open
