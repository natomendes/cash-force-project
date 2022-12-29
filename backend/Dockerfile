FROM node:18

WORKDIR /api

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5050

ENTRYPOINT [ "npm", "run" ]

CMD ["start"]