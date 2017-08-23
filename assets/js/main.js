var appData = {
    title: 'Howard Chen',
    description: 'Good at build .NET components, application includes desktop, web full stack development. Have 8+ years of team leader and 3 years technical director experience.',
    currentPosition: 'Technical Director',
    basicInfo: 'Male  ︳Bachelor Degree ︳ 14 years working experience  ︳Live in Chengdu',
    experiences: [
        {
            type: 'work',
            title: 'Working Experience',
            details: [
                {
                    name: 'ThinkGeo China Office',
                    url: 'http://thinkgeo.com',
                    summary: 'Technical Director',
                    date: '2007/02 - 2017/08',
                    work: 'Responsible for major products architecture and development and maintenance. In this nearly three years, I worked as technical director in China office, responsible to communicate with US office and prototype new products and training.'
                },
                {
                    name: 'GIL Data',
                    summary: 'Senior Software Engineering',
                    date: '2005/02-2007/11',
                    work: 'Responsible for company website, back-end finance analysis service, front-end management system and generate reports for viewing in browser.'
                },
                {
                    name: 'PowerCN',
                    url: 'http://powercn.com',
                    summary: 'Junior Software Engineering',
                    date: '2003/12-2004/12',
                    work: 'Software engineering traning and help on the website development. Also collect the wireless binary data to generate a nice looking report for viewing in browser.'
                }
            ]
        },
        {
            type: 'work',
            title: 'Education',
            details: [
                {
                    name: 'Sichuan University',
                    logo: '/public/img/scu-logo.jpeg',
                    summary: 'Two Bachelor Degree (Design and Software Engineering)',
                    date: '2000 - 2004',
                    work: 'Design major learns graphics designing and painting; Software Engineering learns the software development and computer science.'
                }
            ]
        },
        {
            type: 'work',
            title: 'Projects Detail',
            details: [
                {
                    name: 'Map Suite 10.0 products maintenance',
                    summary: 'Lead development team for Map Suite 10.0 maintenence',
                    date: '2017/03 - 2017/08',
                    work: 'Map Suite 10.0 products maintenance and new technology researching. Responsible for the bug fix from our customer; in the meantime, research new technology and prototype to build into the product line.'
                }, {
                    name: 'Map Suite 10.0 Re-Architecture',
                    url: 'https://thinkgeo.com',
                    summary: 'Re-architecture the entire Map Suite product line',
                    date: '2016/02 - 2017/03',
                    work: 'The old Map Suite products structure is not fashion for now. Everything are crowded in one assembly and same namespace for each platform. It is not easy to target an expected class and 80% classes are not used in the assembly that is referenced by user project. In this case, we planed to redesign the entire assembly structure to make each assembly size tiny, so that user could keep there published application size small. Then refactor the namespace, re-arrange the classes into its corresponding namespaces, so that we could easier target a class by its ability. Once the assemblies are splitted, we design the new redistribution on NuGet to help user to reference our assemblies easier without installation anymore. My responsibility is to refactor almost all .NET map control in Map Suite family that covers WPF, WinForms, WebForm, WebAPI, Mvc, Xamarin for iOS, Android platforms; redesign the assemblies, namespaces; then re-allocate the proper classes into the corresponding namespaces to make related classes tightly integrated. Make the structure levels more obviously. Then reset the unit tests to ensure everything is working as expected. Help to create the NuGet package for each assembly and make them re-pack and upload when necessary.'
                }, {
                    name: 'AgStudio Map for iPad',
                    url: 'https://itunes.apple.com/us/app/mapshots-agstudio-map/id958494319?mt=8',
                    summary: 'Design and develop the APP with Map Suite iOS Edition',
                    date: '2015/06 - 2016/10',
                    work: 'Use Xamarin iOS to develop a native iOS App for iPad. It uses the iPad GPS module to locate the accurate location of the device, use it to track the vehicle driven routes to draw an area; with the drawn area, we could calculate the area and split the area with preset grid etc. The app supports offline work, the data can be synchronized when the network restores. Use the RESTful services provided by user to sync the data into users database so that they could continue there jobs on desktop. My responsibility is communicating with customer; draw the psudo UI to confirm the requirements. Then architect the project and design the UI, coding for the structure and help team to complete the functions implementation.'
                }, {
                    name: 'Map Suite Map Controls of Xamarin',
                    url: 'https://itunes.apple.com/cn/app/thinkgeo-selectasite/id1048025517?l=en&mt=8',
                    summary: 'Architect the map controls of Xamarin',
                    date: '2015/01 - 2015/07',
                    work: 'This project includes three map controls for mobile mapping development. iOS and Android are used for creating native map apps with Xamarin Framework; Xamarin Forms is another framework that allows to use XAML and uniform APIs to build the mobile mapping applications. All the controls list above shares a same set of PCL project with the low level APIs such as geometry, styling, drawing etc. Above it, the higher level project contains the platform specific features such as iOS graphics etc. My responsibility is to lead team to do the research to verify if my architecture is good to implement. Then finish the development, documents and testing.'
                }, {
                    name: 'Map Suite GIS Editor',
                    url: 'https://github.com/ThinkGeo/MapSuiteGisEditor',
                    summary: 'Communicate with US office for new requirements and lead the team for the entire development progress.',
                    date: '2011/05 - 2013/05',
                    work: 'This project is the first end point user GIS tool for map data creation, editing and styling; it integrates the default interactive map and navigation behaviors and many useful tools for data analysis. In the development, we used WPF, Ribbon, MEF, Process communication technology to architect an application that are formed with plugins. During the development, I strictly watched my team to follow the IoC rule so that the plugins are not connected too much in the application. Also, we created many custom controls for the UI.'
                }, {
                    name: 'Map Suite WPF Edition',
                    url: 'https://github.com/ThinkGeo/HowDoISample-ForWpf',
                    summary: 'Design and develop the Map Suite WPF Edition',
                    date: '2009/11 - 2010/02',
                    work: 'This is a map UI control that allows to integrate an interactive map into existing WPF application. This map control uses WPF framework that contains default mouse events for map navigation (dragging, scrolling up/down to zoom in/out), load popular vector and raster data format and render them in the control, and some animations. Also it uses multi-threading for the vector rendering to keep the UE smooth. Because the lack of resource in company, I am responsible for the entire development. The link in the title is a demo developed by this map control.'
                }, {
                    name: 'Work in US for product supports',
                    summary: 'Work in US for product supports and maintenence.',
                    date: '2009/04 - 2009/07',
                    work: 'Have a chance to work in US for existing products maintenence and customer supports. Also enlarge my view of the world.'
                }, {
                    name: 'Map Suite Silverlight Edition',
                    summary: 'Design and develop the Map Suite Silverlight Edition',
                    date: '2008/09 - 2009/01',
                    work: 'This is a map UI control that allows to integrate an interactive map into a rich browser application. This project is one-man project. Including architecture, coding, documentation and sampling.'
                }, {
                    name: 'Map Suite Web Edition',
                    url: 'https://github.com/ThinkGeo/AjaxVehicleTrackingSample-ForWebForms',
                    summary: 'Design and develop the Map Suite Web Edition',
                    date: '2008/01 - 2008/10',
                    work: 'This is the next generation of Map Suite Web Edition with the enhancement of AJAX. Lead 4 guys to go over the entire process of this product development till making it release. This is a custom control for WebForm development. It contains OpenLayers 2.0 JS library and the control responsible for registering the necessary client libraries and resources in user application; users could write C# to create map using the registered JS library; we also have to maintain the map view states after postback. To make user easier to use, I desgined some useful AJAX methods for interacting with server easier. The link of the title represents a vehicle tracking demo created by this control.'
                }, {
                    name: 'GIL Data Front-End Data Importing System',
                    summary: 'Develop GIL Data Front-End Data Importing System',
                    date: '2008/01 - 2008/10',
                    work: 'This project is a B/S application for inputing finance data everydata into database, then regroup the data to create beautiful chart and table for the final report.'
                }, {
                    name: 'PowerCN Wireless Signal Parser',
                    summary: 'Parse the wireless signal and input to database',
                    date: '2006/01 - 2007/09',
                    work: 'This project is using Delphi to parse the binary format data of the wireless signal and put the parsed data information into data base for the final report.'
                }
            ]
        },
        {
            type: 'work',
            title: 'Expectation',
            description: 'Position of Senior .NET Developer, Technical Director, Project Manager; Full-Time job; accept working in Chengdu or Remote work; Saleray range is above ￥18k per month.'
        },
        {
            type: 'work',
            title: 'Skills',
            details: [
                {
                    name: '.NET Framework',
                    summary: 'WPF, WebForms, WebAPI, C#, .NET Core, ASP.NET Core',
                    date: '2004 - 2017',
                    work: '12 Years of working experience with .NET. Created hundreds of projects and samples; archetected 10+ map controls for desktop, web and mobile. Have the ability to quickly find bugs or issues deep in the project.'
                }, {
                    name: 'Javascript',
                    summary: 'Pure Javascript, Typescript, JS framework like jQuery, Vue, lodash and Angular',
                    date: '2004 - 2017 Occasionally',
                    work: 'Learned it very early; used it in 2 official projects and several sample projects and website. The pure JS is very familiar, but with the 3rd party JS library, I still need to search documentations.'
                }, {
                    name: 'Html + CSS',
                    summary: 'Html and CSS, used bootstrap a lot',
                    date: '2004 - 2017 Occasionally',
                    work: 'Familiar with Html and CSS, can build a webpage very fast with bootstrap. Willing to learn the others.'
                }, {
                    name: 'NodeJS',
                    summary: 'Nomal Level',
                    date: '2016 - 2017 Occasionally',
                    work: 'Use NodeJS to create some tools and use Express to build two entire websites. Can use with documents.'
                }, {
                    name: 'Python',
                    summary: 'Basic Level',
                    date: '2016 - 2017 Occasionally',
                    work: 'Know the basics, but no chance to deeg more.'
                }
            ]
        },
        {
            type: 'work',
            title: 'More',
            description: 'I worked with .NET framework almost everyday during my job. Can issue the point very quickly. I have formalized standard coding style and can make it clean and fast. For the web, I can work with full-stack web application alone. I can manage my team, lead them to use traditional software development or use agile mode depending on the projects requirements and deadline. I have good speaking English and good ability to read and write english. My <a href="https://stackoverflow.com/users/703264/howard" target="_blank">stackoverflow</a> reputation now is 2k and in top 18% overall, it is keeping increasing. If you want to know more about me, please feel free to contact me by following ways.',
            details: [
                {
                    name: 'Cell Phone: +86-13540742190'
                }, {
                    name: 'QQ: 17449203',
                }, {
                    name: 'Wechat: Godspeedch'
                }, {
                    name: 'Email: howardch@outlook.com'
                }
            ]
        }
    ]
};