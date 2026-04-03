import urllib.request
import urllib.parse
import json

boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW'
body = []
body.append('--' + boundary)
body.append('Content-Disposition: form-data; name="resume"; filename="test.pdf"')
body.append('Content-Type: application/pdf')
body.append('')
body.append('fake pdf content with React and Python')
body.append('--' + boundary + '--')
body.append('')
body_bytes = '\r\n'.join(body).encode('utf-8')

req1 = urllib.request.Request('http://127.0.0.1:8000/api/upload-resume/', data=body_bytes)
req1.add_header('Content-Type', 'multipart/form-data; boundary=' + boundary)

try:
    print('Sending POST...')
    r1 = urllib.request.urlopen(req1)
    print(r1.status, r1.read().decode())
    
    print('Sending GET...')
    req2 = urllib.request.Request('http://127.0.0.1:8000/api/detect-skills/')
    r2 = urllib.request.urlopen(req2)
    print(r2.status, r2.read().decode())
except Exception as e:
    import traceback
    traceback.print_exc()
    if hasattr(e, 'read'):
        print(e.read().decode())
