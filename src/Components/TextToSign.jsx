import TextToSpeechIMG from "./../assets/SpeechToText.png";
import './TextToSpeech.css'
import MicIcon from '@mui/icons-material/Mic';
function TextToSpeech(){
    return(
        <div>
            <h1 className="text_speech">Text to sign</h1>
            <img src={TextToSpeechIMG} height={500} className="text_img"/>
            <input type="text" className="input_text" placeholder="Enter text here.."/>
            <a href="#" className="icon_speech">
              <MicIcon fontSize="large" />
            </a>
        </div>
    )
}
export default TextToSpeech;