/*----------------------------
    home page
----------------------------*/

// intro > tagline
var intro =
    "layouts, components, patterns and much more guidelines applied for the whole principles at Hoiio";


// layout > tagline
var layout =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";


// style > tagline
var style =
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


// style > color
var color =
    "The Hoiio palette includes 6 main colors which represents 6 states applied to mostly web applications.";


// style > fonts
var fonts =
    "Text font is the Poppins family, which contains five weights, from Light through Bold. With icon font, we use all icon has 409 icons, including all icons of Entypo and several custom icons.";


// component > tagline
var component =
    "At Hoiio, we applied <strong>Semantic framework<\/strong>, which revised with Hoiio Hexagon UI, into all app design interface.<br>Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.";


// pattern > tagline
var pattern =
    "Design patterns are standard reference points for the experienced user interface designer.";


// subscribe > tagline
var subscribe =
    "join to get updated on <strong>design standards<\/strong>";



/*----------------------------
    layout page
----------------------------*/

// page
var typePage =
    "A page lists and describles all same data. Page includes menu with links of sub pages, header, and content";

// card
var typeCard =
    "Cards display <strong>independent content<\/strong> as blocks which used mostly to show simple information and less actions. Layout with one card looks like a page with one column. If you have not enough space for too much content with three cards, we suggest you use pages. For example, 4 cards put in 2 spaces or each card is a page";

// sidebar
var typeSidebar =
    "A sidebar, which is placed on the left of screen, is used to view more detail content without leaving the parent";

// dialog
var typeDialog =
    "A dialog contains the short information, which is used to display the confirmation, additional content";


/*----------------------------
    pattern page
----------------------------*/
var patternDescription =
    "hihihehe";


/*----------------------------
    color page
----------------------------*/

// color > description
var colorDescription =
    "The Hoiio palette includes 6 main colors which represents 6 states applied to mostly web applications.";

// color > primary
var colorPrimary =
    "Primary is a bright, warm blue that often used along with neutral colors. From a color psychology perspective, blue is reliable and responsible. In our apps, this color is often put in one-to-one communication which used to assist users in decision-making with a complete confidence to take critical actions.";

// color > info
var colorInfo =
    "Info color is a combination of blue and a small amount of yellow which helps to open the lines of communication. It is a great color we use to announce information by presenting it as the background of simple message. Due to its friendly and calm color, we can influence users to show emotional reactions rather than forcing them to take messages strictly.";

// color > success
var colorSuccess =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

// color > warning
var colorWarning =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";


// color > error
var colorError =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

// color > pending
var colorPending =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

// color > neutral
var colorNeutral =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";


/*----------------------------
    typo page
----------------------------*/
// typo > description
var typoDescription =
    "The Poppins family includes five weights, from Light through Bold. Each font includes 1014 glyphs, including all of the unique conjunct forms necessary for typesetting Indian languages like Hindi, Marathi, Nepali, etc. Just like the Latin glyphs, the Devanagari forms in Poppins are based pure geometry (particularly circles).";

/*----------------------------
    icon page
----------------------------*/
// icon > description
var iconDescription =
    "Icon Package includes all icons of Entypo and several custom icons. Entypo is the third version of a free suite of premium quality pictograms. Each pictogram has been drawn for pixel perfection at a size of 20 x 20 pixels and a very consistent style.";

/*----------------------------
    component
----------------------------*/
//component > general

//button > general
var buttonDescription =
    "Buttons are used to trigger an action. To maintain the consistency and simplicity accros Hoiio products, all action cases are covered within 4 types of button and 3 colors.";

//button > standard
var buttonStandard =
    "Standard button are used in most use cases and it should be the first option to think of when deciding which button type to use. Many standard buttons can be placed together.";

//button > primary
var buttonPrimary =
    "Primary buttons are used for the highest priority and strongest call to action. In form, do not use more than 1 primary button. In pages, do not place 2 primary buttons next to each other. Instead, consider other types of button based on the priority level.<br/> <strong>Color code: #008BD9 </strong>";

//button > warning
var buttonWarning =
    "Warning button is a special case of primary button that specifically used for the action that may cause huge impact to user's database. Example: delete data, unsubscribe plan, etc.<br/> <strong>Color code: #E64333 </strong>";

//button > link
var buttonLink =
    "Link buttons are used for the lowest priority or least encouraging actions such as 'Cancel', 'Clear all' or 'Select all'";


$('[data-page="home"] #intro .tag-line').append(intro);
$('[data-page="home"] #layout .tag-line').append(layout);
$('[data-page="home"] #styles .tag-line').append(style);
$('[data-page="home"] #styles .left.column .description').append(color);
$('[data-page="home"] #styles .right.column .description').append(fonts);
$('[data-page="home"] #components .tag-line').append(component);
$('[data-page="home"] #pattern .tag-line').append(pattern);
$('[data-page="home"] #subscribe .tag-line').append(subscribe);
$('[data-page="pattern"] #content > .description').append(patternDescription);
$('[data-page="layout"] #page > .description').append(typePage);
$('[data-page="layout"] #card > .description').append(typeCard);
$('[data-page="layout"] #sidebar > .description').append(typeSidebar);
$('[data-page="layout"] #dialog > .description').append(typeDialog);

//Color
$('[data-page="color"] #main-color .description').append(colorDescription);
$('[data-page="color"] #primary-color .description').append(colorPrimary);
$('[data-page="color"] #success-color .description').append(colorSuccess);
$('[data-page="color"] #warning-color .description').append(colorWarning);
$('[data-page="color"] #error-color .description').append(colorError);
$('[data-page="color"] #pending-color .description').append(colorPending);
$('[data-page="color"] #info-color .description').append(colorInfo);
$('[data-page="color"] #neutral-colors .description').append(colorNeutral);

//Typo
$('[data-page="typo"] #content > .block > .description').append(typoDescription);

//Icon
$('[data-page="icon"] #content > .block > .description').append(iconDescription);

//Button
$('[data-page="button"] #button-main .description').append(buttonDescription);
$('[data-page="button"] #button-standard .description').append(buttonStandard);
$('[data-page="button"] #button-primary .description').append(buttonPrimary);
$('[data-page="button"] #button-warning .description').append(buttonWarning);
$('[data-page="button"] #button-link .description').append(buttonLink);

