FROM denoland/deno:debian-2.4.3

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["deno", "task", "preview"]