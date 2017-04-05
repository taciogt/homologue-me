#!/usr/bin/env bash

# Inspirado no dev.sh do https://github.com/tonylampada/djangular3

# set +e

RESTORE='\033[0m'
RED='\033[00;31m'
GREEN='\033[00;32m'
YELLOW='\33[00;33m'

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
    echo -e "${GREEN}devhelp${RESTORE}             Imprime este ${RED}help${RESTORE}"
    echo -e ""
    echo -e "${GREEN}gitstats${RESTORE}              Faz um git fetch + git status. Util pra evitar surpresas"
    echo -e "                    antes de um push."
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

function rebuild_venv(){
    ls $PROJ_BASE
    virtualenv -p /usr/local/bin/python3 $HOME/dev/venvs/vd34

    rm $(pyenv root)/versions/homolog-me

#    rm -rf $HOME/dev/venvs/vd34
#    virtualenv -p /usr/local/bin/python3 $HOME/dev/venvs/vd34
#    vd
#    pip install --upgrade pip
#    pip install -r requirements-test.txt
#    find . -name \*.pyc -delete
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

echo_green "Dica: autocomplete funciona pros comandos abaixo ;)"
echo_red   "------------------------------------------------------------------------"
devhelp