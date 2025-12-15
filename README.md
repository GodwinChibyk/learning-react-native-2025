### STEPS THAT I USE TO DEBUG THE ERROR

1. Install the bun package manager on your vscode.

2. Delete the node_modules folder from your project.

3. Delete package.lock.json file from your project.

4. Delete the Expo router from your project.

5. Create a new file in the project root folder named "babel.config.js".

### NOW ADD THIS CODE TO THE babel.config.js FILE

      module.exports = function (api) {
      api.cache(true);
      return {
         presets: ['babel-preset-expo'],
         plugins: ['expo-router/babel'],
      };
   };

6. In your Package.json, check inside the scripts objects and change the "dev" to "start".

7. clear the terminal 

8. Now, Run "bun run start" in your terminal.