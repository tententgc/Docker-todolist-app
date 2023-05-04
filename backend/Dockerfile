# Use an official Node.js runtime as a parent image
FROM node:20-alpine

ENV NODE_VERSION 20.0.0

# Set the working directory to /app
WORKDIR /app

#copy all data such as file package*.json and allfile js to /app
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
