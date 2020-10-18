# Welcome to Employee Portal
An employee portal where the employees can apply for the available opening positions in the company. 
Also, the project managers can add an opening for the project.


### Installation
1. Clone or download the repository
```
git clone https://github.com/alpha-gamma/employee-portal.git
```

2. Install dependencies:
```
npm install
```

3. Copy `.env.example` as `.env`

4. Add the following settings in `.env` file:

    4.1. Jwt configuration
    ```
    JWT_SECRET
    ```

    4.2. Database configuration
    ```
    DB_URL
    ```

    4.3. Hashing configuration
    ```
    SALT_ROUNDS
    ```
    
### Run
```
npm start
```

### Screenshots

#### Login
![image](https://user-images.githubusercontent.com/1653101/96375329-14671a80-1196-11eb-9dba-90ea7085c1e6.png)

#### Create Account
![image](https://user-images.githubusercontent.com/1653101/96375356-3b255100-1196-11eb-9848-a47f5b1cbd07.png)

#### Manager home page
![image](https://user-images.githubusercontent.com/1653101/96375418-8b9cae80-1196-11eb-84c1-c7d7daf2a6c9.png)

#### Employee home page
![image](https://user-images.githubusercontent.com/1653101/96375456-ba1a8980-1196-11eb-94f7-312eea14e13b.png)

#### Opening details
![image](https://user-images.githubusercontent.com/1653101/96375491-e8986480-1196-11eb-94c3-fb408d260ef9.png)

#### Create project opening
![image](https://user-images.githubusercontent.com/1653101/96375504-01a11580-1197-11eb-9d9a-f3ccb69fed6f.png)

