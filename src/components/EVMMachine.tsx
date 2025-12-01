import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EVMCandidateRow from "./EVMCandidateRow";
import partySymbol1 from "@/assets/party-symbol-1.png";
import partySymbol2 from "@/assets/party-symbol-2.png";
import handSymbol from "@/assets/hand-symbol.png";
import candidatePhoto1 from "@/assets/candidate-photo-1.png";
import candidatePhoto2 from "@/assets/candidate-photo-2.png";
import dummy from "@/assets/Dummy.png";
import misar from "@/assets/misar.png";
import { ArrowRight, Shield } from "lucide-react";

interface Candidate {
  id: number;
  serialNumber: number;
  name: string;
  symbol: string;
  photo: string;
}

const candidates: Candidate[] = [
  {
    id: 1,
    serialNumber: 1,
    name: "",
    symbol: partySymbol1,
    photo: dummy
  },
  {
    id: 2,
    serialNumber: 2,
    name: "",
    symbol: partySymbol2,
    photo: dummy
  },
  {
    id: 3,
    serialNumber: 3,
    name: "",
    symbol: partySymbol1,
    photo: dummy
  },
  {
    id: 4,
    serialNumber: 4,
    name: "मिसार योगेश बालाजी",
    symbol: handSymbol,
    photo: misar
  },
  {
    id: 5,
    serialNumber: 5,
    name: "",
    symbol: handSymbol,
    photo: dummy
  },
  {
    id: 6,
    serialNumber: 6,
    name: "",
    symbol: handSymbol,
    photo: dummy
  }
];

const EVMMachine = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const navigate = useNavigate();

  const playBeep = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800; // Frequency in Hz
    oscillator.type = "sine";
    gainNode.gain.value = 0.3; // Volume

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2); // Beep duration: 200ms
  };

  const handleVoteNow = () => {
    if (selectedCandidate !== null) {
      playBeep();
      navigate("/thank-you");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* EVM Header */}
      <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-center gap-2 shadow-md">
        <Shield className="w-6 h-6" />
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          ELECTRONIC VOTING MACHINE
        </h1>
      </div>

      {/* EVM Machine Body */}
      <div className="bg-gray-100 p-6 md:p-8 rounded-b-lg shadow-2xl">
        <div className="bg-gray-50 p-6 rounded-lg">
          {/* Instructions */}
          <div className="mb-6 p-4 bg-yellow-50 rounded-md border-2 border-yellow-300">
            <p className="text-sm md:text-base text-gray-800 font-semibold text-center">
              अपने उम्मीदवार का चयन करें और <span className="font-bold text-red-600">"वोट दें"</span> बटन दबाएं
            </p>
          </div>

          {/* Candidates List */}
          <div className="space-y-4 mb-6">
            {candidates.map((candidate) => (
              <EVMCandidateRow
                key={candidate.id}
                serialNumber={candidate.serialNumber}
                symbol={candidate.symbol}
                name={candidate.name}
                photo={candidate.photo}
                onSelect={() => setSelectedCandidate(candidate.id)}
                isSelected={selectedCandidate === candidate.id}
              />
            ))}
          </div>

          {/* Vote Now Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={handleVoteNow}
              disabled={selectedCandidate === null}
              className={`
                group relative px-10 py-5 rounded-xl font-bold text-2xl
                transition-all duration-300 shadow-xl
                flex items-center gap-3 border-4
                ${selectedCandidate !== null
                  ? 'bg-green-600 hover:bg-green-700 text-white border-green-800 hover:shadow-2xl hover:scale-105 cursor-pointer'
                  : 'bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed opacity-60'
                }
              `}
            >
              <span>वोट दें</span>
              <ArrowRight className={`
                w-8 h-8 transition-transform duration-300
                ${selectedCandidate !== null ? 'group-hover:translate-x-1' : ''}
              `} />
            </button>
          </div>

          {/* Footer Info */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>आपका वोट गुप्त और सुरक्षित है</p>
          </div>
        </div>
      </div>

      {/* EVM Serial Number */}
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground font-mono">
          Machine ID: EVM-2025-{Math.random().toString(36).substr(2, 6).toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default EVMMachine;
