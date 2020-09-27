'use strict';
// Create and Test a Lambda Function
// Stream events
const AWS = require("aws-sdk");
const sns = new AWS.SNS();

exports.handler = (event, context, callback) => {

    event.Records.forEach((record) => {
        console.log('Stream record: ', JSON.stringify(record, null, 2));

        if (record.eventName == 'INSERT') {
            const who = JSON.stringify(record.dynamodb.NewImage.Username.S);
            const when = JSON.stringify(record.dynamodb.NewImage.Timestamp.S);
            const what = JSON.stringify(record.dynamodb.NewImage.Message.S);
            const params = {
                Subject: 'A new bark from ' + who,
                Message: 'Woofer user ' + who + ' barked the following at ' + when + ':\n\n ' + what,
                TopicArn: 'arn:aws:sns:region:accountId:wooferTopic'
            };
            sns.publish(params, function(err, data) {
                if (err) {
                    console.error("Unable to send message. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("Results from sending message: ", JSON.stringify(data, null, 2));
                }
            });
        }
    });
    callback(null, `Successfully processed ${event.Records.length} records.`);
};   