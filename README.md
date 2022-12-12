# Courses
## Steps for Workbook8 Exercise 2
1.  Only after the button is clicked(onclick event)
2. Get the values of the input boxes
3. Test for the textboxes that only accept numbers  
- If the value contain any characters other than numbers: Stop and send the message that input is not valid
- Else continue to test
- The date box's value, change the day by one since the format converted to a date object is off by one day
4.Change the date format with just the day and month
5. Create a form data and input the values of the input boxes to it
6. Call a helper function, pass in the formdata
7. In helper function _fetch_ for the API and post the new resource 
8. Use the second then() as the promise was successful
9. Use the catch() as the function if the promise failed
10. **Failed to include**: Make sure that all inputs are valid, check that it isn't empty, days isn't over 50 or below 1  

## Including the DELETE method of request - Steps taken
### Included the confirm-delete.html page

1. Add a cell to the end of each row/course to delete _that_ course
2. Add a link to the html text in that new cell and attach it to the new page
2a. Use query string parameter in the link to get that specific course
3. When the linked is click, take the user to the _that_ new page and display the details of the corresponding course 
4. In the script for the new page, get the value of the id from the query string with _location.search_
5. Test if the query string **has** a value and then **get** it
6. _fetch_ the data of that course from the local API and display each property in the middle of the page
7. Include a **CONFIRM DELETE** button below the content of the course 
8. When the button is _clicked_ delete the course and redirect the user back to the home page (index.html)