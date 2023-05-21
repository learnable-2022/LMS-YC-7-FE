## WELCOME TO SPROUT TUTOR

### PLEASE READ CAREFULLY HOW TO COLLABORATE

<ul>
    <h2>WHAT THIS WOULD CONTAIN</h2>
    <b>
        <li>How to clone the repository</li>
        <li>How to install dependencies</li>
        <li>How to use those dependencies</li>
        <li>How to commit to your own branch</li>
        <li>How to structure your code.</li>
    </b>
</ul>

### HOW TO CLONE THIS REPOSITORY

By now, you should be here and you have gotten invited to this particular repository, which means this is where you would work with till the end of the <b>BUILD SESSION</b> which would last till June.

Please follow the instructions clearly for easy and better collaborations.

To clone this repo, you have to route to the path where you want to save this repo. for convinience, I would use `Desktop` as the means where everything is based.

<h2>INSTRUCTIONS</h2>

<li>On your desktop, you can tap your <i>Windows</i> key and type <b>Command Prompt</b> on there to show your terminal interface. <i>For mac users, just click on the terminal on your homescreen, it will open.</i> <br> Alternatively, you can press the `CTRL + R` on your keyboard to open the run window, then type in `cmd`, then the enter key to open your terminal.</li>

Then you do

```
cd desktop
```

This routes to your desktop

<li>To clone this folder, you do;</li>

```
git clone https://github.com/learnable-2022/LMS-YC-7-FE.git
```
This would clone the folder on your desktop.
<li>To route to this folder, you type</li>

```
cd LMS-YC-7-FE
```
This would route you to the folder. There you should see the folder `sprout-tutor` amongst other folders. That is where you would be working on.

You would find that the dependencies have been installed, and some pages prepped already. It was created using `Vite + React` and `SASS`. This is what we would be using for the project.

To install dependencies, you do;

```
npm install
```

This should install all dependencies used in the project. else you have to go to your `/package.json` file there, look at the dependences and proceed to install them.

<h2>HOW TO CONTRIBUTE</h2>

You would have seen the paths and how they have been described. I would urge you to look at the `./App.scss` file as it contains all the already proposed variables we would need for the duration of the project. please stick to them. You should also look to <b>Other SASS files</b> to see how these variables have been used. this would give you an insight of what to do and how to use the SASS variable sin your work.

After that, you would see we have three distinct Folder types. The `Pages`, the `Components` and the `assets`. I would explain what each folder should contain;

### PAGES
This should contain only the Pages that would be routed to throughout the course of the project. Each page should have its own folder, as depicted already, and each folder should be a clear name of the page to be routed to, and inside of the folder should contain its specific `.jsx` file and `.scss` file. Example.

```
├──Pages
│├──Landing
││├──Landing.jsx
││├──Landing.scss
│├──About
││├──About.jsx
││├──About.scss
```
This is how it is to appear as so. That clearly indicates it is a Pages folder which nests a Landing page and an About page. This you would see already prompted in the code. <em>Please follow accordingly!!!</em>

### COMPONENTS

As you would have guessed, this contains all the components that would be used throughout the course of the project. Remember that every part of a website is made up of components. it should follow the same course as the `Pages` above, and should also be kept sacred. It should look like this;

```
├──Components
│├──Button
││├──Button.jsx
││├──Button.scss
│├──Navbar
││├──Navbar.jsx
││├──Navbar.scss
```

And so. These are all components of the webpage, and can be called into their parent components. It facilitates reusability, code cleanlines and better organisation. It would help others who want to read your code read and understand it better.

You would find that there is a navigation button there already, and as you would see, its function is pretty simple. It has been made to go to the `/about` page for now. This is as a result of using props to engineer this process. That button now is a reusable component, and can be made to route to any page you want. You can look at the code for demonstration, and how it has been used. You would see it accepts various props in order to perform its functions. It also has the flexibility of independent design.


### ASSETS

Need I say more? This is the place that would contain all the assets(images, videos, icons that we decide to download) for the website. Nothing else is to be here.


