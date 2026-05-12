FROM node:22-slim AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
ENV VITE_DECK=tiktok-affiliate
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/dist /usr/share/nginx/html/learning/slide-media-team
COPY --from=builder /app/dist /usr/share/nginx/html/learning/tiktok-affiliate
COPY --from=builder /app/dist /usr/share/nginx/html/learning/tiktok-affilate
COPY --from=builder /app/dist /usr/share/nginx/html/resources/TikTok-Affiliate
COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location = /learning/slide-media-team {
        return 308 /learning/slide-media-team/;
    }

    location /learning/slide-media-team/ {
        try_files $uri $uri/ /learning/slide-media-team/index.html;
    }

    location = /learning/tiktok-affiliate {
        return 308 /learning/tiktok-affiliate/;
    }

    location /learning/tiktok-affiliate/ {
        try_files $uri $uri/ /learning/tiktok-affiliate/index.html;
    }

    location = /learning/tiktok-affilate {
        return 308 /learning/tiktok-affilate/;
    }

    location /learning/tiktok-affilate/ {
        try_files $uri $uri/ /learning/tiktok-affilate/index.html;
    }

    location = /resources/TikTok-Affiliate {
        return 308 /resources/TikTok-Affiliate/;
    }

    location /resources/TikTok-Affiliate/ {
        try_files $uri $uri/ /resources/TikTok-Affiliate/index.html;
    }
}
EOF
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
