# Makefile for Battello di Pace website

# Default target
.DEFAULT_GOAL := help

# Variables
NODE_BIN := node_modules/.bin
PORT := 3000

.PHONY: help
help: ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

.PHONY: install
install: ## Install dependencies
	npm install

.PHONY: dev
dev: ## Start development server
	npm run dev

.PHONY: build
build: ## Build for production
	npm run build

.PHONY: preview
preview: build ## Build and preview production build
	npx vite preview --port $(PORT)

.PHONY: clean
clean: ## Clean build artifacts and dependencies
	rm -rf build/ node_modules/ .cache/

.PHONY: reinstall
reinstall: clean install ## Clean and reinstall dependencies

.PHONY: update
update: ## Update dependencies to latest versions
	npm update

.PHONY: check
check: ## Check for outdated dependencies
	npm outdated || true

.PHONY: serve
serve: build ## Build and serve with a simple http server
	@echo "Serving build/ on http://localhost:8000"
	@cd build && python3 -m http.server 8000

.PHONY: size
size: build ## Show build size analysis
	@echo "Build size analysis:"
	@du -sh build/
	@echo "\nLargest files:"
	@find build -type f -exec du -h {} + | sort -rh | head -10

.PHONY: git-status
git-status: ## Show git status
	@git status -s

.PHONY: deploy-ready
deploy-ready: clean build ## Prepare for deployment (clean build)
	@echo "✅ Build ready for deployment in ./build/"
	@echo "Total size: $$(du -sh build/ | cut -f1)"