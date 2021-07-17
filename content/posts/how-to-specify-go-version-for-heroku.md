+++
author = "Sam Pratt"
title = "How to specify Go version for Heroku in go.mod"
date = "2021-07-17"
description = "How to solve a common problem when hosting go projects on Heroku"
tags = ['go', 'heroku']
+++

`The go.mod file for this project does not specify a Go version`

`Defaulting to go1.12.7`

This error can show when hosting a Go project on Heroku, even when your go.mod file correctly specifies the version of go that your project compiles with:

```go
module main

go 1.16
```

This is because Heroku doesn't look at your go.mod file to set your Go version like the compiler does.

There are two options to set your version in a way that heroku can recognize.

## Option 1

You can set a Heroku-specific variable in your go.mod file. This is my prefered method as it allows for other people to easily build your project on Heroku as well without adding extra setup steps.

```go
module main

// +heroku goVersion go1.16
go 1.16

require (
    // ...
)
```

This will set the `GOVERSION` environment variable in Heroku to the correct version.

## Option 2

The other option is you can set the `GOVERSION` enviroment variable directly. This is done in the Config Vars section of the settings page in your project:

![config vars setting](/images/go-config-vars.png)

