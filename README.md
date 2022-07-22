# Angry Shakespeare App

This is an app in which you ask questions to a grouchy shakespeare and he will response. This was created using the OpenAI API [quickstart tutorial](https://beta.openai.com/docs/quickstart). It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/). Follow the instructions below to get set up.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

2. Clone this repository [GitHub](https://github.com/hazemfahad/AngryShakespeare.git)

3. Navigate into the project directory

   ```bash
   $ cd AngryShakespeare
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   ```bash
   $ cp .env.example .env
   ```

6. Add your [OPENAI API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)!
