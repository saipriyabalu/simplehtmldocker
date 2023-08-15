# Use a small base image
FROM nginx:alpine

# Copy the HTML file to the web server's default directory
COPY . /usr/share/nginx/html/
