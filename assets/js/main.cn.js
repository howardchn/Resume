var appDataCn = {
    title: '陈浩',
    description: '熟悉多种开发语言(.NET, Node.js, Python, Go, React, Dart)，全栈能力。具有6年技术产品经理（包含3年技术产品总监），8年多的项目组长，3年多技术总监的管理经验。',
    currentPosition: '技术产品经理',
    basicInfo: '男 ︳本科双学位 ︳ 19年工作经验 ︳现住成都',
    experiences: [
        {
            type: 'work',
            title: '工作经验',
            details: [
                {
                    name: 'MobLab',
                    url: 'https://moblab.com',
                    summary: 'Technical Project Director',
                    date: '2020/04 - Now',
                    work: '在MobLab的经历比较特殊。由于是成都部门的起始员工之一。从零开始搭建公司项目开发基础建设，包含技术栈选型，监控，日志 项目模板，敏捷管理规范等。负责公司多条产品线从0到1的设计，架构，研发，递交，以及后续的数据分析和迭代输出。同时间接的协助部分项目的开发。'
                },
                {
                    name: 'LogicMonitor',
                    url: 'http://logicmonitor.com',
                    summary: '高级技术产品经理',
                    date: '2017/09 - 2020/04',
                    work: '负责新产品功能需求，分析，原型设计，任务计划以及上线前的相关协调工作.'
                },
                {
                    name: '思宙科技（ThinkGeo 中国办公室）',
                    url: 'http://thinkgeo.com',
                    summary: '技术总监',
                    date: '2007/02 - 2017/08',
                    work: '负责公司主要控件产品的架构，开发和维护。近三年，作为公司中国技术总监的职务，负责和美国上层交流，整理项目需求，创建新产品雏形；并随时保持新技术调查和应用。同时负责部分员工培训工作。'
                },
                {
                    name: 'GIL Data',
                    summary: '高级软件工程师',
                    date: '2005/02 - 2007/11',
                    work: '刚进公司时负责网站开发，后期着重开发公司客户端应用，和已有桌面应用的迁移。'
                },
                {
                    name: 'PowerCN',
                    url: 'http://powercn.com',
                    summary: '初级程序员',
                    date: '2003/12 - 2004/12',
                    work: '接受公司技术培训和网页维护工作。后期负责部分无线信息包数据解析，并录入到数据库用以生成报告文件。'
                }
            ]
        },
        {
            type: 'work',
            title: '教育经历',
            details: [
                {
                    name: '四川大学',
                    logo: '/Resume/public/img/scu-logo.jpeg',
                    summary: '双学士学位（绘画，设计 + 软件工程',
                    date: '2000 - 2004',
                    work: '学习平面设计，软件开发流程，计算机基础，数据结构，设计模式等课程。'
                }
            ]
        },
        {
            type: 'work',
            title: '项目经验',
            details: [
                {
                    name: '智能告警压减',
                    summary: '检测出异常以外的告警指标数据，并进行用户配置的策略进行压减。',
                    date: '2019/05 - Present',
                    work: '实现一套微服务，对现有用户收集的实时数据进行分析。使用调研的算法进行异常检测，并找到当前时段的置信区间。对置信区间以内的告警实例进行压减，减少用户收到的无用告警。这个项目里，需要对多种时序数据算法进行调研，并在现有的UI上设计可行的，易设置的交互体验原型。并为美国产品团队提供客户交流所需要的资源。并最终部署到云端。该项目实现已完成。等待上线中.'
                },
                {
                    name: '时序数据异常可视化',
                    url: 'https://www.logicmonitor.com/support/anomaly-detection-visualization',
                    summary: '根据用户选定的一段时序数据进行分析，找到当前数据中的异常部分，并渲染出来，以图表形式展现给用户。同时在这个图表上还设计了一系列可用的辅助功能。',
                    date: '2019/01 - 2019/05',
                    work: '该项目是首次接触机器学习。项目中调研过各种对于时序数据进行异常检测的算法。用python进行原型设计和实现。并参与少量北美用户的调研会议。'
                },
                {
                    name: 'Kubernetes 资源监控',
                    url: 'https://logicmonitor.github.io/k8s-argus',
                    summary: '这是一个用Go语言编写的Kubernetes应用。用来同步常用的k8s资源到LM平台，并进行监控。',
                    date: '2018/11 - Present',
                    work: '该项目用以实时检测用户k8s集群内部的各种资源的增删查改，并把改动同步到LM平台。并和监控组进行交互，并实现监控指标数据源的定义。这个项目已有很多用户，并在用户的反馈中持续更新迭代中。'
                },
                {
                    name: 'StatsD 数据推送功能',
                    summary: 'StatsD 是一个开源项目，支持推送的方式把用户数据发送到一个指定的平台。而该项目的目的就是支持用户推送数据到LM平台里。',
                    date: '2018/04 - 2018/08',
                    work: '该项目被定义为2个阶段。第一个阶段是支持用户推送数据的可视化。这个阶段中，用户可以看到推送的短期数据。我们实现了一系列SOA模块，针对后期扩展性，安全性进行了一些扩展设计。二阶段是准备支持数据持久化存储。由于美国产品团队调研不足，二期被推迟到2019年末。'
                },
                {
                    name: '最近删除资源回收',
                    url: 'https://www.logicmonitor.com/support/devices/adding-managing-devices/deleting-devices/#restoring',
                    summary: '当用户在LM平台删除一个资源，会被永久删除掉。而往往用户删除后可能会返回，或者出现错误删除等情况时，希望能快速恢复被删除的设备。减少人工干预和减少恢复的时间。',
                    date: '2018/03 - 2018/06',
                    work: '这个项目中，除了以上提到的功能外，也学习到了从头开发一个功能和在现有功能上迭代的区别。开发难度和设计思维都是不同的。'
                },
                {
                    name: '多时区支持',
                    url: 'https://howardchn.github.io/2018/02/12/timezone-dst-best-practices/',
                    summary: '多时区支持对国际化软件是一个重要的功能。该项目在LM平台上支持用户定义的多时区查看和计划事务设定。',
                    date: '2018/01 - 2018/05',
                    work: '通过该项目，要统筹改动对系统带来的影响，同时减少开发上的冲突。学习相关的时区知识（参考连接的输出内容）。同时设计时区支持扩展点的功能。'
                },
                {
                    name: 'Windows collector 签名服务',
                    name: 'Windows collector 签名服务功能设计，发布。',
                    summary: '对现有windows collector进行签名，避免在用户安装时遇到不友好的Smart Screen。增强用户安装体验。',
                    date: '2017/11  - 2018/01',
                    work: '在这个项目中设计了一个独立的微服务。为达到高可用性，设计了一些容断机制。同时也学习了K8S相关知识，并完成了相关部署工作。'
                },
                {
                    name: 'Map Suite 10.0 产品维护',
                    summary: '负责带领研发组进行Map Suite 10.0维护和新特性添加',
                    date: '2017/03 - 2017/08',
                    work: '新产品的发布带来了很多的优势，但是随之也附带了很多不兼容的改动。我们会面临大量客户对于升级，重定向已有程序集，和选择合适的程序集以便开发；同时需要整理，编写，发布需要的新文档。我的职责是负责带领研发组进行Map Suite 10.0维护和新特性添加，具体负责对用户和内部提交的Bug进行修复，同时进行新技术研究，创建新特性雏形并考虑集成到产品线。'
                }, {
                    name: 'Map Suite 10.0 重构研发',
                    url: 'https://thinkgeo.com',
                    summary: '对Map Suite现有控件产品进行重构',
                    date: '2016/02 - 2017/03',
                    work: '负责和美国上层交互，对现有Map Suite .NET 地图控件（包括WPF, WinForms, WebForm, WebAPI, MVC, 以及基于Xamarin开发的iOS和Android移动控件）在保证功能和单元测试通过的情况下进行命名空间和程序集重新设计并将相关类型重构，并归类到特定的命名空间中。'
                }, {
                    name: 'AgStudio Map for iPad',
                    url: 'https://itunes.apple.com/us/app/mapshots-agstudio-map/id958494319?mt=8',
                    summary: '设计和开发AgStudio Map for iPad应用',
                    date: '2015/06 - 2015/10',
                    work: '使用Xamarin iOS技术，用C#开发的一款iPad原生APP。该APP使用iOS GPS模块定位，用于精确记录土壤采集信息及地理位置；根据行车轨迹绘制土壤区域，统计面；支持离线操作；并附带绘制工具用于土壤采集标识和对土壤进行划分的工具。通过第三方公司提供的RESTful服务和他们的数据进行交互，并达到和现有桌面应用的无缝结合。标题中的链接是AppStore上的展示。'
                }, {
                    name: 'Map Suite Map Controls of Xamarin',
                    url: 'https://itunes.apple.com/cn/app/thinkgeo-selectasite/id1048025517?l=en&mt=8',
                    summary: 'Architect the map controls of Xamarin 架构基于Xamarin开发的地图控件',
                    date: '2015/01 - 2016/07',
                    work: '使用Xamarin框架，实现针对于iOS，Android和Xamarin Forms平台使用C#开发地图应用的控件。地图控件支持多点触摸，深度缩放，多数据支持（Shapefile，Google，Bing，Sqlite...），对矢量数据进行多样化渲染等功能。标题链接是基于此产品做的一个小实例程序。'
                }, {
                    name: 'Map Suite GIS Editor',
                    url: 'https://github.com/ThinkGeo/MapSuiteGisEditor',
                    summary: '和美国同时沟通，设计新需求并带领组员完成产品的实现开发。',
                    date: '2011/05 - 2013/05',
                    work: '使用WPF，Ribbin，MEF，进程间通信等技术，架构的一款基于插件的终端地图查看，编辑和空间分析的工具。开发过程中严格使用IoC原则，对上层到下层模块进行抽象设计和交互，保证插件之间的隔离以及和整体操作上的融合。在开发过程中，由于界面需要，开发了很多自定义控件，以方便重用。'
                }, {
                    name: 'Map Suite WPF Edition',
                    url: 'https://github.com/ThinkGeo/HowDoISample-ForWpf',
                    summary: '架构并开发Map Suite WPF Edition',
                    date: '2009/11 - 2010/02',
                    work: '此项目是开发一款基于WPF的地图自定义控件，用于WPF地图应用的二次开发。控件包含地图操控，缩放，加载和渲染矢量和栅格数据，以及动画。使用多线程技术保证在绘制数据的同时不会影响用户操控。由于小组人员有限，整个项目由我一人负责架构，编码，测试直至最后发布。标题项目是使用此控件开发的一个实例程序。'
                }, {
                    name: '赴美工作3个月',
                    summary: '赴美工作3个月进行培训和产品技术支持',
                    date: '2009/04 - 2009/07',
                    work: '这是一个体验美国生活的机会，同时对现有产品进行维护，强化和技术支持.'
                }, {
                    name: 'Map Suite Silverlight Edition',
                    summary: '架构设计和开发基于Silverlight的地图可视化控件开发',
                    date: '2008/09 - 2009/01',
                    work: '这是一个基于微软Silverlight框架开发的富客户端地图可视化控件。独立设计，架构，编写代码，文档及示例到最终发布。'
                }, {
                    name: 'Map Suite Web Edition',
                    url: 'https://github.com/ThinkGeo/AjaxVehicleTrackingSample-ForWebForms',
                    summary: '设计开发基于WebForms的地图可视化控件应用',
                    date: '2008/01 - 2008/10',
                    work: '基于OpenLayers 2.0 JS 类库开发的一个ASP.NET 服务器自定义控件，用户开发前端交互式地图应用。此控件需要再了解WebForm生命周期的情况下，自动集成和部署所需要的客户端脚本库，在用户postback后保持当前地图状态，并设计若干异步方法保证地图客户端和服务端交互时的流畅性。标题项目链接是基于此控件做的一个汽车监控示例。'
                }, {
                    name: '聚源数据前端数据录入系统',
                    summary: '前端数据录入和展示的系统',
                    date: '2008/01 - 2008/10',
                    work: '这个项目是基于B/S架构的浏览器应用。用户收集每天的财经信息，并解析录入至数据库，最终生成报表用于展示的系统。'
                }, {
                    name: '国人通信无线信号解析',
                    summary: '用于对信号包数据解析并录入的工具',
                    date: '2006/01 - 2007/09',
                    work: '这个项目使用Delphi对无线信号包进行解析成人类可读的特性数据，并录入到数据库用以生成报表。'
                }
            ]
        },
        {
            type: 'work',
            title: '技能',
            details: [
                {
                    name: 'Node.js/JS',
                    summary: 'Pure Javascript, Typescript, Node.js',
                    date: '2004 - Present',
                    work: '接触时间很早，在工作前期常用于工具和中间件开发，后期多用户产品服务后端搭建，以及前端实现。也是个人的开源项目的主力开发语言。'
                }, {
                    name: 'Frontend',
                    summary: 'Html, CSS, React...',
                    date: '2004 - Present',
                    work: '熟悉React，html, css开发。在现公司项目进度比较紧急的时候多次单人承担前后端项目。'
                }, {
                    name: 'Python',
                    summary: '熟悉',
                    date: '2016 - Present',
                    work: '实现公司机器学习的原型和算法；并实现一系列工具进行离线数据统计。'
                }, {
                    name: 'Go',
                    summary: '熟悉',
                    date: '2018 - Present',
                    work: '当前使用Go开发了几个开源软件；并为现有公司开发需要用到Go特性的应用程序和工具。'
                }, {
                    name: 'Flutter',
                    summary: '熟悉',
                    date: '2021 - Present',
                    work: '主动申请并成功追加至公司的技术栈，并使用该框架成功搭建了几条to C/to B的产品。'
                }, {
                    name: '.NET Framework',
                    summary: 'WPF, WebForms, WebAPI, C#, .NET Core, ASP.NET Core',
                    date: '2004 - 2017',
                    work: '12年.NET框架下的开发经历。参与过上百个小型项目开发及10多个大型地图控件开发，涉及桌面，网页和移动平台。具有能在短期内找到问题，并解决的能力。对代码质量和风格有决定的标准。'
                }
            ]
        },
        {
            type: 'work',
            title: '自我评价和其他',
            description: '具有良好的沟通能力。了解多种编程语言和对应的项目开发经验。能够快速构建产品原型，并琢磨细节和把控风险。工作期间，能在短时间内找到应用程序内部问题的原因并解决。在Web方面，我具有全栈工程师的能力。我有8年左右的团队管理经验，3年多的技术总监，以及6年高级技术产品经理经验。能主动在持续学习新技术的过程中，找到适合公司产品方向并应用。良好的开发进度把控，按时按量进行项目交付。熟悉传统的软件工程及敏捷流程，能根据需求动态切换不同的开发模式，在保证进度的同时兼顾程序的稳定性。我具有良好的英语听说能力和读写能力。以下几个贡献的开源项目：<br/><br/><ol start="1"><li>目前<a href="https://stackoverflow.com/users/703264/howard">StackOverflow</a>上的贡献值是3.5K+，不是很多，处于世界前11%左右。个人闲暇时间喜欢共享开源项目和帮助回答社区问题。</li><li>开源一个基于Node.js开发的地图服务搭建SDK - <a href="https://ginkgoch.com/">Ginkgoch</a>。支持空间运算，多源数据读写，地图渲染等功能。本开源项目具有完整的文档和示例。</li><li>开源一个基于Go编写了类Lodash的工具库 - <a href="https://github.com/ginkgoch/godash">Godash</a>。近期刚更新了v2，支持generic。</li><li>这个项目（<a href="https://github.com/howardchn/location-to-phone-number">https://github.com/howardchn/location-to-phone-number</a>）很奇怪，一个练手项目居然能冲到170的stars。说明往往用户关心的并不是你的代码质量有多高，而是有多少用户愿意用。</li></ol><br/><h4>联系方式：</h4>',
            details: [
                {
                    name: '电话: +86-17311204830'
                }, {
                    name: 'QQ: 17449203',
                }, {
                    name: '微信: Godspeedch'
                }, {
                    name: '邮件地址: howardch@outlook.com'
                }, {
                    name: 'Blog: https://howardchn.github.io'
                }
            ]
        }
    ]
};