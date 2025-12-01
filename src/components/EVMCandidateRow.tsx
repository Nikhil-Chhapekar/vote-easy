import { useState } from "react";

interface EVMCandidateRowProps {
  serialNumber: number;
  symbol: string;
  name: string;
  photo: string;
  onSelect: () => void;
  isSelected: boolean;
}

const EVMCandidateRow = ({ serialNumber, symbol, name, photo, onSelect, isSelected }: EVMCandidateRowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center bg-white rounded-2xl border-4 border-gray-300 shadow-lg overflow-hidden"
      style={{ height: '80px' }}
    >
      {/* Serial Number - Left */}
      <div className="flex-shrink-0 w-[70px] h-full border-r-4 border-gray-300 bg-white flex items-center justify-center">
        <span className="text-4xl font-bold text-black">
          {serialNumber}
        </span>
      </div>

      {/* Candidate Name Section - Center */}
      <div className="flex-1 px-4 bg-white border-r-4 border-gray-300 flex items-center justify-center min-w-0">
        <h3 className="font-bold text-2xl text-black text-center leading-tight">
          {name}
        </h3>
      </div>

      {/* Candidate Photo */}
      <div className="flex-shrink-0 w-[70px] h-full border-r-4 border-gray-300 bg-white flex items-center justify-center p-1">
        <img 
          src={photo} 
          alt="Candidate"
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Party Symbol Box - Right side before button */}
      <div className="flex-shrink-0 w-[70px] h-full border-r-4 border-gray-300 bg-white flex items-center justify-center">
        <img 
          src={symbol} 
          alt="Party symbol"
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Vote Button - Right */}
      <button
        onClick={onSelect}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          flex-shrink-0 w-[80px] h-full flex flex-col items-center justify-center
          transition-all duration-200 relative
          ${isSelected 
            ? 'bg-red-600' 
            : 'bg-red-500 hover:bg-red-600'
          }
        `}
        aria-label={`Vote for ${name}`}
      >
        <div className="text-white flex flex-col items-center">
          <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className={`w-8 h-8 transition-transform duration-200 ${isHovered ? 'scale-110' : ''}`}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          {isSelected && (
            <span className="text-xs font-bold mt-1">✓</span>
          )}
        </div>
      </button>
    </div>
  );
};

export default EVMCandidateRow;
