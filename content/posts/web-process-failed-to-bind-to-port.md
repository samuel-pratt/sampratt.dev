+++
author = "Sam Pratt"
title = "Web process failed to bind to $PORT within 60 seconds of launch"
date = "2021-07-16"
description = "How to solve a common problem when hosting go projects on Heroku"
tags = ['go', 'heroku']
+++

When hosting a Go project on Heroku (and other platforms) it's important to set the correct port on your program. On Heroku if you don't set the port it will fail after a 60 second wait. 

In Go, you can find the current port with the `os.Getenv("PORT)` function:

```go
package main

import (
  "http"
  "os" // Import the os library
)

func main() {
  port := os.Getenv("PORT") // Get the port
  if port == "" {
      port = "9000" // Set a default port if no port is set
  }
  
  http.ListenAndServe(":" + port, nil)
}
```