📌 Description

The COLORS application is a full-stack web application that allows users to manage a personalized list of colors. Users can register/login securely, add new colors to their account, and search through their saved colors.
The system uses a LAMP stack architecture and communicates through REST-style API endpoints that connect the front end interface to a MySQL database.
The application demonstrates core concepts including:
User authentication
Database CRUD operations
API integration
Client-server communication
Basic security practices such as password hashing

🛠️ Technologies Used
Backend
Linux (Ubuntu) – Hosting environment
Apache – Web server
MySQL – Database management
PHP – API endpoints
Frontend
HTML5
CSS3
JavaScript
MD5 hashing library (for password hashing)

Tools & Hosting
DigitalOcean (LAMP droplet hosting)
FTP client (FileZilla / PSFTP)
Postman (API testing)

⚙️ High-Level Setup Instructions
1. Create Hosting Environment
Create a LAMP droplet on DigitalOcean.
Connect via SSH.
Navigate to the web root:
cd /var/www/html
2. Database Setup
Log into MySQL:
mysql -u root -p
Create the database:
CREATE DATABASE COP4331;
USE COP4331;
Create tables:
Users
Colors
Contacts
Insert sample data.
Create API database user and grant permissions.
3. Project Directory Structure
/var/www/html
│── css/
│── images/
│── js/
│── api/
│── index.html
│── color.html
4. Upload Files
Upload:
Frontend files → html, css, js
API files → inside LAMPAPI/
5. Configure Database Connection
Inside each PHP API file:
$conn = new mysqli("localhost", "DB_USERNAME", "DB_PASSWORD", "DB_NAME");
Replace with your credentials.
▶️ How to Run and Access the Application
Run the Application
Start your LAMP server (already running on droplet).
Upload all project files.
Ensure database is configured.
Open a browser and go to:
http://YOUR_DOMAIN_OR_IP
API Endpoints
All requests use POST with JSON.
Login
/api/Login.php
Add Color
/api/AddColor.php
Search Colors
/api/SearchColors.php
Test using Postman or similar tools.

⚠️ Assumptions & Limitations
Assumptions
User has a working LAMP environment.
Database credentials are correctly configured.
Files are uploaded with correct permissions.
Limitations
Basic authentication (no session management or JWT).
Password hashing uses MD5 (not secure for production).
No input sanitization beyond basic checks.
No role-based access control.
Limited UI error handling.
🤖 AI Usage Disclosure
Portions of this project involved the use of AI tools for:
Code explanation
Debugging assistance
Documentation generation
All implementation logic was reviewed, tested, and understood by the student to comply with class academic integrity policies.

📚 Notes for New Users
This README assumes no prior experience. To successfully run the project, you must:
Set up hosting
Configure the database
Upload API and frontend files
Update connection credentials
Once completed, the application should run entirely through the browser.