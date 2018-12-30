## EOSplorer - Your EOS Account Explorer

A litte explorer for your EOS account.

## Live Project

https://eosplorer.herokuapp.com

## Issues / Todo

- set Meta Descriptions 
- Sometimes crashing on loading, Heroku HR12 error. Is this because componentWillMount not handled error? Investigate heroku logs
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
