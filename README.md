# Custer Seven Technical Test

Single Page Application based on MVVM pattern build with AngularJS. Application can be run as HTML + JavaScript by placing files in Apache / IIS directory or channel headers via proxy using PM2 + NGNIX.

Mistakes:
* Bad approach to pagination. Only after producing functionality on front end to paginate returned results realized there was option to perform paginated queries in API routes.
* More visual representation to the UI eg. icons based on file type, breadcrumbs for easier navigation, loader for data loading and retrieving, edge case handling where appropriate

Other notes:
* Coding on Mac Laptop with no IE

### Preacquisitions
* NodeJS v4.x: http://nodejs.org  - PLEASE NOTE VERSION
* bower
* gulp

### Installation instructions
* run command ```npm install```
* run command ```bower install```
* run command ```gulp```
