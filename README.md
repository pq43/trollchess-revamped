# trollchess-revamped

A new trollchess!

## Details

Game details are currently private until developed, but for the tech stack I'm thinking:

Web client:

- React w/ Next.js
- Redux (w/ thunk)
- Redux-forms
- TailwindCSS
- Maybe Typescript but probably not
- Probably JWT Authentication
- Vercel for hosting

Mobile client:

- Flutter

Backend:

- NodeJS w/ Express
- S3, probably with multer
- PostgreSQL w/ Prisma? Not sure on ORM/query builder yet
- Docker
- DigitalOcean VPS for hosting

## Develop

Deployment process:

Both the React (Next.js) frontend and the Node.js (Express) backend are run using Docker containers and through GitHub Actions will deploy to DockerHub. The frontend will be hosted on Vercel, but the backend will be hosted using a Digital Ocean VM alongside docker-compose and watchtower.
