
This Is an angular 1.2 basic UI for the [betterFlashCards project](https://github.com/razawi/betterFlashCards) 

The file structure Is feature based Instead of the traditional division to 
```
templates 
services 
componentes 
etc..
```
I believe It's more scalable and developer convinient to divide it to
```
navbar
---NavbarCtrl.js
---navbar.tmpl.html
profile
---ProfileCtrl.js
---profile.tmpl.html
```

Otherwise, why do we even display file extensions?

to run a local environment run the following in terminal
```
git clone https://github.com/razawi/angular-flashCards-client.git
cd angular-flashCards-client/app
bower install
npm install http-server
http-server
```

The [API Server](https://github.com/razawi/flash-cards-server) Is a more mature project 
be sure to checkout the [full project doc](https://github.com/razawi/betterFlashCards)