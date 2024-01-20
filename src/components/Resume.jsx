import pdf from '../assets/Hamza_Oran_Resume.pdf';

function Resume() {
  return (
    <iframe className="w-full h-screen" src={pdf} frameBorder="0"></iframe>
  );
}
export default Resume;
