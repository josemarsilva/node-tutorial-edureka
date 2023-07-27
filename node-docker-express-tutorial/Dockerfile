# Use the official Node.js base image with version 16
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port your application listens on
EXPOSE 3000

# Command to start the Node.js application
CMD ["node", "app.js"]