I HOPE THIS CLARIFIES US ON THE ORGANISATION OF THINGS AND HOW THEY SHOULD BE PLACED AND HOW THEY SHOULD APPEAR.

## HOW TO USE THOSE DEPENDENCIES

To use the dependencies, you just have to use it for specific cases. For now, the dependencies installed are `sass`, `react-awesome-reveal`, `animate.css`. The last two are animation libraries which have ease of function. for more knowledge on how to use them, you can refer to;

For react-awesome-reveal;
https://www.npmjs.com/package/react-awesome-reveal

For animate.css
https://animate.style/#documentation

They provide an easy to use brochure on impementing animations if you so want to use them.

SASS supports nesting, and it is closer to CSS meaning that there is no knowledge of CSS you wouldn't use in SASS. The main reason for using SASS is because of its ease of use, and its less clogy nature than CSS. You are free to use CSS if you soo want to as this is a build project we have to deliver on time.

This is how SASS looks like as opposed CSS

SASS

```
.container{

    .outer{

        .inner{

        }
    }
}
```

CSS

```
.container{

}

.container .outer{

}

.container .outer .inner{

}
```

This is one of the fundamental reason for how they are different. Another reason being how you call and declare variables

SASS

```
$white: #fefefe;
$black: #0a0a0a;
$width: 100%;
$text: 1em;

*CALLING THEM*

.container{
    width: $width;
    color: $white;
    background: $black;
    font-size: $text;
}
```

CSS

```
--white: #fefefe;
--black: #0a0a0a;
--width: 100%;
--text: 1em;

*CALLING THEM*

.container{
    width: var(--width);
    color: var(--white);
    background: var(--black);
    font-size: var(--text);
}
```

As you can see from above, it saves a great deal of time writing SASS than CSS. <em>USE WISELY</em>

### HOW TO COMMIT TO YOUR OWN BRANCH

Once you have cloned the entire repo, it is up-to-date with the main, meaning you have not yet done anything yet. To create your own branch, you can either do it by,

a. On the repo; by clicking the button where you see `main`. A dropdown would appear, and you can input the name of the branch you want to create. (I advice you use this method).

When you are done, you then do this in your terminal

```
git checkout <branch-name>
```

So, if your branch name is chidi, you do;

```
git checkout chidi
```

you should see your branch name change at the bottom left part of your code editor (if you are using `VSCode`)


Always make sure you work on your branch, and make all pull requests to the branch named `test`. Never make a PR to the main branch (This is using GOD to beg una!).

THANK YOU AS YOU MAKE A BETTER WORKING SPACE FOR ALL OF US.

### HOW TO STRUCTURE YOUR CODE.

By now, I trust you would have read the part of how your code is to appear, sequentially, and how they should be in folders. Please go back and re-read that part if you didn't. It is very important and crucial to our development methodologiesas it would facilitate better workings between everyone.


SO, SOME PAGES HAVE BEEN PREPPED FOR YOU TO SEE HOW IT WORKS. LAST BUT NOT THE LEAST. AS IT IS A BUILD SESSION, WE WOULD HAVE TO ALLOW FOR A FRAMEWORK TO BE USED. THAT FRAMEWORK IS `TAILWIND.CSS` IT HAS NOT BEEN PREPPED, BUT IF YOU WANT TO USE IT, INSTALL THE DEPENDENCY AND PREP IT. ANYONE THAT WANTS TO USE IT WOULD THEN CLONE FROM YOUR WORK AND RESOLVE ISSUES.

The most paramount thing here is communication, and as such each person would be working on separate pages at each time. I would trust you to follow the routing processes so that merging of code would be easier.

At the end of EACH DAY, PRs should be made to the test branch so they would be resolved. This means that before you start working the next day, you have to pull from the test branch to see any changes. You should run the command

```
git pull origin test
```

In your terminal, which should be routed to the `sprout-tutor` folder you are working on.

PLEASE REMEMBER TO COMMIT YOUR CODES FOR THE DAY BY 5PM DAILY, AND CLONE WHENEVER YOU WANT TO START.

THANK YOU FOR READING THROUGH