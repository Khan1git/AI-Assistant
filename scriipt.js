const speech = document.getElementById('text')

function speak(text) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    speechSynthesis.speak(utterance);

}
function startSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        console.log('Speech recognition is not supported in this browser');
        return;
    }

    // Create a new SpeechRecognition object
    const recognition = new SpeechRecognition();
    
    // Start recognition
    recognition.start();
    
    // Handle recognition results
    recognition.onresult = event => {
        var transcript = event.results[0][0].transcript;
        // console.log('Recognized speech:', transcript);
        
        speech.innerHTML = transcript ;
        
        processSpeech(transcript);
    };
    function processSpeech(transcript) {
        const searchs =  transcript;
        // const ytsearch = `play${transcript}`;
        // Perform actions based on the recognized speech
        // console.log('Processing speech:', transcript);    
        if (transcript == 'how are you') {
            const data = speak("I am fine Thank You")
            speak("How are You")
        }
        else if (transcript == 'hello' || transcript == "hi Jarvis"|| transcript == "hello Jarvis") {
            speak("Hi Boss")
            speak('How can i help you ')
        }
        else if (transcript == "I am fine") {
            speak("Good To hear that you are fine ")
        }
        else if (transcript == 'open Google') {
                speak("opening Google")
                setTimeout(() => {
                    window.open('https://www.Google.com', '_blank');
                }, 1000)
            }
        else if (transcript == 'open YouTube') {
                speak("opening Youtube")
                setTimeout(() => {
                    window.open('https://youtube.com/', '_blank');
                }, 1000)
            }
                else if (transcript == "what is the time"){
                    let date = new Date
                    let hour  = date.getHours()
                    let minute = date.getMinutes()
                    let sec = date.getSeconds()
                    speak(`Its ${hour} ${minute} o clock`)
                    // console.log(date)
        
                }
                else if(transcript == "activate white mode"){
                    speak('White Mode Activated')
                    document.getElementsByClassName('.data1').backgroud-color("white")
                }
                
                else if (transcript == "who are you") {
                    speak("I am jarvis an Ai Assistant ")
                    speak("I am  Designed using javascript language") 
                    speak("i can help you and make your task easy")
                }
                else if (transcript == "music") {
                    speak("sure")
                    speak("I Will play your favourite song from the list")
                    function play() {
                        var audio = new Audio('');
                        audio.play();
             8       }
                    setTimeout(() => {
                        play()
                    }, 5000);
                }
                else if (transcript == "who am I"){
                    speak("Boss Your name is Arif rahman")
                    speak(" currently studying Information technology at univeristy of malakand")
                }
                else if (transcript == "can you hear me"){
                    speak("Yess Boss")
                    speak("I can hear You clearly")
                    speak("How can i help you")
                }


                else if (searchs){
                    // console.log(searchs)
                    speak(`Searching For ${searchs} on google`);
                    const googleSearchUrl = `https://www.google.com/search?q=${searchs}`;
                    window.open(googleSearchUrl, "_blank");
                }
                else if (transcript == "open Playlist 1" || transcript == "open Playlist 1"){
                    // console.log(searchs)
                    speak(`Opening Mern stack project playlist`);
                    const googleSearchUrl = `https://www.youtube.com/playlist?list=PLTtZ8XLMT18H7aPMXMgGCSutVk_m2fgLC`;
                    window.open(googleSearchUrl, "_blank");
                }

                    else{
                    speak("Sorry I did't hear you")
                }
            }
            
   
    


    // Handle recognition errors
    recognition.onerror = event => {
        console.error('Speech recognition error:', event.error);
    };
}

// Example function to process the recognized speech


window.addEventListener('load', () => {
    setTimeout(() => {
        speak("Activating Jarvis")
        speak("Going Live")
        speak(`Welcome Boss`)
        

        // console.log("this is workng")
    }, 2000)
})


async function show(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name)
        }, 2000)
    })
}
(
    async () => {
        let x = await show("Starting The Process..................");
        document.getElementById('data').innerHTML += x + '<br>';

        let x2 = await show("Fetching Data From Server..........");
        document.getElementById('data').innerHTML += `${x2}<br>`;

        let x3 = await show("Loading Modules..........");
        document.getElementById('data').innerHTML += `${x3}<br>`;

        let x4 = await show("Preparing Display..........");
        document.getElementById('data').innerHTML += `${x4}<br>`;

        let x5 = await show("Going live..........");
        document.getElementById('data').innerHTML += `${x5}<br>`;

        let x7 = await show("Loading DataBase............")
        document.getElementById('data').innerHTML += `${x7}<br>`;

        let x6 = await show("Process Completed Server Started..........");
        document.getElementById('data').innerHTML += `${x6}<br>`;
    })();



btn.addEventListener('click', () => {
    startSpeechRecognition();    
 })
