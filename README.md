
This Is an angular 1.2 basic mangement UI for the [betterFlashCards project](https://github.com/razawi/betterFlashCards) 



### Get around the project structure overview Info

The file structure Is feature based Instead of the traditional division to 
```
templates 
---navbar.tmpl.html
---profile.tmpl.html
controllers
---NavbarCtrl.js
---ProfileCtrl.js
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

### Running and testing a local environment.
```
git clone https://github.com/razawi/angular-flashCards-client.git
cd angular-flashCards-client
bower install
npm install -g http-server
http-server -p 3333
protractor .\test\protractor.conf.js
```

on your favorite web browser navigate to 
```http://127.0.0.1:3333/#/curricula```

The [API Server](https://github.com/razawi/flash-cards-server) Is a more mature project.

Be sure to get a general idea by looking at the [full project doc](https://github.com/razawi/betterFlashCards)





## TODO
* map API calls URL's for server adjustments
* UI pop ups for login and sign up 
* fix load directive or get new one 
* should the link also be a button? make logic for It

* button logic with params - Inside widget CTRL 
* Think about editing 
    * ng-form validating forms and subforms before saving

* should all but cards have a description?

* on server side: require('faker') for fake users
