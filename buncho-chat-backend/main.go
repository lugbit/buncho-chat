package main

import (
	"fmt"
	"net/http"

	"github.com/lugbit/buncho-chat/websocket"
)

// websocket endpoint controller
func websocketController(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	// upgrade http connection to a websocket connection
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	// create new client and pass it websocket connection and connection pool
	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	// add client to pool
	pool.Register <- client
	client.Read()
}

func main() {
	fmt.Println("Buncho Chat Started")

	// create websocket connection pool
	pool := websocket.NewPool()

	// start pool as a goroutine
	go pool.Start()

	// websocket route
	http.HandleFunc("/websocket", func(w http.ResponseWriter, r *http.Request) {
		websocketController(pool, w, r)
	})

	http.ListenAndServe(":8080", nil)
}
