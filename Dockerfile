# Etapa 1: construir la app
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration production --project Tareas

# Etapa 2: servir con NGINX
FROM nginx:alpine
COPY --from=build /app/dist/tareas/browser/home /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
