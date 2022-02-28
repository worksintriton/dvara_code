// const firebase = require("firebase");

// const firebaseConfig = {
//   apiKey: "AIzaSyC8mDWMZ_I-_6Gn7Em8Mox0LLju9bZXSZw",
//   authDomain: "test2-37b23.firebaseapp.com",
//   databaseURL: "https://test2-37b23-default-rtdb.firebaseio.com/",
//   projectId: "test2-37b23",
//   storageBucket: "test2-37b23.appspot.com",
//   messagingSenderId: "786145503152",
//   appId: "1:786145503152:web:96ea8a890984df7df61875",
//   measurementId: "${config.measurementId}"
// };

// const db = firebase.initializeApp(firebaseConfig);


// module.exports = db;

const firebase = require("firebase");


var firebaseConfig = [
  {  ///Second
      apiKey: "AIzaSyC8mDWMZ_I-_6Gn7Em8Mox0LLju9bZXSZw",
      authDomain: "test2-37b23.firebaseapp.com",
      databaseURL: "https://test2-37b23-default-rtdb.firebaseio.com/",
      projectId: "test2-37b23",
      storageBucket: "test2-37b23.appspot.com",
      messagingSenderId: "786145503152",
      appId: "1:786145503152:web:96ea8a890984df7df61875",
      measurementId: "${config.measurementId}"
    },
    { ///First
      apiKey: "AIzaSyBKHFCM64aeZUjjwcvC1IcOPx2ZbuNY0X4",
      authDomain: "first-41aad.firebaseapp.com",
      databaseURL: "https://first-41aad-default-rtdb.firebaseio.com/",
      projectId: "first-41aad",
      storageBucket: "first-41aad.appspot.com",
      messagingSenderId: "711285291283",
      appId: "1:711285291283:web:1a8eefd9f0a2b0cfb0c2e6",
      measurementId: "${config.measurementId}"
      // measurementId: "G-DDR364BEX2"
    },
    { ///Third
      apiKey: "AIzaSyCj-JImEl9FoS2xk19PTWnlb4niShzhWkY",
      authDomain: "testing-7d462.firebaseapp.com",
      databaseURL: "https://testing-7d462-default-rtdb.firebaseio.com/",
      projectId: "testing-7d462",
      storageBucket: "testing-7d462.appspot.com",
      messagingSenderId: "821967555297",
      appId: "1:821967555297:web:1df4cb84b3b1b1c35dc5a0",
      measurementId: "${config.measurementId}"
      // measurementId: "G-XHTF8DJVH0"
    },
    {
  apiKey: "AIzaSyBiVmMszbJKByglBEjSicrBlYUxZgWbiRw",
  authDomain: "dvara2022.firebaseapp.com",
  databaseURL: "https://dvara2022-default-rtdb.firebaseio.com/",
  projectId: "dvara2022",
  storageBucket: "dvara2022.appspot.com",
  messagingSenderId: "1076665212982",
  appId: "1:1076665212982:web:ba4fda5c522def607db897",
  measurementId: "${config.measurementId}"
    }
];



//const config = firebase.initializeApp(firebaseConfig);

//const database = firebase.database();
	var initializations={};
	var databases = {}
	for(let i =0;i<=3;i++){
		initializations[i+''] = firebase.initializeApp(firebaseConfig[i+''],i+'');
        	databases[i+''] = firebase.database(initializations[i+''])
	}


module.exports = { databases };
