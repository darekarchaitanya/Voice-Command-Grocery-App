'use client';

import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { parseVoiceCommand } from '@/lib/voice-commands';
import { getAllProducts } from '@/lib/products';
import type { Product } from '@/types';

interface VoicePanelProps {
  onCommand: (command: string) => void;
  onCartAdd: (product: Product, quantity: number) => void;
  onCategoryChange: (category: string) => void;
  showToast: (message: string) => void;
}

export default function VoicePanel({
  onCommand,
  onCartAdd,
  onCategoryChange,
  showToast,
}: VoicePanelProps) {
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error('Speech Recognition API not supported');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }

      if (finalTranscript) {
        handleCommand(finalTranscript.toLowerCase().trim());
        setLastCommand(finalTranscript);
        onCommand(finalTranscript);
      }
    };

    recognition.onerror = () => {
      showToast('Sorry, I did not understand. Try saying: add apples to cart');
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, [onCommand, onCartAdd, onCategoryChange, showToast]);

  const handleCommand = (command: string) => {
    const { action, product, quantity, category } = parseVoiceCommand(command);

    if (action === 'add' && product) {
      onCartAdd(product, quantity);
    } else if (action === 'category' && category) {
      onCategoryChange(category);
    } else if (action === 'remove' && product) {
      showToast(`Removed ${product.name} from cart`);
    } else if (action === 'unknown') {
      showToast('Sorry, I did not understand. Try saying: add apples to cart');
    }
  };

  const toggleMic = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setLastCommand('');
      recognitionRef.current.start();
    }
  };

  return (
    <div className="fixed top-24 left-6 z-50">
      {showDetails ? (
        // Expanded details view
        <div className="bg-white rounded-xl shadow-lg p-4 max-w-xs w-80 animate-in fade-in duration-300 border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-sm text-gray-800">Voice Commands</h3>
            <button
              onClick={() => setShowDetails(false)}
              className="text-gray-500 hover:text-gray-700 text-lg font-bold"
              aria-label="Close voice panel"
            >
              ×
            </button>
          </div>

          <button
            onClick={toggleMic}
            className={`w-full py-3 rounded-lg font-bold transition-all mb-3 flex items-center justify-center gap-2 text-white text-sm ${
              isListening
                ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                : 'bg-green-500 hover:bg-green-600'
            }`}
            aria-label={isListening ? 'Stop listening' : 'Start listening'}
          >
            {isListening ? (
              <>
                <MicOff className="w-4 h-4" />
                Stop
              </>
            ) : (
              <>
                <Mic className="w-4 h-4" />
                Start
              </>
            )}
          </button>

          <div className="space-y-2">
            <p className="text-xs text-gray-600 font-semibold">
              Status: {isListening ? 'Listening...' : 'Ready'}
            </p>
            {lastCommand && (
              <p className="text-xs bg-blue-50 border border-blue-200 rounded-lg p-2 text-gray-800">
                <span className="font-semibold text-blue-600">Last:</span> {lastCommand}
              </p>
            )}
          </div>

          <div className="mt-3 pt-3 border-t">
            <p className="text-xs text-gray-600 font-semibold mb-2">Try saying:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• "Add apples to cart"</li>
              <li>• "Add 2 kg potatoes"</li>
              <li>• "Show fruits"</li>
            </ul>
          </div>
        </div>
      ) : (
        // Compact minimized view - always visible
        <button
          onClick={() => setShowDetails(true)}
          className={`flex items-center justify-center rounded-full p-3 shadow-lg transition-all hover:scale-110 ${
            isListening
              ? 'bg-red-500 text-white animate-pulse'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
          title="Click to open voice commands"
          aria-label="Voice commands panel"
        >
          {isListening ? (
            <MicOff className="w-5 h-5" />
          ) : (
            <Mic className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
}
