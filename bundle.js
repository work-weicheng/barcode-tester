!(function (e) {
  var t = {}
  function n(i) {
    if (t[i]) return t[i].exports
    var o = (t[i] = { i: i, l: !1, exports: {} })
    return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i })
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && "object" == typeof e && e && e.__esModule) return e
      var i = Object.create(null)
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            i,
            o,
            function (t) {
              return e[t]
            }.bind(null, o)
          )
      return i
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, "a", t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ""),
    n((n.s = 0))
})([
  function (e, t, n) {
    let i = n(1),
      o = n(8)
    ;(Module = i.Module),
      (window.mwbScanner = i.mwbScanner),
      i.setWasmPath(o.setWasmPath()),
      document.addEventListener("preScannerModuleLoaded", async function () {
        o.set_mwbScanner(i.mwbScanner),
          i.set_scannerConfig(o.scannerConfig),
          o.scannerConfig()
        var e
        await ((e = 1), new Promise((t) => setTimeout(t, e)))
      }),
      document.addEventListener("scannerModuleLoaded", async function (e) {
        console.log(e.detail), console.log("@@@")
        console.log(navigator.userAgent)
        mwbScanner.getCameras().then(function (e) {
          alert({
            userAgent: navigator.userAgent,
            cameras: e.map((el) => {
              return el.label
            }),
          })
          let t,
            n = e.length,
            i = ""
          for (let t = 0; t < n; t++) console.log(e[t].label)
          "camera2 0, facing back" === e[t].label && (i = e[t].id)
          if ("" === i) {
            t = e[0].id
          } else t = i
          mwbScanner.setCamera(t)
        }),
          mwbScanner.setCallback(function (e) {
            "Error" !== e.type &&
              (console.log(e.code), mwbScanner.startScanning())
          }),
          mwbScanner.startScanning()
      })
  },
  function (e, t, n) {
    ;(function (t) {
      var i = {
          MWB_GRAYSCALE_LENX_MIN: 10,
          MWB_GRAYSCALE_LENX_MAX: 5e3,
          MWB_GRAYSCALE_LENY_MIN: 10,
          MWB_GRAYSCALE_LENY_MAX: 5e3,
          MWB_RT_OK: 0,
          MWB_RT_FAIL: -1,
          MWB_RT_NOT_SUPPORTED: -2,
          MWB_RT_BAD_PARAM: -3,
          MWB_CFG_CODE39_REQUIRE_CHECKSUM: 2,
          MWB_CFG_CODE39_DONT_REQUIRE_STOP: 4,
          MWB_CFG_CODE39_EXTENDED_MODE: 8,
          MWB_CFG_CODE39_CODE32_ENABLED: 16,
          MWB_CFG_CODE39_CODE32_PREFIX: 32,
          MWB_CFG_CODE93_EXTENDED_MODE: 8,
          MWB_CFG_CODE25_REQ_CHKSUM: 1,
          MWB_CFG_CODE11_REQ_SINGLE_CHKSUM: 1,
          MWB_CFG_CODE11_REQ_DOUBLE_CHKSUM: 2,
          MWB_CFG_MSI_REQ_10_CHKSUM: 1,
          MWB_CFG_MSI_REQ_1010_CHKSUM: 2,
          MWB_CFG_MSI_REQ_11_IBM_CHKSUM: 4,
          MWB_CFG_MSI_REQ_11_NCR_CHKSUM: 8,
          MWB_CFG_MSI_REQ_1110_IBM_CHKSUM: 16,
          MWB_CFG_MSI_REQ_1110_NCR_CHKSUM: 32,
          MWB_CFG_CODABAR_INCLUDE_STARTSTOP: 1,
          MWB_CFG_DM_DPM_MODE: 2,
          MWB_CFG_TELEPEN_FORCE_NUMERIC: 1,
          MWB_PAR_ID_ECI_MODE: 8,
          MWB_PAR_ID_RESULT_PREFIX: 16,
          MWB_PAR_ID_VERIFY_LOCATION: 32,
          MWB_PAR_ID_SCAN_COLOR: 64,
          MWB_PAR_VALUE_ECI_DISABLED: 0,
          MWB_PAR_VALUE_ECI_ENABLED: 1,
          MWB_PAR_VALUE_RESULT_PREFIX_NEVER: 0,
          MWB_PAR_VALUE_RESULT_PREFIX_ALWAYS: 1,
          MWB_PAR_VALUE_RESULT_PREFIX_DEFAULT: 2,
          MWB_PAR_VALUE_VERIFY_LOCATION_OFF: 0,
          MWB_PAR_VALUE_VERIFY_LOCATION_ON: 1,
          MWB_PAR_VALUE_COLOR_NORMAL: 1,
          MWB_PAR_VALUE_COLOR_INVERTED: 2,
          MWB_PAR_VALUE_COLOR_BOTH: 4,
          MWB_CFG_EANUPC_DISABLE_ADDON: 1,
          MWB_CFG_EANUPC_DONT_EXPAND_UPCE: 2,
          MWB_CFG_GLOBAL_HORIZONTAL_SHARPENING: 1,
          MWB_CFG_GLOBAL_VERTICAL_SHARPENING: 2,
          MWB_CFG_GLOBAL_SHARPENING: 3,
          MWB_CFG_GLOBAL_ROTATE90: 4,
          MWB_CFG_GLOBAL_ROTATE180: 8,
          MWB_CFG_GLOBAL_CALCULATE_1D_LOCATION: 16,
          MWB_CFG_GLOBAL_VERIFY_1D_LOCATION: 32,
          MWB_CFG_GLOBAL_USE_CENTRIC_SCANNING: 64,
          MWB_CFG_GLOBAL_DISABLE_PREPROCESSING: 128,
          MWB_CFG_GLOBAL_ENABLE_MULTI: 256,
          MWB_CFG_GLOBAL_SCANLINESx2: 512,
          MWB_CFG_GLOBAL_SCANLINESx4: 1024,
          MWB_CFG_GLOBAL_SCANLINESx8: 2048,
          MWB_CFG_CODE39_REQ_CHKSUM: 2,
          MWB_CODE_MASK_NONE: 0,
          MWB_CODE_MASK_QR: 1,
          MWB_CODE_MASK_DM: 2,
          MWB_CODE_MASK_RSS: 4,
          MWB_CODE_MASK_39: 8,
          MWB_CODE_MASK_EANUPC: 16,
          MWB_CODE_MASK_128: 32,
          MWB_CODE_MASK_PDF: 64,
          MWB_CODE_MASK_AZTEC: 128,
          MWB_CODE_MASK_25: 256,
          MWB_CODE_MASK_93: 512,
          MWB_CODE_MASK_CODABAR: 1024,
          MWB_CODE_MASK_DOTCODE: 2048,
          MWB_CODE_MASK_11: 4096,
          MWB_CODE_MASK_MSI: 8192,
          MWB_CODE_MASK_MAXICODE: 16384,
          MWB_CODE_MASK_POSTAL: 32768,
          MWB_CODE_MASK_TELEPEN: 65536,
          MWB_CODE_MASK_ALL: 16777215,
          MWB_RTREG_OK: 0,
          MWB_RTREG_INVALID_KEY: -1,
          MWB_RTREG_INVALID_CHECKSUM: -2,
          MWB_RTREG_INVALID_APPLICATION: -3,
          MWB_RTREG_INVALID_SDK_VERSION: -4,
          MWB_RTREG_INVALID_KEY_VERSION: -5,
          MWB_RTREG_INVALID_PLATFORM: -6,
          MWB_RTREG_KEY_EXPIRED: -7,
          REGMESSAGES: {
            0: "Registration OK",
            "-1": "Registration Invalid Key",
            "-2": "Registration Invalid Checksum",
            "-3": "Registration Invalid Application",
            "-4": "Registration Invalid SDK Version",
            "-5": "Registration Invalid Key Version",
            "-6": "Registration Invalid Platform",
            "-7": "Registration Key Expired",
          },
          MWB_SUBC_MASK_RSS_14: 1,
          MWB_SUBC_MASK_RSS_14_STACK: 2,
          MWB_SUBC_MASK_RSS_LIM: 4,
          MWB_SUBC_MASK_RSS_EXP: 8,
          MWB_SUBC_MASK_QR_STANDARD: 1,
          MWB_SUBC_MASK_QR_MICRO: 2,
          MWB_SUBC_MASK_PDF_STANDARD: 1,
          MWB_SUBC_MASK_PDF_MICRO: 2,
          MWB_SUBC_MASK_C25_INTERLEAVED: 1,
          MWB_SUBC_MASK_C25_STANDARD: 2,
          MWB_SUBC_MASK_C25_ITF14: 4,
          MWB_SUBC_MASK_C25_IATA: 8,
          MWB_SUBC_MASK_C25_MATRIX: 16,
          MWB_SUBC_MASK_C25_COOP: 32,
          MWB_SUBC_MASK_C25_INVERTED: 64,
          MWB_SUBC_MASK_POSTAL_POSTNET: 1,
          MWB_SUBC_MASK_POSTAL_PLANET: 2,
          MWB_SUBC_MASK_POSTAL_IM: 4,
          MWB_SUBC_MASK_POSTAL_ROYAL: 8,
          MWB_SUBC_MASK_POSTAL_AUSTRALIAN: 16,
          MWB_SUBC_MASK_EANUPC_EAN_13: 1,
          MWB_SUBC_MASK_EANUPC_EAN_8: 2,
          MWB_SUBC_MASK_EANUPC_UPC_A: 4,
          MWB_SUBC_MASK_EANUPC_UPC_E: 8,
          MWB_SUBC_MASK_EANUPC_UPC_E1: 16,
          MWB_SCANDIRECTION_HORIZONTAL: 1,
          MWB_SCANDIRECTION_VERTICAL: 2,
          MWB_SCANDIRECTION_OMNI: 4,
          MWB_SCANDIRECTION_AUTODETECT: 8,
          MWB_SCANDIRECTION_CUSTOM: 16,
          FOUND_NONE: 0,
          FOUND_DM: 1,
          FOUND_39: 2,
          FOUND_RSS_14: 3,
          FOUND_RSS_14_STACK: 4,
          FOUND_RSS_LIM: 5,
          FOUND_RSS_EXP: 6,
          FOUND_EAN_13: 7,
          FOUND_EAN_8: 8,
          FOUND_UPC_A: 9,
          FOUND_UPC_E: 10,
          FOUND_128: 11,
          FOUND_PDF: 12,
          FOUND_QR: 13,
          FOUND_AZTEC: 14,
          FOUND_25_INTERLEAVED: 15,
          FOUND_25_STANDARD: 16,
          FOUND_93: 17,
          FOUND_CODABAR: 18,
          FOUND_DOTCODE: 19,
          FOUND_128_GS1: 20,
          FOUND_ITF14: 21,
          FOUND_11: 22,
          FOUND_MSI: 23,
          FOUND_25_IATA: 24,
          FOUND_25_MATRIX: 25,
          FOUND_25_COOP: 26,
          FOUND_25_INVERTED: 27,
          FOUND_QR_MICRO: 28,
          FOUND_MAXICODE: 29,
          FOUND_POSTNET: 30,
          FOUND_PLANET: 31,
          FOUND_IMB: 32,
          FOUND_ROYALMAIL: 33,
          FOUND_MICRO_PDF: 34,
          FOUND_32: 35,
          FOUND_AUSTRALIAN: 36,
          FOUND_TELEPEN: 37,
          CamRes_SD: 0,
          CamRes_HD: 1,
          CamRes_FHD: 2,
          OrientationPortrait: "Portrait",
          OrientationLandscapeLeft: "LandscapeLeft",
          OrientationLandscapeRight: "LandscapeRight",
          OrientationAll: "All",
          OverlayModeNone: 0,
          OverlayModeMW: 1,
          OverlayModeImage: 2,
          PM_NONE: 0,
          PM_PAUSE: 1,
          PM_STOP_BLINKING: 2,
          MWP_PARSER_MASK_NONE: 0,
          MWP_PARSER_MASK_GS1: 1,
          MWP_PARSER_MASK_IUID: 2,
          MWP_PARSER_MASK_ISBT: 4,
          MWP_PARSER_MASK_AAMVA: 8,
          MWP_PARSER_MASK_HIBC: 16,
          MWP_PARSER_MASK_SCM: 32,
          MWP_PARSER_MASK_AUTO: 255,
          XPOINT: 0,
          YPOINT: 0,
          WIDTH: 50,
          HEIGHT: 50,
        },
        o = {
          MWBinitDecoder: null,
          MWBinitDecoder_arguments: [],
          MWBgetVersion: null,
          MWBgetVersion_arguments: [],
          MWBstartScanner: function () {
            f.start()
          },
          MWBstartScanner_arguments: [],
          MWBregisterSDK: null,
          MWBregisterSDK_arguments: [],
          MWBgetDeviceID: null,
          MWBgetDeviceID_arguments: [],
          MWBsetActiveCodes: null,
          MWBsetActiveCodes_arguments: ["number"],
          MWBgetActiveCodes: null,
          MWBgetActiveCodes_arguments: [],
          MWBsetActiveSubcodes: null,
          MWBsetActiveSubcodes_arguments: ["number", "number"],
          MWBsetFlags: null,
          MWBsetFlags_arguments: ["number", "number"],
          MWBsetMinLength: null,
          MWBsetMinLength_arguments: ["number", "number"],
          MWBsetDirection: null,
          MWBsetDirection_arguments: ["number"],
          MWBsetScanningRect: null,
          MWBsetScanningRect_arguments: [
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          MWBgetScanningRect: null,
          MWBgetScanningRect_arguments: ["number"],
          MWBsetLevel: null,
          MWBsetLevel_arguments: ["number"],
          MWBsetInterfaceOrientation: null,
          MWBsetInterfaceOrientation_arguments: [],
          MWBsetOverlayMode: function (e) {
            _.global.overlay.mode = "number" == typeof e ? e : 1
          },
          MWBsetOverlayMode_arguments: ["number"],
          MWBsetBlinkingLineVisible: function (e) {
            "boolean" == typeof e &&
              (_.global.overlay.lineColor = "rgba(255, 0, 0, 1.0)")
          },
          MWBsetBlinkingLineVisible_arguments: ["boolean"],
          MWBsetPauseMode: function (e) {
            _.global.overlay.pauseMode = "number" == typeof e ? e : 2
          },
          MWBsetPauseMode_arguments: ["number"],
          MWBenableHiRes: function (e) {
            if ("boolean" == typeof e || "number" == typeof e) {
              let t = Number(e)
              ;(t = "number" == typeof e && (t < 0 || t > 2) ? i.CamRes_HD : t),
                (_.gui_accessible.cameraResolution.runtime_value =
                  _.gui_accessible.cameraResolution.initial_value =
                    e)
              let n = _.gui_accessible.cameraResolution.values[t]
              p.constraints_init(n[0], n[1], null)
            }
          },
          MWBenableHiRes_arguments: ["boolean"],
          MWBenableFlash: function (e) {
            "boolean" == typeof e && (_.global.fullscreenButtons.hideFlash = !e)
          },
          MWBenableFlash_arguments: ["boolean"],
          MWBturnFlashOn: function (e) {
            "boolean" == typeof e && (p.torchState = e)
          },
          MWBturnFlashOn_arguments: ["boolean"],
          MWBtoggleFlash: function () {
            p.flashToggler(!0)
          },
          MWBtoggleFlash_arguments: [],
          MWBenableZoom: function (e) {
            "boolean" == typeof e && (_.global.fullscreenButtons.hideZoom = !e)
          },
          MWBenableZoom_arguments: ["boolean"],
          MWBsetZoomLevel: function (e) {
            "number" == typeof e && e >= 0 && e <= 2 && (p.zoomLevel = e)
          },
          MWBsetZoomLevel_arguments: ["number"],
          MWBtoggleZoom: function () {
            p.zoomLooper()
          },
          MWBtoggleZoom_arguments: [],
          MWBenableClose: function (e) {
            "boolean" == typeof e &&
              (_.global.fullscreenButtons.enableClose_setting = e)
          },
          MWBenableClose_arguments: ["boolean"],
          MWBsetMaxThreads: null,
          MWBsetMaxThreads_arguments: ["number"],
          MWBsetCustomParam: null,
          MWBsetCustomParam_arguments: ["number", "number"],
          MWBcloseScannerOnDecode: function (e) {
            "boolean" == typeof e &&
              ((_.gui_accessible.continuous.runtime_value =
                _.gui_accessible.continuous.initial_value =
                  !e),
              f.set_Continuous(!e))
          },
          MWBcloseScannerOnDecode_arguments: ["boolean"],
          MWBresumeScanning: function () {
            ;(f.PAUSE_DECODING = !1),
              2 == _.global.overlay.pauseMode
                ? m.toggleBlinkingLines()
                : 1 == _.global.overlay.pauseMode && m.drawPauseRects()
          },
          MWBresumeScanning_arguments: [],
          MWBcloseScanner: function () {
            f.destroyPreview()
          },
          MWBcloseScanner_arguments: [],
          MWBuse60fps: null,
          MWBuse60fps_arguments: ["boolean"],
          MWBscanFrame_ext: function (e, t) {
            {
              var n = e.data,
                i = n.length * n.BYTES_PER_ELEMENT,
                o = v._malloc(i)
              v.HEAPU8.set(n, o)
              var r
              let s = 0
              r = v.cwrap("scanFrame", "string", [
                "number",
                "number",
                "number",
                "number",
              ])(o, e.width, e.height, s)
              var a = 0 == s ? JSON.parse(r) : r
              "function" == typeof t
                ? a && "No MWResult." != a.type
                  ? t(a)
                  : t(m.helpers.otherResult("No barcode found.", "NoResult"))
                : u && console.log(a),
                v._free(o),
                (o = null),
                v._free(r)
            }
          },
          MWBscanImage: function (e, t) {
            ;(e = "string" == typeof e ? e : ""),
              m.helpers.reset_Decoder(),
              A(),
              u && console.log("about to scan image: " + e)
            var n = document.createElement("canvas"),
              i = document.createElement("img")
            ;(i.src = e),
              (i.onload = function () {
                ;(n.width = i.width + 40), (n.height = i.height + 40)
                var e = n.getContext("2d")
                ;(e.fillStyle = "rgba(255, 255, 255, 1.0)"),
                  e.fillRect(0, 0, n.width, n.height),
                  e.drawImage(
                    i,
                    0,
                    0,
                    i.width,
                    i.height,
                    20,
                    20,
                    i.width,
                    i.height
                  )
                var r = e.getImageData(0, 0, n.width, n.height)
                o.MWBscanFrame_ext(r, t),
                  e.clearRect(0, 0, n.width, n.height),
                  (n.width = 0),
                  (n.height = 0)
              })
          },
          MWBscanImage_arguments: ["string"],
          MWBscanFrame: function (e, t, n) {
            var i, r
            if ("string" == typeof t && "ImageData" === t) i = !0
            else {
              if ("string" != typeof t || "dataURL" !== t) return null
              i = !1
            }
            if ((m.helpers.reset_Decoder(), A(), !1 === i)) {
              if (!1 === e.startsWith("data:image")) return null
              var a = document.createElement("canvas"),
                s = a.getContext("2d"),
                l = new Image()
              ;(l.onload = function () {
                ;(a.width = l.width + 0),
                  (a.height = l.height + 0),
                  (s.fillStyle = "rgba(255, 255, 255, 1.0)"),
                  s.fillRect(0, 0, a.width, a.height),
                  s.drawImage(
                    l,
                    0,
                    0,
                    l.width,
                    l.height,
                    0,
                    0,
                    l.width,
                    l.height
                  ),
                  (r = s.getImageData(0, 0, a.width, a.height)),
                  o.MWBscanFrame_ext(r, n),
                  s.clearRect(0, 0, a.width, a.height),
                  (a.width = 0),
                  (a.height = 0)
              }),
                (l.src = e)
            } else (r = e), o.MWBscanFrame_ext(r, n)
          },
          MWBscanFrame_arguments: ["object|string", "string"],
          MWBsetParam: null,
          MWBsetParam_arguments: ["number", "number", "number"],
          MWBtogglePauseResume: function () {
            ;(f.PAUSE_DECODING = !f.PAUSE_DECODING),
              2 == _.global.overlay.pauseMode
                ? m.toggleBlinkingLines()
                : 1 == _.global.overlay.pauseMode && m.drawPauseRects()
          },
          MWBtogglePauseResume_arguments: [],
          MWBduplicateCodeDelay: null,
          MWBduplicateCodeDelay_arguments: ["number"],
          MWBuseAutoRect: null,
          MWBuseAutoRect_arguments: [],
          MWBuseFrontCamera: function (e) {
            "boolean" == typeof e &&
              ((_.gui_accessible.frontCamera.runtime_value =
                _.gui_accessible.frontCamera.initial_value =
                  e),
              p.constraints_init(null, null, e))
          },
          MWBuseFrontCamera_arguments: ["boolean"],
          MWBsetActiveParser: null,
          MWBsetActiveParser_arguments: ["number"],
          MWBresizePartialScanner: function (e, t, n, i) {
            f.resizePreview(e, t, n, i)
          },
          MWBresizePartialScanner_arguments: [
            "number",
            "number",
            "number",
            "number",
          ],
          MWBusePartialScanner: function (e) {
            "boolean" == typeof e &&
              ((_.gui_accessible.partialView.runtime_value =
                _.gui_accessible.partialView.initial_value =
                  e),
              e
                ? f.resizePreview.apply(null, f.partialView_XYWH.initial_value)
                : f.resizePreview(0, 0, 100, 100))
          },
          MWBusePartialScanner_arguments: ["boolean"],
          MWBsetDecoderTimeout: function (e) {
            "number" == typeof e && f.set_DecoderTimeout(e)
          },
          MWBsetDecoderTimeout_arguments: ["number"],
          MWBsetDpsLimit: function (e) {
            "number" == typeof e && f.set_DpsLimit(e)
          },
          MWBsetDpsLimit_arguments: ["number"],
        },
        r = {
          init_decoder: !1,
          valid_key: !1,
          dflt_clb: function (e) {
            "NoResult" == e.type ||
              (e &&
                e.code &&
                navigator.notification.alert(
                  e.code,
                  function () {},
                  e.type + (e.isGS1 ? " (GS1)" : ""),
                  "Close"
                ))
          },
          company_logo: "cognex_icon.png",
          company_logo_set: !1,
          company_logo_allow_cross_origin: !1,
        },
        a = function () {
          for (var e in r) r.hasOwnProperty(e) && (this[e] = r[e])
        }
      ;(a.prototype.initDecoder = function () {
        var e = this
        return new window.Promise(function (t, n) {
          if (!e.init_decoder)
            return o.MWBinitDecoder(function () {
              t("FRESH_INIT"), (e.init_decoder = !0)
            })
          t("VETERAN_INIT")
        })
      }),
        (a.prototype.getVersion = function () {
          var e = o.MWBgetVersion(),
            t = JSON.parse(e)
          return v._free(e), t
        }),
        (a.prototype.setKey = function (e) {
          var t = this
          return (
            (void 0 !== e && e) || (e = ""),
            this.valid_key
              ? new window.Promise(function (e, n) {
                  e(t.valid_key)
                })
              : new window.Promise(function (n, r) {
                  return o.MWBregisterSDK(e, function (e) {
                    u && console.log(i.REGMESSAGES[parseInt(e)]),
                      0 === parseInt(e) && (t.valid_key = !0),
                      n(t.valid_key)
                  })
                })
          )
        }),
        (a.prototype.setCallback = function (e) {
          u && console.log("setCallback called"), (this.dflt_clb = e)
        }),
        (a.prototype.setIcon = function () {
          if (g.company_logo_set) return
          u && console.log("setIcon called")
          let e = arguments.length
          e >= 1 &&
            ("string" == typeof arguments[0] &&
              (this.company_logo = arguments[0]),
            2 == e &&
              "boolean" == typeof arguments[1] &&
              (this.company_logo_allow_cross_origin = arguments[1]))
          var t = this.company_logo_allow_cross_origin,
            n = {
              MWBgetDataFromImage: function (e) {
                if ("" !== (e = "string" == typeof e ? e : "")) {
                  var n = document.createElement("canvas"),
                    i = document.createElement("img")
                  t && (i.crossOrigin = "anonymous"),
                    (i.onerror = function () {
                      u && console.log("icon image did not load")
                    }),
                    (i.src = e),
                    (i.onload = function () {
                      ;(n.width = i.width + 0), (n.height = i.height + 0)
                      var e = n.getContext("2d")
                      ;(e.fillStyle = "rgba(255, 255, 255, 1.0)"),
                        e.fillRect(0, 0, n.width, n.height),
                        e.drawImage(
                          i,
                          0,
                          0,
                          i.width,
                          i.height,
                          0,
                          0,
                          i.width,
                          i.height
                        )
                      var t = e.getImageData(0, 0, n.width, n.height).data,
                        o = t.length * t.BYTES_PER_ELEMENT,
                        r = v._malloc(o)
                      v.HEAPU8.set(t, r)
                      v.cwrap("set_Icon", "number", [
                        "number",
                        "number",
                        "number",
                      ])(r, n.width, n.height)
                      v._free(r), (r = null), (g.company_logo_set = !0)
                    })
                }
              },
            }
          try {
            n.MWBgetDataFromImage(g.company_logo)
          } catch (e) {
            u && console.log("icon_e: " + e)
          }
        }),
        (a.prototype.loadSettings = function (e) {
          u && console.log("loadSettings called!")
          return new window.Promise(function (t, n) {
            if (Array.isArray(e))
              for (var i = e.length - 1; i >= 0; i--) {
                var r = e[i]
                u && console.log(r),
                  u && console.log(r.value),
                  Array.isArray(r.value) && o[r.method].apply(null, r.value)
              }
            t(e)
          })
        }),
        (a.prototype.getConstants = function () {
          return i
        }),
        (a.prototype.getDeviceID = function () {
          return new window.Promise(function (e, t) {
            o.MWBgetDeviceID(function (t) {
              e(t)
            })
          })
        }),
        (a.prototype.getCameras = function () {
          return new window.Promise(function (e, t) {
            navigator.mediaDevices.enumerateDevices().then(async () => {
              const t = (
                await navigator.mediaDevices.enumerateDevices()
              ).filter((e) => "videoinput" === e.kind)
              ;(c = t.map((e) => ({ id: e.deviceId, label: e.label }))), e(c)
            })
          })
        }),
        (a.prototype.setCamera = function (e) {
          "string" == typeof e && (h = e)
        }),
        (a.prototype.scanImage = function () {
          var e = Array.prototype.slice.call(arguments),
            t = this.dflt_clb,
            n = e[0]
          2 == e.length && "function" == typeof e[1] && (t = e[1]),
            o.MWBscanImage(n, t)
        }),
        (a.prototype.scanFrame = function () {
          var e = Array.prototype.slice.call(arguments),
            t = this.dflt_clb,
            n = e[0],
            i = ""
          2 == e.length && "function" == typeof e[1] && (t = e[1]),
            "object" == typeof e[0] && (i = "ImageData"),
            "string" == typeof e[0] && (i = "dataURL"),
            o.MWBscanFrame(n, i, t)
        }),
        (a.prototype.startScanning = function () {
          A(), f.PAUSE_DECODING && o.MWBtogglePauseResume()
          let e,
            t,
            n,
            i,
            r,
            a = arguments.length,
            s = !0,
            l = !1
          u && console.log("argsCount"),
            u && console.log(a),
            a < 4
              ? (a >= 1 &&
                  ("function" == typeof arguments[0]
                    ? (e = arguments[0])
                    : (s = !1)),
                (l = !1))
              : (a >= 5
                  ? ("function" == typeof arguments[0]
                      ? (e = arguments[0])
                      : (s = !1),
                    "number" == typeof arguments[1]
                      ? (t = arguments[1])
                      : (s = !1),
                    "number" == typeof arguments[2]
                      ? (n = arguments[2])
                      : (s = !1),
                    "number" == typeof arguments[3]
                      ? (i = arguments[3])
                      : (s = !1),
                    "number" == typeof arguments[4]
                      ? (r = arguments[4])
                      : (s = !1))
                  : ("number" == typeof arguments[0]
                      ? (t = arguments[0])
                      : (s = !1),
                    "number" == typeof arguments[1]
                      ? (n = arguments[1])
                      : (s = !1),
                    "number" == typeof arguments[2]
                      ? (i = arguments[2])
                      : (s = !1),
                    "number" == typeof arguments[3]
                      ? (r = arguments[3])
                      : (s = !1)),
                (l = !0)),
            s
              ? (l
                  ? f.resizePreview(t, n, i, r)
                  : f.resizePreview(0, 0, 100, 100),
                f.start(e))
              : (u &&
                  console.log(
                    "error: provided arguments for startScanning don't match the expected data types"
                  ),
                f.start())
        }),
        (a.prototype.closeScanner = function () {
          o.MWBcloseScanner()
        }),
        (a.prototype.togglePauseResume = function () {
          o.MWBtogglePauseResume()
        }),
        (a.prototype.toggleFlash = function () {
          o.MWBtoggleFlash()
        }),
        (a.prototype.toggleZoom = function () {
          o.MWBtoggleZoom()
        }),
        (a.prototype.resumeScanning = function () {
          o.MWBresumeScanning()
        }),
        (a.prototype.setScannerOverlayMode = function (e) {
          o.MWBsetOverlayMode(e)
        }),
        (a.prototype.setBlinkingLineVisible = function (e) {
          o.MWBsetBlinkingLineVisible(e)
        }),
        (a.prototype.resizePartialScanner = function (e, t, n, i) {
          o.MWBresizePartialScanner(e, t, n, i)
        }),
        (a.prototype.CONSTANTS = i),
        (a.prototype.generateMethod = function (e, t) {
          return function () {
            var n = o[t + "_arguments"].length,
              i = JSON.stringify(o[t + "_arguments"])
            if (arguments.length == n) {
              for (var r = 0; r < n; r++) {
                var a = o[t + "_arguments"][r]
                if (typeof arguments[r] !== a)
                  return void (
                    u &&
                    console.log(
                      'error: provided "' +
                        typeof arguments[r] +
                        '" in arguments[' +
                        r +
                        "] but function " +
                        t +
                        "(" +
                        i +
                        ') takes "' +
                        a +
                        '"'
                    )
                  )
              }
              var s = []
              for (r = 0; r < n; r++) s.push("number")
              var l = v.cwrap(e + t, "number", s),
                c = l.apply(null, arguments)
              if (!(c < 0)) return c
              JSON.stringify(arguments)
              u && console.log("error: function " + t + " returned " + c)
            } else
              u &&
                console.log(
                  "error: provided " +
                    arguments.length +
                    " argument(s) but function " +
                    t +
                    "(" +
                    i +
                    ") takes " +
                    n +
                    " argument(s)"
                )
          }
        })
      const s = new Audio(
        "data:audio/mpeg;base64,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"
      )
      var l
      ;(a.prototype.beep = function () {
        ;(s.volume = 1),
          (s.muted = !1),
          s.pause(),
          (s.currentTime = 0),
          s.play()
      }),
        (l = function () {
          "use strict"
          var e = (function () {
              if ("undefined" != typeof Map) return Map
              function e(e, t) {
                var n = -1
                return (
                  e.some(function (e, i) {
                    return e[0] === t && ((n = i), !0)
                  }),
                  n
                )
              }
              return (function () {
                function t() {
                  this.__entries__ = []
                }
                var n = { size: { configurable: !0 } }
                return (
                  (n.size.get = function () {
                    return this.__entries__.length
                  }),
                  (t.prototype.get = function (t) {
                    var n = e(this.__entries__, t),
                      i = this.__entries__[n]
                    return i && i[1]
                  }),
                  (t.prototype.set = function (t, n) {
                    var i = e(this.__entries__, t)
                    ~i
                      ? (this.__entries__[i][1] = n)
                      : this.__entries__.push([t, n])
                  }),
                  (t.prototype.delete = function (t) {
                    var n = this.__entries__,
                      i = e(n, t)
                    ~i && n.splice(i, 1)
                  }),
                  (t.prototype.has = function (t) {
                    return !!~e(this.__entries__, t)
                  }),
                  (t.prototype.clear = function () {
                    this.__entries__.splice(0)
                  }),
                  (t.prototype.forEach = function (e, t) {
                    void 0 === t && (t = null)
                    for (
                      var n = 0, i = this.__entries__;
                      n < i.length;
                      n += 1
                    ) {
                      var o = i[n]
                      e.call(t, o[1], o[0])
                    }
                  }),
                  Object.defineProperties(t.prototype, n),
                  t
                )
              })()
            })(),
            n =
              "undefined" != typeof window &&
              "undefined" != typeof document &&
              window.document === document,
            i =
              void 0 !== t && t.Math === Math
                ? t
                : "undefined" != typeof self && self.Math === Math
                ? self
                : "undefined" != typeof window && window.Math === Math
                ? window
                : Function("return this")(),
            o =
              "function" == typeof requestAnimationFrame
                ? requestAnimationFrame.bind(i)
                : function (e) {
                    return setTimeout(function () {
                      return e(Date.now())
                    }, 1e3 / 60)
                  },
            r = [
              "top",
              "right",
              "bottom",
              "left",
              "width",
              "height",
              "size",
              "weight",
            ],
            a = "undefined" != typeof MutationObserver,
            s = function () {
              ;(this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = (function (e, t) {
                  var n = !1,
                    i = !1,
                    r = 0
                  function a() {
                    n && ((n = !1), e()), i && l()
                  }
                  function s() {
                    o(a)
                  }
                  function l() {
                    var e = Date.now()
                    if (n) {
                      if (e - r < 2) return
                      i = !0
                    } else (n = !0), (i = !1), setTimeout(s, t)
                    r = e
                  }
                  return l
                })(this.refresh.bind(this), 20))
            }
          ;(s.prototype.addObserver = function (e) {
            ~this.observers_.indexOf(e) || this.observers_.push(e),
              this.connected_ || this.connect_()
          }),
            (s.prototype.removeObserver = function (e) {
              var t = this.observers_,
                n = t.indexOf(e)
              ~n && t.splice(n, 1),
                !t.length && this.connected_ && this.disconnect_()
            }),
            (s.prototype.refresh = function () {
              this.updateObservers_() && this.refresh()
            }),
            (s.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive()
              })
              return (
                e.forEach(function (e) {
                  return e.broadcastActive()
                }),
                e.length > 0
              )
            }),
            (s.prototype.connect_ = function () {
              n &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                a
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0))
            }),
            (s.prototype.disconnect_ = function () {
              n &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1))
            }),
            (s.prototype.onTransitionEnd_ = function (e) {
              var t = e.propertyName
              void 0 === t && (t = ""),
                r.some(function (e) {
                  return !!~t.indexOf(e)
                }) && this.refresh()
            }),
            (s.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new s()), this.instance_
              )
            }),
            (s.instance_ = null)
          var l = function (e, t) {
              for (var n = 0, i = Object.keys(t); n < i.length; n += 1) {
                var o = i[n]
                Object.defineProperty(e, o, {
                  value: t[o],
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                })
              }
              return e
            },
            c = function (e) {
              return (e && e.ownerDocument && e.ownerDocument.defaultView) || i
            },
            u = f(0, 0, 0, 0)
          function d(e) {
            return parseFloat(e) || 0
          }
          function h(e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
              t[n] = arguments[n + 1]
            return t.reduce(function (t, n) {
              return t + d(e["border-" + n + "-width"])
            }, 0)
          }
          function p(e) {
            var t = e.clientWidth,
              n = e.clientHeight
            if (!t && !n) return u
            var i = c(e).getComputedStyle(e),
              o = (function (e) {
                for (
                  var t = {}, n = 0, i = ["top", "right", "bottom", "left"];
                  n < i.length;
                  n += 1
                ) {
                  var o = i[n],
                    r = e["padding-" + o]
                  t[o] = d(r)
                }
                return t
              })(i),
              r = o.left + o.right,
              a = o.top + o.bottom,
              s = d(i.width),
              l = d(i.height)
            if (
              ("border-box" === i.boxSizing &&
                (Math.round(s + r) !== t && (s -= h(i, "left", "right") + r),
                Math.round(l + a) !== n && (l -= h(i, "top", "bottom") + a)),
              !(function (e) {
                return e === c(e).document.documentElement
              })(e))
            ) {
              var p = Math.round(s + r) - t,
                _ = Math.round(l + a) - n
              1 !== Math.abs(p) && (s -= p), 1 !== Math.abs(_) && (l -= _)
            }
            return f(o.left, o.top, s, l)
          }
          var _ =
            "undefined" != typeof SVGGraphicsElement
              ? function (e) {
                  return e instanceof c(e).SVGGraphicsElement
                }
              : function (e) {
                  return (
                    e instanceof c(e).SVGElement &&
                    "function" == typeof e.getBBox
                  )
                }
          function m(e) {
            return n
              ? _(e)
                ? (function (e) {
                    var t = e.getBBox()
                    return f(0, 0, t.width, t.height)
                  })(e)
                : p(e)
              : u
          }
          function f(e, t, n, i) {
            return { x: e, y: t, width: n, height: i }
          }
          var g = function (e) {
            ;(this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = f(0, 0, 0, 0)),
              (this.target = e)
          }
          ;(g.prototype.isActive = function () {
            var e = m(this.target)
            return (
              (this.contentRect_ = e),
              e.width !== this.broadcastWidth ||
                e.height !== this.broadcastHeight
            )
          }),
            (g.prototype.broadcastRect = function () {
              var e = this.contentRect_
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              )
            })
          var q = function (e, t) {
              var n,
                i,
                o,
                r,
                a,
                s,
                c,
                u =
                  ((i = (n = t).x),
                  (o = n.y),
                  (r = n.width),
                  (a = n.height),
                  (s =
                    "undefined" != typeof DOMRectReadOnly
                      ? DOMRectReadOnly
                      : Object),
                  (c = Object.create(s.prototype)),
                  l(c, {
                    x: i,
                    y: o,
                    width: r,
                    height: a,
                    top: o,
                    right: i + r,
                    bottom: a + o,
                    left: i,
                  }),
                  c)
              l(this, { target: e, contentRect: u })
            },
            v = function (t, n, i) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new e()),
                "function" != typeof t)
              )
                throw new TypeError(
                  "The callback provided as parameter 1 is not a function."
                )
              ;(this.callback_ = t),
                (this.controller_ = n),
                (this.callbackCtx_ = i)
            }
          ;(v.prototype.observe = function (e) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.")
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(e instanceof c(e).Element))
                throw new TypeError('parameter 1 is not of type "Element".')
              var t = this.observations_
              t.has(e) ||
                (t.set(e, new g(e)),
                this.controller_.addObserver(this),
                this.controller_.refresh())
            }
          }),
            (v.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.")
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof c(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".')
                var t = this.observations_
                t.has(e) &&
                  (t.delete(e), t.size || this.controller_.removeObserver(this))
              }
            }),
            (v.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this)
            }),
            (v.prototype.gatherActive = function () {
              var e = this
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t)
                })
            }),
            (v.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new q(e.target, e.broadcastRect())
                  })
                this.callback_.call(e, t, e), this.clearActive()
              }
            }),
            (v.prototype.clearActive = function () {
              this.activeObservations_.splice(0)
            }),
            (v.prototype.hasActive = function () {
              return this.activeObservations_.length > 0
            })
          var A = "undefined" != typeof WeakMap ? new WeakMap() : new e(),
            y = function (e) {
              if (!(this instanceof y))
                throw new TypeError("Cannot call a class as a function.")
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.")
              var t = s.getInstance(),
                n = new v(e, t, this)
              A.set(this, n)
            }
          return (
            ["observe", "unobserve", "disconnect"].forEach(function (e) {
              y.prototype[e] = function () {
                return (t = A.get(this))[e].apply(t, arguments)
                var t
              }
            }),
            void 0 !== i.ResizeObserver
              ? i.ResizeObserver
              : ((i.ResizeObserver = y), y)
          )
        }),
        (window.ResizeObserverPF = l())
      var c,
        u = !1,
        d = {
          previewFrame_Style: document.createElement("link"),
          previewFrame_Style_init: function () {},
          previewFrame: document.createElement("div"),
          previewFrame_init: function () {
            ;(this.previewFrame.id = "root-div-inview"),
              (this.previewFrame.className = "barcode-scanner-wrap-inview")
          },
          proxyWrapPreview: document.createElement("div"),
          proxyWrapPreview_init: function () {
            ;(this.proxyWrapPreview.className = "proxy-wrap-of-preview-inview"),
              (this.proxyWrapPreview.style.cssText =
                "width: 100%; height: 100%;")
          },
          preview: document.createElement("video"),
          preview_init: function (e) {
            ;(this.preview.id = "video-layer"),
              (this.preview.className = "barcode-scanner-preview-inview")
          },
          overlay: document.createElement("canvas"),
          overlay_init: function () {
            ;(this.overlay.id = "canvas-overlay"),
              (this.overlay.className = "shadow-overlay")
          },
          lineV: document.createElement("canvas"),
          lineV_init: function () {
            ;(this.lineV.id = "canvas-line-v"),
              (this.lineV.className = "blinking-line")
          },
          lineH: document.createElement("canvas"),
          lineH_init: function () {
            ;(this.lineH.id = "canvas-line-h"),
              (this.lineH.className = "blinking-line")
          },
          lines: { v: this.lineV, h: this.lineH },
          lines_Style_init: function (e) {
            ;(this.lineV.style.backgroundColor =
              this.lineH.style.backgroundColor =
                e.lineColor),
              (this.lineV.style.animation = this.lineH.style.animation =
                "fadeColor " + e.blinkingRate + "ms infinite")
          },
          pause: document.createElement("canvas"),
          pause_init: function () {
            ;(this.pause.id = "canvas-pause"),
              (this.pause.className = "shadow-overlay")
          },
          locate: document.createElement("canvas"),
          locate_init: function () {
            ;(this.locate.id = "canvas-locate"),
              (this.locate.className = "shadow-overlay")
          },
          flash: document.createElement("div"),
          flash_init: function (e, t) {
            this.flash.id = "flash-button"
            var n = document.createElement("img")
            ;(n.id = "flash-image"),
              (n.src = e.flash_icons[0]),
              e.hideFlash && (this.flash.style.display = "none"),
              this.flash.appendChild(n),
              this.flash.addEventListener("click", t, !1),
              (this.flash.style.position = "fixed"),
              (this.flash.style.cssFloat = "none")
          },
          zoom: document.createElement("div"),
          zoom_init: function (e, t) {
            this.zoom.id = "zoom-button"
            var n = document.createElement("img")
            ;(n.id = "zoom-image"),
              (n.src = e.zoom_icons[0]),
              e.hideZoom && (this.zoom.style.display = "none"),
              this.zoom.appendChild(n),
              this.zoom.addEventListener("click", t, !1),
              (this.zoom.style.position = "fixed"),
              (this.zoom.style.cssFloat = "none")
          },
          isPreviewFullscreen: function () {
            let e = _.global.partialView
            return 0 == e.x && 0 == e.y && 100 == e.width && 100 == e.height
          },
          updateClose_state: function () {
            let e = _.global.fullscreenButtons,
              t = !this.isPreviewFullscreen()
            e.hideClose = !!t && !e.enableClose_setting
          },
          close: document.createElement("div"),
          close_init: function (e, t) {
            this.close.id = "close-button"
            var n = document.createElement("img")
            ;(n.id = "close-image"),
              (n.src = e.close_icons[0]),
              this.updateClose_state(),
              e.hideClose && (this.close.style.display = "none"),
              this.close.appendChild(n),
              this.close.addEventListener("click", t, !1),
              (this.close.style.position = "fixed"),
              (this.close.style.cssFloat = "none")
          },
          ready_to_use_ResizeObs: !1,
          resizeObs: new ResizeObserverPF((e) => {
            u && console.log("Container was resized"),
              d.ready_to_use_ResizeObs && m.resizePartialScannerView(_, d)
          }),
          updated_XYWH_forContainer: !1,
          preparePreviewForContainer: function () {
            ;(this.previewFrame.style.position = "relative"),
              (_.global.partialView.x = 0),
              (_.global.partialView.y = 0),
              (_.global.partialView.width = 100),
              (_.global.partialView.height = 100),
              (this.updated_XYWH_forContainer = !0),
              (this.flash.style.position = "absolute"),
              (this.zoom.style.position = "absolute"),
              (this.close.style.position = "absolute"),
              (this.lineV.style.position = "absolute"),
              (this.lineH.style.position = "absolute"),
              (this.overlay.style.position = "relative"),
              (this.pause.style.position = "relative"),
              (this.locate.style.position = "relative"),
              (this.preview.playsInline = !0),
              (this.overlay.style.top = "-100%"),
              (this.pause.style.top = "-200%"),
              (this.locate.style.top = "-300%")
          },
          setTop_forContainerElements: function (e) {
            let t = Array.from(
                _.global.container.getElementsByClassName("shadow-overlay")
              ).indexOf(e),
              n = t + 1
            e.style.top =
              "-" +
              (n * this.previewFrame.offsetHeight +
                4 * t -
                (this.previewFrame.offsetHeight * _.global.partialView.y) /
                  100) +
              "px"
          },
          preparePreviewForDynamic: function () {
            ;(this.previewFrame.style.position = "fixed"),
              (this.flash.style.position = "fixed"),
              (this.zoom.style.position = "fixed"),
              (this.close.style.position = "fixed"),
              (this.lineV.style.position = "fixed"),
              (this.lineH.style.position = "fixed"),
              (this.overlay.style.position = "fixed"),
              (this.pause.style.position = "fixed"),
              (this.locate.style.position = "fixed"),
              (this.preview.playsInline = !0),
              (this.overlay.style.top = "0%"),
              (this.pause.style.top = "0%"),
              (this.locate.style.top = "0%")
          },
          setTop_forDynamicElements: function (e) {
            e.style.top = this.previewFrame.style.top
          },
          preparePreviewForPreviewType: function () {
            "container" == _.global.previewType
              ? this.preparePreviewForContainer()
              : this.preparePreviewForDynamic()
          },
          setTop_forPreviewTypeElements: function (e) {
            "container" == _.global.previewType
              ? this.setTop_forContainerElements(e)
              : this.setTop_forDynamicElements(e)
          },
          disappearElements: function (e) {
            ;(this.overlay.style.display = "none"),
              (this.lineV.style.display = "none"),
              (this.lineH.style.display = "none"),
              (this.pause.style.display = "none"),
              (this.locate.style.display = "none"),
              (this.flash.style.display = "none"),
              (this.zoom.style.display = "none"),
              (this.close.style.display = "none"),
              (this.previewFrame.style.visibility = "hidden")
          },
          revealElements: function () {
            ;(this.overlay.style.display = "initial"),
              (this.lineV.style.display = "none"),
              (this.lineH.style.display = "none"),
              (this.pause.style.display = "none"),
              (this.locate.style.display = "initial"),
              (this.flash.style.display = p.flash.supported
                ? _.global.fullscreenButtons.hideFlash
                  ? "none"
                  : "initial"
                : "none"),
              (this.zoom.style.display = p.zoom.supported
                ? _.global.fullscreenButtons.hideZoom
                  ? "none"
                  : "initial"
                : "none"),
              this.updateClose_state(),
              (this.close.style.display = _.global.fullscreenButtons.hideClose
                ? "none"
                : "initial"),
              setTimeout(function () {
                if (
                  "none" == d.flash.style.display ||
                  "none" == d.zoom.style.display
                ) {
                  let e = d.zoom,
                    t = d.overlay
                  ;(d.flash.style.display = p.flash.supported
                    ? _.global.fullscreenButtons.hideFlash
                      ? "none"
                      : "initial"
                    : "none"),
                    (d.zoom.style.display = p.zoom.supported
                      ? _.global.fullscreenButtons.hideZoom
                        ? "none"
                        : "initial"
                      : "none"),
                    (e.style.left =
                      t.offsetWidth + t.offsetLeft - e.offsetWidth + "px")
                }
              }, 0),
              (this.previewFrame.style.visibility = "visible")
          },
          previewFrameParent: null,
          addPreview: function (e) {
            ;[this.proxyWrapPreview].forEach(function (e) {
              d.previewFrame.appendChild(e)
            })
            var t =
              null != e &&
              null != e &&
              "object" == typeof e &&
              "DIV" === e.tagName
            ;(this.previewFrameParent = t ? e : document.body),
              (_.global.previewType = t ? "container" : "dynamic"),
              this.previewFrameParent.appendChild(this.previewFrame),
              u &&
                (console.log(this.previewFrame),
                console.log("neposredno po add:"),
                console.log(this.previewFrame.offsetHeight)),
              this.previewFrameParent.appendChild(this.overlay),
              this.previewFrameParent.appendChild(this.lineV),
              this.previewFrameParent.appendChild(this.lineH),
              this.previewFrameParent.appendChild(this.pause),
              this.previewFrameParent.appendChild(this.locate),
              this.previewFrameParent.appendChild(this.flash),
              this.previewFrameParent.appendChild(this.zoom),
              this.previewFrameParent.appendChild(this.close)
          },
          destroyPreview: async function (e, t) {
            ;(f.DECODER_ACTIVE = !1),
              null != p.scanner_timeout &&
                (clearTimeout(p.scanner_timeout), (p.scanner_timeout = null)),
              this.disappearElements(),
              setTimeout(function () {
                null != d.preview.srcObject && d.preview.play(),
                  null != t && t.stop(),
                  (e.videoTrack = null),
                  (e.mediaStream = null),
                  e.torchState &&
                    ((e.torchState = !1),
                    (d.flash.getElementsByTagName("img")[0].src =
                      _.global.fullscreenButtons.flash_icons[0])),
                  window.removeEventListener(
                    "resize",
                    m.eventHandlers.resize,
                    !1
                  ),
                  "undefined" === m.helpers._Screen_Orientation
                    ? window.removeEventListener(
                        "resize",
                        m.helpers.orientationChangeHandler,
                        !1
                      )
                    : screen.orientation.removeEventListener(
                        "change",
                        m.helpers.orientationChangeHandler
                      ),
                  d.resizeObs.disconnect(),
                  (d.ready_to_use_ResizeObs = !1),
                  d.preview.removeEventListener(
                    "loadeddata",
                    e.videoStreamData_handler_wrapper
                  )
                var n = d
                n.previewFrameParent.removeChild(n.close),
                  n.previewFrameParent.removeChild(n.zoom),
                  n.previewFrameParent.removeChild(n.flash),
                  n.previewFrameParent.removeChild(n.locate),
                  n.previewFrameParent.removeChild(n.pause),
                  n.previewFrameParent.removeChild(n.lineH),
                  n.previewFrameParent.removeChild(n.lineV),
                  n.previewFrameParent.removeChild(n.overlay),
                  n.previewFrameParent.removeChild(n.previewFrame)
              }, 128)
          },
          already_inited: !1,
          main_createPreview: function (e, t) {
            u && console.log("createPreview "),
              this.already_inited ||
                (this.previewFrame_Style_init(), this.previewFrame_init())
            var n = e.global.partialView,
              i = e.runtime.viewfinderOnScreenView
            if (
              (t.anchorView_toOrientation(
                this.previewFrame,
                n.x,
                n.y,
                n.width,
                n.height,
                n.orientation,
                i.orientation
              ),
              !this.already_inited)
            ) {
              this.proxyWrapPreview_init(),
                this.preview_init(function () {}),
                this.overlay_init(),
                this.proxyWrapPreview.appendChild(this.preview)
              var o = e.global.blinkingLines
              this.lineV_init(),
                this.lineH_init(),
                (o.v = this.lineV),
                (o.h = this.lineH)
              var r = e.global.overlay
              this.lines_Style_init(r), this.pause_init(), this.locate_init()
              var a = e.global.fullscreenButtons
              this.flash_init(a, p.flashToggler),
                this.zoom_init(a, p.zoomLooper),
                this.close_init(a, p.closeHandler),
                (this.already_inited = !0)
            }
            this.disappearElements(!0),
              this.addPreview(e.global.container),
              this.preparePreviewForPreviewType()
          },
        },
        h = "",
        p = {
          supported: !1,
          browser_supported_constraints: null,
          runtime_settings_videoTrack: null,
          hardware_capabilities_ranges_videoTrack: null,
          _ImageCapture:
            "undefined" == typeof ImageCapture ? "undefined" : ImageCapture,
          imageCapture: null,
          get_videoTrack_capabilities_timeout: 200,
          mediaStream: null,
          videoTrack: null,
          frameWidth: { min: 640, ideal: 1280, max: 1920 },
          frameHeight: { min: 480, ideal: 720, max: 1080 },
          frontCamera: !1,
          constraints: {
            video: {
              width: null,
              height: null,
              frameRate: 30,
              facingMode: "",
              focusMode: "continuous",
            },
          },
          constraints_init: function (e, t, n) {
            "number" == typeof e && (this.frameWidth.ideal = e),
              "number" == typeof t && (this.frameHeight.ideal = t),
              "boolean" == typeof n && (this.frontCamera = n),
              (this.constraints.video.width = this.frameWidth),
              (this.constraints.video.height = this.frameHeight),
              "" === h
                ? (this.constraints.video.facingMode = this.frontCamera
                    ? "user"
                    : "environment")
                : (this.constraints.video.deviceId = { exact: h }),
              (_.global.hardwareCameraResolution.width = this.frameWidth.ideal),
              (_.global.hardwareCameraResolution.height =
                this.frameHeight.ideal),
              u && (console.log("constraints:"), console.log(this.constraints))
          },
          flash: { supported: !1, ready: !1 },
          zoom: { supported: !1, ready: !1 },
          torchState: !1,
          zoomLevels: [],
          zoomLevel: 0,
          imageCapture_options: { fillLightMode: "flash" },
          flashToggler: function (e) {
            let t = p.flash,
              n = p.torchState,
              i = p.imageCapture,
              o = p.imageCapture_options,
              r = p.videoTrack
            if (
              (u && t.supported && console.log("Torch is supported."),
              u && console.log("the way it works is: lets find out"),
              u &&
                console.log(
                  "the way it works is: " + t.supported + " and " + t.ready
                ),
              t.supported && t.ready)
            ) {
              e && (n = !n), u && console.log("the way torch is: " + n)
              try {
                i.setOptions(o).then(() => {
                  r.applyConstraints({ advanced: [{ torch: n }] })
                })
              } catch (e) {
                u &&
                  (console.log("imageCapture.setOptions is NOT supported"),
                  console.log(e)),
                  p.browser_supported_constraints.torch &&
                    r
                      .applyConstraints({ advanced: [{ torch: n }] })
                      .catch((e) => console.log(e))
              }
              ;(d.flash.getElementsByTagName("img")[0].src =
                _.global.fullscreenButtons.flash_icons[Number(n)]),
                (p.torchState = n)
            }
          },
          zoomLooper: function () {
            let e = p.zoom,
              t = p.zoomLevel,
              n = p.zoomLevels,
              i = p.videoTrack
            u && e.supported && console.log("Zoom is supported."),
              e.supported &&
                e.ready &&
                (t++,
                (t %= 3),
                i.applyConstraints({ advanced: [{ zoom: n[t] }] }),
                u && console.log("req zoomLevel: " + n[t]),
                setTimeout(function () {
                  u && console.log("new zoomLevel: " + i.getSettings().zoom)
                }, 128),
                (p.zoomLevel = t))
          },
          closeHandler: function () {
            f.destroyPreview()
          },
          handleError: function (e) {
            u &&
              console.log(
                "Error " +
                  e.name +
                  " in constraint " +
                  e.constraint +
                  ": " +
                  e.message
              ),
              f.destroyPreview(!1),
              "function" == typeof f.result_callback &&
                f.result_callback(
                  m.helpers.otherResult(
                    _.runtime.errorDescriptions[e.name].userFriendly,
                    _.runtime.errorDescriptions[e.name],
                    "Error"
                  )
                )
          },
          scanner_timeout: null,
          videoStreamData_handler_wrapper: null,
          init_values: function (e, t, n) {
            if (
              (m.helpers.CreateErrorDescriptions(),
              (this.supported =
                "object" == typeof navigator.mediaDevices &&
                "function" == typeof navigator.mediaDevices.getUserMedia),
              !this.supported)
            )
              return (
                "http:" == location.protocol &&
                  p.handleError({ name: "ProtocolError" }),
                "undefined"
              )
            ;(this.browser_supported_constraints =
              navigator.mediaDevices.getSupportedConstraints()),
              u &&
                (console.log("capabilities / browser_supported_constraints:"),
                console.log(this.browser_supported_constraints)),
              this.constraints_init(),
              navigator.mediaDevices
                .getUserMedia(this.constraints)
                .then(function (i) {
                  let o = p
                  ;(o.mediaStream = i),
                    (i.oninactive = function () {
                      "function" == typeof n && n()
                    })
                  const r = i.getVideoTracks()[0]
                  if (
                    ((o.videoTrack = r),
                    (o.runtime_settings_videoTrack = r.getSettings()),
                    u &&
                      (console.log(
                        "VT capabilities / runtime_settings_videoTrack:"
                      ),
                      console.log(o.runtime_settings_videoTrack)),
                    void 0 === o.runtime_settings_videoTrack.width ||
                      void 0 === o.runtime_settings_videoTrack.height)
                  )
                    throw "Properties width and height in VT capabilities aren't available!"
                  function a() {
                    let e = null,
                      t = !1
                    try {
                      const n = r.getCapabilities()
                      ;(e = o.hardware_capabilities_ranges_videoTrack = n),
                        (t = !0)
                    } catch (t) {
                      u &&
                        (console.log("track.getCapabilities not supported"),
                        console.log(t)),
                        (e = o.browser_supported_constraints)
                    }
                    if (
                      (e.torch
                        ? (o.flash.supported = !0)
                        : (u && console.log("Torch is NOT supported."),
                          (d.flash.style.display = "none")),
                      !e.zoom)
                    )
                      return (
                        u && console.log("Zoom is NOT supported."),
                        void (d.zoom.style.display = "none")
                      )
                    if (((o.zoom.supported = !0), t)) {
                      const t = e.zoom.min,
                        n = e.zoom.max,
                        i = e.zoom.step,
                        r = m.helpers.get_number_of_Digits(n),
                        a = n - Math.pow(10, r - 2),
                        s = t + (a - t) / 2
                      ;(o.zoomLevels = [t, s, a]),
                        u && console.log("this_root.zoomLevels"),
                        u && console.log(o.zoomLevels),
                        u && console.log("step: " + i)
                    } else o.zoomLevels = [100, 242, 384]
                    ;(o.flash.ready = !0), (o.zoom.ready = !0)
                    let n = p.zoom,
                      i = p.zoomLevel,
                      a = p.zoomLevels,
                      s = p.videoTrack
                    u && n.supported && console.log("Zoom is supported."),
                      n.supported &&
                        n.ready &&
                        s.applyConstraints({ advanced: [{ zoom: a[i] }] })
                  }
                  if (
                    (u &&
                      console.log(
                        "HERE WH " +
                          o.runtime_settings_videoTrack.width +
                          " " +
                          o.runtime_settings_videoTrack.height
                      ),
                    (_.global.hardwareCameraResolution.width =
                      o.runtime_settings_videoTrack.width),
                    (_.global.hardwareCameraResolution.height =
                      o.runtime_settings_videoTrack.height),
                    "undefined" === p._ImageCapture)
                  )
                    u && console.log("there is no ImageCapture api"),
                      setTimeout(function () {
                        a()
                      }, o.get_videoTrack_capabilities_timeout)
                  else {
                    const e = new p._ImageCapture(r)
                    o.imageCapture = e
                    e.getPhotoCapabilities().then(() => {
                      a(), p.flash.supported && (p.flash.ready = !0)
                    })
                  }
                  "function" == typeof t &&
                    ((o.videoStreamData_handler_wrapper = function () {
                      m.eventHandlers.loadeddata(), t(o.mediaStream)
                    }),
                    e.addEventListener(
                      "loadeddata",
                      o.videoStreamData_handler_wrapper
                    )),
                    (e.srcObject = o.mediaStream),
                    (e.onloadedmetadata = function (t) {
                      u && console.log("onloadedmetadata, calling play"),
                        u && console.log("video muted: "),
                        u && console.log(this.muted),
                        (this.muted = !0),
                        u && console.log(this.muted),
                        u && console.log("calling play again 1"),
                        this.play().catch(function (t) {
                          e.setAttribute("playsinline", "playsinline"),
                            u && console.log("calling play again 2"),
                            m.helpers.safari_video_click_workaround(e)
                        }),
                        o.flashToggler(!1),
                        0 != f.decoder_timeout &&
                          (p.scanner_timeout = setTimeout(async function () {
                            ;(f.DECODER_ACTIVE = !1), (p.scanner_timeout = null)
                            const e = (e) =>
                              new Promise((t) => setTimeout(t, e))
                            await e(100),
                              f.destroyPreview(),
                              await e(128),
                              await e(100),
                              alert("Scanner timeout")
                          }, 1e3 * f.decoder_timeout))
                    })
                })
                .catch(function (e) {
                  p.handleError(e)
                })
          },
        }
      var _ = {
          global: {
            partialView: {
              x: 5,
              y: 5,
              width: 90,
              height: 54.73,
              orientation: 0,
            },
            blinkingLines: { v: null, h: null },
            overlay: {
              mode: 1,
              pauseMode: 2,
              lineColor: "rgba(255, 0, 0, 1.0)",
              locationColor: "rgba(0, 255, 0, 1.0)",
              borderWidth: 2,
              linesWidth: 1,
              blinkingRate: 500,
              locationShowTime: 500,
              locationAllPointsDraw: !0,
              useLocationLayer: !1,
              imageSrc: "./assets/overlay_mw.png",
            },
            fullscreenButtons: {
              flash: null,
              zoom: null,
              close: null,
              flash_icons: [
                "./assets/flashbuttonoff.png",
                "./assets/flashbuttonon.png",
              ],
              zoom_icons: ["./assets/zoom.png"],
              close_icons: ["./assets/reload.png"],
              hideFlash: !1,
              hideZoom: !1,
              enableClose_setting: !1,
              hideClose: !0,
            },
            hideDuringUpdate: !1,
            hardwareCameraResolution: { width: 1280, height: 720 },
            numberOfSupporedCodes: 16,
            codeMasksArray: [],
            untouchedScanningRectsArray: [],
            video: null,
            container: document.getElementById("cmbweb-preview-container"),
            previewType: "dynamic",
          },
          runtime: {
            viewfinderOnScreenView: {
              orientation: 0,
              x: 0,
              y: 0,
              width: 0,
              height: 0,
            },
            untouchedScanningRectsUnion: {
              x: 0,
              y: 0,
              width: 100,
              height: 100,
            },
            is_portrait: !1,
            operatingSystem: "",
            firstTimeUpdate: !1,
            currentOrientation: 0,
            errorDescriptions: {},
          },
          gui2api_adapter: function () {},
          gui_accessible: {
            cameraResolution: {
              values: [
                [640, 480],
                [1280, 720],
                [1920, 1080],
              ],
              default_value: !0,
              initial_value: !0,
              runtime_value: !0,
            },
            frontCamera: {
              values: [!1, !0],
              default_value: !1,
              initial_value: !1,
              runtime_value: !1,
            },
            multipleBarcodes: {
              values: [!1, !0],
              default_value: !1,
              initial_value: !1,
              runtime_value: !1,
            },
            activeCode: {
              values: null,
              default_value: 1,
              initial_value: 1,
              runtime_value: 1,
            },
            activeCodes: {
              values: null,
              default_value: [
                !0,
                !0,
                !1,
                !1,
                !0,
                !0,
                !0,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
              ],
              initial_value: [
                !0,
                !0,
                !1,
                !1,
                !0,
                !0,
                !0,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
              ],
              runtime_value: [
                !0,
                !0,
                !1,
                !1,
                !0,
                !0,
                !0,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
              ],
            },
            effortLevel: {
              values: [1, 2],
              default_value: !0,
              initial_value: 2,
              runtime_value: 2,
            },
            partialView: {
              values: [!1, !0],
              default_value: !0,
              initial_value: !0,
              runtime_value: !0,
            },
            partialView_XYWH: {
              values: null,
              default_value: [5, 5, 90, 50],
              initial_value: [5, 5, 90, 50],
              runtime_value: [5, 5, 90, 50],
            },
            partialView_Anchor: { values: null, default_value: 1 },
            continuous: {
              values: [!1, !0],
              default_value: !1,
              initial_value: !1,
              runtime_value: !1,
            },
            parser: {
              values: [0, 255],
              default_value: !0,
              initial_value: !0,
              runtime_value: !0,
            },
            timeout: {
              values: null,
              default_value: [30],
              initial_value: [30],
              runtime_value: [30],
            },
            dps: {
              values: null,
              default_value: [2],
              initial_value: [2],
              runtime_value: [2],
            },
            pause: {
              values: [!1, !0],
              default_value: !1,
              initial_value: !1,
              runtime_value: !1,
            },
          },
        },
        m = {
          anchorView_toOrientation: function (e, t, n, i, o, r, a) {
            if (!(r < 0 || r > 3 || a < 0 || a > 2))
              if (0 == r)
                (e.style.left = t + "%"),
                  (e.style.top = n + "%"),
                  (e.style.width = i + "%"),
                  (e.style.height = o + "%")
              else {
                var s = [
                  [
                    { x: t, y: n, width: i, height: o },
                    { x: 100 - n - o, y: t, width: o, height: i },
                    { x: 100 - t - i, y: 100 - n - o, width: i, height: o },
                  ],
                  [
                    { x: n, y: 100 - t - i, width: o, height: i },
                    { x: t, y: n, width: i, height: o },
                    { x: 100 - n - o, y: 100 - t - i, width: o, height: i },
                  ],
                  [
                    { x: 100 - t - i, y: 100 - n - o, width: i, height: o },
                    { x: n, y: 100 - t - i, width: o, height: i },
                    { x: t, y: n, width: i, height: o },
                  ],
                ]
                r--,
                  (e.style.left = s[r][a].x + "%"),
                  (e.style.top = s[r][a].y + "%"),
                  (e.style.width = s[r][a].width + "%"),
                  (e.style.height = s[r][a].height + "%")
              }
          },
          rotateAny_toOrientation: function (e, t) {
            if (!(t < 0 || t > 2)) {
              var n = e.x,
                i = e.y,
                o = e.width,
                r = e.height
              return [
                [
                  { x: n, y: i, width: o, height: r },
                  { x: i, y: 100 - n - o, width: r, height: o },
                  { x: 100 - n - o, y: 100 - i - r, width: o, height: r },
                ],
                [
                  { x: 100 - i - r, y: n, width: r, height: o },
                  { x: n, y: i, width: o, height: r },
                  { x: i, y: 100 - n - o, width: r, height: o },
                ],
                [
                  { x: 100 - n - o, y: 100 - i - r, width: o, height: r },
                  { x: 100 - i - r, y: 100 - n - o, width: r, height: o },
                  { x: n, y: i, width: o, height: r },
                ],
              ][_.runtime.viewfinderOnScreenView.orientation][t]
            }
          },
          scaleFull_toPartial: function (e, t, n) {
            if (!(t < 0.01 || t > 1 || n < 0 || n > 1)) {
              var i = e.x,
                o = e.y,
                r = e.width,
                a = e.height,
                s = 100 * (1 - t)
              return [
                { x: s / 2 + i * t, y: o, width: r * t, height: a },
                { x: i, y: s / 2 + o * t, width: r, height: a * t },
              ][n]
            }
          },
          calcScanningRect: function (e, t, n, i, r, a) {
            u && console.log("calcScanningRect(" + e + " " + t + " " + n + ") ")
            var s = 1 - n,
              l = 0,
              c = 1
            e && ((l = 1), (c = 0))
            var d = _.global.codeMasksArray
            if ((!e && t) || (e && !t))
              for (var h = 0; h < i; h++)
                (m = this.rotateAny_toOrientation(r[h], a.orientation)),
                  (m = this.scaleFull_toPartial(m, s, c)),
                  (p = d[h]),
                  o.MWBsetScanningRect(p, m.x, m.y, m.width, m.height)
            else {
              var p, m
              for (h = 0; h < i; h++)
                (m = this.rotateAny_toOrientation(r[h], a.orientation)),
                  (m = this.scaleFull_toPartial(m, s, l)),
                  (p = d[h]),
                  o.MWBsetScanningRect(p, m.x, m.y, m.width, m.height)
            }
            if (u) {
              var f = o.MWBgetScanningRect(0)
              ;(f = JSON.parse(f)),
                u &&
                  console.log(
                    "viewfinderUnion after TM " +
                      f.x +
                      " " +
                      f.y +
                      " " +
                      f.width +
                      " " +
                      f.height +
                      " "
                  )
            }
          },
          calcPreview: function (e, t, n, i, o) {
            var r = i.global.numberOfSupporedCodes,
              a = i.global.untouchedScanningRectsArray,
              s = i.runtime.viewfinderOnScreenView,
              l = o.previewFrame
            u && console.log("calcPreview(" + e + ") ")
            window.innerWidth, window.innerHeight, l.offsetTop, l.offsetLeft
            var c = l.offsetWidth,
              d = l.offsetHeight,
              h = c / d,
              p = t.width,
              _ = t.height,
              m = p / _
            if (
              (e && (m = (p = t.height) / (_ = t.width)),
              u &&
                console.log(
                  "in calcPreview, { " +
                    h +
                    " <> " +
                    m +
                    " } { " +
                    c +
                    " <> " +
                    d +
                    " }"
                ),
              h != m)
            )
              if (h > m) {
                var f = _ * (c / p)
                q = (g = f - d) / f
                ;(n.style.cssText =
                  "position: absolute; margin: auto; top: 0; bottom: 0; width: 100%; height: auto;"),
                  this.calcScanningRect(e, !0, q, r, a, s)
              } else if (h < m) {
                var g,
                  q,
                  v = p * (d / _),
                  A = ((q = (g = v - c) / v), (-(g / c) / 2) * 100)
                ;(A += 0),
                  (n.style.cssText =
                    "position: absolute; margin-left: " +
                    A +
                    "%; width: auto; height: 100%;"),
                  this.calcScanningRect(e, !1, q, r, a, s)
              }
          },
          drawOverlayLines: function (e, t, n, i, o, r) {
            var a = t,
              s = n
            ;(e.v.style.left = e.h.style.left = a - 0 + "px"),
              (e.v.style.top = e.h.style.top = s - 0 + "px"),
              (e.v.width = e.h.width = i),
              (e.v.height = e.h.height = o),
              (e.v.width = r),
              (e.v.style.left = a + i / 2 - e.v.width / 2 - 0 + "px"),
              (e.h.height = r),
              (e.h.style.top = s + o / 2 - e.h.height / 2 - 0 + "px")
          },
          toggleBlinkingLines: function () {
            var e = d,
              t = f.PAUSE_DECODING ? 0 : _.global.overlay.blinkingRate
            e.lineV.style.animation = e.lineH.style.animation =
              "fadeColor " + t + "ms infinite"
          },
          drawPauseRects: function () {
            var e = d
            f.PAUSE_DECODING
              ? ((e.lineV.style.display = "none"),
                (e.lineH.style.display = "none"))
              : ((e.lineV.style.display = "initial"),
                (e.lineH.style.display = "initial"))
            let t = d.pause,
              n = d.previewFrame
            d.setTop_forPreviewTypeElements(t),
              (t.style.left = n.style.left),
              (t.width = n.offsetWidth),
              (t.height = n.offsetHeight)
            var i = t.getContext("2d")
            let o = _.global.overlay,
              r = { x: 0, y: 0, w: 0, h: 0 },
              a = { x: 0, y: 0, w: 0, h: 0 },
              s = t.width / t.height,
              l = 1
            s < 1 && (l = 0), s > 2.2 && (l = 2)
            let c = [
              { rh: 20, rw: 5, r1x: 42, r2x: 53 },
              { rh: 25, rw: 4, r1x: 43, r2x: 53 },
              { rh: 30, rw: 3, r1x: 45, r2x: 52 },
            ][l]
            ;(r.y = a.y = (t.height / 100) * ((100 - c.rh) / 2)),
              (r.h = a.h = (t.height / 100) * c.rh),
              (r.w = a.w = (t.width / 100) * c.rw),
              (r.x = (t.width / 100) * c.r1x),
              (a.x = (t.width / 100) * c.r2x),
              (i.lineWidth = 1 * o.borderWidth),
              (i.fillStyle = o.lineColor),
              f.PAUSE_DECODING
                ? (i.fillRect(r.x, r.y, r.w, r.h),
                  i.fillRect(a.x, a.y, a.w, a.h))
                : (i.clearRect(r.x - 1, r.y - 1, r.w + 2, r.h + 2),
                  i.clearRect(a.x - 1, a.y - 1, a.w + 2, a.h + 2))
          },
          resizeCanvas: function (e, t) {
            var n = e.runtime.untouchedScanningRectsUnion,
              i = t.previewFrame,
              o = t.overlay
            let r = t.locate
            var a = e.global.blinkingLines,
              s = t.flash,
              l = t.zoom,
              c = t.close,
              d = e.global.overlay,
              h = e.runtime.viewfinderOnScreenView
            if (
              (u && console.log("resizeCanvas "),
              t.setTop_forPreviewTypeElements(o),
              (o.style.left = i.style.left),
              (o.width = i.offsetWidth),
              (o.height = i.offsetHeight),
              t.setTop_forPreviewTypeElements(r),
              (r.style.left = i.style.left),
              (r.width = i.offsetWidth),
              (r.height = i.offsetHeight),
              r.getContext("2d").clearRect(0, 0, r.width, r.height),
              (s.style.top = o.offsetTop + 2 + "px"),
              (s.style.left = o.offsetLeft + "px"),
              (l.style.top = o.offsetTop + 2 + "px"),
              (l.style.left =
                o.offsetWidth + o.offsetLeft - l.offsetWidth + "px"),
              (c.style.top =
                o.offsetTop + o.height - (2 * c.offsetHeight + 2) + "px"),
              (c.style.left =
                o.offsetWidth + o.offsetLeft - 2 * c.offsetWidth + "px"),
              (h.x = o.width * (n.x / 100)),
              (h.y = o.height * (n.y / 100)),
              (h.width = o.width * (n.width / 100)),
              (h.height = o.height * (n.height / 100)),
              0 != d.mode)
            ) {
              var p = o.getContext("2d")
              if (1 == d.mode)
                (p.fillStyle = "rgba(0, 0, 0, 0.5)"),
                  p.fillRect(0, 0, o.width, o.height),
                  p.clearRect(h.x, h.y, h.width, h.height),
                  (p.lineWidth = d.borderWidth),
                  (p.strokeStyle = d.lineColor),
                  p.strokeRect(h.x, h.y, h.width, h.height),
                  this.drawOverlayLines(
                    a,
                    o.offsetLeft + h.x,
                    o.offsetTop + h.y,
                    h.width,
                    h.height,
                    d.linesWidth
                  ),
                  this.drawPauseRects()
              else if (2 == d.mode) {
                var _ = document.createElement("img")
                ;(_.src = d.imageSrc),
                  (_.onload = function () {
                    p.drawImage(
                      _,
                      0,
                      0,
                      _.width,
                      _.height,
                      0,
                      0,
                      o.width,
                      o.height
                    )
                  })
              }
            }
          },
          resizePartialScannerView: async function (e, t) {
            var n = e.global.hideDuringUpdate,
              i = t.proxyWrapPreview,
              o = e.global.blinkingLines,
              r = t.previewFrame,
              a = e.global.partialView,
              s = e.runtime.viewfinderOnScreenView,
              l = e.runtime.is_portrait,
              c = e.global.hardwareCameraResolution,
              d = t.preview
            u &&
              console.log(
                "resizePartialView | window size " +
                  window.innerWidth +
                  " " +
                  window.innerHeight
              ),
              n &&
                ((i.style.visibility = "hidden"),
                (o.v.style.display = "none"),
                (o.h.style.display = "none")),
              u &&
                console.log(
                  "anchorView_toOrientation: anchor_to " +
                    a.orientation +
                    " -> current_orientation " +
                    s.orientation
                ),
              this.anchorView_toOrientation(
                r,
                a.x,
                a.y,
                a.width,
                a.height,
                a.orientation,
                s.orientation
              ),
              u && console.log("is in the clouds"),
              u &&
                console.log(
                  "anchor: " +
                    a.orientation +
                    " [0-3], " +
                    s.orientation +
                    " [0-2]"
                ),
              this.calcPreview(l, c, d, e, t),
              this.resizeCanvas(e, t),
              setTimeout(function () {
                n &&
                  ((i.style.visibility = "visible"),
                  (o.v.style.display = "initial"),
                  (o.h.style.display = "initial"))
              }, 1e3)
          },
          eventHandlers: {
            resize: function (e) {
              u && (console.log("window resized"), console.log(e)),
                m.resizePartialScannerView(_, d)
            },
            loadeddata: function () {
              var e = new CustomEvent("cameraReady", {
                detail: "Camera is ready.",
              })
              document.dispatchEvent(e)
            },
          },
          helpers: {
            already_inited: !1,
            init_codeMasks_and_scanRects_and_union: function (e) {
              var t = e.global.numberOfSupporedCodes,
                n = e.global.codeMasksArray,
                i = e.global.untouchedScanningRectsArray,
                r = e.runtime.untouchedScanningRectsUnion
              if (this.already_inited)
                for (a = 0; a < t; a++) {
                  ;(s = o.MWBgetScanningRect(n[a])), (s = JSON.parse(s))
                  i[a] = s
                }
              else {
                for (var a = 0; a < t; a++) {
                  n.push(Math.pow(2, a))
                  var s = o.MWBgetScanningRect(n[a]),
                    s = JSON.parse(s)
                  i.push(s)
                }
                this.already_inited = !0
              }
              var l = JSON.parse(o.MWBgetScanningRect(0))
              ;(r.x = l.x),
                (r.y = l.y),
                (r.width = l.width),
                (r.height = l.height),
                u &&
                  console.log(
                    "-> one-time initCodeMasksArray_and_untouchedScanningRectsArray_and_untouchedScanningRectsUnion "
                  )
            },
            reset_Decoder: function () {
              u && console.log("reset scanning rects"), o.MWBinitDecoder()
            },
            IsJsonString: function (e, t) {
              var n = null
              try {
                n = JSON.parse(e)
              } catch (e) {
                return t
              }
              return n
            },
            OrientationType_hash: [],
            OrientationType_hash_init: function () {
              ;(this.OrientationType_hash["landscape-primary"] = 0),
                (this.OrientationType_hash["portrait-primary"] = 1),
                (this.OrientationType_hash["landscape-secondary"] = 2)
            },
            _Screen_Orientation:
              void 0 === screen.orientation ? "undefined" : screen.orientation,
            orientationChangeHandler: function () {
              let e = 0
              "undefined" === m.helpers._Screen_Orientation
                ? ((e = window.innerWidth > window.innerHeight ? 0 : 1),
                  u &&
                    console.log(
                      "HMM " + screen.width + " " + screen.height + " => " + e
                    ))
                : (u &&
                    console.log(
                      "ORIENTATION CHANGE " + m.helpers._Screen_Orientation
                    ),
                  (e =
                    m.helpers.OrientationType_hash[
                      m.helpers._Screen_Orientation.type
                    ]))
              let t = e % 2 == 1
              u && console.log(e + " & " + t)
              _.runtime.is_portrait
              ;(_.runtime.viewfinderOnScreenView.orientation = e),
                (_.runtime.is_portrait = t),
                u && console.log("HMM " + _.runtime.is_portrait)
              var n = d.preview.videoWidth,
                i = d.preview.videoHeight
              u && console.log("new frame size: " + n + "x" + i)
              var o = n,
                r = i
              n < i && ((o = i), (r = n)),
                u && console.log("explorer reporting"),
                (_.global.hardwareCameraResolution.width = o),
                (_.global.hardwareCameraResolution.height = r),
                u && console.log(_.global.hardwareCameraResolution)
            },
            safari_video_click_workaround: function (e) {
              let t = document.createElement("button")
              ;(t.onclick = function () {
                e.play(),
                  u && console.log("calling play again 3"),
                  u &&
                    setTimeout(function () {
                      u && console.log(d.preview)
                    }, 2500),
                  (this.onclick = null)
              }),
                t.click()
            },
            safari_audio_click_workaround: function (e) {
              ;(e.volume = 0), (e.muted = !0), e.play()
            },
            get_number_of_Digits: function (e) {
              return 1 + (0 | Math.log10((e ^ (e >> 31)) - (e >> 31)))
            },
            CreateErrorProperties: function (e, t, n, i, o) {
              return {
                name: e,
                message: t,
                mozilla: n,
                userFriendly: i,
                mostLikelyCause: o,
              }
            },
            CreateErrorDescriptions: function () {
              ;(_.runtime.errorDescriptions.NotReadableError =
                new m.helpers.CreateErrorProperties(
                  "NotReadableError",
                  "Could not start video source",
                  "Although the user granted permission to use the matching devices, a hardware error occurred at the operating system, browser, or Web page level which prevented access to the device.",
                  "Could not start the camera",
                  "Running / using the camera in another browser / native app"
                )),
                (_.runtime.errorDescriptions.ProtocolError =
                  new m.helpers.CreateErrorProperties(
                    "",
                    "",
                    "If a document isn't loaded in a secure context (that is, the page was loaded using HTTP rather than HTTPS), the navigator.mediaDevices property is undefined, making access to getUserMedia() impossible.",
                    "Cannot use the camera under HTTP because HTTPS is needed",
                    "Accessing the web app under HTTP and not HTTPS"
                  )),
                (_.runtime.errorDescriptions.NotAllowedError =
                  new m.helpers.CreateErrorProperties(
                    "NotAllowedError",
                    "Permission denied",
                    "It also happens if the user has specified that the current browsing instance is not permitted access to the device, the user has denied access for the current session, or the user has denied all access to user media devices globally.",
                    "Cannot use the camera because camera access isn't allowed",
                    "No permission to access the camera i.e. camera is blocked in the browser for this site"
                  )),
                (_.runtime.errorDescriptions.NotFoundError =
                  new m.helpers.CreateErrorProperties(
                    "NotFoundError",
                    "Requested device not found",
                    "No media tracks of the type specified were found that satisfy the given constraints.",
                    "Cannot use the camera because no camera device is present",
                    "There is no physical camera device plugged in"
                  )),
                (_.runtime.errorDescriptions.AbortError =
                  new m.helpers.CreateErrorProperties(
                    "AbortError",
                    "",
                    "Although the user and operating system both granted access to the hardware device, and no hardware issues occurred that would cause a NotReadableError, some problem occurred which prevented the device from being used.",
                    "Some problem occurred which prevented the device from being used.",
                    ""
                  )),
                (_.runtime.errorDescriptions.OverconstrainedError =
                  new m.helpers.CreateErrorProperties(
                    "OverconstrainedError",
                    "",
                    "The specified constraints resulted in no candidate devices which met the criteria requested.",
                    "No camera is available with the resolution / features being requested",
                    ""
                  ))
            },
            otherResult: function (e, t, n) {
              return {
                code: e,
                errorDetails: t,
                type: n,
                parsedCode: null,
                isGS1: null,
                bytes: null,
                locationPoints: null,
                imageWidth: null,
                imageHeight: null,
                moduleSizeX: null,
                moduleSizeY: null,
                modulesCountX: null,
                modulesCountY: null,
                ppm: null,
              }
            },
          },
        }
      n(3)
      var f = {
          DECODER_ACTIVE: !1,
          CONTINUOUS_DECODING: !1,
          USE_PARSER: !0,
          decoder_timeout: 30,
          dps_limit: 20,
          PAUSE_DECODING: !1,
          external_helper: null,
          result_callback: null,
          decoder: async function (e) {
            var t = null,
              n = 0
            const i = 1e3 / f.dps_limit
            f.decoder_timeout
            var o = performance.now(),
              r = e.videoWidth,
              a = e.videoHeight
            u && console.log("loaded metadata of video, w,h: " + r + ", " + a)
            let s = _.global.overlay,
              l = _.runtime.viewfinderOnScreenView
            var c = null,
              h = setInterval(async function () {
                if ((n++, f.DECODER_ACTIVE)) {
                  if (!f.PAUSE_DECODING) {
                    ;(r = e.videoWidth), (a = e.videoHeight)
                    var p = document.createElement("canvas")
                    ;(p.width = r + 0),
                      (p.height = a + 0),
                      (b = p.getContext("2d")).drawImage(e, 0, 0, r, a)
                    var _ = b.getImageData(0, 0, p.width, p.height).data,
                      g = _.length * _.BYTES_PER_ELEMENT
                    ;(t = v._malloc(g)), v.HEAPU8.set(_, t)
                    var q,
                      A = v.cwrap("scanFrame", "string", [
                        "number",
                        "number",
                        "number",
                        "number",
                      ])
                    ;(o = performance.now()), (q = A(t, p.width, p.height, 0))
                    var y = 1e3 / (performance.now() - o),
                      w = JSON.parse(q)
                    if ("No MWResult." == w.type)
                      u &&
                        console.log(
                          "dps(" +
                            Math.round(y) +
                            "), frame " +
                            n +
                            " : " +
                            w.code +
                            " " +
                            w.type
                        )
                    else {
                      let e = w
                      var M
                      if (
                        e.moduleSizeX > 0.01 &&
                        "Dotcode" != e.type &&
                        "Micro QR" != e.type &&
                        "Maxicode" != e.type
                      ) {
                        M =
                          "QR" == e.type ||
                          "Micro QR" == e.type ||
                          "AZTEC" == e.type ||
                          "FOUND_DM" == e.type ||
                          "Dotcode" == e.type ||
                          "Maxicode" == e.type
                            ? (e.moduleSizeX + e.moduleSizeY) / 2
                            : e.moduleSizeX
                      }
                      if (
                        ((e.ppm = M), null != e && null != e.locationPoints)
                      ) {
                        let t = s.useLocationLayer ? d.locate : d.overlay,
                          n = d.preview
                        var b = t.getContext("2d")
                        null != c && clearTimeout(c),
                          b.clearRect(
                            l.x + 1,
                            l.y + 1,
                            l.width - 2,
                            l.height - 2
                          )
                        const i = (e) => new Promise((t) => setTimeout(t, e))
                        await i(10),
                          u && console.log("location points:"),
                          u && console.log(e.locationPoints),
                          (b.lineWidth = 1 * s.borderWidth),
                          (b.strokeStyle = s.locationColor)
                        window.innerWidth > window.innerHeight
                          ? (window.innerHeight, window.innerWidth)
                          : (window.innerWidth, window.innerHeight)
                        0, u && console.log("navigationBarHeight: 0")
                        var E = n.offsetWidth,
                          C = n.offsetHeight
                        0 == l.orientation || 2 == l.orientation
                          ? (E += 0)
                          : (C += 0)
                        var S = n.offsetWidth - t.width,
                          B = n.offsetHeight - t.height
                        ;(S /= 2), (B /= 2)
                        var O = E / e.imageWidth,
                          W = C / e.imageHeight
                        u &&
                          console.log(
                            "screen w h : " +
                              window.innerWidth +
                              " " +
                              window.innerHeight +
                              " image w h : " +
                              e.imageWidth +
                              " " +
                              e.imageHeight +
                              " scales x y : " +
                              O +
                              " " +
                              W
                          )
                        if ((b.translate(-0, 0), s.locationAllPointsDraw)) {
                          var D = e.locationPoints.p1.x,
                            R = e.locationPoints.p1.y,
                            P = e.locationPoints.p2.x,
                            T = e.locationPoints.p2.y,
                            L = e.locationPoints.p3.x,
                            x = e.locationPoints.p3.y,
                            N = e.locationPoints.p4.x,
                            I = e.locationPoints.p4.y
                          ;(D *= O),
                            (R *= W),
                            (P *= O),
                            (T *= W),
                            (L *= O),
                            (x *= W),
                            (N *= O),
                            (I *= W),
                            (D -= S),
                            (R -= B),
                            (P -= S),
                            (T -= B),
                            (L -= S),
                            (x -= B),
                            (N -= S),
                            (I -= B),
                            u && (b.strokeStyle = "rgba(255, 225, 0, 1.0)"),
                            l.orientation,
                            b.beginPath(),
                            b.moveTo(D - 0, R - 0),
                            b.lineTo(P - 0, T - 0),
                            b.lineTo(L - 0, x - 0),
                            b.lineTo(N - 0, I - 0),
                            b.lineTo(D - 0, R - 0),
                            b.stroke()
                        } else {
                          var F = e.locationPoints.p1.x,
                            U = e.locationPoints.p1.y,
                            k = e.locationPoints.p3.x - F,
                            z = e.locationPoints.p3.y - U
                          ;(F *= O),
                            (U *= W),
                            (k *= O),
                            (z *= W),
                            l.orientation,
                            b.strokeRect(F - 0, U - 0, k, z)
                        }
                      }
                      if (f.CONTINUOUS_DECODING) {
                        Math.round(y), w.code
                        f.PAUSE_DECODING = !0
                        let e = i > s.locationShowTime ? s.locationShowTime : i
                        ;(e /= 100),
                          (e *= 90),
                          (c = setTimeout(async function () {
                            b.clearRect(
                              l.x + 1,
                              l.y + 1,
                              l.width - 2,
                              l.height - 2
                            )
                            var e
                            await ((e = 10),
                            new Promise((t) => setTimeout(t, e))),
                              2 == s.pauseMode
                                ? m.toggleBlinkingLines()
                                : 1 == s.pauseMode && m.drawPauseRects()
                          }, e)),
                          f.result_callback
                            ? f.result_callback(w)
                            : u &&
                              console.log(
                                "decoded string (" + n + ") " + w.code
                              )
                      } else {
                        ;(f.PAUSE_DECODING = !0), d.preview.pause()
                        const e = (e) => new Promise((t) => setTimeout(t, e))
                        await e(s.locationShowTime),
                          f.destroyPreview(!0),
                          await e(128),
                          (f.PAUSE_DECODING = !1),
                          f.result_callback
                            ? f.result_callback(w)
                            : u &&
                              console.log(
                                "decoded string (" + n + ") " + w.code
                              )
                      }
                    }
                    v._free(t), (t = null), v._free(q)
                  }
                } else clearInterval(h)
              }, i)
          },
          start: async function (e) {
            if (f.DECODER_ACTIVE) return null
            ;(f.DECODER_ACTIVE = !0),
              (f.result_callback = "function" == typeof e ? e : g.dflt_clb)
            try {
              m.helpers.safari_audio_click_workaround(s),
                await d.main_createPreview(_, m),
                await p.init_values(
                  d.preview,
                  async function (e) {
                    var t
                    m.helpers.reset_Decoder(),
                      A(),
                      await m.helpers.init_codeMasks_and_scanRects_and_union(_),
                      await ((t = 1), new Promise((e) => setTimeout(e, t))),
                      d.revealElements(),
                      m.helpers.OrientationType_hash_init(),
                      m.helpers.orientationChangeHandler(),
                      "undefined" === m.helpers._Screen_Orientation
                        ? window.addEventListener(
                            "resize",
                            m.helpers.orientationChangeHandler,
                            !1
                          )
                        : screen.orientation.addEventListener(
                            "change",
                            m.helpers.orientationChangeHandler
                          ),
                      window.addEventListener(
                        "resize",
                        m.eventHandlers.resize,
                        !1
                      ),
                      "container" == _.global.previewType &&
                        null != _.global.container &&
                        d.resizeObs.observe(_.global.container),
                      await m.resizePartialScannerView(_, d),
                      (d.ready_to_use_ResizeObs = !0),
                      await f.decoder(d.preview),
                      u && console.log("final")
                  },
                  function () {}
                )
            } catch (e) {}
            return 0
          },
          set_DecoderTimeout: function (e) {
            var t =
              "number" == typeof e && (0 == e || (e >= 10 && e <= 60)) ? e : 30
            f.decoder_timeout = t
          },
          set_DpsLimit: function (e) {
            var t = "number" == typeof e && e >= 1 && e <= 30 ? e : 30
            f.dps_limit = t
          },
          set_Continuous: function (e) {
            "boolean" == typeof e
              ? (f.CONTINUOUS_DECODING = e)
              : u &&
                console.log(
                  "error: boolean argument required for arg in set_Continuous"
                )
          },
          set_Parsing: function (e) {
            "boolean" == typeof e
              ? (e ? o.MWBsetActiveParser(255) : o.MWBsetActiveParser(0),
                (f.USE_PARSER = e))
              : u &&
                console.log(
                  "error: boolean argument required for arg in set_Parsing"
                )
          },
          set_Pause: function (e) {
            "boolean" == typeof e
              ? (f.PAUSE_DECODING = e)
              : u &&
                console.log(
                  "error: boolean argument required for arg in set_Pause"
                )
          },
          set_Preview_anchor: function (e) {
            var t = "number" == typeof e && e >= 0 && e <= 3 ? e : 0
            f.DECODER_ACTIVE || (_.global.partialView.orientation = t)
          },
          resizePreview: function (e, t, n, i) {
            if ("container" != _.global.previewType) {
              var o =
                  "number" == typeof e && e >= 0 && e <= 100
                    ? e
                    : _.global.partialView.x,
                r =
                  "number" == typeof t && t >= 0 && t <= 100
                    ? t
                    : _.global.partialView.y,
                a =
                  "number" == typeof n && n >= 0 && n <= 100
                    ? n
                    : _.global.partialView.width,
                s =
                  "number" == typeof i && i >= 0 && i <= 100
                    ? i
                    : _.global.partialView.height
              u && console.log("RESIZE: " + [o, r, a, s]),
                (_.global.partialView.x = o),
                (_.global.partialView.y = r),
                (_.global.partialView.width = a),
                (_.global.partialView.height = s),
                f.DECODER_ACTIVE && m.resizePartialScannerView(_, d)
            }
          },
          destroyPreview: async function (e) {
            var t,
              n = p,
              i = n.videoTrack
            d.destroyPreview(n, i),
              await ((t = 128), new Promise((e) => setTimeout(e, t))),
              void 0 === e &&
                f.result_callback &&
                f.result_callback({
                  code: "",
                  type: "Cancel",
                  isGS1: null,
                  bytes: null,
                  location: null,
                  imageWidth: null,
                  imageHeight: null,
                })
          },
          gui_demo_controls: [],
          gui_demo_controls_Array: [],
          gui_demo: {
            generateCustomToggleControl: function (e, t, n, i, o) {
              var r = document.createElement("div"),
                a = document.createElement("span")
              ;(a.id = e + "_text1"), (a.innerHTML = t + "    ")
              var s = document.createElement("label")
              ;(s.id = e + "_holder"), (s.className = "switch")
              var l = document.createElement("input")
              ;(l.id = e), (l.type = "checkbox"), (l.checked = i)
              var c = document.createElement("span")
              c.className = "slider round"
              var u = document.createElement("span")
              ;(u.id = e + "_text2"),
                (u.innerHTML = n[Number(i)]),
                s.appendChild(l),
                s.appendChild(c),
                r.appendChild(a),
                r.appendChild(s),
                r.appendChild(u),
                (l.dataset.id = e)
              var d = {
                id: e,
                element_ref: r,
                text2_values: n,
                event_handler: function () {
                  f.gui_demo_controls[this.id].value = this.checked
                  var e = this.dataset.id,
                    t = f.gui_demo_controls[e].text2_values
                  ;(document.getElementById(e + "_text2").innerHTML =
                    t[Number(this.checked)]),
                    o()
                },
                disable_element: null,
                value: i,
              }
              ;(l.onclick = d.event_handler),
                (s.style.position = "absolute"),
                (u.style.position = "absolute"),
                (s.style.marginTop = "-5px"),
                (u.style.marginLeft = "80px"),
                (u.style.color = "#7f7f7f"),
                (d.disable_element = function (e, t) {
                  var n = this.id,
                    i = document.getElementById(n),
                    o = document.getElementById(n + "_holder")
                  document.getElementById(n + "_text1"),
                    document.getElementById(n + "_text2")
                  if (
                    (e
                      ? ((o.style.opacity = "0.5"), (i.disabled = !0))
                      : ((i.disabled = !1), (o.style.opacity = "1.0")),
                    "boolean" == typeof t)
                  ) {
                    let n = !t
                    o.style.opacity = n ? (e ? "0.5" : "1.0") : "0.0"
                  }
                }),
                document.body.appendChild(r),
                (f.gui_demo_controls[e] = d),
                f.gui_demo_controls_Array.push(f.gui_demo_controls[e])
            },
            generateCustomSelectControl: function (e, t, n, i, o) {
              var r = document.createElement("div"),
                a = document.createElement("span")
              ;(a.id = e + "_text1"), (a.innerHTML = t + "    ")
              var s = document.createElement("div")
              ;(s.className = "custom-select"), (s.style.width = "220px")
              var l = document.createElement("select")
              l.id = e
              const c = n.length
              for (let e = 0; e < c; e++) {
                var u = document.createElement("option")
                ;(u.value = e), (u.innerHTML = n[e]), l.appendChild(u)
              }
              ;(l.value = Number(i)),
                s.appendChild(l),
                r.appendChild(a),
                r.appendChild(s)
              var d = {
                id: e,
                element_ref: r,
                text2_values: n,
                event_handler: function () {
                  ;(f.gui_demo_controls[this.id].value = this.value), o()
                },
                disable_element: null,
                value: i,
              }
              ;(l.onchange = d.event_handler),
                (s.style.marginTop = "-35px"),
                (s.style.marginLeft = Math.round(10 * (t.length + 4)) + "px"),
                document.body.appendChild(r),
                (f.gui_demo_controls[e] = d),
                f.gui_demo_controls_Array.push(f.gui_demo_controls[e])
            },
            init_customSelects: function () {
              var e, t, n, i, o, r, a
              function s(e) {
                var t,
                  n,
                  i,
                  o = []
                for (
                  t = document.getElementsByClassName("select-items"),
                    n = document.getElementsByClassName("select-selected"),
                    i = 0;
                  i < n.length;
                  i++
                )
                  e == n[i]
                    ? o.push(i)
                    : n[i].classList.remove("select-arrow-active")
                for (i = 0; i < t.length; i++)
                  o.indexOf(i) && t[i].classList.add("select-hide")
              }
              for (
                e = document.getElementsByClassName("custom-select"), t = 0;
                t < e.length;
                t++
              ) {
                for (
                  i = e[t].getElementsByTagName("select")[0],
                    (o = document.createElement("DIV")).dataset.id = i.id,
                    o.setAttribute("class", "select-selected"),
                    o.innerHTML = i.options[i.selectedIndex].innerHTML,
                    e[t].appendChild(o),
                    (r = document.createElement("DIV")).setAttribute(
                      "class",
                      "select-items select-hide"
                    ),
                    n = 1;
                  n < i.length;
                  n++
                )
                  ((a = document.createElement("DIV")).innerHTML =
                    i.options[n].innerHTML),
                    a.addEventListener("click", function (e) {
                      var t, n, i
                      for (
                        n =
                          this.parentNode.parentNode.getElementsByTagName(
                            "select"
                          )[0],
                          i = this.parentNode.previousSibling,
                          t = 0;
                        t < n.length;
                        t++
                      )
                        if (n.options[t].innerHTML == this.innerHTML) {
                          ;(n.selectedIndex = t), (i.innerHTML = this.innerHTML)
                          break
                        }
                      i.click()
                    }),
                    r.appendChild(a)
                e[t].appendChild(r),
                  o.addEventListener("click", function (e) {
                    e.stopPropagation(),
                      s(this),
                      this.nextSibling.classList.toggle("select-hide"),
                      this.classList.toggle("select-arrow-active")
                    let t = document.getElementById(this.dataset.id),
                      n = f.gui_demo_controls[t.id].value
                    t.value != n && t.onchange()
                  })
              }
              document.addEventListener("click", s)
            },
            generateCustomCheckboxesControl: function (e, t, n, i, o) {
              var r = document.createElement("div")
              r.style.width = "90%"
              var a = document.createElement("span")
              ;(a.id = e + "_text1"), (a.innerHTML = t + "    ")
              var s = document.createElement("span")
              function l() {
                let e = this.id.split("_0x_"),
                  t = e[0],
                  n = e[1]
                ;(f.gui_demo_controls[t].value[n] = this.checked), o()
              }
              ;(s.innerHTML = "    "),
                (s.style.display = "block"),
                (s.style.fontSize = "8px"),
                r.appendChild(a),
                r.appendChild(s)
              const c = n.length,
                u = Math.ceil(c / 3)
              var d = document.createElement("div")
              ;(d.style.width = "100%"),
                (d.style.display = "table"),
                (d.style.tableLayout = "fixed")
              var h = []
              for (let e = 0; e < 3; e++) {
                var p = document.createElement("div")
                ;(p.style.width = "50%"),
                  (p.style.display = "table-cell"),
                  h.push(p),
                  d.appendChild(h[e])
              }
              let _ = 0
              h[_]
              for (let t = 0; t < c; t++) {
                var m = document.createElement("label")
                ;(m.id = e + "_holder"),
                  (m.className = "container"),
                  (m.innerHTML = n[t])
                var g = document.createElement("input")
                ;(g.id = e + "_0x_" + t),
                  (g.type = "checkbox"),
                  (g.checked = i[t]),
                  (g.onchange = l)
                var q = document.createElement("span")
                ;(q.className = "checkmark"),
                  m.appendChild(g),
                  m.appendChild(q),
                  u / (t - u * _) <= 1 && _++,
                  h[_].appendChild(m)
              }
              r.appendChild(d)
              var v = {
                id: e,
                element_ref: r,
                text2_values: n,
                event_handler: l,
                disable_element: null,
                value: i,
              }
              document.body.appendChild(r),
                (f.gui_demo_controls[e] = v),
                f.gui_demo_controls_Array.push(f.gui_demo_controls[e])
            },
            generateCustomRangeSliderControl: function (e, t, n, i, o) {
              var r = document.createElement("div"),
                a = document.createElement("span")
              a.id = e + "_text1"
              var s = "",
                l = document.createElement("div")
              function c() {
                let e = this.id.split("_0x_"),
                  t = e[0],
                  n = e[1]
                f.gui_demo_controls[t].value[n] = Number(this.value)
                var i = this.dataset.id,
                  r = document.getElementById(i + "_text1")
                let a = r.innerHTML
                var s = f.gui_demo_controls[t].value.length
                if (1 == s) {
                  let e = a.lastIndexOf(": ")
                  a = a.substring(0, e) + ": " + this.value + "    "
                } else if (4 == s) {
                  let e = a.lastIndexOf("→ ("),
                    n = f.gui_demo_controls[t].value + ""
                  ;(n = n.replace(/,/g, ", ")),
                    (a = a.substring(0, e) + "→ (" + n + ")    ")
                }
                ;(r.innerHTML = a), o()
              }
              ;(l.id = e + "_holder"), (l.className = "slidecontainer")
              const u = n.length
              for (let t = 0; t < u; t++) {
                var d = document.createElement("span")
                ;(d.innerHTML = "    "),
                  (d.style.display = "block"),
                  (d.style.fontSize = "6px")
                var h = document.createElement("input")
                ;(h.id = e + "_0x_" + t),
                  (h.type = "range"),
                  (h.min = n[t][0]),
                  (h.max = n[t][1]),
                  (h.value = i[t]),
                  (h.className = "slider_range"),
                  (h.dataset.id = e),
                  (h.oninput = c),
                  (s += i[t] + ", "),
                  l.appendChild(d),
                  l.appendChild(h)
              }
              1 == u
                ? ((s = s.substring(0, s.length - 2)),
                  (a.innerHTML = t + ": " + s + "    "))
                : ((s = s.substring(0, s.length - 2)),
                  (a.innerHTML = t + " → (" + s + ")    ")),
                r.appendChild(a),
                r.appendChild(l)
              var p = {
                id: e,
                element_ref: r,
                text2_values: n,
                event_handler: c,
                disable_element: (null, function (e) {}),
                value: i,
              }
              document.body.appendChild(r),
                (f.gui_demo_controls[e] = p),
                f.gui_demo_controls_Array.push(f.gui_demo_controls[e])
            },
          },
        },
        g = null
      g = new a()
      var q = !1,
        v = {
          preRun: [],
          postRun: [],
          print: function (e) {
            if (q) return
            u && console.log(e),
              (q = !0),
              (o.MWBgetVersion = v.cwrap("info_MWBgetVersion", "string", [])),
              (o.MWBinitDecoder = g.generateMethod("cfg_", "MWBinitDecoder")),
              (o.MWBsetActiveCodes = g.generateMethod(
                "cfg_",
                "MWBsetActiveCodes"
              )),
              (o.MWBgetActiveCodes = g.generateMethod(
                "cfg_",
                "MWBgetActiveCodes"
              )),
              (o.MWBsetLevel = g.generateMethod("cfg_", "MWBsetLevel")),
              (o.MWBsetActiveParser = g.generateMethod(
                "cfg_",
                "MWBsetActiveParser"
              )),
              (o.MWBsetActiveSubcodes = g.generateMethod(
                "acfg_",
                "MWBsetActiveSubcodes"
              )),
              (o.MWBsetFlags = g.generateMethod("acfg_", "MWBsetFlags")),
              (o.MWBsetMinLength = g.generateMethod(
                "acfg_",
                "MWBsetMinLength"
              )),
              (o.MWBsetDirection = g.generateMethod(
                "acfg_",
                "MWBsetDirection"
              )),
              (o.MWBsetScanningRect = g.generateMethod(
                "acfg_",
                "MWBsetScanningRect"
              )),
              (o.MWBgetScanningRect = v.cwrap(
                "acfg_MWBgetScanningRect",
                "string",
                ["number"]
              )),
              (o.MWBsetParam = g.generateMethod("acfg_", "MWBsetParam")),
              (o.MWBduplicateCodeDelay = g.generateMethod(
                "acfg_",
                "MWBduplicateCodeDelay"
              )),
              void 0 === v._free &&
                (v._free = v.cwrap("helper_MWBfree", "number", ["number"])),
              u && console.log("back home")
            var t = new CustomEvent("preScannerModuleLoaded", {
              detail: "Scanner is ready.",
            })
            document.dispatchEvent(t)
          },
        },
        A = function () {}
      e.exports = {
        Module: v,
        mwbScanner: g,
        set_scannerConfig: function (e) {
          A = e
        },
        setWasmPath: function (e) {
          v.wasmBinaryFile = "string" == typeof e && "" != e ? e : "index.wasm"
        },
      }
    }).call(this, n(2))
  },
  function (e, t) {
    var n
    n = (function () {
      return this
    })()
    try {
      n = n || new Function("return this")()
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  },
  function (e, t, n) {
    var i = n(4)
    "string" == typeof i && (i = [[e.i, i, ""]])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(6)(i, o)
    i.locals && (e.exports = i.locals)
  },
  function (e, t, n) {
    ;(e.exports = n(5)(!1)).push([
      e.i,
      ".barcode-scanner-wrap {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n    background: 0 0 black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 9999999;\n}\n\n.barcode-scanner-wrap-inview {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n    background: 0 0 black;\n    position: fixed;\n    /* t,l,w,h dynamically appended */\n    z-index: 9999999;\n\n    overflow: hidden;\n    /*animation:fade 3000ms;*/\n}\n\n@keyframes fade {\n    from { opacity: 0.0; }\n    /*50% { opacity: 0.5; }*/\n    to { opacity: 1.0; }\n}\n\n.barcode-scanner-preview {\n    width: 100%;\n    height: 100%;\n}\n\n/*.barcode-scanner-preview-inview-portrait { /*perfect for portrait*//*\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;    \n    width: 100%;\n    height: auto; /*calc(100% - 70px);*//*\n}\n\n/*.proxy-wrap-of-preview-inview-landscape {\n\twidth: 100%;\n\theight: 100%;\n\ttransform: translate(50%, 50%);\n}\n\n.barcode-scanner-preview-inview-landscape {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    left: 0;    \n    width: auto;\n    height: 100%;\n\ttransform: translate(-50%, -50%);\n}*/\n\n#flash-button {\n    position: fixed;\n    top: 2px;\n    width: 48px;\n    height: 48px;\n\t/*float: left;*/\n    left: 2px;\n\n    z-index: 999999999;\n}\n\t\n#zoom-button {\n    position: fixed;\n    top: 2px;\n    width: 48px;\n    height: 48px;\n\t/*float: right;*/\n    right: 2px;\n\n    z-index: 999999999;\n}\n\n#close-button {\n    position: fixed;\n    width: 24px;\n    height: 24px;\n    right: 2px;\n\n    z-index: 999999999;\n}\n\n.blinking-line {\n    position: fixed;\n    background-color: RoyalBlue;\n    z-index: 999999999;\n\n    animation: fadeColor 5000ms infinite;\n}\n\n#canvas-overlay {\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    z-index: 99999999;\n}\n\n#canvas-pause {\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    z-index: 99999999;\n}\n\n#canvas-locate {\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    z-index: 99999999;\n}\n\n#remaining-canvas-overlay {\n    position: fixed;\n    margin-left: 0px;\n    margin-top: 0px;\n    border: 0px solid #0026ff;\n    z-index: 99999999;\n}\n\n.shadow-overlay {\n    background-color: transparent;\n    /*box-shadow: 0 0 0 19px hsla(0, 0%, 0%, 0.5);*/\n}\n\n@keyframes fadeColor {\n    50% { background-color: rgba(0, 0, 0, 0.0); }\n}\n\n@media all and (orientation: landscape) {\n    /*.app-bar-action {\n        float: right;\n        margin-right: 20px;\n    }*/\n    /*.proxy-wrap-of-preview-inview {\n\twidth: 100%;\n\theight: 100%;\n\ttransform: translate(50%, 50%);\n    }\n    .barcode-scanner-preview-inview {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    left: 0;    \n    width: auto;\n    height: 100%;\n\ttransform: translate(-50%, -50%);\n    }*/\n}\n\n@media all and (orientation: portrait) {\n    /*.app-bar-action {\n        float: right;\n        margin-right: 20px;\n    }*/\n    /*.proxy-wrap-of-preview-inview {\n\twidth: 100%;\n\theight: 100%;\n\t/*transform: translate(0, 0);*//*\n    }\n    .barcode-scanner-preview-inview {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;    \n    width: 100%;\n    height: auto;\n\t/*transform: translate(0, 0);*//*\n    }*/\n}",
      "",
    ])
  },
  function (e, t) {
    e.exports = function (e) {
      var t = []
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                i = e[3]
              if (!i) return n
              if (t && "function" == typeof btoa) {
                var o =
                    ((a = i),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                      " */"),
                  r = i.sources.map(function (e) {
                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                  })
                return [n].concat(r).concat([o]).join("\n")
              }
              var a
              return [n].join("\n")
            })(t, e)
            return t[2] ? "@media " + t[2] + "{" + n + "}" : n
          }).join("")
        }),
        (t.i = function (e, n) {
          "string" == typeof e && (e = [[null, e, ""]])
          for (var i = {}, o = 0; o < this.length; o++) {
            var r = this[o][0]
            "number" == typeof r && (i[r] = !0)
          }
          for (o = 0; o < e.length; o++) {
            var a = e[o]
            ;("number" == typeof a[0] && i[a[0]]) ||
              (n && !a[2]
                ? (a[2] = n)
                : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
              t.push(a))
          }
        }),
        t
      )
    }
  },
  function (e, t, n) {
    var i,
      o,
      r = {},
      a =
        ((i = function () {
          return window && document && document.all && !window.atob
        }),
        function () {
          return void 0 === o && (o = i.apply(this, arguments)), o
        }),
      s = function (e, t) {
        return t ? t.querySelector(e) : document.querySelector(e)
      },
      l = (function (e) {
        var t = {}
        return function (e, n) {
          if ("function" == typeof e) return e()
          if (void 0 === t[e]) {
            var i = s.call(this, e, n)
            if (
              window.HTMLIFrameElement &&
              i instanceof window.HTMLIFrameElement
            )
              try {
                i = i.contentDocument.head
              } catch (e) {
                i = null
              }
            t[e] = i
          }
          return t[e]
        }
      })(),
      c = null,
      u = 0,
      d = [],
      h = n(7)
    function p(e, t) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n],
          o = r[i.id]
        if (o) {
          o.refs++
          for (var a = 0; a < o.parts.length; a++) o.parts[a](i.parts[a])
          for (; a < i.parts.length; a++) o.parts.push(v(i.parts[a], t))
        } else {
          var s = []
          for (a = 0; a < i.parts.length; a++) s.push(v(i.parts[a], t))
          r[i.id] = { id: i.id, refs: 1, parts: s }
        }
      }
    }
    function _(e, t) {
      for (var n = [], i = {}, o = 0; o < e.length; o++) {
        var r = e[o],
          a = t.base ? r[0] + t.base : r[0],
          s = { css: r[1], media: r[2], sourceMap: r[3] }
        i[a] ? i[a].parts.push(s) : n.push((i[a] = { id: a, parts: [s] }))
      }
      return n
    }
    function m(e, t) {
      var n = l(e.insertInto)
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        )
      var i = d[d.length - 1]
      if ("top" === e.insertAt)
        i
          ? i.nextSibling
            ? n.insertBefore(t, i.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          d.push(t)
      else if ("bottom" === e.insertAt) n.appendChild(t)
      else {
        if ("object" != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          )
        var o = l(e.insertAt.before, n)
        n.insertBefore(t, o)
      }
    }
    function f(e) {
      if (null === e.parentNode) return !1
      e.parentNode.removeChild(e)
      var t = d.indexOf(e)
      t >= 0 && d.splice(t, 1)
    }
    function g(e) {
      var t = document.createElement("style")
      if (
        (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
        void 0 === e.attrs.nonce)
      ) {
        var i = (function () {
          0
          return n.nc
        })()
        i && (e.attrs.nonce = i)
      }
      return q(t, e.attrs), m(e, t), t
    }
    function q(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n])
      })
    }
    function v(e, t) {
      var n, i, o, r
      if (t.transform && e.css) {
        if (!(r = t.transform(e.css))) return function () {}
        e.css = r
      }
      if (t.singleton) {
        var a = u++
        ;(n = c || (c = g(t))),
          (i = w.bind(null, n, a, !1)),
          (o = w.bind(null, n, a, !0))
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = (function (e) {
              var t = document.createElement("link")
              return (
                void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                (e.attrs.rel = "stylesheet"),
                q(t, e.attrs),
                m(e, t),
                t
              )
            })(t)),
            (i = b.bind(null, n, t)),
            (o = function () {
              f(n), n.href && URL.revokeObjectURL(n.href)
            }))
          : ((n = g(t)),
            (i = M.bind(null, n)),
            (o = function () {
              f(n)
            }))
      return (
        i(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return
            i((e = t))
          } else o()
        }
      )
    }
    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        )
      ;((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom")
      var n = _(e, t)
      return (
        p(n, t),
        function (e) {
          for (var i = [], o = 0; o < n.length; o++) {
            var a = n[o]
            ;(s = r[a.id]).refs--, i.push(s)
          }
          e && p(_(e, t), t)
          for (o = 0; o < i.length; o++) {
            var s
            if (0 === (s = i[o]).refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]()
              delete r[s.id]
            }
          }
        }
      )
    }
    var A,
      y =
        ((A = []),
        function (e, t) {
          return (A[e] = t), A.filter(Boolean).join("\n")
        })
    function w(e, t, n, i) {
      var o = n ? "" : i.css
      if (e.styleSheet) e.styleSheet.cssText = y(t, o)
      else {
        var r = document.createTextNode(o),
          a = e.childNodes
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
      }
    }
    function M(e, t) {
      var n = t.css,
        i = t.media
      if ((i && e.setAttribute("media", i), e.styleSheet))
        e.styleSheet.cssText = n
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild)
        e.appendChild(document.createTextNode(n))
      }
    }
    function b(e, t, n) {
      var i = n.css,
        o = n.sourceMap,
        r = void 0 === t.convertToAbsoluteUrls && o
      ;(t.convertToAbsoluteUrls || r) && (i = h(i)),
        o &&
          (i +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
            " */")
      var a = new Blob([i], { type: "text/css" }),
        s = e.href
      ;(e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s)
    }
  },
  function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location
      if (!t) throw new Error("fixUrls requires window.location")
      if (!e || "string" != typeof e) return e
      var n = t.protocol + "//" + t.host,
        i = n + t.pathname.replace(/\/[^\/]*$/, "/")
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (e, t) {
          var o,
            r = t
              .trim()
              .replace(/^"(.*)"$/, function (e, t) {
                return t
              })
              .replace(/^'(.*)'$/, function (e, t) {
                return t
              })
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)
            ? e
            : ((o =
                0 === r.indexOf("//")
                  ? r
                  : 0 === r.indexOf("/")
                  ? n + r
                  : i + r.replace(/^\.\//, "")),
              "url(" + JSON.stringify(o) + ")")
        }
      )
    }
  },
  function (e, t) {
    var n = null
    e.exports = {
      scannerConfig: function () {
        n.setIcon("images/wasm_license_22181.png")
        let e = n.getConstants(),
          t = [
            { method: "MWBsetActiveCodes", value: [e.MWB_CODE_MASK_EANUPC] },
            { method: "MWBsetLevel", value: [3] },
            { method: "MWBsetActiveParser", value: [e.MWP_PARSER_MASK_AUTO] },
            { method: "MWBsetOverlayMode", value: [e.OverlayModeNone] },
            { method: "MWBsetBlinkingLineVisible", value: [!1] },
            { method: "MWBsetPauseMode", value: [e.PM_NONE] },
            { method: "MWBenableHiRes", value: [e.CamRes_FHD] },
            { method: "MWBuseFrontCamera", value: [!1] },
            { method: "MWBcloseScannerOnDecode", value: [!0] },
            { method: "MWBsetDecoderTimeout", value: [0] },
            { method: "MWBsetDpsLimit", value: [1] },
            { method: "MWBenableClose", value: [!1] },
            { method: "MWBcloseScannerOnDecode", value: [!0] },
            { method: "MWBduplicateCodeDelay", value: [1500] },
          ]
        return n
          .loadSettings(t)
          .then(function (e) {
            0
          })
          .catch(function (e) {
            0
          })
      },
      set_mwbScanner: function (e) {
        n = e
      },
      setWasmPath: function () {
        return "index.wasm"
      },
    }
  },
])
