# Buncho Chat
Realtime chat room app using websockets written in Go and React.


## Installation

### Clone Repo

```sh
git clone git@github.com:lugbit/buncho-chat.git
```

### Start Go Server
Download go dependancies and start the server.
Note: Ensure Golang version 1.16.2 or newer is installed.

Change directory to the go backend folder
```sh
cd buncho-chat/buncho-chat-backend
```

Download go dependancies
```sh
go get
```

Start the go server
```sh
go main.go
```

The Go server will start on localhost:8080 by default.

### Start React Server
Download the front end react dependancies and start the server.

Change directory to the react-auth folder
```sh
cd buncho-chat/buncho-chat-frontend
```

Download react app dependancies
```sh
npm install
```

Start react server
```sh
npm start
```

The react server will start on localhost:3000
