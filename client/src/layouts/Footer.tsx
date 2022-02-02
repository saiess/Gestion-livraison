import React from 'react';

interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
        <div>
            <footer className="w-full bg-white text-right p-4">
                Copyright © 2021 <a href="marocship.com" className="underline">Marcoship. All Rights Reserved</a>.
            </footer>
        </div>
  );
};

export default Footer;