export class S3Client {
  uploadFile(
    fileName: string,
    body: string
  ) {
    console.log(
      `Uploading ${fileName} to S3`
    );
  }
}

export class FileService {
  constructor(
    private s3Client: S3Client
  ) {}

  saveFile(
    fileName: string,
    content: string
  ) {
    this.s3Client.uploadFile(
      fileName,
      content
    );
  }
}

const s3 = new S3Client();

const service = new FileService(s3);

service.saveFile(
  "notes.txt",
  "distributed systems"
);
