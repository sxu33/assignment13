FROM node:14

WORKDIR /usr/src/app/shaozhuo_xu_ui_garden

COPY package*.json ./

RUN npm install
RUN npm install --save-dev @types/styled-components

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 8083

CMD ["npm", "start"]
