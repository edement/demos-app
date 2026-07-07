package main

import (
	"flag"
	"fmt"
	"log"

	"github.com/edement/social/internal/config"
	"github.com/edement/social/internal/store"
)

func main() {
	configPath := flag.String("config", "./configs/config.yaml", "path to config file")
	flag.Parse()

	cfg, err := config.Load(*configPath)
	if err != nil {

	}

	fmt.Println(cfg) // !

	store := store.NewStorage(nil)

	app := &application{
		config: *cfg,
		store: store,
	}

	mux := app.mount()

	log.Fatal(app.run(mux))
}
