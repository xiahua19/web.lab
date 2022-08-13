# Backend
Up until now, we've been messing with things that user directly sees - the frontend. Now we get to do some things that are super important but some users may never realize happens - the backend.

At the moment our catbook is static, it doesn't really change with user data. So, how is user data generated? Where is it stored? How do I ask for data? The answer to all of these questions is more or less standardized.

## When you type a link to the address bar:
- Your browser are clients.
- The device that holds your site's information is the server.
- To get data from server, your client must make a request.
- To send data back to the client, the server sends back a response.

How do we send information? How can you access information from severs miles away? It has to do with a specific type of request/response.

## What is HTTP?
- It's short for "Hypertext Transfer Protocol".
- HTML and HTTP both have the Hyper Text prefixed.
- You've been using HTTP requests and responses this whole time.

Request URL - HTTP Method - Request Headers - Request Body

You'll see a bunch of talk about 'req.body' and 'req.query' stuff later. That query thing exists as part of the Request URL. 

## HTTP Methods
- GET: gets data
- POST: creates data
- PUT: modifies data
- DELETE: deletes data
- ...

HTTP uses the requests line to state its method and destination. It uses request body to give other info if needes(such as POST). It uses the header to do other fancy stuff.

## Status code
Responses also contain status codes and usually whatever you requested. Status code(1xx, 2xx, 3xx, 4xx, 5xx) tell how the request went.
- 1xx - informational
- 2xx - you succeeded; 200 OK.
- 3xx - redirect
- 4xx - you did something wrong; 404 Dreaded, 400 Bad request.
- 5xx - server did something wrong; 500 Internal server error. 

# APIs
APIs is short for 'Application Program Interface'. It ;s simply a set of endpoints a service allows you to make requests to. Companies shch as Google, Amazon, and Facebook all provide APIs to allow others to implement their services.

## The purpose of an APIs
- You need to access data.
- You're not going to access data on servers directly, that's both extermely inconvenient and s security nightmare.
- APIs provide structures places(endpoints) for you to send requests to.
- Now you can do a brunch of things, simply by asking the right people very nicely.

Data - API - Client1, Client2, Client3

## Endpoints
By accessing a URL, you are making a requect to an endpoint. Multiple endpoints can exist under the same URL, but are differentiated based on the type of request.