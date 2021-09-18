# RMIT SEPT 2021 Major Project

# SEPT-Tue-1830-Group-01

## Members
* Khoi Nguyen - s3678755
* Derren Wei Hong Chin - s3814934
* Sarthak Rungta - s3816605
* Liam Carnie - s3718562
* Chen Wang - s3853260

## Records
* Github repository: https://github.com/s3678755/SEPT-Tue-1830-Group-01
* Jira Board: https://liamcarnie-s3718562.atlassian.net/jira/software/projects/SP/boards/1
* Google Docs: https://drive.google.com/drive/u/1/folders/1ZEfl9JwN2qGaZRTaq6omftYSNP_KagGN
  
## To run the application locally for development:
1) Pull the MySQL Docker Image and run:
2) docker run --name septdb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=pass -d mysql:latest
3) Open MySQL CLI by type in:
4) winpty docker exec -it septdb bash (winpty for windows/ -it for MacOS)
5) Added 2 required schemas: book and user
6) cd into each and every microservice (loginmicroservices, bookservices) and run:
7) mvn spring-boot:run
8) cd into FrontEnd/myfirstapp
9) run "npm install"
10) run "npm start"



