# BitBook
Final BIT project. Social network mock.

Tech Stack

-Create React App for development and test infrastructure
-React for UI
-MaterializeCSS for CSS styles

Prerequisites

-Node.js v8.2.1 or higher    
-VS Code editor 

Getting Started
Just clone the repo and start hacking:


$ git clone https://github.com/emilbisak/BitBook

$ cd BitBook

$ npm install                     # Install project dependencies listed in package.json

$ npm start                       # Compiles the app and opens it in a browser with "live reload"


Project file structure:

├── node_modules/                  
├── public/                        
│   ├── favicon.ico                 
│   ├── index.html                                 
│   └── manifest.json              
│                          
├── src/                           
│   ├── app/                     
│   ├── entities/                       
│   ├── services/                    
│   ├── shared/                
│   ├── Home/                      
│   ├── Link/                      
│   ├── index.css                 
│   ├── index.js                   
│   └── registerServiceWokrer.json                                             
│                       
├── .gitignore                         
├── package-lock.json   
├── package.json              
└── README.md       




React component structure:

<App>
    <LoginRegister>
        <Login />
        <Register />
    </ LoginRegister>
=================================
        <Header />

        <UserPage />

        <PostContent>
            <TextPostBody />
            <ImagePostBody />
            <VideoPostBody />
            <CommentForm />
            <CommentList>
                <SingleComment />
            </ CommentList>
        </ PostContent>

        <PeoplePage>
            <SearchPeople />
            <PeopleList>
                <PeopleCard />
            </ PeopleList>
        </ PeoplePage>

        <Profile>
            <Modals />
        </ Profile>

        <Feed>
            <FeedList>
                <EmptyFeedMessage>
                        ||
                <TextPostBody />
                <ImagePostBody />
                <VideoPostBody />  
            </ FeedList>
            <FilterPost />
            <Modals />
            <Buttons />
        </ Feed>
        <Footer />
</ App>





License
Copyright © 2018-present Undefined. 
