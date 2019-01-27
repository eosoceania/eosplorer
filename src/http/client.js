import GenericUtil from '../util/GenericUtil';

var request = require('request');

export default class Client {


    static loadUserInfo(term, callback){
        
        var options = {
          method: 'POST',
          url: 'https://api.eosnewyork.io/v1/chain/get_account',
          body: { account_name: term },
          json: true
        };
    
        //console.log("load user info, handleUserInfoReponse: ", handleUserInfoReponse);
        request(options, callback);
    
    }
    
    static handleLoadUserInfo(error, response, body){
        let _errorMsg = "An unexpected error occured while getting user detail please try again later.";    
        return Client._handleResponse(error, response, body, Client._toUserInfo, _errorMsg);
    }

    static _toUserInfo(body){
        let userInfo =  null;
        if(body){   //todo: replac with GenericUtil nvl function 
            userInfo = {
                name: body.account_name, liquid: body.core_liquid_balance, cpu : body.total_resources.cpu_weight, 
                net : body.total_resources.net_weight, cpu_limit: body.cpu_limit, net_limit: body.net_limit, 
                ram_quota: body.ram_quota, ram_usage: body.ram_usage, producers : body.voter_info.producers
            };
        }
        return userInfo;
    }
            

    static _handleResponse(error, response, body, retObjConverter, errorMsg = "error while handling response"){
        console.log("request result returned", response);        
        if (error) { return {eMsg: errorMsg, retObj: null}; }
        
        if (response.statusCode === 200) {
        let retObj = retObjConverter(body);
        return {eMsg: null, retObj};
        } else {  
        return {eMsg: errorMsg, retObj: null};
        }
    }


    static loadCurrencyStatus(callback){
        var options = {
            method: 'POST',
            url: 'https://eosbp.atticlab.net/v1/chain/get_currency_stats',  //some other producers have an options req restriction or not giving response
            //url: 'https://api.eosnewyork.io/v1/chain/get_currency_stats', //couldn't call new york twice in a row - too many req error
            body: {symbol: "EOS", code: "eosio.token"},
            json: true
          };
      
          //console.log("load user info, handleUserInfoReponse: ", handleUserInfoReponse);
          request(options, callback);
    }

    static handleLoadCurrencyStatus(error, response, body){
        return Client._handleResponse(error, response, body, Client._toCurrencyStatus);
    }

    static _toCurrencyStatus(body){
        let currencyStatus = null;
        if(body){
            currencyStatus = body.EOS;
        }
        return currencyStatus;
    }



}


