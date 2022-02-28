const {databases} = require("../db.js");
const reader = require('xlsx');
const fs = require('fs');
var nodemailer = require('nodemailer');
var path_name = __dirname + '/../response.xls';

const username = 'roshan.kumar';
const password = 'Dvara@2022';
const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
const authorization = `Basic ${encodedBase64Token}`;
var request = require('request');
loan_url = "https://dvara.finos.tech/fineract-provider/api/v1/loans";
report_url = "https://dvara.finos.tech/fineract-provider/api/v1/reports";
client_url = "https://dvara.finos.tech/fineract-provider/api/v1/clients";

console.log(authorization);


const listallloan = async (req, res, next) => {
  console.log(req.body);
request(
    {
        url : loan_url,
        headers : {
            "Authorization" : authorization,
            "Fineract-Platform-TenantId": 'default'
        }
    },
    function (error, response, body) {
      const usersRef = databases[3].ref(`/Files/FinOS/`).child("loans");
      var final_data = JSON.parse(body);
      console.log(final_data.pageItems);
      usersRef.update(final_data.pageItems);
      res.json({Status:"Successfully", message: "Mail Sent Successfully", data :final_data.pageItems, Code:200});
    }
);



}

const findloanbyId = async (req, res, next) => {
  request(
      {
          url : loan_url+'/'+req.body.loanId,
          headers : {
              "Authorization" : authorization,
              "Fineract-Platform-TenantId": 'default'
          }
      },
      function (error, response, body) {
        const usersRef = databases[3].ref(`/Files/FinOS/`).child("loans");
        var final_data = JSON.parse(body);
        usersRef.update(final_data.pageItems);
        res.json({Status:"Successfully", message: "Mail Sent Successfully", data :final_data.pageItems, Code:200});
      }
  );
  
  
  
  }

const findloanTransactions = async (req, res, next) => {
  request(
      {
          url : loan_url+'/'+req.body.loanId+'/transactions/'+req.body.transactionId,
          headers : {
              "Authorization" : authorization,
              "Fineract-Platform-TenantId": 'default'
          }
      },
      function (error, response, body) {
        const usersRef = databases[3].ref(`/Files/FinOS/`).child("loans");
        var final_data = JSON.parse(body);
        usersRef.update(final_data.pageItems);
        res.json({Status:"Successfully", message: "Mail Sent Successfully", data :final_data.pageItems, Code:200});
      }
  );
    
    
    
}


const listallreports = async (req, res, next) => {
  request(
      {
          url : report_url,
          headers : {
              "Authorization" : authorization,
              "Fineract-Platform-TenantId": 'default'
          }
      },
      function (error, response, body) {
        const usersRef = databases[3].ref(`/Files/FinOS/`).child("reports");
        var final_data = JSON.parse(body);
        usersRef.update(final_data.pageItems);
        res.json({Status:"Successfully", message: "Mail Sent Successfully", data :final_data.pageItems, Code:200});
      }
  );

}

  const findreportsbyId = async (req, res, next) => {
    request(
        {
            url : report_url+'/'+req.body.id,
            headers : {
                "Authorization" : authorization,
                "Fineract-Platform-TenantId": 'default'
            }
        },
        function (error, response, body) {
          const usersRef = databases[3].ref(`/Files/FinOS/`).child("reports");
          var final_data = JSON.parse(body);
          usersRef.update(final_data.pageItems);
          res.json({Status:"Successfully", message: "Mail Sent Successfully", data :final_data.pageItems, Code:200});
        }
    );
    
    
    
}

const listallclient = async (req, res, next) => {
  request(
      {
          url : client_url,
          headers : {
              "Authorization" : authorization,
              "Fineract-Platform-TenantId": 'default'
          }
      },
      function (error, response, body) {
        const usersRef = databases[3].ref(`/Files/FinOS/`).child("clients");
        var final_data = JSON.parse(body);
        usersRef.update(final_data.pageItems);
        res.json({Status:"Successfully", message: "Mail Sent Successfully", data :final_data.pageItems, Code:200});
      }
  );
  

}
  
const findclientbyId = async (req, res, next) => {
    request(
        {
            url : client_url+'/'+req.body.clientId,
            headers : {
                "Authorization" : authorization,
                "Fineract-Platform-TenantId": 'default'
            }
        },
        function (error, response, body) {
          const usersRef = databases[3].ref(`/Files/FinOS/`).child("clients");
          var final_data = JSON.parse(body);
          usersRef.update(final_data.pageItems);
          res.json({Status:"Successfully", message: "Mail Sent Successfully", data :final_data.pageItems, Code:200});
        }
    );
  
  
}


  
const findclientAccount = async (req, res, next) => {
  request(
      {
          url : client_url+'/'+req.body.clientId+'/accounts',
          headers : {
              "Authorization" : authorization,
              "Fineract-Platform-TenantId": 'default'
          }
      },
      function (error, response, body) {
        const usersRef = databases[3].ref(`/Files/FinOS/`).child("clients");
        var final_data = JSON.parse(body);
        usersRef.update(final_data.pageItems);
        res.json({Status:"Successfully", message: "Mail Sent Successfully", data :final_data.pageItems, Code:200});
      }
  );


}


module.exports = {
  listallloan,
  findloanbyId,
  findloanTransactions,
  listallreports,
  findreportsbyId,
  listallclient,
  findclientbyId,
  findclientAccount
};