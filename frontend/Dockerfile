# Use Node.js alpine version 20 as the base image 
FROM node:20-alpine

ENV NODE_VERSION 20.0.0

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./
COPY . ./

# Install the dependencies
RUN npm install

# Copy the rest of the frontend files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set the command to run the app
CMD ["npm", "start"]
