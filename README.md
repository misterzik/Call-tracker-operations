# Call tracking Operations 
Using Twilio, Node.js, and Express example as a boiler-point, with dashboard adjustion and
addition of leads count page. Aswell as connection to MLabs, instead of localhost Mongo DB.

### Install Dependencies

Navigate to the project directory in your terminal and run:

```bash
npm install
```

This should install all of our project dependencies from npm into a local 
`node_modules` folder.

### Configuration

This application is configured using [dotenv](https://www.npmjs.com/package/dotenv).
Begin by copying the example .env file to use in this application:

```bash
cp .env.example .env
```

Next, open the `.env` at the root of the project and update it with credentials
from your [Twilio account](https://www.twilio.com/user/account/voice-messaging)
and local configuration. You will also need to set `MONGO_URL`, which is how we
will connect to our database.

```bash
brew install mongodb
```

You should then be able to run a local server with:

```bash
mongod
```

By default, there will be a local database running that's not password protected.
In your `.env` file, set `MONGO_URL` to `mongodb://127.0.0.1/calltracking`. You
should now be all set to run the app locally!

### Running the Project

To launch the application, you can use `node .` in the project's root directory. 
You might also consider using [nodemon](https://github.com/remy/nodemon) for 
this. It works just like the node command, but automatically restarts your 
application when you change any source code files.

```bash
npm install -g nodemon
nodemon .
```

### Running Tests

Basic functional tests (requires local MongoDB) can be run with:

```bash
npm test
```

### Exposing Webhooks to Twilio

To test your application locally with a Twilio number, we recommend using 
[ngrok](https://ngrok.com/docs). Use ngrok to expose a local port and get a 
publicly accessible URL you can use to accept incoming calls or texts to your 
Twilio numbers.

The following example would expose your local Node application running on port 
3000 at `http://chunky-danger-monkey.ngrok.io` (note that *reserved* subdomains 
are a paid feature of ngrok):

```bash
ngrok http -subdomain=chunky-danger-monkey 3000
```

In your Twilio app configuration you'll need to set
`http://<your-ngrok-domain>.ngrok.io/lead` as the callback URL. Open
the application and then click the "App configuration" button.

More information about setting up this project, can be found here: [Twilio Sample App](https://github.com/TwilioDevEd/call-tracking-node/tree/master)