FROM okdocker/pynode:latest
WORKDIR /app/kepler.gl/
RUN npm install
EXPOSE 80
RUN echo "$MapboxAccessToken"
CMD ["npm", "start"]
