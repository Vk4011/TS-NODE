FROM node:20-apline

WORKDIR /app

COPY . .

RUN  npm install 

EXPOSE 3000

CMD [ "npm run dev" ]

