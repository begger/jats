Just another ticketing system
==============================

## Dependencies
Mongo
Grunt
Bower
## Installation
Clone the repo, `npm install`. The app assumes you have a mongo instance
running on localhost but all that configuration lives in
`config/config.js`. Make sure you have `grunt-cli` installed globally
along with bower (for bootstrap and jquery for now) for workflow
purposes.

## Development
In the command line, invoke the grunt default task with just `grunt`.
That will run the development server which watches and live reloads when
most files are changed.

## Testing
Just `grunt test`.
