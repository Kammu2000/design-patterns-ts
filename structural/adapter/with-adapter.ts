interface StorageEngine {
  save(
    fileName: string,
    content: string
  ): void;
}

class S3Client {
  uploadFile(
    fileName: string,
    body: string
  ) {
    console.log(
      `Uploading ${fileName} to S3`
    );
  }
}

class S3StorageAdapter
  implements StorageEngine {

  constructor(
    private s3Client: S3Client
  ) {}

  save(
    fileName: string,
    content: string
  ): void {
    this.s3Client.uploadFile(
      fileName,
      content
    );
  }
}

class LocalFileSystem
  implements StorageEngine {

  save(
    fileName: string,
    content: string
  ): void {
    console.log(
      `Saving ${fileName} locally`
    );
  }
}

class FileService {
  constructor(
    private storage: StorageEngine
  ) {}

  saveFile(
    fileName: string,
    content: string
  ) {
    this.storage.save(
      fileName,
      content
    );
  }
}

const s3Adapter =
  new S3StorageAdapter(new S3Client());

const service =
  new FileService(s3Adapter);

service.saveFile(
  "notes.txt",
  "distributed systems"
);
