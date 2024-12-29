# Step 1: Build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

# Kopier kun package-filer først (dette optimaliserer caching)
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Kopier resten av prosjektet og bygg appen
COPY . .
RUN pnpm build

# Step 2: Production image
FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

RUN pnpm install --prod

EXPOSE 3000

CMD ["pnpm", "start"]