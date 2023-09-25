# Use an official Node.js runtime as the base image
FROM node:17-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json .

# Install project dependencies
RUN npm i

# Copy the rest of the application code (source code) to the container
COPY . . 

# Expose the port that your React app will run on (usually 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "run", "dev"]
