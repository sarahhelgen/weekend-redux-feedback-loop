# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


TO DO LIST:

[x] npm installs
[x] create db in postico
[x] create drawing/visual of the app
[x] boilerplate in index.js
    [x] createStore
    [x] combineReducers
    [x] redux logger applyMiddleware
    [x] Provider and reduxStore as props

Create routes with corresponding components:

[x] How are you feeling today? / (home)

    form: 
       [x] input: feeling (rank 1 -5 )
       [x] button: Next (on click captures the data and brings the user    to the next page)
       [ ] needs input validation so that a user must submit something - add an alert for this as well
       [x] dispatch

[x] How well are you understanding the content? /understanding

    form:
      [x]   input: understanding (rank 1 -5 )
      [x]   button: Next (on click captures data and brings user to the next page)
       [ ]  needs input validation so that a user must submit something - add an alert for this as well
     [x]  DISPATCH

[x] How well are you being supported? /support

    form:
      [x]   input: supported (rank 1 - 5)
      [x]   button: Next (on click captures data and brings user to the next page)
      [ ]   needs input validation so that a user must submit something - add an alert for this as well
    [x]  DISPATCH

[x] Any comments you would like to leave? /comments

    form
      [x ]   input: text 
      [x ]    button: Next (on click captures data and brings user to next    page)
      [ ]   needs input validation so that a user must submit something - add an alert for this as well
     [x] DISPATCH

[x] Review your feedback: /feedback

    [] Feelings, Understanding, Support, Comments - display all previous responses 
        - USE SELECTOR
    [] Submit button - save submission and send to database

 [x] Thank you: /thank you

    [ ] leave new feedback button - on click, sends you back to /feeling
    [ ] on click also resets the form

 Reducers 
 - feelingReducer
 - understandingReducer
 - supportReducer
 - commentsReducer
 
- useHistory to push from one view to the next


 Server Side Route:

/feedback
[x] POST: need DB query

[ ] update README

[ ] add code comments

[ ] add some material ui


