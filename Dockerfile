# ---- Build stage ----
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package manifests and install deps
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

# Build project (Astro/Vite/React)
RUN npm run build

# ---- Production stage ----
FROM nginx:alpine AS runner

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]



