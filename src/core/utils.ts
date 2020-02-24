export function fileListToArray(fileList: FileList): File[] {
    const files: File[] = [];
    for (let i = 0; i < fileList.length; i++) {
        files.push(fileList[i]);
    }
    return files;
}