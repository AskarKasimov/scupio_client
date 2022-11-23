FROM node:19.1.0-alpine3.16 AS builder
WORKDIR /
COPY package*.json ./
RUN npm ci --omit=dev
ARG REACT_APP_CACHING
ENV REACT_APP_CACHING $REACT_APP_CACHING
ARG REACT_APP_API_ADDRESS
ENV REACT_APP_API_ADDRESS $REACT_APP_API_ADDRESS
COPY ./ ./
RUN npm run build


FROM node:19.1.0-alpine3.16 
WORKDIR /
COPY --from=builder ./node_modules ./node_modules
COPY --from=builder ./build ./build
COPY node-server.js ./
EXPOSE 5050
ENTRYPOINT ["node", "node-server.js"]