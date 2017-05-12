#!/usr/bin/env bash

# Inspirado no dev.sh do https://github.com/tonylampada/djangular3

# set +e

RESTORE='\033[0m'
RED='\033[00;31m'
GREEN='\033[00;32m'
YELLOW='\033[00;33m'
BLUE='\[\e[0;34m\]'

# Pq ninguem merece ter que ficar decorando comando
# Instruções:
# 1) ". dev.sh"
# 2) "devhelp"
# 3) Seja feliz

# workon <venv>  # Muda isso pro nome do virtalenv do seu projeto

export PROJ_BASE="$(dirname ${BASH_SOURCE[0]})"
CD=$(pwd)
cd $PROJ_BASE
export PROJ_BASE=$(pwd)
cd $CD

function devhelp {
    echo_green "Dica: autocomplete funciona pros comandos abaixo ;)"
    echo_red   "------------------------------------------------------------------------"
    echo -e "${GREEN}devhelp${RESTORE}             Imprime este ${RED}help${RESTORE}"
    echo -e ""
    echo -e "${GREEN}gitstats${RESTORE}            Faz um git fetch + git status. Util pra evitar surpresas"
    echo -e "                    antes de um push."
    echo -e ""
    echo -e "${GREEN}runserver${RESTORE}           Runs the Django Webserver for development"
    echo -e ""
    echo -e "${GREEN}rebuild_venv${RESTORE}            Recria o virtualenv do Viva Decora"
    echo -e ""
}

function gitstats {
    dorun "git fetch" "Fetching repo"
    dorun "git status" "Status"
}

function echo_red {
    echo -e "${RED}$1${RESTORE}";
}

function echo_green {
    echo -e "${GREEN}$1${RESTORE}";
}

function echo_yellow {
    echo -e "${YELLOW}$1${RESTORE}";
}

function now_seconds {
    date +%s | cut -b1-13
}

function runserver(){
    cd homologme
    ./manage.py runserver
}

function rebuild_venv(){
    rm -rf ${PROJ_BASE}/venv/
    mkdir venv
    virtualenv -p /usr/local/bin/python3 ${PROJ_BASE}/venv/
    source ${PROJ_BASE}/venv/bin/activate
    pip install --upgrade pip
    pip install -r requirements.txt
    find . -name \*.pyc -delete
}

function produce_alias {
    echo "------------------------------------------------------------------------"
    echo "Este comando verde cria um alias que voce pode usar para cair"
    echo "no ambdev deste projeto a partir de qualquer lugar do seu bash."
    echo "Sugestão: adiciona no seu ~/.bashrc (Linux) ou no ~/.bash_profile (OS X)"
    echo "------------------------------------------------------------------------"
    echo_green "f_homologue-me() {"
    echo_green "   cd ~/projects/homologue-me"
    echo_green "   source venv/bin/activate"
    echo_green "   . dev.sh"
    echo_green "   devhelp"
    echo_green "}"
    echo_green "alias homologme=f_homologue-me"
    echo "------------------------------------------------------------------------"
}

function dorun {
    cmd="$1"
    name="$2"
    echo ----------------------------------
    echo_green "STARTING $name ..."
    echo "$cmd"
    t1=$(now_seconds)
    $cmd
    exitcode=$?
    t2=$(now_seconds)
    delta_t=$(expr $t2 - $t1)
    if [ $exitcode == 0 ]
    then
        echo_green "FINISHED $name in $delta_t s"
        echo ----------------------------------
    else
        echo_red "ERROR! $name (status: $exitcode, time: $delta_t ms)"
        echo ----------------------------------
        return $exitcode
    fi
}
