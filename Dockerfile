# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/shaozhuo_xu_ui_garden

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the project files
COPY . .

# Expose port 8083
EXPOSE 8083

# Start Storybook
CMD ["npm", "run", "storybook"]
