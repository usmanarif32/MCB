import http.server
import ssl

# Define the HTTP request handler
handler = http.server.SimpleHTTPRequestHandler

# Setup the server
httpd = http.server.HTTPServer(('localhost', 4443), handler)

# Wrap the socket with SSL for HTTPS
httpd.socket = ssl.wrap_socket(httpd.socket,
                               keyfile="C:\Users\usman.arif2\Documents\SSL\obdx-uat_mcb_com_pk_856155590\DigiCertCA.crt",  # Your SSL certificate file
                               certfile="C:\Users\usman.arif2\Documents\SSL\obdx-uat_mcb_com_pk_856155590\DigiCertCA.crt",  # Your SSL certificate file
                               server_side=True)

print("Serving on https://localhost:4443")
httpd.serve_forever()
