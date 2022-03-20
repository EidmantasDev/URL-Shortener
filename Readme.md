# URL Shortener

Small project to shorten URL. Still in progress... (Pending :) )
Missing:

-   MONGO Docker setup. Now using MONGO Atlas DB inside .env MONGO_URI
-   Docker setup for client
-   Makefile to help run and deploy project faster
-   Better UI
-   Main functionality is there but still would go through the code and change lots of places

## Installation

Server:

-   cd server
-   yarn install
-   yarn dev

Client:

-   cd client
-   yarn install
-   yarn start

## Usage

You can use Postman/Thunder Client:
http://localhost:8080/api/url and in the body send url you want to transform. Body example:
`{ "urlToTransform": "https://google.com" }`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
