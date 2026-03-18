.DEFAULT_GOAL := help

.PHONY: help dev build preview test test-watch test-ui install clean

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*##' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*##"}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

dev: ## Start development server (http://localhost:4321)
	npm run dev

build: ## Build for production → dist/
	npm run build

preview: build ## Build then serve dist/ locally
	npm run preview

test: ## Run tests once
	npm run test:run

test-watch: ## Run tests in watch mode
	npm run test

test-ui: ## Run tests with browser UI
	npm run test:ui

install: ## Install dependencies
	npm install

clean: ## Remove build output
	rm -rf dist/
