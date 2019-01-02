## EOSplorer - Your EOS Account Explorer

A litte explorer for your EOS account.

## Live Project

https://eosplorer.herokuapp.com

## Issues / Todo

- [D] set Meta Descriptions - added favicon. updated metta, manifest json, cleaned up index.html  
- [IN PROGRESS] Sometimes crashing on loading, Heroku HR12 error. Is this because componentWillMount not handled error? Investigate heroku logs - HR12 means request timeout  (https://devcenter.heroku.com/articles/error-codes#h12-request-timeout). 
  Have separated out components, and updated loading order
- Add as subdomain eosplorer.eosoceania.io Understand why CNAME record is failing
- Form validation / Account input. Add constraints of EOS account names. Understand why Regex for checking isUppercase is not checking every char as being typed
see App.js line 81
- Refractoring: Better to load whole response object to state?
- Grab account permission. Understand why line 120 fails.
//console.log(permissions[0].required_auth.keys[0].key);
- Make logic to check if active and owner keys are same
- Make it more responsive/ mobile friendly

- Grab balances of all tokens. Does any BP have /get_currency_stats endpoint enabled? See developers.eos.io
- Grab last 20 transactions. Will the Cryptolions Mongo Histpry API be helpful?
- Integrate scatter wallet. Will the scatter-js library be needed?
- Add staking functionality. See EOS js example broadcasts.
- Add send money functionality. See EOS js
- Add voting functionality. See EOS js

## Helpful docs
https://developers.eos.io/eosio-nodeos/reference
https://eospark.com/openapi
https://github.com/EOSIO/eosjs

### Connect with us!
We are a friendly and talkative team.
Find <a href="https://www.eosoceania.io">EOS Oceania</a> here:
<br><a href="https://t.me/joinchat/IB6xJg7tmo7v4knEJyQRSw" target="_blank" rel="noopener">Telegram</a> | <a href="https://discord.gg/eAdBZBv" target="_blank" rel="noopener">Discord</a> |  <a href="https://twitter.com/eosoceania" target="_blank" rel="noopener">Twitter</a> | <a href="https://steemit.com/@eosoceania" target="_blank" rel="noopener">Steemit</a> | <a href="https://www.reddit.com/user/eosoceania" target="_blank" rel="noopener">Reddit</a> | <a href="https://medium.com/eosoceania" target="_blank" rel="noopener">Medium</a> | <a href="https://www.linkedin.com/company/eosoceania" target="_blank" rel="noopener">LinkedIn</a> | <a href="https://www.youtube.com/channel/UCXdy_ey_cyZwuf8bvuymhmA" target="_blank" rel="noopener">Youtube</a>


### Additional things to do:
[DONE] Advanced.js: validateDOMNesting(...): <div> cannot appear as a descendant of <p>.
  This is because https://github.com/reactstrap/reactstrap/issues/715
  I believe this is because 'CardText' from reactstrap is expecting text, not a 'Progress'.
  To look into if we can do with out wrapping it in 'CardText'
[DONE] ./src/Producers.js Line 22:  'Table' is not defined  react/jsx-no-undef
[DONE] Producer: Each child in an array or iterator should have a unique "key" prop.
    Check the render method of `Producers`. See https://fb.me/react-warning-keys for more information.
[DONE] ./src/App.js
  Line 1:    'Component' is defined but never used                                                                      no-unused-vars
  Line 7:    'Alert' is defined but never used                                                                          no-unused-vars
  Line 7:    'Table' is defined but never used                                                                          no-unused-vars
  Line 7:    'Progress' is defined but never used                                                                       no-unused-vars
  Line 7:    'Button' is defined but never used                                                                         no-unused-vars
  Line 14:    'bootstrap' is assigned a value but never used                                                             no-unused-vars
  Line 20:    'bStyle' is assigned a value but never used                                                                no-unused-vars
  Line 87:   Expected '===' and instead saw '=='                                                                        eqeqeq
  Line 101:  Expected '===' and instead saw '=='                                                                        eqeqeq
  Line 168:   img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
[DONE] webpackHotDevClient.js:120 ./src/Footer.js
  Line 3:  'Card' is defined but never used                no-unused-vars
  Line 3:  'CardImg' is defined but never used             no-unused-vars
  Line 3:  'CardText' is defined but never used            no-unused-vars
  Line 3:  'CardBody' is defined but never used            no-unused-vars
  Line 3:  'CardTitle' is defined but never used           no-unused-vars
  Line 3:  'CardSubtitle' is defined but never used        no-unused-vars
  Line 3:  'Button' is defined but never used              no-unused-vars
  Line 3:  'Alert' is defined but never used               no-unused-vars
  Line 3:  'Progress' is defined but never used            no-unused-vars
  Line 7:  'FontAwesomeIcon' is defined but never used     no-unused-vars
  Line 12:  'bootstrap' is assigned a value but never used  no-unused-vars
[DONE] webpackHotDevClient.js:120 ./src/Producers.js
  Line 3:  'Card' is defined but never used          no-unused-vars
  Line 3:  'CardImg' is defined but never used       no-unused-vars
  Line 3:  'CardText' is defined but never used      no-unused-vars
  Line 3:  'CardBody' is defined but never used      no-unused-vars
  Line 3:  'CardTitle' is defined but never used     no-unused-vars
  Line 3:  'CardSubtitle' is defined but never used  no-unused-vars
  Line 3:  'Button' is defined but never used        no-unused-vars
  Line 3:  'Alert' is defined but never used         no-unused-vars
  Line 3:  'Progress' is defined but never used      no-unused-vars
[DONE] webpackHotDevClient.js:120 ./src/Basics.js
  Line 3:  'CardImg' is defined but never used             no-unused-vars
  Line 3:  'CardText' is defined but never used            no-unused-vars
  Line 3:  'CardBody' is defined but never used            no-unused-vars
  Line 3:  'Button' is defined but never used              no-unused-vars
  Line 3:  'Alert' is defined but never used               no-unused-vars
  Line 3:  'Progress' is defined but never used            no-unused-vars
  Line 12:  'bootstrap' is assigned a value but never used  no-unused-vars
[DONE] webpackHotDevClient.js:120 ./src/Advanced.js
  Line 3:  'CardImg' is defined but never used   no-unused-vars
  Line 3:  'CardBody' is defined but never used  no-unused-vars
  Line 3:  'Button' is defined but never used    no-unused-vars
  Line 3:  'Alert' is defined but never used     no-unused-vars

  ## Optimization
    Loading: 12ms
    script: 685
    render: 17
    other: 230
    Idle: 5830
Load: 3.76s
DOMContentLoad: 3.66s

at=error code=H12 desc="Request timeout" method=GET path="/" host=eosplorer.herokuapp.com request_id=2459982f-14bb-411b-b946-a703b21ff7d1 fwd="115.64.45.25" dyno=web.1 connect=1ms service=30001ms status=503 bytes=0 protocol=https

## vulnerability
npm WARN rollback Rolling back readable-stream@2.3.6 failed (this is probably harmless): EPERM: operation not permitted, lstat 'C:\Users\jack\bin\eoso\workspace\eosplorer\node_modules\fsevents\node_modules'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
                       === npm audit security report ===

# Run  npm install --save-dev react-scripts@2.1.2  to resolve 1 vulnerability
  High            Missing Origin Validation
  Package         webpack-dev-server
  Dependency of   react-scripts [dev]
  Path            react-scripts > webpack-dev-server
  More info       https://nodesecurity.io/advisories/725

  - there's currently no fix until webpack fixes their problem. https://stackoverflow.com/questions/53245592/how-to-fix-missing-origin-validation-error-for-webpack-dev-server-in-npm
  https://www.npmjs.com/advisories/725/versions



