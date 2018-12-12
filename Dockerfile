FROM node/latest
RUN npm install
CMD ["node", "honkbot.js"]