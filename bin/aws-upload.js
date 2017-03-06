'use strict';

require('dotenv').load();

// const AWS = require('aws-sdk');
// const s3 = new AWS.S3();
// const fs = require('fs');
// const path = require('path');
// const mime = require('mime');
// const crypto = require('crypto');
const s3Upload = require('../lib/s3-upload.js');

// process.argv is how you access scripts in terminal
// NOTE after we wrote s3-upload the only thing we really removed was let
// NOTE file so we want to remove the opposide (aka, everything else) from
// NOTE here and then added s3-upload as a required file (see line 11)
let file = {
  path: process.argv[2],
  title: process.argv[3]
};

// NOTE and add this (doesn't have to match s3-upload = (options) as long
// NOTE as it includes what we need (aka file includes path so we're good))
s3Upload(file)
  .then(console.log)
  .catch(console.error);

// let mimeType = mime.lookup(file.path);
// let ext = path.extname(file.path);
//
// // get the date, changes date to string, splits up-to time, and only give the first part before time
// let folder = (new Date()).toISOString().split('T')[0];
// let stream = fs.createReadStream(file.path);
//
// new Promise((resolve, reject) => {
//   // randomBytes takes a callback but we want it to be a Promise
//   crypto.randomBytes(16, (error, buffer) =>{
//     // if an error skip everything by rejecting
//     if(error){
//       reject(error);
//     }
//     // otherwise, if no error change the buffer to a string
//     else {
//       console.log("buffer is ", buffer);
//       console.log("buffer.toS is ", buffer.toString('hex'));
//       resolve(buffer.toString('hex'));
//     }
//   });
// // if no error, then do this...
// }).then((filename)=>{
//   // create the file name with the info that has been provided
//   let params = {
//     ACL: 'public-read',
//     ContentType: mimeType,
//     Bucket: process.env.AWS_S3_BUCKET_NAME,
//     Key: `${folder}/${filename}${ext}`,
//     Body: stream
//   };
//
//   // make a new promise
//   // promise version
//   return new Promise((resolve, reject) => {
//     // call s3.upload
//     s3.upload(params, function (error, data) {
//       if(error){
//         // if an error occurs here skip everything else
//         // console.log(error);
//         reject(error);
//       }
//       else {
//         // otherwise, if no error resolve the data
//         // console.log(data);
//         resolve(data);
//       }
//     });
//   })
//   // if promise is resolved do this
//   .then(console.log)
//   // if promise has an error, catch it and console.log it
//   .catch(console.log);
// });


// non-promise version of line 52
// s3.upload(params, function (err, data) {
//   console.log(err, data);
// });
