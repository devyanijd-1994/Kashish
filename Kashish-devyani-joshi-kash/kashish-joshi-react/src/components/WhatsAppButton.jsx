export default function WhatsAppButton() {
  return (
    <>
      <style>
        {`
          .whatsapp-btn {
            position: fixed;
            bottom: 4.25rem;
            right: 1.5rem;
            z-index: 60;
            background: #25D366;
            color: white;
            border-radius: 50%;
            width: 3.5rem;
            height: 3.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            transition: transform 0.3s ease;
            text-decoration: none;
          }
          
          .whatsapp-btn:hover {
            transform: scale(1.1);
          }
          
          @media (max-width: 768px) {
            .whatsapp-btn {
              right: 1rem;
              bottom: 4rem;
              width: 3rem;
              height: 3rem;
            }
            
            .whatsapp-btn i {
              font-size: 1.5rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .whatsapp-btn {
              right: 0.75rem;
              bottom: 3.5rem;
              width: 2.75rem;
              height: 2.75rem;
            }
            
            .whatsapp-btn i {
              font-size: 1.25rem !important;
            }
          }
        `}
      </style>
      <a href="https://wa.link/iw4ct4" target="_blank" rel="noreferrer"
        className="whatsapp-btn"
        title="Chat on WhatsApp">
        <i className="fab fa-whatsapp" style={{ fontSize: '1.875rem' }}></i>
      </a>
    </>
  );
}
