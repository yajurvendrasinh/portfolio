/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'large_cloud',
                type: 'image',
                rect: ['550px', '0px','1000px','275px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"large_cloud.png",'0px','0px']
            },
            {
                id: 'BUTTON',
                type: 'rect',
                rect: ['173', '314','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'BUTTON',
                symbolName: 'BUTTON'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["gradient", "background-image", [270,[['rgba(27,4,63,1.00)',0],['rgba(0,0,0,1.00)',79]]]],
                ["style", "width", '550px']
            ],
            "${_large_cloud}": [
                ["style", "top", '0px'],
                ["style", "left", '550px']
            ],
            "${_BUTTON}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            labels: {
                "Cloud": 1000
            },
            timeline: [
                { id: "eid7", tween: [ "style", "${_large_cloud}", "left", '0px', { fromValue: '550px'}], position: 1000, duration: 3000 },
                { id: "eid6", tween: [ "style", "${_BUTTON}", "opacity", '0.8130081300813', { fromValue: '0'}], position: 0, duration: 1000 }            ]
        }
    }
},
"BUTTON": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '130px', '61px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(247,247,247,1.00)'],
                    c: [
                    {
                        rect: ['0px', '17px', '130px', '31px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        id: 'START',
                        text: 'START',
                        align: 'center',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '61px'],
                ["style", "width", '130px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(247,247,247,1)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_START}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["style", "height", '31px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,0,0,1)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "click": 0
            },
            timeline: [
                { id: "eid8", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(136,136,136,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(247,247,247,1)'}], position: 0, duration: 500 },
                { id: "eid9", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(247,247,247,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(136,136,136,1.00)'}], position: 500, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-535223631");
