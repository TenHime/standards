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
    "Primary color is a bright, warm blue that often used along with neutral colors. From a color psychology perspective, blue is reliable and responsible. In our apps, this color is often put in one-to-one communication which used to <strong>assist users in decision-making with a complete confidence to take critical actions</strong>.";

// color > info
var colorInfo =
    "Info color is a combination of blue and a small amount of yellow which helps to open the lines of communication. It is a great color we use to announce information by <strong>presenting it as the background of simple message</strong>. Due to its friendly and calm color, we can influence users to show emotional reactions rather than forcing them to take messages strictly.";

// color > success
var colorSuccess =
    "Success color is a bright, fresh and  green which is best to deliver cooporative and positive messages. <strong>Whenever users achive a task or a progress has completed, don't hesitate to use this color in the announcement.</strong> Taking advantage of its strong association with fresh growth and wealth, we ensure users that our products are working well and trustworthy.";

// color > warning
var colorWarning =
    "Orange is perceived as a warning color due to its close relation to red-a strong color for urgent issues. However, it is gentler and still give warmth confidence. In Hoiio prodcuts, any elements can go with orange when they need to <strong>stimulate an awareness</strong> and <strong>encourage users to take an action (especially before it is too late)</strong> without addressing any negative tone.";

// color > error
var colorError =
    "Error color is only used for any urgent or negative issues which may <strong>cause impact to users data</strong>, <strong>block the work flow</strong> or <strong>not working properly</strong>. These issues require users attention and respond actions. Keywords usually go with this color: <strong>'Expired'</strong>, <strong>'Offline'</strong>, <strong>'Wrong input format'</strong>, etc. However, do not overuse this color or flood the page with all elements bouncing in red.";

// color > pending
var colorPending =
    "Pending color is used for events that is in <strong>waiting status</strong> but don't cause any harm to data and workflow.";

// color > neutral
var colorNeutral =
    "Neutral colors are not used as outstanding visual elements or to call any actions. However, these are the foundation color scheme that build the structure of all components. To maintain the consistency look, just use these colors for any lines, table dividers, button borders and more.";


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

/*-- Button --*/

//button > type
var buttonDescription =
    "Buttons are used to trigger an action. To maintain the consistency and simplicity accros Hoiio products, all action cases are covered within 4 types of button and 3 colors.";

//button > standard
var buttonStandard =
    "Standard button are used in most use cases and it should be the first option to think of when deciding which button type to use. Many standard buttons can be placed together.";

//button > primary
var buttonPrimary =
    "Primary buttons are used for the highest priority and strongest call to action. In form, do not use more than 1 primary button. In pages, do not place 2 primary buttons next to each other. Instead, consider other types of button based on the priority level. The most regular case is the <strong>'Create post'</strong> button<br/> <strong>Color code: #008BD9 </strong>";

//button > warning
var buttonWarning =
    "Warning button is a special case of primary button that specifically used for the action that may cause huge impact to user's database. Example: delete data, unsubscribe plan, etc.<br/> <strong>Color code: #E64333 </strong>";

//button > link
var buttonLink =
    "Link button serves the lowest prioty action. Keywords associate with this type : <strong>'Cancel'</strong>, <strong>'Clear all'</strong>, etc.";

//button > variation
var buttonVariation =
    "After choosing the suitable button type, based on the requiremnt of the context and general visual, some elements can be added into button to provide specific information.";

//button > compact
var buttonCompact =
    "Compact button has no predefined size. It scales based on the content you gave to fit in small space. This button is not recommended to be widely used.";

//button > icon
var buttonIcon =
    "A button can contain a icon to increase the action recognition. An action that is used accross products or screens should have same icon and in same form.";

//button > group
var buttonGroup =
    "Buttons can be groupped together if they are in the same category and serve related actions.";

/*-- Button --*/


//button > link
var buttonLind =
    "";

//button > link
var buttonLind =
    "";


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
$('[data-page="button"] #button-type .description').append(buttonDescription);
$('[data-page="button"] #button-standard .description').append(buttonStandard);
$('[data-page="button"] #button-primary .description').append(buttonPrimary);
$('[data-page="button"] #button-warning .description').append(buttonWarning);
$('[data-page="button"] #button-link .description').append(buttonLink);
$('[data-page="button"] #button-variation .description').append(buttonVariation);
$('[data-page="button"] #button-compact .description').append(buttonCompact);
$('[data-page="button"] #button-icon .description').append(buttonIcon);
$('[data-page="button"] #button-groupped .description').append(buttonGroup);

