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
    1. Jwt configurations
    ```
    JWT_SECRET
    ```

    2. Database configurations
    ```
    DB_URL
    ```

    3. Hashing configurations
    ```
    SALT_ROUNDS
    ```
