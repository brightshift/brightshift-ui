package frontend

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"os"
)

// Embed the build directory from the frontend.
//go:embed all:build
var BuildFs embed.FS

//go:embed public/favicon.ico
var Icon []byte

// Get the subtree of the embedded files with `build` directory as a root.
func BuildHTTPFS() http.FileSystem {
	build, err := fs.Sub(BuildFs, "build")
	if err != nil {
		log.Printf("Warning: 'build' directory not found, serving fallback: %v", err)
		fallbackFS := os.DirFS("./public")
		return http.FS(fallbackFS)
	}
	return http.FS(build)
}

func BuildSystemFS() fs.FS {
	build, err := fs.Sub(BuildFs, "build")
	if err != nil {
		log.Printf("Warning: 'build' directory not found, returning fallback FS: %v", err)
		return os.DirFS("./public")
	}
	return build
}
