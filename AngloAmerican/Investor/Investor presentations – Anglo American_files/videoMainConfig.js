var inv_mainConfiguration = {
  //18-01-2017 Urvi : Allow File execution in local machine
  inv_local: false,

  inv_isIE8: /MSIE (\d+\.\d+);/.test(navigator.userAgent)
    ? new Number(RegExp.$1) == 8
    : false,
  inv_isIOS: navigator.userAgent.match(/like Mac OS X/i),
  inv_isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
  inv_videoJQuery: $j,

  inv_protocol: "https://", //'http://'  //'https://'  //'http://'
  inv_hostName: "viz.tools.investis.com/", //'visualisation.investis.com/'   //'viz.tools.investis.com/'    //'localhost/'
  inv_playerPath: "video/videoPlayer-v.3.0/", //'video/videoPlayer-v.2.0-test/'        //'video/videoPlayer-v.2.0/'
  inv_videoClient: "anglo-american",
  inv_videoClientFolder: "anglo-american",

  inv_renderViewPath: "view/@viewFileName.html", ///view/@viewFileName.html////golar-lng.staging.investis.com/tools/urlproxy/advurlproxy.aspx?settingname=singleplayer

  /* videoplayer flags */
  inv_videoCodeReady: false,
  inv_cssPath: "css/videoplayer.css?v=" + Date.now(),

  /* timeline flags */
  inv_timelineCodeReady: false,
  inv_timelineJsonPath: "/about-us/history?async=1&sc_lang=EN",
  inv_timelineXmlPath: "/about-us/history?async=1&sc_lang=EN",
  inv_timelineCssPath: "css/timeline.css",
  inv_timelineNoTransitionsCssPath: "css/timeline-notransitions.css",
  inv_scrollbarCssPath:
    "centralizedprojectfiles/css/jquery.mCustomScrollbar.css",

  inv_facebookAppId: "396486471188512",
  inv_gaType: "universal",
  inv_gaAccount: "UA-5095077-1", // UA-5095077-29

  inv_startTime: new Date(),
  inv_disableBuiltInGATracking: false,

  inv_dateFormat: "yyyy-dd-MM",

  inv_modulesRequested: new Array(),
  inv_modulesLoaded: new Array(),
  inv_bypassModuleLoadLogic: true,

  inv_disableBuiltInDeeplinking: false,
  inv_debugMode: false //For debugging - Value:true/false - DefaultValue:false
};
//18-01-2017 Urvi : Allow File execution in local machine -- start
if (window.location.host + "/" == inv_mainConfiguration.inv_hostName)
  inv_mainConfiguration.inv_local = false;

inv_mainConfiguration.inv_videoBaseURL = function() {
  if (inv_mainConfiguration.inv_local) return "../";
  else
    return (
      inv_mainConfiguration.inv_protocol +
      inv_mainConfiguration.inv_hostName +
      inv_mainConfiguration.inv_playerPath
    );
};

if (inv_mainConfiguration.inv_local) {
  inv_mainConfiguration.inv_timelineJsonPath = "data/timeline";
  inv_mainConfiguration.inv_timelineXmlPath = "data/timeline";
  inv_mainConfiguration.inv_bypassModuleLoadLogic = false;
  inv_mainConfiguration.inv_gaAccount = "UA-123-1";
  inv_mainConfiguration.inv_renderViewPath = "view/@viewFileName.html";
  inv_mainConfiguration.inv_scrollbarCssPath =
    inv_mainConfiguration.inv_videoBaseURL() +
    inv_mainConfiguration.inv_scrollbarCssPath;
}

