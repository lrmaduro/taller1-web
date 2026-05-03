### Rutas
Ruta base: localhost:3000
- GET (todos): http://localhost:3000/api/games/
- GET (específico): http://localhost:3000/api/games/:idGame/
- POST: http://localhost:3000/api/games/
- DELETE: http://localhost:3000/api/games/:idGame/
- PUT: http://localhost:3000/api/games/:idGame/

### Formato de JSON
Para los métodos POST y PUT se usa un JSON de la siguiente forma:

{
    "name": "Nombre",
    "minPlayers": "10",
    "maxPlayers": "24",
    "duration": "25",
    "gameState": "Usado"
}
