# Use an official web server image as the base image
FROM nginx:alpine

# Copy your HTML file to the default web server directory
COPY index.html /usr/share/nginx/html/

# Expose port 80 (default HTTP port)
EXPOSE 80
