const ACCESS_TOKEN = '8mkIvgNzNGqkfwORRNJR6bVc74UrA2NM';
const FOLDER_ID = '0';

const uploader = new Box.ContentUploader();

// Show the content uploader
uploader.show(FOLDER_ID, ACCESS_TOKEN);

// Log upload data to console
uploader.on('complete', (data) => {
    console.log(`All files successfully uploaded: ${JSON.stringify(data)}`);
});

uploader.on('upload', (data) => {
    console.log(`Successfully uploaded file with name "${data.name}" to Box File ID ${data.id}`);
});

uploader.on('error', (data) => {
    console.log(`Error uploading file with name "${data.file.name}". The error was: "${data.error}"`);
});
