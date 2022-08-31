//@ui5-bundle ns/bsncvat0040/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"ns/bsncvat0040/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(n){"use strict";return n.extend("ns.bsncvat0040.Component",{metadata:{manifest:"json"}})});
},
	"ns/bsncvat0040/i18n/i18n.properties":'# This is the resource bundle for ns.bsncvat0040\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=\\ubd80\\uac00\\uc138\\uae30\\uc900\\uc815\\ubcf4\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"ns/bsncvat0040/manifest.json":'{"_version":"1.40.0","sap.app":{"id":"ns.bsncvat0040","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.7.1","toolsId":"0c6170e7-ea81-4793-8a42-47c66e911d34"},"crossNavigation":{"inbounds":{"Risks-display":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"Risks","action":"display"}}},"dataSources":{"mainService":{"uri":"bsnc-vat-0040-service/","type":"OData","settings":{"annotations":["annotation"],"localUri":"localService/metadata.xml","odataVersion":"4.0"}},"annotation":{"type":"ODataAnnotation","uri":"annotations/annotation.xml","settings":{"localUri":"annotations/annotation.xml"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.105.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ns.bsncvat0040.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"pattern":":?query:","name":"BSNC_VAT_0040HList","target":"BSNC_VAT_0040HList"},{"pattern":"BSNC_VAT_0040H({key}):?query:","name":"BSNC_VAT_0040HObjectPage","target":"BSNC_VAT_0040HObjectPage"}],"targets":{"BSNC_VAT_0040HList":{"type":"Component","id":"BSNC_VAT_0040HList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"BSNC_VAT_0040H","variantManagement":"Page","navigation":{"BSNC_VAT_0040H":{"detail":{"route":"BSNC_VAT_0040HObjectPage"}}}}}},"BSNC_VAT_0040HObjectPage":{"type":"Component","id":"BSNC_VAT_0040HObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"BSNC_VAT_0040H","navigation":{},"controlConfiguration":{"BSNC_VAT_0040L/@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable","personalization":{"column":true,"sort":true},"creationMode":{"name":"Inline","createAtEnd":true}}}}}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"BSNC_VAT.service"}}'
}});
