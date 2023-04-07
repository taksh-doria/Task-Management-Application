import AWS from 'aws-sdk';

function callLamda(data)
{

    AWS.config.update({
        region: 'us-east-1',
        credentials: {
            accessKeyId: 'ASIAS43TP56LHFUXBU27',
            secretAccessKey: 'tg1wliSzDN7xDOtB78Z3mxjHtlKBM4rKgWLIX4bP'
        }
    });
    const lambda = new AWS.Lambda();
    const params = {
        FunctionName: 'ToDoCreateFunction',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify(data)
    };

    return lambda.invoke(params).promise();
}

export default callLamda;