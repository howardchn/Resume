var appData = {
    title: 'Howard Chen',
    description: 'Good at .NET, Node.js, Python, Go, React, Dart programming language. Full-Stack Capability to build cross-platform application including desktop, web and mobile. Have 6 years of technical product manager (including 3 years director), 8+ years of team leader and 3 years technical director experience.',
    currentPosition: 'Senior Technical Product Manager',
    basicInfo: 'Male  ︳Bachelor Degree ︳ 19 years working experience  ︳Live in Chengdu',
    experiences: [
        {
            type: 'work',
            title: 'Working Experience',
            details: [
                {
                    name: 'MobLab',
                    url: 'https://moblab.com',
                    summary: 'Technical Project Director',
                    date: '2020/04 - Now',
                    work: 'The experience at MobLab is quite special. Because I\’m one of the initial employees of the Chengdu office. Build the company\'s project development infrastructure from scratch, including technology stack selection, monitoring, log project templates, agile management specifications, etc. Responsible for the design, architecture, R&D, submission, and subsequent data analysis and iterative output of the company\'s multiple product lines from 0 to 1. At the same time, indirectly assist the development of some projects.'
                },
                {
                    name: 'LogicMonitor',
                    url: 'https://logicmonitor.com',
                    summary: 'Senior Technical Project Manager',
                    date: '2017/09 - 2020/04',
                    work: 'Responsible for managing variegated feature development lifecycle. Starting from requirements, design, review, and final function delivery.'
                },
                {
                    name: 'ThinkGeo China Office',
                    url: 'https://thinkgeo.com',
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
                    url: 'https://powercn.com',
                    summary: 'Junior Software Engineering',
                    date: '2003/12-2004/12',
                    work: 'Software engineering training and help on the website development. Also collect the wireless binary data to generate a nice looking report for viewing in browser.'
                }
            ]
        },
        {
            type: 'work',
            title: 'Education',
            details: [
                {
                    name: 'Sichuan University',
                    logo: '/Resume/public/img/scu-logo.jpeg',
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
                    name: 'Anomaly based alert suppression',
                    summary: 'Determine non-anomaly alerts and suppress them intelligently',
                    date: '2019/05 - Present',
                    work: 'It is the biggest project here so far since I joined LM. Anomaly based alert suppression is one factor. The biggest challenge is to kick start the micro-service transferring and move parts our infrastructures into cloud. WIP...'
                },
                {
                    name: 'Anomaly visualization',
                    url: 'https://www.logicmonitor.com/support/anomaly-detection-visualization',
                    summary: 'This project is to detect anomalies based on a period of metrics. After finding out the anomalies by machine learning algorithms, we could render the anomalies on a graph widget and some corresponding functions around it.',
                    date: '2019/01 - 2019/05',
                    work: 'In this project, we need to learn machine learning. Talk to few trail users. Design the UI experience based on existing LM platform and make it publish. With this project, I learned a lot of the anomaly detection knowledge based on time-serials.'
                },
                {
                    name: 'Kubernetes Resource Monitoring',
                    url: 'https://logicmonitor.github.io/k8s-argus',
                    summary: 'This is kubernetes application written by go. It syncs frequently used k8s resources into LogicMonitor platform and keep them monitored.',
                    date: '2018/11 - Present',
                    work: 'What our job is to create the application to discover the k8s resources and keep watching the CRUD of the resources changing. This project is released but requires more new features based on the market feedback. So by now, it has a lot of space to improve.'
                },
                {
                    name: 'Push metrics for StatsD',
                    summary: 'StatsD is an open source project that allows user to push their metrics as a unified data format into a specified destination which in our case, LogicMonitor platform is its destination.',
                    date: '2018/04 - 2018/08',
                    work: 'This project is separated to two phases. Phase 1 targets for visualization. The metrics are not persistent in our system. With this project, we setup several layers SOAs for various purpose like extension, data format, authentication as well as metrics center. Phase 2 targets to the metrics persistence. It is a big challenge for product team and dev team. So we took it very carefully. Due to the requirement part doesn\'t have a final agreement with customer, phase 2 feature is being hold right now and it will be bring up again till we got enough user cases by the end of 2019.'
                },
                {
                    name: 'Recycle bin for recently deleted resources',
                    url: 'https://www.logicmonitor.com/support/devices/adding-managing-devices/deleting-devices/#restoring',
                    summary: 'In the old system, when user deletes a resource from our system, it is a permanent deletion. In this case, some users might delete their devices unexpectedly or by some other manager, or want to delete at the moment but regret after that, there is not case for users to restore them back. This feature is designed for those pain points.',
                    date: '2018/03 - 2018/06',
                    work: 'In this project, one good thing I have learned is that, if you design a feature from scratch, it is quite easy, but if you stack new features on top of a stable system, there are lots of things to consider; including the association with ops team.'
                },
                {
                    name: 'User based time zone',
                    url: 'https://howardchn.github.io/2018/02/12/timezone-dst-best-practices/',
                    summary: 'Support time zone customization on LM platform',
                    date: '2018/01 - 2018/05',
                    work: 'Time zone is a big feature and important for enterprise software. Before this project, users has to manually convert timestamp from a certain time zone to a client time zone. We also allow to schedule the tasks for a specific time zone. It seems a simple project, still has some challenges if you don\'t have relative knowledges. Another challenge is that, we are building this feature upon a pretty stable system, we need to guarantee the function are not harmed by our newly feature, so we need to make decision on various situations. One interesting things we met is that, the time zone library provided by Java has different versions that are corresponded to Java version, so the UI client time zone database\'s version should be synced. After this project, I provided a company-wide presentation with this function and experience. This must helpful for the other developers. '
                },
                {
                    name: 'Sign-tool service for windows collector',
                    summary: 'Collector is an agent that allows for user to install on their machine. It helps to collect metrics based on the schema user defined on LM platform. If the windows agent is not signed, user will get a "friendly" smart screen during the installation. So the goal is to sign the windows collector on the fly, keep what the linux download process, don\'t increase the workload for our kernel services and guarantee users could get response in an acceptance period.',
                    date: '2017/11  - 2018/01',
                    work: 'Create a micro-service, extract the entire process from our kernel services out to the new service. To make sure it is high available, it is load-balanced by 4 pods. Lots of things to learn and establish during the implementation. After this project, one impression is the importance of kubernetes and load-balancer. Also I understand how to implement a circuit breaker and the benefit of stateless services.'
                },
                {
                    name: 'Manage to implement variegated requirements',
                    summary: 'Lead development team and communicate the requirements with US office',
                    date: '2017/03 - 2017/08',
                    work: 'Research the new requirements, and communicate with US office to make the final version of the PRD. Estimate time for the implementation and control the time-line of the entire project development till it is released.'
                }, 
                {
                    name: 'Map Suite 10.0 products maintenance',
                    summary: 'Lead development team for Map Suite 10.0 maintenance',
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
                    work: 'Have a chance to work in US for existing products maintenance and customer supports. Also enlarge my view of the world.'
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
                    work: 'This project is a B/S application for inputting finance data everyday into database, then regroup the data to create beautiful chart and table for the final report.'
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
            title: 'Skills',
            details: [
                {
                    name: 'Node.js/JS',
                    summary: 'My favorite programming language',
                    date: '2016 - Present',
                    work: 'Use this language almost every day, for various purpose, like product API development, tools and some POC work.'
                }, {
                    name: 'Frontend',
                    summary: 'Html, CSS, React...',
                    date: '2004 - Present',
                    work: 'Familiar with React, html, css development. When the current company\'s project progress is relatively urgent, I sometimes take on front-end on my own.'
                }, {
                    name: 'Python',
                    summary: 'Normal Level',
                    date: '2016 - 2019',
                    work: 'Built algorithm based server and several data analyze utilities.'
                }, {
                    name: 'Go',
                    summary: 'Normal Level',
                    date: '2018 - 2019',
                    work: 'Built two open source projects. I like this '
                }, {
                    name: '.NET Framework',
                    summary: 'WPF, WebForms, WebAPI, C#, .NET Core, ASP.NET Core',
                    date: '2004 - 2017',
                    work: '12 Years of working experience with .NET. Created hundreds of projects and samples; designed 10+ map controls for desktop, web and mobile. Have the ability to quickly track bugs or issues deep in the project.'
                }
            ]
        },
        {
            type: 'work',
            title: 'More',
            description: 'I have good communication skills. Understand multiple programming languages and own corresponding project development experience. Ability to quickly estimate workload, build product prototypes, dig tech and prod details and control risks. On the Web side, I could play the role of a full-stack engineer. I have about 8 years of team management experience, more than 3 years of technical director, and 6 years of experience as a senior technical product manager. Can take the initiative to find and apply the product direction suitable for the company in the process of continuous learning of new technologies. Familiar with traditional software engineering and agile processes, and take into account the stability of the program while ensuring the progress. I have good English listening, speaking, reading and writing skills. Here lists some of my social contributions:<br/><br/><ol start="1"><li>Current <a href="https://stackoverflow.com/users/703264/howard">StackOverflow</a> contribution is 3.5K+, top 11% overall the world. I feel good to help others in the social network.</li><li>OpenSourced A GeoSpatial Map Server SDK built on Node.js - <a href="https://ginkgoch.com/">Ginkgoch</a>. Supports geo-spatial calculation, multiple data source, map styling and rendering features. Also includes complete demo code and documents.</li><li>OpenSourced a Golang version lodash SDK - <a href="https://github.com/ginkgoch/godash">Godash</a>. Recently I upgraded it to v2 for generic support.</li><li>This is an interesting project (<a href="https://github.com/howardchn/location-to-phone-number">https://github.com/howardchn/location-to-phone-number</a>). It was a training project but got 170 stars. It indicates the user case is much more important than the code it self.</li></ol>',
            details: [
                {
                    name: 'Cell Phone: +86-13540742190'
                }, {
                    name: 'QQ: 17449203',
                }, {
                    name: 'Wechat: Godspeedch'
                }, {
                    name: 'Email: howardch@outlook.com'
                }, {
                    name: 'Blog: https://howardchn.github.io'
                }
            ]
        }
    ]
};
