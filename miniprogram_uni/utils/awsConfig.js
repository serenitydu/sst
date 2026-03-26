var accessKeyId = process.env.VUE_APP_AWS_ACCESS_KEY_ID;
var secretAccessKey = process.env.VUE_APP_AWS_SECRET_ACCESS_KEY;

if (!accessKeyId || !secretAccessKey) {
	throw new Error(
		"AWS credentials are not configured. " +
		"Please set VUE_APP_AWS_ACCESS_KEY_ID and VUE_APP_AWS_SECRET_ACCESS_KEY environment variables."
	);
}

var awsConfig = {
	accessKeyId: accessKeyId,
	secretAccessKey: secretAccessKey,
	region: "us-east-2"
};

module.exports = awsConfig;
