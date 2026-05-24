export class DockerService {
  buildImage() {
    console.log("Building Docker image");
  }

  pushImage() {
    console.log("Pushing Docker image");
  }
}

export class KubernetesService {
  deploy() {
    console.log(
      "Deploying to Kubernetes"
    );
  }
}

export class MonitoringService {
  setupMonitoring() {
    console.log(
      "Setting up monitoring"
    );
  }
}

const docker =
  new DockerService();

const kubernetes =
  new KubernetesService();

const monitoring =
  new MonitoringService();

docker.buildImage();

docker.pushImage();

kubernetes.deploy();

monitoring.setupMonitoring();
