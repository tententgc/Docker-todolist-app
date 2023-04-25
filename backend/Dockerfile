# Use Node.js alpine version 20 as the base image 

FROM node:20-alpine

ENV NODE_VERSION 20.0.0
# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the backend files to the working directory
COPY . .

# Set the command to run the app
CMD ["npm", "start"]
