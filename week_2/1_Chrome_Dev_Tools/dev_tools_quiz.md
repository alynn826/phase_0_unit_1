#### Include an inline screenshot of your codeschool's points from the profile page:

<html>

<img src="http://i1370.photobucket.com/albums/ag279/lemabean826/ScreenShot2014-05-05at125729PM_zps815a1777.png"/>
<img src="http://i1370.photobucket.com/albums/ag279/lemabean826/ScreenShot2014-05-05at34430PM_zps5783d9f7.png"/>

</html>

Modify the Markdown to include your answers. Don't delete the questions! -

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS
  The Elements and the Sources tabs allow realtime editing of HTML and CSS in Devtool.  The difference is the changes you make in the Elements tab are temporary where as if you make the changes in Source and save them it's permanent. 
  * Javascript Debugging
  The Sources tab is where you can debug your JavaScript. Click on the error message icon on the top right and you can see where the error is and fix it. 
  * Performance Optimization 
  You can use the Network tab in conjunction with the PageSpeed to analyze what is taking the most network recources to load and work to streamline the code. You can also use the Timeline tab to check for memory leaks if your application is running slow. 

* What's the quick key for your OS to spawn the Dev Tools inspector?
alt+command+I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!) 
  The color is #0b0f11.

  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)


* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain. 
Because the text is actually a part of the image file, it's not the actual paragraph. 

* Go to www.ticketswizard.com and analyze the page. 
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  Open DevTool and click the Network tab.  You can find the size of everything being loaded on the webpage there.  The URL of the image is:
  http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png and it is 316 KB. 

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated? 

The lowest hanging fruit would be to optimize the images and you can reduce their size by 837.9KiB.