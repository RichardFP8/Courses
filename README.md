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