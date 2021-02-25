# Rockland Purchase Order Project

Developed by: Keeth Spindler
Developed for: Rockland Immunochemicals, Inc.
Timeframe: 48 hours

## Introduction

This project was created to demonstrate my technical knowledge and proficiency of server and client-side technologies. Requested by Rockland Immunochemicals, Inc., this program fulfills the following requirements:

1. A button is needed to which allows a user to upload a purchase order (a pdf).
2. The user needs to upload a purchase order to be able to finish the order.
3. PDF should also be viewable.

## Validation

To protect the system from malicious file uploads, this system validates the files it accepts on both the front and back end. It also dynamically notifies the user about their actions, For example, a notification will appear and provide informative feedback when a wrong file type is uploaded. The same notification will also announce a successful upload.

## Technologies Used

For this build, I wanted the infrastructure to be as lightweight as possible while also being a challenging to code. For this, I decided on the following technologies and dependencies:

- Node.js
  - Developer Dependencies
    - Concurrently
    - Nodemon
  - Production Dependencies
    - Express
    - Express-fileupload
    - Cors
    - Dotenv
    - Morgan
    - React
    - React-router-dom
    - Axios

## Setup and Installation

To run this project om your system, clone this repository to your drive. Open a terminal Within Project directory and run 'npm install' or 'npm i'. Additionally, you will need to change into the client directory and run the same command to install all of the project’s dependencies.

After this, return to the Project directory and run the follow command: 'npm run dev'

This will concurrently run both the backend and frontend sections of the project. From there, you can start using the demo. For your convenience, there is a sample pdf within the 'project-assets' directory. However, you may use any pdf file you have on your own local disk.

## Contact

For any questions or comments, please contact me by email at keeth.spindler@gmail.com
