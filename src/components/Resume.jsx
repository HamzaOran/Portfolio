import pdf from '../assets/Hamza_Oran_Resum.pdf';

function Resume() {
  return (
    <iframe className="w-full h-screen" src={pdf} frameBorder="0"></iframe>
  );
}
export default Resume;
