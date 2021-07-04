package websocket

import (
	"fmt"

	"github.com/lugbit/buncho-chat/models"
)

// connection pool struct
type Pool struct {
	Register   chan *Client
	Unregister chan *Client
	Clients    map[*Client]bool
	Broadcast  chan models.Payload
}

// create new pool
func NewPool() *Pool {
	return &Pool{
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Clients:    make(map[*Client]bool),
		Broadcast:  make(chan models.Payload),
	}
}

// listener for connection pool activities
func (pool *Pool) Start() {
	for {
		select {
		case client := <-pool.Register: // on client register
			pool.Clients[client] = true
			fmt.Println("Size of Connection Pool: ", len(pool.Clients))
			for client, _ := range pool.Clients {
				fmt.Println(client)
				client.Conn.WriteJSON(models.Payload{Message: "New User Joined...", User: "Buncho Chat"})
			}
			break
		case client := <-pool.Unregister: // on client un-register
			delete(pool.Clients, client)
			fmt.Println("Size of Connection Pool: ", len(pool.Clients))
			for client, _ := range pool.Clients {
				client.Conn.WriteJSON(models.Payload{Message: "User Disconnected.", User: "Buncho Chat"})
			}
			break
		case message := <-pool.Broadcast: // on client message
			fmt.Println("Sending message to all clients in Pool")
			for client, _ := range pool.Clients {
				if err := client.Conn.WriteJSON(message); err != nil {
					fmt.Println(err)
					return
				}
			}
		}
	}
}
