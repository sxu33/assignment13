"# How to Run the Web Application on localhost:8083

To build the Docker image, run the following command in the project root directory:

docker build . -t xu_shaozhuo_coding_assignment12:v1.0

To run the Docker container, use the following command:

docker run --name xu_shaozhuo_coding_assignment12 -d -p 8083:8083 xu_shaozhuo_coding_assignment12:v1.0

Once the container is running, you can access the application in your web browser at:
http://localhost:8083

```

```
