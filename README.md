# Run using Docker

```
docker build . -t pokerfrontend

docker run -v $(pwd):/app -p 4000:4000 pokerfrontend
```
