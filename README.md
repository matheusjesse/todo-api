# ToDo - API
## Api para gerênciar uma aplicação de ToDos.

## Instalação

```sh
git clone git@github.com:matheusjesse/todo-api.git
cd todo-api
npm install
```
## Rodando Projeto com Docker

```sh
     docker-compose up
```
Em um novo terminal acesse o terminal do App
```
     docker exec -it app_backend sh
```
Criando o banco de dados 
```
     npm run db:reset
```
Criando as Migrations
```
     npx sequelize db:migrate
```
Populando o banco de dados
```
     npx sequelize db:seed:all
```
## ToDos

`GET /todos/user/:id` 

`http://localhost:3001/todos/user/1`

<details>
<summary> Response </summary>

<pre>

```
    Status: 200 OK
```    
    
    [
      {
        "id": 1, 
        "noteText": "tomar café",
        "completed": true,
        "userId": 1,
        "dayPeriod": {
          "morning": true,
          "afternoon": false,
          "night": false
        },
        "daysOfTheWeek": {
          "sunday": true,
          "monday": false,
          "tuesday": false,
          "wednesday": true,
          "thrusday": true,
          "friday": true,
          "saturday": false
        }
      }
    ]
    
</pre>
</details>

---

`POST /todos` 

`http://localhost:3001/todos`

<details>
<summary> Request Body</summary>
<pre>

```
   {
 	   "noteText": "Leitura",
	    "userId": 5,
	    "completed": false,
	    "dayPeriod": {
      	    "morning": true,
	        "afternoon": true,
	        "night": false
    	},
	    "daysOfTheWeek": {
	       "sunday": true,
	       "monday": true,
	       "tuesday": true,
	       "wednesday": true,
	       "thrusday": true,
	       "friday": true,
	       "saturday": true
    	}
    }

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 201
```    
    {
      "id": 6,
      "noteText": "Leitura",
      "completed": false,
      "dayOfTheWeekId": 6,
      "dayPeriodId": 6,
      "userId": 5
    }
```
</pre>
</details>

---

`PUT /todos/:id` - id do ToDo

`http://localhost:3001/todos/1`

<details>
<summary> Request Body</summary>
<pre>

```
   {
   "id": 1,
 	 "noteText": "Beber àgua",
	 "dayPeriod": {
      	"morning": false,
	      "afternoon": false,
	      "night": false
   },
	 "daysOfTheWeek": {
	     "sunday": false,
	     "monday": true,
	     "tuesday": true,
	     "wednesday": true,
	     "thrusday": true,
	     "friday": true,
	     "saturday": true
   }
}

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 200 OK
```    
    {
        "message": "ToDo Updated!"
    }
```
</pre>
</details>

---

`PATCH /todos`

`http://localhost:3001/todos`

<details>
<summary> Request Body</summary>
<pre>

```
    {
      "id": 1,
      "completed": false
    }

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 200 OK
```    
    {
      "id": 1,
      "noteText": "Beber àgua",
      "completed": false,
      "userId": 1
    }
```
</pre>
</details>

---

`DELETE /todos`

`http://localhost:3001/todos`

<details>
<summary> Request Body</summary>
<pre>

```
   {
    "id": 3
   }

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 200 OK
```    
    {
     "message": "ToDo Deleted"
    }
```
</pre>
</details>

---

## Login

`POST /login`

`http://localhost:3001/login`

<details>
<summary> Request Body</summary>
<pre>

```
   {
      "email": "anajulia@outlook.com",
      "password": "a32s12a31231d32as13"
   }

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 200 OK
```    
    {
     "token": "return a valid token"
    }
```
</pre>
</details>

---

`PATCH /login`

`http://localhost:3001/login`

<details>
<summary> Request Body</summary>
<pre>

```
   {
      "id": 1,
      "newPassword": "11111111111111111"
   }

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 200 OK
```    
    {
      "message": "Password updated"
    }
```
</pre>
</details>

---

`DELETE /login`
`http://localhost:3001/login`

<details>
<summary> Request Body</summary>
<pre>

```
   {
      "id": 1
   }

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 200 OK
```    
    {
      "token": "User deleted"
    }
```
</pre>
</details>

---

`POST /login/register`

`http://localhost:3001/login`

<details>
<summary> Request Body</summary>
<pre>

```
   {
      "userName": "Joana Magalhães",
      "email": "Joana@hotmail.com",
      "password": "321321321"
   }

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 201
```    
    {
      "message": "User registered"
    }
```
</pre>
</details>

## Tecnologias usadas
- Nodejs 
- Express
- TypeScript
- Teste integração (mocha, chai, sinon)
- Sequelize (db: MySQL)
- Biblioteca Joi 
- Biblioteca Jsonwebtoken

[Meu Linkedin](https://www.linkedin.com/in/matheusjesse)