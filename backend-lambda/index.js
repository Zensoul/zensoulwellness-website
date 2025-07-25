// index.js
exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    // Basic response for an API Gateway proxy integration
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // IMPORTANT for CORS with your frontend
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token"
        },
        body: JSON.stringify({ message: "Hello from ZenSoul Wellness Backend Lambda!" }),
    };
    return response;
};