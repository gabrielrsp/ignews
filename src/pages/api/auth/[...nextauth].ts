// //API ROUTES !!!!
// // Called on server side
// // Serverless - (there's no server listening for 24, just opened by request )
// // every file inside the folder api will be a route of a 'backend'
// import { NextApiRequest, NextApiResponse } from 'next'

// export default (request: NextApiRequest, response: NextApiResponse) => {
//   const id = request.query
  

//   const users = [
//     { id: 1, name: 'Diego' },
//     { id: 2, name: 'Gabriel' },
//     { id: 3, name: 'Rafael' }
//   ] 

//   return response.json(users)
// }

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user', //defines what informations will be readed from user's github
        }
      }
    }),
    // ...add more providers here
  ],
})

