FROM node:lts-alpine AS base
WORKDIR /app

FROM base AS dev

ENV  DATABASE_URL=postgresql://postgres:password@172.18.0.2:5432/tomaato-store?schema=public
ENV  COOKIE_LIFETIME_IN_DAYS=2
ENV  NODE_ENV=production
ENV  SESSION_SECRET=itsasecret
ENV  SESS_NAME=sessionId
# Change host and port accordingly for your application running on your local machine or in Docker.
ENV REDIS_HOST=172.18.0.4
ENV REDIS_PORT=6379
ENV REDIS_PASSWORD=password


COPY ./prisma/  ./prisma


RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=cache,target=/root/.npm \
  npm i 


VOLUME [ "/app/node_modules" ]


COPY . .
RUN npx prisma generate

# Run the application as a non-root user.
USER node

# Expose the port that the application listens on.
EXPOSE 4000

#Run with nodemon
CMD ["npm", "run", "start"]



