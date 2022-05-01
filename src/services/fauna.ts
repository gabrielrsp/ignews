import { Client } from 'faunadb'

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY
})

//This already gives access to database

/* 
Warning: BD operations cannot be in the browser, for security issues!
They can be on the api routes (on the 'backend') or inside the methods getStaticProps (ssg), or getServerSideProps(ssr)
cause, these functions work only at the server side and not at the client.
*/