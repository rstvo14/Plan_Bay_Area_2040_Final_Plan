2040.planbayarea.org
--------------------

This website was first built using Drupal 8 content management system. Most of Drupal 8 markup has been left unaltered. 

The new project directory cleans up code/files with added spacing and coherent structure:   

	index.html (this is the home page)
	page-title.html (one html file for each of the pages on the site and match the existing url page name with hyphens)
	css folder (one or more css files with all the css for all pages, referenced from the <head> of each page)
	js/jquery.v123.js (whichever version is currently used, referenced from the <head> of each page)
	js/other-js-plugins.js (include all other jquery and js plugins, reference from the <head> of each page)
	js/scripts.js (any custom scripts, referenced from the <head> of each page)
	images/ (folder with all images used on the site)
	fonts/ (folder with fonts, if not hosted via google or another webfont platform)
	files/ (folder with all files linked from pages on the site)
	favicon.ico (fav icon for the site)

##Translation widget
The translation widget is powered by Localize.js 

All of the translation work takes place via the localize account console, which is typically managed by MTC admins. 

To add a new translate language:
1) log into Localize account console. 
1) From the Manage Organization page choose the Project tile and add a target language to translate to by typing the new language name. 
1) Update the dropdown menu structure for both mobile and desktop versions to include new language as follows:  
`<a data-language="en" href='javascript:Localize.setLanguage("en")'>English</a>`. 

##Custom CSS and JS
Both main.css and main.js hold custom features that are clear to follow and alter if needed. A minimized file is provided for carousel, jQuery, jQuery Easing, and Bootstrap.  

##Documents
PDF documents are archived year-month inside the files folder. Add new files by creating a new year-month folder and use a relative file path to reference the new file. 

##Credits
* The site 2040.planbayarea.org is owned by MTC and 
* the HTML version is created by GitHub (2020) Gustavo. https://github.com/rstvo14/plan_bay_area_2040_final_plan.git. 
