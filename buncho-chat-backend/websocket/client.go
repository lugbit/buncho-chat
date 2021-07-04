package websocket

import (
	"log"

	"github.com/gorilla/websocket"
	"github.com/lugbit/buncho-chat/models"
)

// client struct
type Client struct {
	ID   string
	Conn *websocket.Conn
	Pool *Pool
}

// read incoming mesages from client and broadcast to pool
func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()

	for {
		// payload from client
		var payload models.Payload
		// parse payload
		err := c.Conn.ReadJSON(&payload)
		if err != nil {
			log.Printf("error occurred: %v", err)
			break
		}
		// broadcast message payload to pool
		c.Pool.Broadcast <- payload
	}
}
