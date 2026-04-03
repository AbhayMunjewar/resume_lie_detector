const fs = require('fs');

async function run() {
    const formData = new FormData();
    formData.append('resume', new Blob([fs.readFileSync('test.pdf')]), 'test.pdf');
    
    // First we upload
    const uploadRes = await fetch('http://127.0.0.1:8000/api/upload-resume/', {
        method: 'POST',
        body: formData
    });
    console.log('Upload:', uploadRes.status, await uploadRes.text());
    
    // Then detect
    const detectRes = await fetch('http://127.0.0.1:8000/api/detect-skills/');
    console.log('Detect:', detectRes.status, await detectRes.text());
}
run();