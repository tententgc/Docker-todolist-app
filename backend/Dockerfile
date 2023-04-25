# Use an official Node.js runtime as a parent image
FROM node:20-alpine

ENV NODE_VERSION 20.0.0

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
COPY ./**/*.js ./

# Install any required dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port that the server will be listening on
EXPOSE 8120

# Start the server
CMD ["npm", "start"]
