FROM node:10-alpine

# use app as work directory
WORKDIR /app

COPY package-lock.json .

# Copy all local files into the app directory.
COPY . ./

RUN npm install
RUN npm install -g serve

RUN npm run build


