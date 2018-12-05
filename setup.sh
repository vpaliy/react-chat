#!/bin/sh
current_directory=$PWD

# Prepare React
cd $current_directory/frontend/
npm install

echo "Frontend dependencies have been installed."

# Prepare Flask backend
cd $current_directory/backend/

source venv/bin/activate
pip install -r requirements.txt

echo "Backend dependencies have been installed."

export FLASK_APP=chat
export FLASK_ENV=development

echo "Flask server is ready to run."
