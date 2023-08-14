# Use an official web server image as the base image
FROM nginx:latest

# Copy the HTML and other assets into the container
COPY . /usr/share/nginx/html

# Expose the default port for the web server
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
