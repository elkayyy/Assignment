# Assignment
## Have I Been Pwned API Integration.

**Description**

This project integrates the "Have I Been Pwned" API by checking if email addresses or accounts have been compromised in data breaches. The application allows users to enter their email addresses or accounts and verify if they have been exposed in known breaches. 

**Prerequisites**
* Node.js
* npm (Node Package Manager)
* MySQL

**Key Features:**
* Check if an email address has been compromised in any known data breaches.
* Provide recommendations for securing accounts if a breach is detected.
* User-friendly interface for seamless interaction.

**How to run**
1. Navigate to the client directory: ```npm install``` and then ```npm start```
2. Login in mysql (linux) : ```mysql -u root -p```
3. Setting Up MySQL Database (while logged in) : ```CREATE DATABASE your_database_name; ```
4. Insert MySQL provided in the repository: <br /> <br /> ```mysql -u your_username -p your_database_name < ./database_dump.sql ```<br /> (Replace your_username with your MySQL username, and your_database_name with the name of your database.) <br /> <br />
5. Run MySql server:  ```sudo systemctl start mysql in linux```
6. Create an .env file with the following properties and place it into the **Server** directory: <br /> <br />
    ```
      REACT_APP_DB_HOST=127.0.0.1 (Use 127.0.0.1 instead of localhost)
      REACT_APP_DB_USER=your_database_username 
      REACT_APP_DB_PASSWORD=your_database_password 
      REACT_APP_DB_NAME=your_database_name
      REACT_APP_API_KEY="I will provide the API KEY" 
     ```
7. Once MySql is running and you placed the .env file inside the **Server** directory, run : ```node ServerApp.js```
8. Ready to go

**Important Notes**
1. For simplicity, the application is using localStorage to protect routes and such as main. This is **BAD** practice for security.
2. Security Risks: Data in localStorage is accessible from any JavaScript code on the same domain, making it vulnerable to XSS (Cross-Site Scripting) attacks.
3. No Expiry: Data stored in localStorage does not expire automatically, which can lead to sensitive data lingering for an indefinite period.

**An Alternative**
1. Token-Based Authentication: Use JSON Web Tokens (JWT) for secure authentication.

**Other**

**Database representation**

 ```
 +----------------------+
| Tables_in_mydatabase | 
+----------------------+ 
| users                | 
+----------------------+
```

```
+----+----------+----------+------------+------------+ 
| id | username | password | first_name | last_name  |
+----+----------+----------+------------+------------+
|  4 | guest    | guest    | mr         | star       |
|  5 | jony     | dep      | John       | Do         |
| 43 | niuc     | niuc1234 | Niucec     | Gumeniucec |
| 44 | dsadas   | das      | sadas      | dsad       |
+----+----------+----------+------------+------------+
```



