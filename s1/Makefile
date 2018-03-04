
build:
	docker build --tag inanme/sapp:${version} .
	docker images
	docker push inanme/sapp:${version}

run:
	-docker rm sapp
	docker run --name sapp -p8081:8080 inanme/sapp:${version} 8080 &

push:
	docker push inanme/sapp:${version}

deploy:
	@sed \
	-e s/%version%/${version}/g \
	-e s/%port%/8081/g dep.yaml \
	> dep-${version}-temp.yaml
	kubectl apply -f dep-${version}-temp.yaml --namespace inanme --record

rmi:
	kubectl delete all --all
	-docker rmi inanme/sapp:1
	-docker rmi inanme/sapp:2
	-docker rmi inanme/sapp:3
	-docker rmi inanme/sapp:4
	docker images

rollout:
	kubectl set image deployment my-sapp my-sapp=inanme/sapp:${version}
	kubectl rollout status deployment my-sapp