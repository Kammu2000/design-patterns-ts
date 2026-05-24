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

export class DeploymentFacade {
  constructor(
    private docker: DockerService,
    private kubernetes: KubernetesService,
    private monitoring: MonitoringService
  ) {}

  deployApplication() {
    this.docker.buildImage();

    this.docker.pushImage();

    this.kubernetes.deploy();

    this.monitoring.setupMonitoring();

    console.log(
      "Application deployed successfully"
    );
  }
}

const facade =
  new DeploymentFacade(
    new DockerService(),
    new KubernetesService(),
    new MonitoringService()
  );

facade.deployApplication();
