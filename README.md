# node-rest-api

Node.js RESTful API Project 

- express
- mongodb atlas

## Start
원하는 폴더에 브랜치를 생성하고 git clone 합니다.
npm 패키지를 설치합니다.
```bash
npm install
```

`nodemon.json`파일을 생성하고, Mongo Atlas Admin Username/Password를 입력합니다. 
```bash
{
    "env": {
        "MONGO_ATLAS_PW": "YOUR_MONGO_USER_PW"
    }
}
```

## Structure
### Models

#### order
  - product
  - quantity
  
#### product
  - name
  - product
  - productImage
  
#### user
  - email
  - password

### Routes

#### orders
 - get('/orders)
 - get('/orders/:orderId)
 - post('/orders)
 - delete('/orders/:orderId)

#### products
 - get('/products)
 - get('/products/:productId)
 - post('/products)
 - delete('/products/:productId)

### users
 - post('/users/signup')
 - post('/users/login')
