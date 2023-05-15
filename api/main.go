package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

var API_PORT = os.Getenv("API_PORT")

type response struct {
	Message string `json:"message"`
}

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/", hello)

	e.Logger.Fatal(e.Start(fmt.Sprintf(":%s", API_PORT)))
}

func hello(c echo.Context) error {
	return c.JSON(http.StatusOK, &response{Message: "Hello, world!"})
}
