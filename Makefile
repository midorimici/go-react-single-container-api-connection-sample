up:
	@docker compose up -d
	
upb:
	@docker compose up -d --build

down:
	@docker compose down

runsh:
	@docker compose run app sh

sh:
	@docker compose exec app sh
