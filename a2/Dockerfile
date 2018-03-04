FROM node:alpine
COPY node_modules /node_modules
COPY app.js /app.js
COPY exp.js /exp.js
EXPOSE 8080
ENTRYPOINT ["node", "exp.js"]
