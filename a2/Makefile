

build:
	docker build --tag inanme/app:${version} .
	docker images
	docker push inanme/app:${version}

run:
	-docker rm app
	docker run --name app -p8081:8080 inanme/app:${version} 8080 &

push:
	docker push inanme/app:${version}

deploy:
	@sed \
	-e s/%version%/${version}/g \
	-e s/%port%/8081/g dep.yaml \
	> dep-${version}-temp.yaml
	kubectl apply -f dep-${version}-temp.yaml --namespace inanme --record

rmi:
	echo $0
	kubectl delete all --all
	-@seq 1 4 | awk '$$0="inanme/app:"$$0' | xargs docker rmi
	-@seq 1 4 | awk '$$0="inanme/sapp:"$$0' | xargs docker rmi
	docker images

rollout:
	kubectl set image deployment my-app my-app=inanme/app:${version}
	kubectl rollout status deployment my-app