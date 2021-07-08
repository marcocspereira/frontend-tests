# Front-End automated tests

A repository related to Tax IT training session about front-end automated tests.

## How to run

### With Docker

```bash
# once
$ docker-compose run angular_cli npm install

# if you want to run service that serve the application
$ docker-compose up angular_cli

# if you want to run service that hosts tests
$ docker-compose up angular_karma

# if you want to run both
$ docker-compose build
$ docker-compose up
```

### Locally

```bash
# once
$ npm install

# if you want to run app
$ npm start

# if you want to run tests
$ ng test
```

---

Then open your browser with:

- http://localhost:9876 for tests.
- http://localhost:4200 for app.
