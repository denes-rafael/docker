#!/bin/sh

pip install --upgrade pip
pip install bottle==0.12.13 psycopg2==2.7.* redis==2.10.5
python -u sender.py