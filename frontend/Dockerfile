FROM node:18

WORKDIR /api

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8080

ENTRYPOINT [ "npm", "run" ]

CMD ["start"]