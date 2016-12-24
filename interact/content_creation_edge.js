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
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'plat',
                type: 'image',
                rect: ['0px', '150px','1000px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"plat.png",'0px','0px']
            },
            {
                id: 'Clouds',
                type: 'group',
                rect: ['1000px', '0','1044','150','auto', 'auto'],
                c: [
                {
                    id: 'large_cloud2',
                    type: 'image',
                    rect: ['0px', '0px','518px','150px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"large_cloud.png",'0px','0px']
                },
                {
                    id: 'large_cloud2Copy',
                    type: 'image',
                    rect: ['526px', '0px','518px','150px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"large_cloud.png",'0px','0px']
                }]
            },
            {
                id: 'Buttons',
                type: 'group',
                rect: ['30', '318','716','25','auto', 'auto'],
                c: [
                {
                    id: 'START3',
                    type: 'rect',
                    rect: ['0', '-3','auto','auto','auto', 'auto']
                },
                {
                    id: 'PUNCH',
                    type: 'rect',
                    rect: ['149', '-3','auto','auto','auto', 'auto']
                },
                {
                    id: 'RUN2',
                    type: 'rect',
                    rect: ['296', '-3','auto','auto','auto', 'auto']
                },
                {
                    id: 'JUMP2',
                    type: 'rect',
                    rect: ['441', '-3','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Davis',
                type: 'rect',
                rect: ['36', '194','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'JUMP2',
                symbolName: 'JUMP',
                autoPlay: {

                }
            },
            {
                id: 'START3',
                symbolName: 'START',
                autoPlay: {

                }
            },
            {
                id: 'PUNCH',
                symbolName: 'WALK',
                autoPlay: {

                }
            },
            {
                id: 'RUN2',
                symbolName: 'RUN',
                autoPlay: {

                }
            },
            {
                id: 'Davis',
                symbolName: 'Davis',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '350px'],
                ["gradient", "background-image", [270,[['rgba(15,8,79,1.00)',0],['rgba(2,2,2,1.00)',50]]]],
                ["style", "width", '1000px']
            ],
            "${_Buttons}": [
                ["style", "opacity", '0.08']
            ],
            "${_plat}": [
                ["style", "height", '200px'],
                ["style", "top", '150px'],
                ["style", "left", '0px'],
                ["style", "width", '1000px']
            ],
            "${_Davis}": [
                ["style", "left", '-100px']
            ],
            "${_large_cloud2}": [
                ["style", "height", '150px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '518px']
            ],
            "${_Clouds}": [
                ["style", "left", '1000px']
            ],
            "${_large_cloud2Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '150px'],
                ["style", "left", '526px'],
                ["style", "width", '518px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 24750,
            autoPlay: true,
            labels: {
                "CloudStart": 1000,
                "punch": 6000,
                "run": 10500,
                "jump": 21000
            },
            timeline: [
                { id: "eid45", tween: [ "style", "${_Clouds}", "left", '0px', { fromValue: '1000px'}], position: 1000, duration: 4000 },
                { id: "eid56", tween: [ "style", "${_Davis}", "left", '265px', { fromValue: '-100px'}], position: 1000, duration: 4000 },
                { id: "eid106", tween: [ "style", "${_Davis}", "left", '266px', { fromValue: '265px'}], position: 6000, duration: 3000, easing: "easeInQuad" },
                { id: "eid123", tween: [ "style", "${_Davis}", "left", '671px', { fromValue: '266px'}], position: 10500, duration: 4500, easing: "easeInQuad" },
                { id: "eid124", tween: [ "style", "${_Davis}", "left", '266px', { fromValue: '671px'}], position: 15000, duration: 5000, easing: "easeInQuad" },
                { id: "eid7", tween: [ "style", "${_Buttons}", "opacity", '1', { fromValue: '0.08'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid58", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Davis}', ['Stance'] ], ""], position: 4833.3748891578 },
                { id: "eid107", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Davis}', ['punch'] ], ""], position: 6000 },
                { id: "eid108", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Davis}', ['Stand'] ], ""], position: 8881.1909858054 },
                { id: "eid168", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Davis}', ['run'] ], ""], position: 10500 },
                { id: "eid169", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Davis}', ['Stand'] ], ""], position: 19943.569709643 },
                { id: "eid194", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Davis}', ['jump'] ], ""], position: 21000 }            ]
        }
    }
},
"CloudAnim": {
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
                    id: 'CloudGroup',
                    type: 'group',
                    rect: ['1007px', '0px', '929', '150', 'auto', 'auto'],
                    c: [
                    {
                        id: 'large_cloudCopy2',
                        type: 'image',
                        rect: ['429px', '0px', '500px', '150px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/large_cloud.png', '0px', '0px']
                    },
                    {
                        id: 'large_cloudCopy3',
                        type: 'image',
                        rect: ['0px', '0px', '500px', '150px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/large_cloud.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_large_cloudCopy3}": [
                ["style", "top", '0px'],
                ["style", "height", '150px'],
                ["style", "left", '0px'],
                ["style", "width", '500px']
            ],
            "${_large_cloudCopy2}": [
                ["style", "height", '150px'],
                ["style", "top", '0px'],
                ["style", "left", '429px'],
                ["style", "width", '500px']
            ],
            "${_CloudGroup}": [
                ["style", "left", '1007px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "width", '1000px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid44", tween: [ "style", "${_CloudGroup}", "left", '63px', { fromValue: '1007px'}], position: 1000, duration: 4000, easing: "easeInQuad" }            ]
        }
    }
},
"START": {
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
                    rect: ['0px', '3px', '125px', '25px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'START',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        font: ['Verdana, Geneva, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        align: 'center',
                        id: 'StartText',
                        text: 'START',
                        cursor: ['pointer'],
                        rect: ['0px', '-3px', '125px', '25px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_START}": [
                ["style", "top", '3px'],
                ["style", "height", '25px'],
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["style", "left", '0px'],
                ["style", "width", '125px']
            ],
            "${_StartText}": [
                ["style", "top", '-3px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '28px'],
                ["style", "width", '125px']
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
                "StartClick": 0
            },
            timeline: [
                { id: "eid37", tween: [ "color", "${_START}", "background-color", 'rgba(79,79,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid39", tween: [ "color", "${_START}", "background-color", 'rgba(192,192,192,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(79,79,79,1.00)'}], position: 500, duration: 500, easing: "easeInQuad" },
                { id: "eid38", tween: [ "color", "${_StartText}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid40", tween: [ "color", "${_StartText}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 500, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"WALK": {
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
                    type: 'rect',
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    rect: ['1px', '3px', '125px', '25px', 'auto', 'auto'],
                    id: 'WALK',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        font: ['Verdana, Geneva, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        id: 'PunchText',
                        text: 'PUNCH',
                        align: 'center',
                        rect: ['-1px', '-3px', '125px', '25px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_WALK}": [
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["style", "top", '3px'],
                ["style", "height", '25px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1px'],
                ["style", "width", '125px']
            ],
            "${symbolSelector}": [
                ["style", "height", '28px'],
                ["style", "width", '126px']
            ],
            "${_PunchText}": [
                ["style", "top", '-3px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '-1px']
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
                "StartClick": 0
            },
            timeline: [
                { id: "eid60", tween: [ "color", "${_PunchText}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid63", tween: [ "color", "${_PunchText}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 500, duration: 500, easing: "easeInQuad" },
                { id: "eid61", tween: [ "color", "${_WALK}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid62", tween: [ "color", "${_WALK}", "background-color", 'rgba(192,192,192,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 500, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"RUN": {
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
                    type: 'rect',
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    rect: ['0px', '3px', '125px', '25px', 'auto', 'auto'],
                    id: 'RUN',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        font: ['Verdana, Geneva, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        id: 'RunText',
                        text: 'RUN',
                        align: 'center',
                        rect: ['0px', '-3px', '125px', '25px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RunText}": [
                ["style", "top", '-3px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px']
            ],
            "${_RUN}": [
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["style", "top", '3px'],
                ["style", "height", '25px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "width", '125px']
            ],
            "${symbolSelector}": [
                ["style", "height", '28px'],
                ["style", "width", '125px']
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
                "StartClick": 0
            },
            timeline: [
                { id: "eid164", tween: [ "color", "${_RunText}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid167", tween: [ "color", "${_RunText}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 500, duration: 500, easing: "easeInQuad" },
                { id: "eid165", tween: [ "color", "${_RUN}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid166", tween: [ "color", "${_RUN}", "background-color", 'rgba(192,192,192,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 500, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"JUMP": {
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
                    rect: ['1px', '3px', '125px', '25px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'JUMP',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1.00)'],
                    c: [
                    {
                        font: ['Verdana, Geneva, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        align: 'center',
                        id: 'JumpText',
                        text: 'JUMP',
                        cursor: ['pointer'],
                        rect: ['-1px', '-3px', '125px', '25px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_JumpText}": [
                ["style", "top", '-3px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '-1px'],
                ["style", "cursor", 'pointer']
            ],
            "${_JUMP}": [
                ["style", "top", '3px'],
                ["style", "height", '25px'],
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["style", "left", '1px'],
                ["style", "width", '125px']
            ],
            "${symbolSelector}": [
                ["style", "height", '28px'],
                ["style", "width", '126px']
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
                "StartClick": 0
            },
            timeline: [
                { id: "eid190", tween: [ "color", "${_JumpText}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 500 },
                { id: "eid193", tween: [ "color", "${_JumpText}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 500, duration: 500 },
                { id: "eid191", tween: [ "color", "${_JUMP}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 500 },
                { id: "eid192", tween: [ "color", "${_JUMP}", "background-color", 'rgba(192,192,192,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 500, duration: 500 }            ]
        }
    }
},
"Davis": {
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
                    type: 'image',
                    display: 'block',
                    rect: ['-385px', '0px', '484px', '100px', 'auto', 'auto'],
                    id: 'wlk_2',
                    fill: ['rgba(0,0,0,0)', 'images/wlk_2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['23px', '2px', '735px', '100px', 'auto', 'auto'],
                    id: 'punch2',
                    fill: ['rgba(0,0,0,0)', 'images/punch.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['14px', '2px', '569px', '100px', 'auto', 'auto'],
                    id: 'run',
                    fill: ['rgba(0,0,0,0)', 'images/run.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '1263px', '100px', 'auto', 'auto'],
                    id: 'jump2',
                    fill: ['rgba(0,0,0,0)', 'images/jump.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_wlk_2}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '484px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'hidden']
            ],
            "${_run}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '100px'],
                ["style", "left", '14px'],
                ["style", "width", '569px']
            ],
            "${_jump2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '100px'],
                ["style", "left", '0px'],
                ["style", "width", '1263px']
            ],
            "${_punch2}": [
                ["style", "top", '3px'],
                ["style", "display", 'block'],
                ["style", "height", '100px'],
                ["style", "left", '1101px'],
                ["style", "width", '735px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 24250,
            autoPlay: true,
            labels: {
                "WalkStart": 750,
                "Stand": 2500,
                "Stance": 6000,
                "punch": 7000,
                "run": 10750,
                "jump": 20500
            },
            timeline: [
                { id: "eid97", tween: [ "style", "${_punch2}", "left", '1101px', { fromValue: '1101px'}], position: 3250, duration: 0, easing: "easeInQuad" },
                { id: "eid98", tween: [ "style", "${_punch2}", "left", '24px', { fromValue: '1101px'}], position: 6000, duration: 0, easing: "easeInQuad" },
                { id: "eid86", tween: [ "style", "${_punch2}", "left", '24px', { fromValue: '619px'}], position: 6500, duration: 0, easing: "easeInQuad" },
                { id: "eid88", tween: [ "style", "${_punch2}", "left", '-55px', { fromValue: '23px'}], position: 7000, duration: 0, easing: "easeInQuad" },
                { id: "eid90", tween: [ "style", "${_punch2}", "left", '-155px', { fromValue: '-55px'}], position: 7500, duration: 0, easing: "easeInQuad" },
                { id: "eid91", tween: [ "style", "${_punch2}", "left", '-268px', { fromValue: '-155px'}], position: 8000, duration: 0, easing: "easeInQuad" },
                { id: "eid92", tween: [ "style", "${_punch2}", "left", '-368px', { fromValue: '-268px'}], position: 8500, duration: 0, easing: "easeInQuad" },
                { id: "eid93", tween: [ "style", "${_punch2}", "left", '-447px', { fromValue: '-368px'}], position: 9000, duration: 0, easing: "easeInQuad" },
                { id: "eid94", tween: [ "style", "${_punch2}", "left", '-549px', { fromValue: '-447px'}], position: 9500, duration: 0, easing: "easeInQuad" },
                { id: "eid95", tween: [ "style", "${_punch2}", "left", '-657px', { fromValue: '-549px'}], position: 10000, duration: 0, easing: "easeInQuad" },
                { id: "eid46", tween: [ "style", "${_wlk_2}", "left", '0px', { fromValue: '0px'}], position: 250, duration: 0 },
                { id: "eid47", tween: [ "style", "${_wlk_2}", "left", '-100px', { fromValue: '0px'}], position: 500, duration: 0 },
                { id: "eid48", tween: [ "style", "${_wlk_2}", "left", '-200px', { fromValue: '-100px'}], position: 750, duration: 0 },
                { id: "eid49", tween: [ "style", "${_wlk_2}", "left", '-300px', { fromValue: '-200px'}], position: 1000, duration: 0 },
                { id: "eid50", tween: [ "style", "${_wlk_2}", "left", '-400px', { fromValue: '-300px'}], position: 1250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_wlk_2}", "left", '-300px', { fromValue: '-400px'}], position: 1500, duration: 0 },
                { id: "eid52", tween: [ "style", "${_wlk_2}", "left", '-200px', { fromValue: '-300px'}], position: 1750, duration: 0 },
                { id: "eid53", tween: [ "style", "${_wlk_2}", "left", '-100px', { fromValue: '-200px'}], position: 2000, duration: 0 },
                { id: "eid54", tween: [ "style", "${_wlk_2}", "left", '0px', { fromValue: '-100px'}], position: 2500, duration: 0 },
                { id: "eid99", tween: [ "style", "${_punch2}", "top", '3px', { fromValue: '3px'}], position: 6000, duration: 0, easing: "easeInQuad" },
                { id: "eid100", tween: [ "style", "${_punch2}", "top", '3px', { fromValue: '3px'}], position: 6500, duration: 0, easing: "easeInQuad" },
                { id: "eid89", tween: [ "style", "${_punch2}", "top", '2px', { fromValue: '0px'}], position: 7000, duration: 0, easing: "easeInQuad" },
                { id: "eid112", tween: [ "style", "${_punch2}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0, easing: "easeInQuad" },
                { id: "eid113", tween: [ "style", "${_run}", "left", '14px', { fromValue: '14px'}], position: 10500, duration: 0, easing: "easeInQuad" },
                { id: "eid114", tween: [ "style", "${_run}", "left", '-85px', { fromValue: '14px'}], position: 10750, duration: 0, easing: "easeInQuad" },
                { id: "eid116", tween: [ "style", "${_run}", "left", '-177px', { fromValue: '-85px'}], position: 11000, duration: 0, easing: "easeInQuad" },
                { id: "eid117", tween: [ "style", "${_run}", "left", '-85px', { fromValue: '-177px'}], position: 11250, duration: 0, easing: "easeInQuad" },
                { id: "eid118", tween: [ "style", "${_run}", "left", '11px', { fromValue: '-85px'}], position: 11500, duration: 0, easing: "easeInQuad" },
                { id: "eid119", tween: [ "style", "${_run}", "left", '-85px', { fromValue: '11px'}], position: 11750, duration: 0, easing: "easeInQuad" },
                { id: "eid120", tween: [ "style", "${_run}", "left", '-176px', { fromValue: '-85px'}], position: 12000, duration: 0, easing: "easeInQuad" },
                { id: "eid125", tween: [ "style", "${_run}", "left", '-85px', { fromValue: '-176px'}], position: 12250, duration: 0, easing: "easeInQuad" },
                { id: "eid126", tween: [ "style", "${_run}", "left", '-177px', { fromValue: '-85px'}], position: 12500, duration: 0, easing: "easeInQuad" },
                { id: "eid127", tween: [ "style", "${_run}", "left", '-85px', { fromValue: '-177px'}], position: 12750, duration: 0, easing: "easeInQuad" },
                { id: "eid128", tween: [ "style", "${_run}", "left", '11px', { fromValue: '-85px'}], position: 13000, duration: 0, easing: "easeInQuad" },
                { id: "eid129", tween: [ "style", "${_run}", "left", '-85px', { fromValue: '11px'}], position: 13250, duration: 0, easing: "easeInQuad" },
                { id: "eid132", tween: [ "style", "${_run}", "left", '-177px', { fromValue: '-85px'}], position: 13500, duration: 0, easing: "easeInQuad" },
                { id: "eid133", tween: [ "style", "${_run}", "left", '-85px', { fromValue: '-177px'}], position: 13750, duration: 0, easing: "easeInQuad" },
                { id: "eid135", tween: [ "style", "${_run}", "left", '-177px', { fromValue: '-85px'}], position: 14000, duration: 0, easing: "easeInQuad" },
                { id: "eid136", tween: [ "style", "${_run}", "left", '-85px', { fromValue: '-177px'}], position: 14250, duration: 0, easing: "easeInQuad" },
                { id: "eid137", tween: [ "style", "${_run}", "left", '11px', { fromValue: '-85px'}], position: 14500, duration: 0, easing: "easeInQuad" },
                { id: "eid138", tween: [ "style", "${_run}", "left", '-85px', { fromValue: '11px'}], position: 14750, duration: 0, easing: "easeInQuad" },
                { id: "eid139", tween: [ "style", "${_run}", "left", '-177px', { fromValue: '-85px'}], position: 15000, duration: 0, easing: "easeInQuad" },
                { id: "eid140", tween: [ "style", "${_run}", "left", '-356px', { fromValue: '-177px'}], position: 15250, duration: 0, easing: "easeInQuad" },
                { id: "eid142", tween: [ "style", "${_run}", "left", '-271px', { fromValue: '-356px'}], position: 15500, duration: 0, easing: "easeInQuad" },
                { id: "eid144", tween: [ "style", "${_run}", "left", '-368px', { fromValue: '-271px'}], position: 15750, duration: 0, easing: "easeInQuad" },
                { id: "eid145", tween: [ "style", "${_run}", "left", '-469px', { fromValue: '-368px'}], position: 16000, duration: 0, easing: "easeInQuad" },
                { id: "eid146", tween: [ "style", "${_run}", "left", '-359px', { fromValue: '-469px'}], position: 16250, duration: 0, easing: "easeInQuad" },
                { id: "eid147", tween: [ "style", "${_run}", "left", '-278px', { fromValue: '-359px'}], position: 16500, duration: 0, easing: "easeInQuad" },
                { id: "eid148", tween: [ "style", "${_run}", "left", '-368px', { fromValue: '-278px'}], position: 16750, duration: 0, easing: "easeInQuad" },
                { id: "eid149", tween: [ "style", "${_run}", "left", '-469px', { fromValue: '-368px'}], position: 17000, duration: 0, easing: "easeInQuad" },
                { id: "eid150", tween: [ "style", "${_run}", "left", '-359px', { fromValue: '-469px'}], position: 17250, duration: 0, easing: "easeInQuad" },
                { id: "eid151", tween: [ "style", "${_run}", "left", '-278px', { fromValue: '-359px'}], position: 17500, duration: 0, easing: "easeInQuad" },
                { id: "eid152", tween: [ "style", "${_run}", "left", '-356px', { fromValue: '-278px'}], position: 17750, duration: 0, easing: "easeInQuad" },
                { id: "eid153", tween: [ "style", "${_run}", "left", '-271px', { fromValue: '-356px'}], position: 18000, duration: 0, easing: "easeInQuad" },
                { id: "eid154", tween: [ "style", "${_run}", "left", '-368px', { fromValue: '-271px'}], position: 18250, duration: 0, easing: "easeInQuad" },
                { id: "eid155", tween: [ "style", "${_run}", "left", '-469px', { fromValue: '-368px'}], position: 18500, duration: 0, easing: "easeInQuad" },
                { id: "eid156", tween: [ "style", "${_run}", "left", '-359px', { fromValue: '-469px'}], position: 18750, duration: 0, easing: "easeInQuad" },
                { id: "eid157", tween: [ "style", "${_run}", "left", '-278px', { fromValue: '-359px'}], position: 19000, duration: 0, easing: "easeInQuad" },
                { id: "eid158", tween: [ "style", "${_run}", "left", '-368px', { fromValue: '-278px'}], position: 19250, duration: 0, easing: "easeInQuad" },
                { id: "eid159", tween: [ "style", "${_run}", "left", '-469px', { fromValue: '-368px'}], position: 19500, duration: 0, easing: "easeInQuad" },
                { id: "eid160", tween: [ "style", "${_run}", "left", '-359px', { fromValue: '-469px'}], position: 19750, duration: 0, easing: "easeInQuad" },
                { id: "eid161", tween: [ "style", "${_run}", "left", '-278px', { fromValue: '-359px'}], position: 20000, duration: 0, easing: "easeInQuad" },
                { id: "eid189", tween: [ "style", "${_jump2}", "left", '0px', { fromValue: '0px'}], position: 20500, duration: 0 },
                { id: "eid174", tween: [ "style", "${_jump2}", "left", '-107px', { fromValue: '0px'}], position: 20750, duration: 0 },
                { id: "eid176", tween: [ "style", "${_jump2}", "left", '-107px', { fromValue: '-107px'}], position: 21000, duration: 0 },
                { id: "eid177", tween: [ "style", "${_jump2}", "left", '-218px', { fromValue: '-107px'}], position: 21250, duration: 0 },
                { id: "eid178", tween: [ "style", "${_jump2}", "left", '-333px', { fromValue: '-218px'}], position: 21500, duration: 0 },
                { id: "eid179", tween: [ "style", "${_jump2}", "left", '-441px', { fromValue: '-333px'}], position: 21750, duration: 0 },
                { id: "eid180", tween: [ "style", "${_jump2}", "left", '-547px', { fromValue: '-441px'}], position: 22000, duration: 0 },
                { id: "eid181", tween: [ "style", "${_jump2}", "left", '-652px', { fromValue: '-547px'}], position: 22250, duration: 0 },
                { id: "eid182", tween: [ "style", "${_jump2}", "left", '-771px', { fromValue: '-652px'}], position: 22500, duration: 0 },
                { id: "eid183", tween: [ "style", "${_jump2}", "left", '-881px', { fromValue: '-771px'}], position: 22750, duration: 0 },
                { id: "eid184", tween: [ "style", "${_jump2}", "left", '-972px', { fromValue: '-881px'}], position: 23000, duration: 0 },
                { id: "eid185", tween: [ "style", "${_jump2}", "left", '-883px', { fromValue: '-972px'}], position: 23250, duration: 0 },
                { id: "eid186", tween: [ "style", "${_jump2}", "left", '-966px', { fromValue: '-883px'}], position: 23500, duration: 0 },
                { id: "eid187", tween: [ "style", "${_jump2}", "left", '-1051px', { fromValue: '-966px'}], position: 23750, duration: 0 },
                { id: "eid188", tween: [ "style", "${_jump2}", "left", '-1050px', { fromValue: '-1051px'}], position: 24000, duration: 0 },
                { id: "eid121", tween: [ "style", "${_run}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid122", tween: [ "style", "${_run}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0, easing: "easeInQuad" },
                { id: "eid171", tween: [ "style", "${_run}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid105", tween: [ "style", "${_wlk_2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 2500, easing: "easeInQuad" },
                { id: "eid110", tween: [ "style", "${_wlk_2}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeInQuad" },
                { id: "eid115", tween: [ "style", "${_run}", "top", '0px', { fromValue: '0px'}], position: 10750, duration: 0, easing: "easeInQuad" },
                { id: "eid130", tween: [ "style", "${_run}", "top", '0px', { fromValue: '0px'}], position: 12250, duration: 0, easing: "easeInQuad" },
                { id: "eid134", tween: [ "style", "${_run}", "top", '0px', { fromValue: '0px'}], position: 13750, duration: 0, easing: "easeInQuad" },
                { id: "eid141", tween: [ "style", "${_run}", "top", '2px', { fromValue: '0px'}], position: 15250, duration: 0, easing: "easeInQuad" },
                { id: "eid143", tween: [ "style", "${_run}", "top", '0px', { fromValue: '2px'}], position: 15500, duration: 0, easing: "easeInQuad" },
                { id: "eid162", tween: [ "style", "${_run}", "top", '2px', { fromValue: '0px'}], position: 17750, duration: 0, easing: "easeInQuad" },
                { id: "eid163", tween: [ "style", "${_run}", "top", '0px', { fromValue: '2px'}], position: 18000, duration: 0, easing: "easeInQuad" },
                { id: "eid111", tween: [ "style", "${_wlk_2}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0, easing: "easeInQuad" },
                { id: "eid172", tween: [ "style", "${_jump2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid173", tween: [ "style", "${_jump2}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 }            ]
        }
    }
},
"jump": {
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
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Punch": {
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
                    id: 'punch',
                    type: 'image',
                    rect: ['25px', '0px', '736px', '100px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/punch.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'wlk_22',
                    rect: ['0px', '2px', '472px', '100px', 'auto', 'auto'],
                    clip: ['rect(0px 99.14306640625px 100px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/wlk_2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_punch}": [
                ["style", "height", '100px'],
                ["style", "top", '0px'],
                ["style", "left", '25px'],
                ["style", "width", '736px']
            ],
            "${_wlk_22}": [
                ["style", "top", '153px'],
                ["style", "background-position", [-1.4287109375001,-151.4287109375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,99.14306640625,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '472px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            labels: {
                "punch": 250
            },
            timeline: [
                { id: "eid73", tween: [ "style", "${_wlk_22}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid64", tween: [ "style", "${_punch}", "left", '25px', { fromValue: '25px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid65", tween: [ "style", "${_punch}", "left", '-50px', { fromValue: '25px'}], position: 250, duration: 0, easing: "easeInQuad" },
                { id: "eid66", tween: [ "style", "${_punch}", "left", '-150px', { fromValue: '-50px'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid67", tween: [ "style", "${_punch}", "left", '-260px', { fromValue: '-150px'}], position: 750, duration: 0, easing: "easeInQuad" },
                { id: "eid68", tween: [ "style", "${_punch}", "left", '-368px', { fromValue: '-260px'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid69", tween: [ "style", "${_punch}", "left", '-448px', { fromValue: '-368px'}], position: 1250, duration: 0, easing: "easeInQuad" },
                { id: "eid70", tween: [ "style", "${_punch}", "left", '-547px', { fromValue: '-448px'}], position: 1500, duration: 0, easing: "easeInQuad" },
                { id: "eid71", tween: [ "style", "${_punch}", "left", '-660px', { fromValue: '-547px'}], position: 1750, duration: 0, easing: "easeInQuad" },
                { id: "eid72", tween: [ "style", "${_punch}", "left", '-807px', { fromValue: '-660px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid76", tween: [ "style", "${_wlk_22}", "background-position", [-1.4287109375001,-151.4287109375], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1.4287109375001,-151.4287109375]}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid75", tween: [ "style", "${_wlk_22}", "top", '153px', { fromValue: '153px'}], position: 0, duration: 0, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-455333329");
