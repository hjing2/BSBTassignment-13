# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /haodan_jing_ui_garden_build_checks

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Install a web server to serve the build
RUN npm install -g serve

# Start the web server to serve the build on port 8018
CMD ["serve", "-s", "build", "-l", "8018"]

# Expose port 8018
EXPOSE 8018
