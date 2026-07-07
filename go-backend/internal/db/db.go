package db

import (
	"database/sql"
	"fmt"
	"time"
	//"context"
	)

func NewDB(addr string, maxOpenConns int, maxIdleConns int, maxIdleTime string) (*sql.DB, error) {
	db, err := sql.Open("postgres", addr)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	db.SetMaxOpenConns(maxOpenConns)
	db.SetMaxIdleConns(maxIdleConns)

	duration, err := time.ParseDuration(maxIdleTime)
	if err != nil {
		return nil, fmt.Errorf("failed to parse max idle time: %w", err)
	}
	db.SetConnMaxIdleTime(duration)

	//ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	//defer cancel()

	//if err = db.PingContext(ctx); err != nil {
	//	return nil, fmt.Errorf("failed to ping database: %w", err)
	//} 

	return db, nil
}