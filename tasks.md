Learnathon 2.0
Project: React Js
Co-ordinator & Mentor: Mohammed Fathe Mubin
Group: 3
Project title: React To-do App
Project instructions:
    1)  Create a react app (e.g using CRA) [Done]
    2)  Make a login page (localhost:3000/login) containing the followings:
            a) Title: Learnathon 2.0 (must)
            b) Subtitle: Your Full Name (must)
            c) Login button (must)
            d) Designing the page (the way you like it, full freedom)
            plan - create a private route. the home url will be the private route. use Next.js Auth or OAuth2.0.

    3) Integrate free Auth0 account with your react app.
            b) Take all the necessary steps to connect auth0 with your app
            c) Take help of the Auth0 documentations.
            d) Don’t use Auth0’s react sample.

    4)  Login button should redirect to Auth0 login portal.
    5)  Activate google account login feature of Auth0 from social connections.
    6)  Once logged in the user is redirected to dashboard (localhost:3000/dashboard).
    7)  The dashboard layout will have three components:
            a) Header
            b) Content (Welcome to ${yourNickName} Dashboard)
            c) Footer
    8)  Header should have the followings:
            a) Navigation tab on the left
            b) Logout button on the right
    9)  For Navigation, install react-router.
    10) The Navigation will have the following:
            a) Profile page (localhost:3000/profile)  
            b) To-do List Page (localhost:3000/to-do-list)
    11) Profile page will show the user’s (google) profile using the Auth0 user feature.
    Profile page sample:
    
    12) To-do page will have the following:
            a) There should be a Add button to create a new item.
            b) The new item will be appended on top of the button.
            c) The new item should have a check button on the left side
            d) On check click the item will disappear.
    13) Content should contain the profile info and to do page in the dashboard layout
    14) Footer should contain @Learnathon 2.0 powered by ${yourNickName}
    15) On logout (using Auth0) the user is redirected to login page.


[N.B: Please consider that once logged out or not logged in if someone tries to manually try to redirect to dashboard the navigations are disabled and the contents of profile and todo isn’t there. Hint: Use Auth0 to achieve that.]

Bonus point: You can achieve bonus points if you can make something like Keep Notes. So, once the items are checked off, they doesn’t disappear rather they are added in another list below the original list but they become a strikethrough text. They can be removed from the list using a cross button.