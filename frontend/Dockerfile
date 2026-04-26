# Stage 1: Build the Angular application
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies needed for the build
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build --configuration=production

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built Angular app to the Nginx html directory
# The path might vary slightly based on Angular versions.
# Usually it's dist/<project-name>/browser or dist/<project-name>
COPY --from=build /app/dist/useful-commands/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
