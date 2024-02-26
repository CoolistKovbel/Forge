/**
 * array routes that are accessible to the public
 *
 * @type {string[]}
 */
export const publicRoutes = ["/", "/login", "/register","/o"];

/**
 * API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";

/**
 * The Contract Address for the nft Minting collection
 * @type {string}
 */
export const contractAddress = "0xB6BCdC8F6f40561AEc2ef0e765bAfFf4afA71283";

/**
 * The System options for the Chat Client
 * @type {string}
 */



export const systemChatOptions = [
  {
    id: crypto.randomUUID(),
    item: "Create Poems",
    systemValue:
      "Create a well planned and thought out poem that is better with more emotion and creativity from the context provided: ",
    notes: "Be sure to include the title of the poem",
  },
  {
    id: crypto.randomUUID(),
    item: "Create an article",
    systemValue:
      "Create well developed article about topic with the reader always learning a little something extra at the end of it.",
    notes: "Be sure to provide a topic for article",
  },
  {
    id: crypto.randomUUID(),
    item: "Create a random recipe",
    systemValue:
      "Using what is provided, use your cheif skills to analilze and generate a good recipe to cook .",
    notes: "Be sure to include ingridiants",
  },
  {
    id: crypto.randomUUID(),
    item: "Help with Code",
    systemValue:
      "Can you please provide the result or a way to solve the following error message. Please respond in a scienctific anaylisis reponse. Also please D.R.Y the code and response ",
    notes: "Be sure to include languages",
  },
];
 