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
1) cd into FrontEnd/myfirstapp and run "docker build -f Dockerfile.mysql -t bookeroodb:latest ."
2) run the created MySQL image
3) cd into each and every microservices (loginmicroservices, bookservices, orderservices)
4) run "mvn -B -DskipTests clean package"
5) run "mvn spring-boot:run"
6) cd into FrontEnd/myfirstapp
7) run "npm install"
8) run "npm start"



