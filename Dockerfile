FROM node:18-alpine

# Seguridad y tamaño
RUN addgroup -S app && adduser -S app -G app

WORKDIR /usr/src/app

# Solo archivos de deps para cache
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar el resto
COPY . .

ENV NODE_ENV=production
EXPOSE 3000

# Healthcheck simple
HEALTHCHECK CMD wget -qO- http://localhost:3000/health || exit 1

USER app
CMD ["node", "src/server.js"]
