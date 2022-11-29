# Integration Hub Strapi POC

(forked from https://github.com/ben-macandrews-saltpay/strapi-poc)

## Install

- Backend: `cd backend && npm install`
- Frontend: `cd frontend-2 && npm install`

## Initial config

Be sure your `backend/.env` file has the following variables

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=THE_APP_KEYS
API_TOKEN_SALT=THE_API_TOKEN_SALT
ADMIN_JWT_SECRET=THE_ADMIN_JWT_SECRET
JWT_SECRET=THE_JWT_SECRET
```

Be sure your `frontend-2/.env` file has the following variables

```
GITHUB_API_KEY=THE_GITHUB_API_KEY
```

## Run

- at the root folder `npm run develop`
