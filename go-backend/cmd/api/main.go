package main

import (
	"flag"
	"log"
	//"strconv"

	"github.com/edement/social/internal/config"
	"github.com/edement/social/internal/store"
	"github.com/edement/social/internal/db"
)

func main() {
	log.Println("Starting application...")
	configPath := flag.String("config", "./configs/local.yaml", "path to config file")
	flag.Parse()

	cfg, err := config.Load(*configPath)
	if err != nil {
		log.Panic(err)
	}

	log.Println(cfg) // !

	addr := "postgres://postgres:postgres@localhost:5432/social&sslmode=disable"
	db, err := db.NewDB(addr, cfg.Database.MaxOpenConns, cfg.Database.MaxIdleConns, cfg.Database.MaxIdleTime)
	if err != nil {
		log.Panic(err)
	}

	defer db.Close()
	log.Println("Database connection established")

	store := store.NewStorage(db)

	app := &application{
		config: *cfg,
		store: store,
	}

	mux := app.mount()

	log.Fatal(app.run(mux))
}
