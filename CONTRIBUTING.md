## Environment Setup 

To contribute to the frontend side, you must have this dependencies installed:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally)

```bash
# Clone or fork this repository
# If you want to clone, run:
$ git clone https://github.com/taciogt/homologue-me.git
# Install the dependencies
$ npm install
```

## Run the Frontend-only dev environment

To run the frontend environment, just run
```bash
$ gulp webserver
```

This command will start a local server for static files at port :8000 and will open the catalog components page.

To execute all javascript tests, run:
 ```bash
$ npm test
```

## Run the Backend Environment

To contribute to the backend side, you must have this dependencies installed:

- [Git](https://git-scm.com/downloads)
- [Python 3.4](https://www.python.org/downloads/)
- [virtualenvwrapper](http://virtualenvwrapper.readthedocs.io/en/latest/index.html)

### Initial Set Up
```bash
$ mkvirtualenv homologme
$ pip install -r requirements.txt
$ ./manage.py migrate
$ deactivate
```

### Run the backend server
```bash
$ workon homologme
$ . dev.sh && runserver
```

### Run inside a docker container
```bash
$ docker-compose up
```