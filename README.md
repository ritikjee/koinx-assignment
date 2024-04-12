# Horizon - A Cryptocurrency app

This project is

## Features

- Real Time Datao
- Almost all currencies are available

## Tech Stack

**Server:** Node, Express, MongoDB

### Preqrequisites

#### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

#### Install TypeScript

Refer to https://www.typescriptlang.org/ to install typescript

```bash
    npm install -g typescript
```

#### Install ts-node

Refer to https://www.typescriptlang.org/ to install typescript

```bash
    npm install -g ts-node
```

#### Learn Javascript

If you are new to JS then you can refer to their docs.

## Cloning and Running the Application in local

- Clone the project into local.
- Go to `root folder` and type the following command to install all npm packages

  ```bash
    npm install
  ```

- In `root folder`, Change the `.env.example` file to `.env` and add the required credentials.
  ```bash
    PORT=
    MONGO_URI=
  ```

````
  You can get the `MONGO_URI` from [MongoDB Cloud ](https://cloud.mongodb.com/) by creating an account.

- Run the application by typing following command in terminal

  ```bash
  npm run build
  npm run start
````

- The application will by default run on port `8080` if `PORT` variable is not provided in `.env`

- The Project Runs on [http://localhost:8080/](http://localhost:8080/).

`Contributions are welcome 🎉🎉`

## Contributing

If you would like to contribute to SpotiStat, please open an issue or pull request on GitHub

### Ways to contribute

1. Solve the issues which are listed.
2. Create your own issue and then send PR.

Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your own machine
3.  **Commit** changes to your own branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull request** so that we can review your changes
