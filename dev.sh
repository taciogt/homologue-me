#!/usr/bin/env bash

# Inspired by dev.sh from https://github.com/tonylampada/djangular3

# set +e

RESTORE='\033[0m'
RED='\033[00;31m'
GREEN='\033[00;32m'
YELLOW='\033[00;33m'
BLUE='\[\e[0;34m\]'

export PROJ_BASE="$(dirname ${BASH_SOURCE[0]})"
CD=$(pwd)
cd $PROJ_BASE
export PROJ_BASE=$(pwd)
cd $CD

function devhelp {
    echo_green "Tip: Autocomplete works for the commands below ;)"
    echo_red   "------------------------------------------------------------------------"
    echo -e "${GREEN}devhelp${RESTORE}             Prints this ${RED}help${RESTORE}"
    echo -e ""
    echo -e "${GREEN}gitstats${RESTORE}            Executes a git fetch and git status."
    echo -e ""
    echo -e "${GREEN}runserver${RESTORE}           Runs the Django's server for development"
    echo -e ""
    echo -e "${GREEN}rebuild_venv${RESTORE}        Clear the virtualenv and reinstall the project dependencies."
    echo -e ""
    echo -e "${GREEN}produce_alias${RESTORE}       Shows how to create an alias to the development environment."
    echo -e ""
}

function gitstats {
    git fetch
    git status
}

function build_docker {
    docker build . --tag homologme
}

function runserver(){
    cd homologme
    ./manage.py runserver
}

function rebuild_venv(){
    wipeenv homologme
    workon homologme
    pip install --upgrade pip
    pip install -r requirements.txt
    find . -name \*.pyc -delete
}

function produce_alias {
    echo "------------------------------------------------------------------------"
    echo "This green command creates an alias that can be used to get in"
    echo "the development environment from anywhere in your bash."
    echo "Sugestion: insert this in your ~/.bashrc (Linux) or ~/.bash_profile (OS X)"
    echo "------------------------------------------------------------------------"
    echo_green "f_homologue-me() {"
    echo_green "   cd $(pwd)"
    echo_green "   workon homologme"
    echo_green "   . dev.sh"
    echo_green "   devhelp"
    echo_green "}"
    echo_green "alias homologme=f_homologue-me"
    echo "------------------------------------------------------------------------"
}

function echo_green {
    echo -e "${GREEN}$1${RESTORE}";
}

function echo_red {
    echo -e "${RED}$1${RESTORE}";
}