<!--This is the main start page-->
<template>
    <section class="content">
        <div>
            <h2 >Welcome!</h2>

            <p class="description">This is a demo site for page transitions with Vue.js and Ajax functionalities. <br>
            Select a group in the circles navigation above so the specific navigation titles and the site content belonging to the group is outprinted.<br>
            Navigate between the sites topic, rooms and members to see a smooth transition between different pages in the navigation area.
            Go to the site 'members' to find an overview in which the profile data of the members are called asynchronous from a server with AJAX calls.
            Click on the heading 'Group project' everywhere to come back to this explanation page.</p>

            <p><b>This is just a demo website for page transitions done with css animations and Vue.js.<br>
                The whole content is fictive.</b></p>

            <h3>Image sources:</h3>
            <p class="sources">https://unsplash.com/photos/Cd7dYdJKIKk Photo by Alina Kovalchuk on Unsplash <br>
                https://unsplash.com/photos/hh3ViD0r0Rc Photo by Luis Villasmil on Unsplash<br>
                https://unsplash.com/photos/pg_WCHWSdT8 Photo by Matheus Ferrero on Unsplash<br>
                <br>
                https://unsplash.com/photos/bsU_7Ln2E2Y Photo by Eli DeFaria on Unsplash<br>
                https://unsplash.com/photos/hAzhOdGngxc Photo by Alex Holyoake on Unsplash<br>
                https://unsplash.com/photos/xe-e69j6-Ds Photo by Chad Kirchoff on Unsplash<br>
                <br>
                https://unsplash.com/photos/LSP9Tpavbms Photo by Emile Guillemot on Unsplash<br>
                https://unsplash.com/photos/JN0SUcTOig0 Photo by Kelly Sikkema on Unsplash<br>
                https://unsplash.com/photos/fotL14-nREg Photo by Azamat Zhanisov on Unsplash<br>
                https://unsplash.com/photos/CJop_Vh9aKQ Photo by Yucel Moran on Unsplash<br>
                <br>
                https://unsplash.com/photos/bJjsKbToY34 Photo by NordWood Themes on Unsplash<br>
                https://unsplash.com/photos/95YRwf6CNw8 Photo by Clément H on Unsplash<br>
                https://unsplash.com/photos/3GZi6OpSDcY Photo by Nicolas Thomas on Unsplash<br>
                https://unsplash.com/photos/I610NmXZwqo Photo by Fancycrave on Unsplash<br>
                https://unsplash.com/photos/_Yc7OtfFn-0 Photo by RhondaK Native Florida Folk Artist on Unsplash<br>
                https://unsplash.com/photos/krV5aS4jDjA Photo by russn_fckr on Unsplash<br>
                https://unsplash.com/photos/qX9Ie7ieb1E Photo by Alex Holyoake on Unsplash<br>
                https://unsplash.com/photos/QckxruozjRg Photo by Annie Spratt on Unsplash<br>
                <br>
                Room plan created by myself with Lucidchart https://www.lucidchart.com/</p>
        </div>
    </section>
</template>


<style scoped lang="scss">
   .content {
       padding: 20px;
   }

   h2 {
       text-align: center
   }

   h3 {
       max-width: 700px;
       margin: 30px auto 0 auto;
   }

    h2, .description {
        margin-bottom: 20px;
    }

    p {
        max-width: 700px;
        margin: 0 auto;

        &.sources {
            font-size: 11px;
        }
    }


</style>