//18-01-2017 Urvi : Allow File execution in local machine -- end
if (!inv_mainConfiguration.inv_isIE8) {
  inv_mainConfiguration.inv_modules = {
    //18-01-2017 Urvi : Changed Centralized Files path
    paths: {
      libs:
        inv_mainConfiguration.inv_videoBaseURL() +
        "centralizedprojectfiles/js/libs/",
      models:
        inv_mainConfiguration.inv_videoBaseURL() +
        "centralizedprojectfiles/js/models/",
      controllers:
        inv_mainConfiguration.inv_videoBaseURL() +
        "centralizedprojectfiles/js/controllers/",
      clientDir:
        inv_mainConfiguration.inv_videoBaseURL() +
        inv_mainConfiguration.inv_videoClientFolder +
        "/js/"
    },
    shim: {
      /* timeline paths */
      "clientDir/jquery.timelineCode": {
        deps: [
          "clientDir/polyfills",
          "clientDir/jquery.address-1.6",
          "libs/matchMedia",
          "models/jquery.deviceDetection",
          "models/jquery.readXMLFile",
          "libs/ga",
          "models/jquery.gaCode",
          "libs/imagesloaded.min",
          "clientDir/jquery.tilt",
          // "clientDir/jquery-ui.min",
          "clientDir/sly.min",
          "clientDir/jquery.easing",
          "clientDir/anime.min",
          "clientDir/jquery.mCustomScrollbar.concat.min"
        ]
      },
      /* videoplayer paths */

      "clientDir/jquery.videoCode": {
        deps: [
          // "libs/matchMedia",
          // "models/jquery.deviceDetection",
          // "libs/ga",
          // "models/jquery.gaCode",
          // "models/jquery.readXMLFile",
          // "libs/imagesloaded.min"
        ]
      },
      "controllers/jquery.videoDataCtrl": {
        deps: ["models/jquery.brightcoveData", "models/jquery.youtubeData"] //,'models/jquery.xmlVideoData'
      },
      "controllers/jquery.singlePlayerCtrl": {
        deps: ["controllers/jquery.videoPlayerCtrl"]
      },
      "controllers/jquery.videoPlayerCtrl": {
        deps: ["clientDir/jquery.html5Player", "clientDir/jquery.youtubePlayer"]
      },
      "controllers/jquery.videoControlsCtrl": {
        deps: ["models/jquery.videoControls"]
      },
      "controllers/jquery.shareCtrl": {
        deps: ["clientDir/jquery.shareCode"]
      },
      "controllers/jquery.soundCtrl": {
        deps: ["models/jquery.soundCode"]
      },
      "controllers/jquery.videoGalleryCtrl": {
        deps: ["models/jquery.videoGallery", "models/jquery.customTabs"]
      },
      "controllers/jquery.infoCtrl": {
        deps: ["models/jquery.videoInformation"]
      },
      "controllers/jquery.accordionPlayerCtrl": {},
      "controllers/jquery.bannerPlayerCtrl": {
        deps: ["controllers/jquery.videoBannerControlsCtrl"]
      },
      "controllers/jquery.bxSliderPlayerCtrl": {},
      "controllers/jquery.colorboxPlayerCtrl": {},
      "controllers/jquery.videoChaptersCtrl": {
        deps: ["models/jquery.videoChapters", "models/jquery.customSlider"]
      },
      "controllers/jquery.videoRelatedContentCtrl": {}
    }
  };
  inv_mainConfiguration.inv_videoJQuery(function() {
    inv_mainConfiguration.inv_videoJQuery.getScript(
      (inv_mainConfiguration.inv_bypassModuleLoadLogic == true
        ? inv_mainConfiguration.inv_modules.paths.clientDir +
          "videoMerged.min.js"
        : inv_mainConfiguration.inv_modules.paths.libs + "globalScripts.js") +
        "?" +
        inv_mainConfiguration.inv_videoJQuery.now(),
      function() {
        inv_mainConfiguration.inv_debugConsole("jquery is ready");

        //18-01-2017 Urvi : Allow File execution in local machine
        if (!inv_mainConfiguration.inv_local) {
          var inv_absoluteFilePath =
            inv_mainConfiguration.inv_videoBaseURL() +
            inv_mainConfiguration.inv_videoClientFolder;
          inv_mainConfiguration.inv_renderViewPath =
            inv_absoluteFilePath +
            "/" +
            inv_mainConfiguration.inv_renderViewPath;

          /* videoplayer Code */

          inv_mainConfiguration.inv_cssPath =
            inv_absoluteFilePath + "/" + inv_mainConfiguration.inv_cssPath;
        }
        inv_mainConfiguration
          .inv_videoJQuery(
            '<link rel="stylesheet" href="' +
              inv_mainConfiguration.inv_cssPath +
              '" type="text/css" />'
          )
          .appendTo("head")
          .each(function() {
            inv_mainConfiguration.inv_debugConsole("video css is ready");
          });
        inv_mainConfiguration.inv_resolveModuleNameAndLoad(
          ["clientDir/jquery.videoCode", "controllers/jquery.videoDataCtrl"],
          function() {
            inv_mainConfiguration.inv_videoDataContainer = inv_mainConfiguration
              .inv_videoJQuery("body")
              .videoDataCtrl({
                videoDataReceived: function() {
                  inv_mainConfiguration.inv_debugConsole(
                    "video code and data js ready"
                  );
                  inv_mainConfiguration.inv_videoCodeReady = true;
                },
                errorReceived: function(errString) {
                  inv_mainConfiguration.inv_debugConsole(
                    "inv_videoDataContainer Error:" + errString
                  );
                }
              });
          }
        );

        /* timeline Code */
        if (!inv_mainConfiguration.inv_local) {
          inv_mainConfiguration.inv_timelineCssPath =
            inv_absoluteFilePath +
            "/" +
            inv_mainConfiguration.inv_timelineCssPath;
          inv_mainConfiguration.inv_timelineNoTransitionsCssPath =
            inv_absoluteFilePath +
            "/" +
            inv_mainConfiguration.inv_timelineNoTransitionsCssPath;
          inv_mainConfiguration.inv_scrollbarCssPath =
            inv_mainConfiguration.inv_videoBaseURL() +
            "/" +
            inv_mainConfiguration.inv_scrollbarCssPath;
        }

        if (inv_mainConfiguration.inv_isIOS) {
          inv_mainConfiguration
            .inv_videoJQuery(
              '<link rel="stylesheet" href="' +
                inv_mainConfiguration.inv_timelineNoTransitionsCssPath +
                '" type="text/css" />'
            )
            .appendTo("head")
            .each(function() {
              inv_mainConfiguration.inv_debugConsole("timeline css 1 is ready");
            });
        } else {
          inv_mainConfiguration
            .inv_videoJQuery(
              '<link rel="stylesheet" href="' +
                inv_mainConfiguration.inv_timelineCssPath +
                '" type="text/css" />'
            )
            .appendTo("head")
            .each(function() {
              inv_mainConfiguration.inv_debugConsole("timeline css 1 is ready");
            });
        }

        inv_mainConfiguration
          .inv_videoJQuery(
            '<link rel="stylesheet" href="' +
              inv_mainConfiguration.inv_scrollbarCssPath +
              '" type="text/css" />'
          )
          .appendTo("head")
          .each(function() {
            inv_mainConfiguration.inv_debugConsole("timeline css 2 is ready");
          });

        inv_mainConfiguration.inv_resolveModuleNameAndLoad(
          ["clientDir/jquery.timelineCode"],
          function() {
            inv_mainConfiguration.inv_debugConsole("timeline code ready");
            inv_mainConfiguration.inv_timelineCodeReady = true;
          }
        );
      }
    );
  });
}

