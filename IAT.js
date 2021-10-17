define(['pipAPI', 'https://toni2110.github.io/IAT-simple-original/IAT-base.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Mörkhyade personer', //Will appear in the data.
			title : {
				media : {word : 'Mörkhyade personer'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'black1.jpg'}, 
    			{image : 'black2.jpg'}, 
    			{image : 'black3.jpg'}, 
    			{image : 'black4.jpg'}, 
    			{image : 'black5.jpg'}, 
    			{image : 'black6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Ljushyade personer', //Will appear in the data.
			title : {
				media : {word : 'Ljushyade personer'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'yf1.jpg'}, 
    			{image : 'yf4.jpg'}, 
    			{image : 'yf5.jpg'}, 
    			{image : 'ym2.jpg'}, 
    			{image : 'ym3.jpg'}, 
    			{image : 'ym5.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
		
		showDebriefing:false, //Show feedback in the last trial? Relevant only in a Qualtrics IAT because in Qualtrics we cannot access the saved feedback and IAT score later in the survey.
//Texts for the trials that show the debriefing.
preDebriefingText : 'Tryck p&aring; space f&ouml;r att se ditt resultat', //Text in the trial that comes before showing the debriefing.
preDebriefingTouchText : 'Tryck p&aring; det nedre gr&ouml;na omr&aring;det f&ouml;r att se ditt resultat', //Touch version for the text in the trial that comes before showing the debriefing.
debriefingTextTop : 'Ditt resultat:', //Will be shown above the feedback text.
//ATTENTION: We do not recommend showing participants their results. The IAT is a typical psychological measure so it is not very accurate. 
//In Project Implicit's website, you can see that we added much text to explain that there is still much unknown about the meaning of these results.
//We strongly recommend that you provide all these details in the debriefing of the experiment.
debriefingTextBottom : 'Ditt resultat &auml;r inget definitiv utv&auml;rdering av dina attityder utan &auml;r enbart avsett f&ouml;r utbildningssyfte.', //Will be shown below the feedback text. 
	});
});
