const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
// client.getEntry("4mhDc53atPkeGBwY2VoDMK");
//   .then((entry) => console.log(entry))
//   .catch((err) => console.log(err));

module.exports = client;
