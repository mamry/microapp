# microapp

Welcome to Microsercies application created with Node.js & react.


To run the program: 
Watch from the middle of this Youtube video 

or follow this: 

Install Docker and enable kubernetes 
https://www.docker.com/get-started

Install Postaman API
https://www.postman.com

Install nginx Ingress
https://kubernetes.github.io/ingress-nginx/deploy/

Install Skaffold 
https://skaffold.dev/docs/install/


Then from your terminal change to project directory
Type \: skaffold dev

Opend a new terminal window and change to client directory
type \: npm start


Use postman to create posts:
In your terminal go to project directorty
type \: kubectl get services 

copy NodePort number 
back to postman:
create new post: http://localhost:{NodePort}/posts/create
Click send 
Then refresh react app browser.
