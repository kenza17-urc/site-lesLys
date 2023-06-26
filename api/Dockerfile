# Base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Strapi admin panel (optional)
RUN yarn build

# Expose the default Strapi port
EXPOSE 1337

# Set the NODE_ENV environment variable
ENV NODE_ENV production

# Copy the .env file into the container
COPY .env .env

# Start the Strapi server
CMD ["yarn", "start"]
