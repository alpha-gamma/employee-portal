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
