export default function Styles() {
  return (
    <style>{`
    :root {
        scroll-behavior: smooth;
      }
      * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      
      /* scrollbar: size */
      ::-webkit-scrollbar {
        width: 8px; /* for vertical */
        height: 8px; /* for horizontal */
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #6e7377;
      }
      ::-webkit-scrollbar-corner {
        background-color: transparent; /* for overlap */
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #505457;
      }
      
`}</style>
  );
}
