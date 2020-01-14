FROM node:11
WORKDIR /app
ADD . .

RUN npm install
RUN npm run build
# EXPOSE 8080
# CMD ["npm", "start"]