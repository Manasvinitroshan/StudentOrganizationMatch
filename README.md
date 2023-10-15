# StudentOrgMatch
There are around 300+ organizations and clubs on UTD campus, but a few of them can match the interests of each UTD student. It can take plenty of time just to find the organizations and/or clubs that match your interests. That's why UTD SOC added a Microsoft Forms link, named "Student Organization Match Card", on their website. This allows students to fill out their interests and what kind of organizations they would like to join to get a list of organizations that match their interests.

However, an issue with the Student Organization Match Card is that the matching between each student to certain organizations is done by some of the UTD SOC members. Since they are also students on UTD campus, they have school work to take care of. This means they will not instantly get back to the students that fill out this form; instead, as mentioned on the form, they would give the list of suitable organizations within 5 business days. This may be more efficient than exploring each organization one by one, but we feel that this process can be more efficient.

Our solution is to allow technology to do the matching process. Our primary goal is to develop a backend solution to whenever a UTD student plans to fill out the questions on the form and submits them, the backend will take the students' input and return a list of organizations that match their needs within minutes instead of days.

# MVP
- 3 Portions to this project: Website that users can enter their answers, database storing the organizations, and an AI model to analyze each organization's purpose
- Create a database that will store the list of organizations from the Excel sheet, the categories mentioned, and additional categories.
- Create an application that will use AI to read the mission statements of each organization and analyze what majors, academic/industry fields, or religions could apply if applicable. These will be used to create additional categories to store within the database of our choice. Only us creators have access to running this model.
- Create a website application for UTD students to access and answer the questions similar to those on Microsoft Forms.
- Have the website application take in students' inputs and do queries to our databases to retrieve a list of information.

# Tech Stack
- Frontend: React.js
- Backend (for the website): Node.js or Flask (Python)
- Database: Firebase, MongoDB, OracleDB, or any other MySQL or NoSQL database
- AI model (Separate from the website): Python

# Milestones
- Finalizing on what database to use
- Frontend:
  - Design the webpages
  - Integrate to the website's backend
- Database:
  - Create the structure of the database
  - Connect to both the AI Model and Website applications
- AI Model:
  - Preprocess the data
  - Push to the database
