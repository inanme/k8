

build:
	docker build --tag inanme/app:${version} .

run:
	-docker rm app
	docker run --name app -p8081:8080 inanme/app:${version} &

push:
	docker push inanme/app:${version}

deploy:
	sed s/%version%/${version}/g dep.yaml > dep-${version}.yaml
	kubectl apply -f dep-${version}.yaml --namespace inanme

rmi:
	kubectl delete all --all
	-docker rmi inanme/app:1
	-docker rmi inanme/app:2
	-docker rmi inanme/app:3
	-docker rmi inanme/app:4
	docker images
