export function fileListToArray(fileList: FileList): File[] {
    const files: File[] = [];
    for (let i = 0; i < fileList.length; i++) {
        files.push(fileList[i]);
    }
    return files;
}

export function filesToFormData(files: File[]): FormData {
    const form = new FormData();
    files.forEach(x => {
        form.append('files', x);
    })
    return form;
}