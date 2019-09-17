FROM okdocker/pynode:latest
ADD package.json /app
WORKDIR /app/
RUN npm install
EXPOSE 80
CMD ["npm", "start"]
