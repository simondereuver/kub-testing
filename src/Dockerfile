FROM node:12

#Set working directory inside container
WORKDIR /src

#Copy package.json and package-lock.json
COPY package*.json ./   

#Install dependencies
RUN npm install

#Copy the rest of application/enviroment code
COPY . .

#Expose port the application is running on
EXPOSE 5000

#Command to run the application, add whatever scripts you want, this is a very basic application so Im only using "start"
CMD ["npm", "start"]
