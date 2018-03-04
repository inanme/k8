

build:
	docker build --tag inanme/app:${version} .
	docker images

run:
	-docker rm app
	docker run --name app -p8081:8080 inanme/app:${version} 8080 &

push:
	docker push inanme/app:${version}

deploy:
	sed \
	-e s/%version%/${version}/g \
	-e s/%port%/8081/g dep.yaml \
	> dep-${version}.yaml
	kubectl apply -f dep-${version}.yaml --namespace inanme

rmi:
	kubectl delete all --all
	-docker rmi inanme/app:1
	-docker rmi inanme/app:2
	-docker rmi inanme/app:3
	-docker rmi inanme/app:4
	docker images
