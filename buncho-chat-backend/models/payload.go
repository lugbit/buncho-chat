package models

// Message payload struct
type Payload struct {
	Message   string `json:"message"`
	User      string `json:"user"`
	Timestamp string `json:"timestamp"`
	Color     string `json:"color"`
}
