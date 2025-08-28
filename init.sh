#!/bin/bash

# Nombre del archivo .env
ENV_FILE=".env"

# Crear .env si no existe
if [ -f "$ENV_FILE" ]; then
  echo "$ENV_FILE ya existe ✅"
else
  cat <<EOL > $ENV_FILE
# JWT
JWT_SECRET=12345

# MySQL configuration
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_DATABASE=fleetdb
MYSQL_USER=fleetuser
MYSQL_PASSWORD=fleetpass
MYSQL_PORT=3306

# Prisma
DATABASE_URL="mysql://fleetuser:fleetpass@localhost:3306/fleetdb"
EOL
  echo "$ENV_FILE creado 🚀 (puedes editar los valores si lo deseas)"
fi

# Levantar Docker
echo "🚀 Levantando contenedores con docker-compose..."
docker-compose up -d

# Esperar unos segundos para que la DB arranque
echo "⏳ Esperando a que MySQL inicie..."
sleep 10

# Ejecutar seeds
echo "🌱 Ejecutando seeds..."
yarn
yarn seed:account
yarn seed:places
yarn seed:vehicles

echo "✔ Entorno inicializado correctamente."