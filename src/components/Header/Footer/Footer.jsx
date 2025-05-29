const Footer = () => {
  return (
    <footer style={{ padding: '1rem', backgroundColor: '#f1f1f1', textAlign: 'center', borderTop: '1px solid #ccc' }}>
      <p>&copy; {new Date().getFullYear()} Echos & Ink. All rights reserved.</p>
    </footer>
  );
};

export default Footer;