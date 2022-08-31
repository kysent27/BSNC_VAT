//@ui5-bundle ns/bsncvat0050/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"ns/bsncvat0050/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(n){"use strict";return n.extend("ns.bsncvat0050.Component",{metadata:{manifest:"json"}})});
},
	"ns/bsncvat0050/i18n/i18n.properties":'# This is the resource bundle for ns.bsncvat0050\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=\\uacbd\\uac10\\uacf5\\uc81c\\uac00\\uc0b0\\uc138\\uc561\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"ns/bsncvat0050/manifest.json":'{"_version":"1.40.0","sap.app":{"id":"ns.bsncvat0050","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.7.1","toolsId":"29dbe1ad-287b-40e4-aeba-aa094c9a825f"},"crossNavigation":{"inbounds":{"Risks-display":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"Risks","action":"display"}}},"dataSources":{"mainService":{"uri":"bsnc-vat-0050-service/","type":"OData","settings":{"annotations":["annotation"],"localUri":"localService/metadata.xml","odataVersion":"4.0"}},"annotation":{"type":"ODataAnnotation","uri":"annotations/annotation.xml","settings":{"localUri":"annotations/annotation.xml"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.105.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ns.bsncvat0050.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"BSNC_VAT_0050HList","target":"BSNC_VAT_0050HList"},{"pattern":"BSNC_VAT_0050H({key}):?query:","name":"BSNC_VAT_0050HObjectPage","target":"BSNC_VAT_0050HObjectPage"}],"targets":{"BSNC_VAT_0050HList":{"type":"Component","id":"BSNC_VAT_0050HList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"BSNC_VAT_0050H","variantManagement":"Page","navigation":{"BSNC_VAT_0050H":{"detail":{"route":"BSNC_VAT_0050HObjectPage"}}}}}},"BSNC_VAT_0050HObjectPage":{"type":"Component","id":"BSNC_VAT_0050HObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"BSNC_VAT_0050H","navigation":{},"controlConfiguration":{"BSNC_VAT_0050L/@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable","personalization":{"column":true,"sort":true},"creationMode":{"name":"Inline","createAtEnd":true}}},"BSNC_VAT_0050M/@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable","personalization":{"column":true,"sort":true},"creationMode":{"name":"Inline","createAtEnd":true}}},"BSNC_VAT_0050N/@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable","personalization":{"column":true,"sort":true},"creationMode":{"name":"Inline","createAtEnd":true}}},"BSNC_VAT_0050O/@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable","personalization":{"column":true,"sort":true},"creationMode":{"name":"Inline","createAtEnd":true}}}}}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"BSNC_VAT.service"}}'
}});