(function($) {
  $.fn.InvPlayer = function(params) {
    var def = new $.Deferred();
    var me = $(this);
    var dataname = "videoCode";
    var instance = me.data(dataname);
    if (!inv_mainConfiguration.inv_isIE8) {
      if (instance == undefined && !inv_mainConfiguration.inv_videoCodeReady) {
        var checkvideoCodeReady = setInterval(function() {
          if (inv_mainConfiguration.inv_videoCodeReady) {
            clearInterval(checkvideoCodeReady);
            def.resolve(me.videoCode(params));
          }
        }, 500);
      } else def.resolve(me.videoCode(params));
    } else {
      me.html("not supported");
      def.reject();
    }
    return def.promise(instance);
  };
})(inv_mainConfiguration.inv_videoJQuery);

(function($) {
  $.fn.InvTimeline = function(params) {
    var def = new $.Deferred();
    var me = $(this);
    var dataname = "timelineCode";
    var instance = me.data(dataname);
    if (!inv_mainConfiguration.inv_isIE8) {
      if (
        instance == undefined &&
        !inv_mainConfiguration.inv_timelineCodeReady
      ) {
        var checktimelineCodeReady = setInterval(function() {
          if (inv_mainConfiguration.inv_timelineCodeReady) {
            clearInterval(checktimelineCodeReady);
            def.resolve(me.timelineCode(params));
          }
        }, 500);
      } else {
        def.resolve(me.timelineCode(params));
      }
    } else {
      me.html("not supported");
      def.reject();
    }
    return def.promise(instance);
  };
})(inv_mainConfiguration.inv_videoJQuery);
