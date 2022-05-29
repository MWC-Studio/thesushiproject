const aws = require("aws-sdk");
const ses = new aws.SES();

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === "INSERT") {
      //pull off items from stream
      const contactName = streamedItem.dynamodb.NewImage.name.S;
      const contactEmail = streamedItem.dynamodb.NewImage.email.S;
      const contactPhone = streamedItem.dynamodb.NewImage.phone.S;
      const contactState = streamedItem.dynamodb.NewImage.state.S;
      const contactComments = streamedItem.dynamodb.NewImage.comments.S;

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: "ContactUs Submission" },
            Body: {
              Text: {
                Data: `My name is ${contactName}. \n 
                You can reach me at ${contactEmail} or ${contactPhone}. \n
                I'm contacting from ${contactState}. \n
                ${contactComments}
                `,
              },
            },
          },
        })
        .promise();
    }
  }
  return { status: "done" };
};
