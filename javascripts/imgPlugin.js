/*global window orion */

window.onload = function() {

	function convertImg(text){
	
		var regexr_to = "^<img src=\"(.*)\" />$";
		
		if(text.search(regexr_to) > -1){
			//convert from video to link
			return text.match(regexr_to).slice(-1)[0];
		}
		return '<img src="' + text + '" />';
	}
	// create the plugin
	var headers = {
		name: "Img tag switcher",
		version: "0.2",
		description: "Plugin switching img tag on and off"
	};
	var provider = new orion.PluginProvider(headers);

	//editor command service	
	var serviceImpl = {
		run: function(selectedText, text, selection) {
			return convertImg(selectedText);
		}
	};
	var serviceProps = {
		name: "Switch img tag",
		key: ["p", true, true]
	};
	provider.registerServiceProvider("orion.edit.command", serviceImpl, serviceProps);

	provider.connect();
};