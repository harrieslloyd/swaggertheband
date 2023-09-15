# Swaggertheband HTML system docs
I made this guide just so we could be more orginized. We can both add to it. 

I think we should work in sections (`<section></section>`). 

## The Header
In order to use the header add this code to the top of the site: 

    <header>
        <table>
            <tr>
                <th class="navcol"><a class="active" href="/index.html">Home</a></th>
                <th class="navcol"><a href="/biography.html">Biography</a></th>
                <th><div id="hiddenlogo" class="hl hidden" ></div></th>
                <th class="navcol"><a  href="/upcomingEvents.html">Upcoming Events</a></th>
                <th class="navcol"><a href="/media.html">Media</a></th>
            </tr>
         </table>
    </header>

Add the `active` class to the link to the page that you are on. 

## Title section

In order to use a title section create a section like this: 

    <section class="titlesection">
        <h1>Title!</h1>
    </section>

The `titlesection` class defines it as a title section. We may want to make all the titlesections have a diff background and so this may change. 

## Main Section

Create a main section like this: 

    <section class="mainsection"></section>

Then, if the section is going to be just text, add this div right inside: 

    <div class="textwrap">
        <p>
            Your Cool Paragraph!
        </p>
    </div>

The `textwrap` class gives it a specific width so it stays nice and wrapped with some nice margins. 

You can stack Main Sections

Lastly, if the section is the last section on the page, add the `last` class like so:

    <section class="mainsection last"></section>

This gets rid of the dotted line at the bottom of the section. 

<hr>

Again, this is just so we can have a uniform site. (I also wanted to test markdown and this seemed like a good way to do it)

All this is up for deliberation and change. Nothing is final. 
