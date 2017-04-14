# Homologue-me

## Environment setup
Install the Python 3.6: https://www.python.org/downloads/

brew install python3



http://blog.pinaxproject.com/2015/12/08/how-test-against-multiple-python-versions-parallel/

brew install pyenv pyenv-virtualenv pyenv-virtualenvwrapper

If using os x, needs to add this to .bash_profile:
```
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

export PYENV_VIRTUALENV_DISABLE_PROMPT=1
```

pyenv install 3.6.0


pyenv virtualenv 3.6.0 homolog-me

pyenv activate homolog-me


Install virtualenvwrapper
```
pip install virtualenvwrapper
```


export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh