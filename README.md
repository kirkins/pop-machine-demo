# Pop Machine

GUI of demo project which looks at the management and diagnostics
of a fleet of pop machines.

## Instructions

### Requirments

The following must be installed to compile, but you can run `npm start` without to test.

    sudo apt-get install build-essential clang libdbus-1-dev libgtk2.0-dev \
                       libnotify-dev libgnome-keyring-dev libgconf2-dev \
                       libasound2-dev libcap-dev libcups2-dev libxtst-dev \
                       libxss1 libnss3-dev gcc-multilib g++-multilib curl \
                       gperf bison

### Run

Install dependencies & start

    npm install
    npm start

### Build

Build for Windows and Linux:

    npm run dist

Build for Mac *(only works on a Mac)*:

    npm run mac
