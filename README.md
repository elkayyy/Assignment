# Assignment
## Have I Been Pwned API Integration.

**Description**

This project integrates the "Have I Been Pwned" API by checking if email addresses or accounts have been compromised in data breaches. The application allows users to enter their email addresses or accounts and verify if they have been exposed in known breaches. 

**Prerequisites**
* Docker
* Docker Compose

**Key Features:**
* Check if an email address has been compromised in any known data breaches.
* Provide recommendations for securing accounts if a breach is detected.
* User-friendly interface for seamless interaction.

**How to run (Updated Version, now Dockerized.)**
* Simply Clone the application for github  ```git clone <repository>```
* Once downloaded ```cd my-app```
* Setup the .env file. It must be placed in ```my-app``` directory along with ```docker-compose.yaml``` file.

```
      REACT_APP_DB_HOST=mysql
      REACT_APP_DB_USER=root
      REACT_APP_DB_PASSWORD=root
      REACT_APP_DB_NAME=mydatabase
      REACT_APP_API_KEY="I will provide the API KEY"
      REACT_APP_JWT_SECRET=anyComplicatedStringYouPrefer
```
  
* Run ```docker-compose up --build```
* Navigate to http://localhost:3000

**Important Notes**
1. For simplicity, the application is using localStorage to protect routes such as /main. This is **BAD** practice for security.
2. Security Risks: Data in localStorage is accessible from any JavaScript code on the same domain, making it vulnerable to XSS (Cross-Site Scripting) attacks.
3. No Expiry: Data stored in localStorage does not expire automatically, which can lead to sensitive data lingering for an indefinite period.

**An Alternative and proper solution**
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
MariaDB [mydatabase]> select * from users;
+----+----------+--------------------------------------------------------------+------------+-----------+
| id | username | password                                                     | first_name | last_name |
+----+----------+--------------------------------------------------------------+------------+-----------+
| 49 | guest    | $2a$08$E9kOi./2cxq59Vn4nbT8JOwYIlcHhVU9RbDYXg5lnMVulsoVQ.mD6 | Guest      | Guester   |
| 50 | testcase | $2a$08$cti8T4qwFXJkoOZNLQO2turGr1IWWRNqIrnBUZNetkJlmZ.3oIyRK | Test2      | Test2     |
+----+----------+--------------------------------------------------------------+------------+-----------+

```



