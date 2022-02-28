const {databases} = require("../db.js");
const reader = require('xlsx');
const fs = require('fs');


const list_total_no_of_farmer_cattles = async (req, res, next) => {
  var leadsRef = databases[3].ref(`/data/farmers`);
  leadsRef.on('value',async function(snapshot) {
  var userdevice_data = snapshot.val();
  final_data = [];
  total_farmervalue = 0;
  total_cattlevalue = 0
  for (let devicelist of Object.keys(userdevice_data)) {
    var capital = userdevice_data[devicelist];
    total_farmervalue = total_farmervalue + 1;
    var temp_data = capital.cattle
    console.log("next");
    var temp_count = 0;
    for (let caplist of Object.keys(temp_data)) {
      console.log(caplist);
      total_cattlevalue = total_cattlevalue  +  1;
      temp_count = temp_count + 1;
    }
    final_data.push({
      phone_number: devicelist,
      farmer_count : 1,
      cattle_count : temp_count
    });
  }  
  final_output = {
    final_data : final_data,
    total_farmer_count : total_farmervalue,
    total_cattle_count : total_cattlevalue
  }
  console.log(final_output)
  res.json({Status:"Successfully", message: "Get Total No of FarmersandCattles", Data : final_output, Code:200});
  });
}


module.exports = {
  list_total_no_of_farmer_cattles
};