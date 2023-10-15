# StudentOrgMatch
There are around 300+ organizations and clubs on UTD campus, which you can find [here](https://cometmail.sharepoint.com/sites/StudentOrganizationCenterSP/Lists/Student%20Organization%20Directory/All%20Items%20gallery.aspx), but a few of them can match the interests of each UTD student. It can take plenty of time just to find the organizations and/or clubs that match your interests. That's why UTD SOC added a Microsoft Forms link, named ["Student Organization Match Card"](https://forms.office.com/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbOt15QbPT51BmVL2B1nl3-xUNUo2NDhESkxFMTdHQlJJV1JGQVBYNFpLTC4u), on their [website](https://soc.utdallas.edu/). This allows students to fill out their interests and what kind of organizations they would like to join to get a list of organizations that match their interests.

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
- Website:
  - Frontend:
    - Design the webpages
    - Integrate with the website's backend
  - Backend:
    - Connect to the database
    - Queries to the database
    - Retrieve input and pass output to the frontend
- Database:
  - Create the structure of the database
  - Connect to both the AI Model and Website applications
- AI Model:
  - Read in the data
  - Preprocess the data
  - Set up a connection with OpenAI (preferrably GPT 3.5 Turbo)
  - Send the purpose statements of each organization to GPT 3.5 if the organization is academic, cultural, religious, or sport related to get specific details and add to our data.
  - Push to the database

# Stretch goals
- Sending the results to UTD students' emails
- Only allow UTD students to have access to the website? (Might not be needed)

# Resources
- [Figma for designing the webpages](https://www.figma.com/)
- [React](https://react.dev/learn)
- [React Bootstrap for an easy responsive UI](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
- [OpenAI Pricing](https://openai.com/pricing)
- [OpenAI Documentation](https://platform.openai.com/docs/libraries/python-library)
